import json

PROCESSES_TO_QUESTIONS_INSTRUCTION = "You will receive some strucutred data about a company and one of it's business processes. Come up with a list of five (5) questions that help you as a consultant better understand the process. As these questions are for the business, only ask domain specific questions."

PROCESSES_TO_QUESTIONS_EXAMPLE_INPUT = """{
    "company_name": "firstkola AG"
    "company_description": "Fritz-Kola is a German-based soft drink company that produces a range of non-alcoholic beverages, including cola, lemonade, and orange soda. The company is known for using natural ingredients and avoiding artificial sweeteners. Fritz-Kola also has a strong social and environmental mission, promoting fair trade and sustainable practices in the production of their drinks."
    "business_process": "Marketing",
    "process_description": "The marketing business process of Fritz-Kola involves identifying target markets, creating advertising campaigns, and monitoring customer feedback. They use demographic, geographic, and psychographic data to determine the specific groups of people who are most likely to purchase their products, and they focus on promoting their natural ingredients, commitment to fair trade, and dedication to sustainability. They also gather customer feedback to improve their products and marketing strategies."
}"""

PROCESSES_TO_QUESTIONS_EXAMPLE_OUTPUT = """[
    "How does Fritz-Kola currently gather customer feedback, and what methods do they use to analyze this feedback to improve their marketing strategies?",
    "Can you provide an example of how Fritz-Kola has tailored its advertising campaigns to appeal to specific target markets?",
    "How does Fritz-Kola measure the success of their advertising campaigns, and what metrics do they use to evaluate their performance?",
    "What methods does Fritz-Kola use to reach potential customers in their target markets, and how do they determine which channels to use?",
    "How does Fritz-Kola ensure that their commitment to fair trade and sustainability is effectively communicated in their advertising campaigns?"
]"""

PROCESSES_TO_QUESTIONS_MOCK = json.loads(PROCESSES_TO_QUESTIONS_EXAMPLE_OUTPUT)
