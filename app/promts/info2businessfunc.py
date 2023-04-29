INFORMATION_TO_BUSINESS_AREA_INSTRUCTION = """
Pretend you are an agent that can only answer in json!
You will receive a company with a description about their offered products and services as well as their business model. 
Your goal is to find the key business functions of the company (exactly five business functions as an array). 
The business functions and their description should be concrete and adapted to the company and their goals. 
Focus on either really specific business functions or departments or on general business functions or departments a company with such a business model has.
Important: you are not allowed to return anything except for the json format as an array: 
{
    "business_function": <business function or department name>,
    "description": <description of business function or the department activities, adapted to the given company>,
}
"""

INFORMATION_TO_BUSINESS_AREA_INSTRUCTION_SHORTED = """
Pretend you are an agent that can only answer in json!
Find the key business functions of the company (exactly five business functions as an array). 
Important: you are not allowed to return anything except for the json format as an array: 
{
    "business_function": <business function or department name>,
    "description": <description of business function or the department activities, adapted to the given company>,
}
"""

INFORMATION_TO_BUSINESS_AREA_EXAMPLE_INPUT = """
{
    "company_name": "fritz-kulturgüter GmbH",
    "description": "Fritz-Kola is a German-based soft drink company that produces a range of non-alcoholic beverages, including cola, lemonade, and orange soda. The company is known for using natural ingredients and avoiding artificial sweeteners. Fritz-Kola also has a strong social and environmental mission, promoting fair trade and sustainable practices in the production of their drinks."
}
"""

INFORMATION_TO_BUSINESS_AREA_EXAMPLE_OUTPUT = """
[
{
"business_function": "Product Development",
"description": "Designing and developing new products such as Fritz-Kola, Fritz-Limo and Fritz-Mate, using natural ingredients and avoiding artificial sweeteners."
},
{
"business_function": "Sustainability",
"description": "Promoting fair trade and sustainable practices in the production of their drinks, ensuring the long-term viability of the business and minimizing their environmental impact."
},
{
"business_function": "Marketing and Branding",
"description": "Creating and executing marketing campaigns that promote Fritz-Kulturgüter GmbH's brand image and unique selling proposition, emphasizing the use of natural ingredients and socially responsible practices."
},
{
"business_function": "Sales and Distribution",
"description": "Managing the distribution channels for Fritz-Kola, Fritz-Limo and Fritz-Mate, ensuring that the products are available to customers through various sales channels such as supermarkets, restaurants, cafes, and bars."
},
{
"business_function": "Quality Control and Assurance",
"description": "Ensuring that the drinks are consistently high-quality and meet industry standards through regular testing and quality assurance procedures throughout the production process."
}
]
"""

INFORMATION_TO_BUSINESS_AREA_MOCK = """
[
    {
        "business_function": "Product Development",
        "description": "Designing and developing new soft drink products such as Fritz-Kola, fruit-based sodas, and mixers, using high-quality, natural ingredients to create a unique and flavorful alternative to traditional soft drinks."
    },
    {
        "business_function": "Marketing and Branding",
        "description": "Creating and executing marketing campaigns that promote Fritz-Kola's unique selling proposition, emphasizing the use of high-quality, natural ingredients and socially responsible practices, and promoting tolerance and sustainability."
    },
    {
        "business_function": "Sales and Distribution",
        "description": "Managing the distribution channels for Fritz-Kola's range of soft drinks, ensuring that the products are available to customers through various sales channels such as supermarkets, restaurants, cafes, and bars."
    },
    {
        "business_function": "Sustainability",
        "description": "Demonstrating a commitment to sustainability through the use of environmentally friendly packaging and support for local communities, ensuring the long-term viability of the business and minimizing their environmental impact."
    },
    {
        "business_function": "Quality Control and Assurance",
        "description": "Ensuring that the soft drinks are consistently high-quality and meet industry standards through regular testing and quality assurance procedures throughout the production process."
    }
]
"""

