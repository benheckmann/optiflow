BUSINESS_AREA_TO_PROCESSES_INSTRUCTION = """"
You will receive a company with their business model as well as a title and the description of a business area of the company. 
Your goal is to find the key processes the company runs through in their business (maximum of five processes as an array). 
The processes should have the ability to be optimized with artificial intelligence.
Important: you are not allowed to return anything except for the json format as an array: 
{
    "process_title": <business_process_title>,
    "process_description": <description_of_business_process>,
    "ai_optimization_potential" : <description of the optimization potential with artificial intelligence> 
}
"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_INPUT = """{
    "company_name": "firstkola AG"
    "title": "Marketing",
    "description": "This includes all activities related to promoting and selling the company's products or services."
}"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_OUTPUT = """[
    {
        "title": "Lead Generation",
        "description": "This process involves identifying and attracting potential customers for the company's products or services."
    },
    {
        "title": "Brand Awareness",
        "description": "This process involves increasing the visibility and recognition of the company's brand."
    }
]"""