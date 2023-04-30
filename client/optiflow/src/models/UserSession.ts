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
    "summary": string,
    "tools": {
        "problem_description": string,
        "ai_application_description": string,
        "expected_business_value_evaluation": string,
        "costs_and_risks": string,
        "required_data_sources": string,
        "recommended_tools": {name: string, url: string}[]
    }[]
}