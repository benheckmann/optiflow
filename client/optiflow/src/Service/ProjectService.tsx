import {Project} from "../models/Project";
import {UserSession} from "../models/UserSession";


const getAllProjects = async (): Promise<UserSession[]> => {

    return (
        [
            {
                "projectName": "Project 1",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            },
            {
                "projectName": "Project 2",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            },
            {
                "projectName": "Project 3",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            },
            {
                "projectName": "Project 4",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            },
            {
                "projectName": "Project 5",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            },
            {
                "projectName": "Project 6",
                "companyName": "BMW",
                "url": "www.ex.de",
                "business_area": "Automobile",
                "workflow": "workflow",
                "question 1": "question 1",
                "response 1": "response 1",
                "question 2": "question 2",
                "response 2": "response 2",
                "question 3": "question 3",
                "response 3": "response 3",
                "question 4": "question 4",
                "response 4":  "response 4",
                "question 5": "question 5",
                "response 5":  "response 5",
                "summary":   "summary",
                "description":"description",
                "industry":"industry",
                "companyProfile":"companyProfile"
            }
            ]

    )

}

export default {
    getAllProjects
}