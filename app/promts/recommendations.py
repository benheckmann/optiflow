X_TO_RECOMMENDATIONS_INSTRUCTION = ""

X_TO_RECOMMENDATIONS_EXAMPLE_INPUT = """{
    "company_name": "firstkola AG",
    "company_description": "Fritz-Kola is a German-based soft drink company that produces a range of non-alcoholic beverages, including cola, lemonade, and orange soda. The company is known for using natural ingredients and avoiding artificial sweeteners. Fritz-Kola also has a strong social and environmental mission, promoting fair trade and sustainable practices in the production of their drinks.",
    "business_process": "Marketing",
    "process_description": "The marketing business process of Fritz-Kola involves identifying target markets, creating advertising campaigns, and monitoring customer feedback. They use demographic, geographic, and psychographic data to determine the specific groups of people who are most likely to purchase their products, and they focus on promoting their natural ingredients, commitment to fair trade, and dedication to sustainability. They also gather customer feedback to improve their products and marketing strategies.",
    "process_questions_and_answers": [
        {
            "question": "How does Fritz-Kola currently gather customer feedback, and what methods do they use to analyze this feedback to improve their marketing strategies?",
            "answer": "",
        },
        {
            "question": "Can you provide an example of how Fritz-Kola has tailored its advertising campaigns to appeal to specific target markets?",
            "answer": "",
        },
        {
            "question": "How does Fritz-Kola measure the success of their advertising campaigns, and what metrics do they use to evaluate their performance?",
            "answer": "",
        },
        {
            "question": "What methods does Fritz-Kola use to reach potential customers in their target markets, and how do they determine which channels to use?",
            "answer": "",
        },
        {
            "question": "How does Fritz-Kola ensure that their commitment to fair trade and sustainability is effectively communicated in their advertising campaigns?",
            "answer": "",
        },
    ],
}"""

X_TO_RECOMMENDATIONS_EXAMPLE_OUTPUT = """"""

PROCESS_TO_RECOMMENDATIONS_MOCK = """[
    {
        "problem_description": "The company is facing customer churn due to poor customer service.",
        "ai_application_description": "Implement a chatbot that can help customers with their queries and complaints 24/7.",
        "expected_business_value_evaluation": "This will reduce the workload on customer support staff and lead to higher customer satisfaction levels, resulting in a decrease in churn rate by at least 10%.",
        "costs_and_risks": "The cost of implementing and maintaining the chatbot can be high, and there is a risk of negative customer experience if the chatbot does not function properly.",
        "required_data_sources": "Customer service logs and FAQ documents."
    },
    {
        "problem_description": "The company's marketing campaigns are not yielding the desired results.",
        "ai_application_description": "Develop a predictive model that can identify potential customers based on their online behavior.",
        "expected_business_value_evaluation": "This will lead to more targeted marketing campaigns and a higher conversion rate, resulting in an increase in revenue by at least 15%.",
        "costs_and_risks": "The cost of developing and implementing the model can be high, and there is a risk of inaccurate predictions leading to ineffective marketing campaigns.",
        "required_data_sources": "Online user behavior data and past marketing campaign data."
    },
    {
        "problem_description": "The company's supply chain is not optimized, leading to delays and increased costs.",
        "ai_application_description": "Develop a machine learning model that can optimize the supply chain by predicting demand and optimizing inventory levels.",
        "expected_business_value_evaluation": "This will lead to more efficient supply chain management and a decrease in costs by at least 20%.",
        "costs_and_risks": "The cost of developing and implementing the model can be high, and there is a risk of inaccurate predictions leading to supply chain disruptions.",
        "required_data_sources": "Sales data, inventory data, and supplier data."
    }
]"""
