import os
from haystack.pipelines.standard_pipelines import TextIndexingPipeline
from haystack.document_stores import InMemoryDocumentStore
from haystack.nodes import BM25Retriever
from haystack.nodes import FARMReader
from haystack.pipelines import ExtractiveQAPipeline
from pprint import pprint
from haystack.utils import print_answers

document_store = InMemoryDocumentStore(use_bm25=True)

folder = "/Users/florian/dev/optiflow/data/crawled_files"
files_to_index = [folder + "/" + f for f in os.listdir(folder)]
indexing_pipeline = TextIndexingPipeline(document_store)
indexing_pipeline.run_batch(file_paths=files_to_index)


retriever = BM25Retriever(document_store=document_store)

reader = FARMReader(model_name_or_path="deepset/roberta-base-squad2", use_gpu=True)

pipe = ExtractiveQAPipeline(reader, retriever)

prediction = pipe.run(
    query="Which products or services does the company offer?",
    params={
        "Retriever": {"top_k": 10},
        "Reader": {"top_k": 5}
    }
)

pprint(prediction)

print_answers(
    prediction,
    details="minimum" ## Choose from `minimum`, `medium`, and `all`
)
