import {BusinessArea} from "./BusinessArea";

export const QUESTION_AMOUNT: number = 5;

export interface UserSession {
    "projectName": string,
    "companyName": string,
    "description": string,
    "companyProfile":string,
    "industry": string,
    "url": string,
    "business_areas": BusinessArea[],
    "selected_business_area": number
    "workflows": BusinessArea[],
    "selected_workflow": number,
    "questions": {
        "question": string,
        "answer": string
    }[],
    "summary": string
}