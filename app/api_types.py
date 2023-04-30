from typing import List, TypedDict


class ProcessQuestion(TypedDict):
    question: str
    answer: str


class Recommendation(TypedDict):
    problem_description: str
    ai_application_description: str
    expected_business_value_evaluation: str  # data type can be changed as per requirement
    costs_and_risks: str
    required_data_sources: str


class Process(TypedDict):
    title: str
    description: str
    process_questions: List[ProcessQuestion]
    recommendations: List[Recommendation]


class LLMProcess(TypedDict):
    # outputted by ChatGPT as an intermediate step before the other attributes will be determined
    title: str
    description: str


class BusinessArea(TypedDict):
    title: str
    description: str
    processes: List[Process]


class LLMBusinessArea(TypedDict):
    # intermediate step outputted by ChatGPT
    title: str
    description: str


class Project(TypedDict):
    company_name: str
    url: str
    location: str
    number_of_employees: str
    company_description: str
    products_and_services: str
    scraped_pages: List[str]
    business_areas: List[BusinessArea]


UserSession = List[Project]

class FrontEndBusinessArea(TypedDict):
    id: int
    name: str

class FrontEndQuestion(TypedDict):
    question: str
    answer: str

class FrontEndUserSession(TypedDict):
    projectName: str
    companyName: str
    description: str
    companyProfile: str
    industry: str
    url: str
    business_areas: List[FrontEndBusinessArea]
    selected_business_area: int
    workflows: List[FrontEndBusinessArea]
    selected_workflow: int
    questions: List[FrontEndQuestion]
    summary: str

