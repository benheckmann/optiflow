import {Project} from "../models/Project";
import {BusinessArea} from "../models/BusinessArea";


const getAllBusinessAreas = async (url: string): Promise<BusinessArea[]> => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    };

    const result = await fetch("/api/business-areas", requestOptions);
    return await result.json();

    return (
        [
            {
                name: "E-commerce",
                description: "E-commerce refers to the buying and selling of goods or services online through an electronic platform. This can include online marketplaces, online stores, and social media platforms."
            },
            {
                name: "Hospitality",
                description: "Hospitality encompasses businesses that provide services to guests such as hotels, restaurants, and event planning. These businesses focus on providing excellent customer service and creating positive experiences for their guests."
            },
            {
                name: "Renewable Energy",
                description: "Renewable energy businesses focus on providing sustainable energy solutions through the use of wind, solar, hydro, and other renewable sources. They aim to reduce carbon emissions and create a cleaner environment."
            },
            {
                name: "Logistics",
                description: "Logistics companies are responsible for managing the transportation, storage, and distribution of goods. This can include shipping, warehousing, and inventory management."
            },
            {
                name: "Fitness",
                description: "Fitness businesses include gyms, personal training, and wellness centers. They focus on helping individuals achieve their fitness goals through exercise, nutrition, and healthy lifestyle choices."
            }

        ]


    )

}

export default {
    getAllBusinessAreas
}