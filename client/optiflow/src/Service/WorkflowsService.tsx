import {Project} from "../models/Project";
import {BusinessArea} from "../models/BusinessArea";
import {HOSTNAME} from "./BusinessAreaService";


const getAllWorkflows = async (businessArea: BusinessArea): Promise<BusinessArea[]> => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: businessArea.title, description: businessArea.description})
    };

    const result = await fetch(HOSTNAME + "/api/processes", requestOptions);
    return await result.json();

    return (
            [{
            "title": "Receiving",
            "description": "Receiving refers to the process of receiving goods from suppliers or other sources into the warehouse. This process includes checking the quantity and quality of the goods, documenting the receipt of the goods, and transferring the goods to the appropriate storage location within the warehouse."
        }, {
            "title": "Picking",
            "description": "Picking is the process of selecting the appropriate items from the warehouse inventory to fulfill customer orders. This process involves locating the items, verifying the accuracy of the order, and preparing the items for shipment."
        }, {
            "title": "Inventory Management",
            "description": "Inventory management involves the ongoing tracking and monitoring of the quantity and location of goods within the warehouse. This includes maintaining accurate inventory records, conducting regular inventory counts, and ensuring that the appropriate level of stock is maintained to meet customer demand."
        }, {
            "title": "Shipping",
            "description": "Shipping involves the process of preparing and delivering goods to customers or other destinations. This includes verifying the accuracy of the order, packaging the items, preparing shipping labels and documents, and coordinating the transportation of the goods to their final destination."
        }]

    )

}

export default {
    getAllWorkflows
}