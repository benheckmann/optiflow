import {BusinessArea} from "../models/BusinessArea";
import {UserSession} from "../models/UserSession";

export const HOSTNAME = "http://localhost:5000"

const getAllBusinessAreas = async (url: string): Promise<BusinessArea[]> => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url})
    };

    const result = await fetch(HOSTNAME + "/api/business-areas", requestOptions);
    return await result.json();
}

const getAllWorkflows = async (businessArea: BusinessArea): Promise<BusinessArea[]> => {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: businessArea.title, description: businessArea.description})
    };

    const result = await fetch(HOSTNAME + "/api/processes", requestOptions);
    return await result.json();
}

const getAllProjects = async (): Promise<UserSession[]> => {

}

const getQuestions = async (process: BusinessArea): Promise<string[]> => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: process.title, description: process.description})
    };

    const result = await fetch(HOSTNAME + "/api/process-questions", requestOptions);
    return await result.json();
}

const postQuestions = async (questions: {question: string, answer: string}[]): Promise<void> => {

}

const getProject = async (): Promise<> => {

}

export default {
    getAllBusinessAreas,
    getAllWorkflows,
    getAllProjects,
    getQuestions,
    postQuestions
}