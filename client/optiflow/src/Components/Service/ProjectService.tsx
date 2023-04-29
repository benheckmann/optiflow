import {Project} from "../../models/Project";


const getAllProjects = async (): Promise<Project[]> => {

    return (
        [
            {
                name: "Project 1",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            },
            {
                name: "Project 2",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            },
            {
                name: "Project 3",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            },
            {
                name: "Project 4",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            },
            {
                name: "Project 5",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            },
            {
                name: "Project 6",
                description: "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
                content:""
            }
            ]

    )

}

export default {
    getAllProjects
}