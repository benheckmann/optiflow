import os
import traceback
from logging import Logger, getLogger
from typing import Dict, List

from azure.cosmos import CosmosClient
from azure.cosmos.exceptions import CosmosHttpResponseError

DB_NAME = "General"


class Database:
    """Abstraction over CosmosDB Database. Provides basic NoSQL operations."""

    def __init__(self, logger: Logger):
        self.logger = logger
        self.client = CosmosClient(
            os.getenv("COSMOS_DB_ENDPOINT"),
            {"masterKey": os.getenv("COSMOS_DB_PRIMARY_KEY")},
        )
        self.database = self.client.get_database_client(DB_NAME)

    def query(self, query: str, container_name: str) -> List[Dict]:
        try:
            container = self.database.get_container_client(container_name)
        except KeyError:
            self.logger.error(
                f"Container name {container_name} not found in database.\n Traceback: {traceback.format_exc()}"
            )
            raise DatabaseError
        self.logger.info(f"SQL call: {query}")
        items = list(
            container.query_items(query=query, enable_cross_partition_query=True)
        )
        return [item for item in items if item]

    def point_read(
        self,
        item_id: str,
        partition_key: str,
        container_name: str,
    ) -> Dict:
        try:
            container = self.database.get_container_client(container_name)
        except KeyError:
            self.logger.error(
                f"Container name {container_name} not found in database.\n Traceback: {traceback.format_exc()}"
            )
            raise DatabaseError
        try:
            item = container.read_item(item=item_id, partition_key=partition_key)
            return item
        except CosmosHttpResponseError as e:
            self.logger.error(
                f"Item {item_id} not found in {container_name}.\n Traceback:{traceback.format_exc()}."
                f"\n Error: {e}"
            )
            raise DatabaseError

    def upsert(self, item: Dict, container_name: str) -> None:
        try:
            container = self.database.get_container_client(container_name)
        except KeyError as e:
            self.logger.error(
                f"Container name {container_name} not found in database.\n Traceback: {traceback.format_exc()}"
            )
            raise DatabaseError

        try:
            container.upsert_item(body=item)
            self.logger.info(f"Upserted item {item} to {container_name}")
        except CosmosHttpResponseError as e:
            self.logger.error(
                f"Could not upsert item {item} to {container_name}.\n Traceback: {traceback.format_exc()}"
            )
            raise DatabaseError


class DatabaseError(Exception):
    pass
