BUSINESS_AREA_TO_PROCESSES_INSTRUCTION = """
Pretend you are an agent that can only answer in json!
You will receive a company with their business model as well as a title and the description of one business function of the company. 
Your goal is to find the key processes the company runs through in their business (exactly of five processes as an array). 
The processes should be improvable through the a specific artificial intelligence solution.
Important: you are not allowed to return anything except for the json format as an array: 
{
    "title": <business_title>,
    "description": <description_of_business_process>,
    "ai_optimization_potential" : <description of the optimization potential with artificial intelligence> 
}
"""

BUSINESS_AREA_TO_PROCESSES_INSTRUCTION_SHORTED = """
Pretend you are an agent that can only answer in json!
Find the key business processes of the company (exactly five business processes as an array).
Important: you are not allowed to return anything except for the json format as an array: 
{
    "title": <business_title>,
    "description": <description_of_business_process>,
    "ai_optimization_potential" : <description of the optimization potential with artificial intelligence> 
}
"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_INPUT = """{
    {
        "business_function": "Product Development",
        "description": "Designing and developing new soft drink products such as Fritz-Kola, fruit-based sodas, and mixers, using high-quality, natural ingredients to create a unique and flavorful alternative to traditional soft drinks."
    }
}"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_OUTPUT = """
[
    {
        "title": "Market Research",
        "description": "Gathering and analyzing data on consumer preferences, trends, and behaviors to identify
        potential opportunities for new soft drink products.",
        "ai_optimization_potential": "AI can be used to analyze large amounts of data from various sources, such as social
        media, surveys, and sales data, to identify patterns and insights that can inform product development decisions."
    },
    {
        "title": "Recipe Development",
        "description": "Creating and refining recipes for new soft drink products, taking into account factors such as
        taste, texture, and nutritional value.",
        "ai_optimization_potential": "AI can be used to analyze consumer feedback on existing products and identify trends and
        preferences that can inform recipe development. Additionally, AI can be used to optimize recipes for specific
        nutritional goals, such as reducing sugar content or increasing fiber."
    },
    {
        "title": "Quality Control",
        "description": "Ensuring that new soft drink products meet high standards of quality and consistency, through
        rigorous testing and evaluation.",
        "ai_optimization_potential": "AI can be used to analyze data from quality control tests and identify patterns or
        anomalies that may indicate issues with product quality. Additionally, AI can be used to optimize the testing process
        itself, by identifying the most effective tests and testing methods for each product."
    },
    {
        "title": "Packaging Design",
        "description": "Creating visually appealing and functional packaging for new soft drink products, taking into
        account factors such as branding, shelf appeal, and environmental impact.",
        "ai_optimization_potential": "AI can be used to analyze consumer preferences and trends in packaging design, and
        generate design options that are likely to be well-received. Additionally, AI can be used to optimize packaging
        materials and designs for environmental sustainability."
    },
    {
        "title": "Marketing Strategy",
        "description": "Developing and executing a marketing strategy for new soft drink products, including
        advertising, promotions, and social media campaigns.",
        "ai_optimization_potential": "AI can be used to analyze consumer data and identify the most effective marketing channels
        and messages for each product. Additionally, AI can be used to optimize advertising and promotional spending, by
        identifying the most cost-effective channels and tactics."
    }
]
"""

BUSINESS_AREA_TO_PROCESSES_MOCK_OLD = """[
    {
        "title": "Marketing Campaigns",
        "description": "Creating and executing marketing campaigns that promote Fritz-Kola's unique selling proposition,
        emphasizing the use of high-quality, natural ingredients and socially responsible practices, and promoting tolerance and
        sustainability.",
        "ai_optimization_potential": "Using AI to analyze customer data and preferences to create more targeted and effective
        marketing campaigns, as well as to track the success of campaigns in real-time and make adjustments as needed."
    },
    {
        "title": "Brand Management",
        "description": "Managing the Fritz-Kola brand image and reputation, ensuring that it aligns with the company's
        values and unique selling proposition.",
        "ai_optimization_potential": "Using AI to monitor and analyze social media and online platforms for mentions of the
        Fritz-Kola brand, as well as to track sentiment and identify potential issues or opportunities for brand promotion and
        engagement."
    },
    {
        "title": "Market Research",
        "description": "Conducting market research to identify customer preferences and trends, as well as to gather
        feedback on the effectiveness of marketing campaigns and brand image.",
        "ai_optimization_potential": "Using AI to analyze large amounts of customer data and feedback to identify patterns and
        trends, as well as to generate insights and recommendations for future marketing campaigns and brand management
        strategies."
    }
    ,
    {
        "title": "Content Creation",
        "description": "Creating engaging and informative content for marketing campaigns and brand promotion, such as
        social media posts, blog articles, and videos.",
        "ai_optimization_potential": "Using AI to generate content ideas and optimize content for specific platforms and
        audiences, as well as to analyze the effectiveness of content in driving engagement and brand awareness."
    },
    {
        "title": "Influencer Marketing",
        "description": "Partnering with influencers and brand ambassadors to promote Fritz-Kola and its values to a
        wider audience.",
        "ai_optimization_potential": "Using AI to identify and evaluate potential influencers and brand ambassadors based on
        their audience demographics and engagement rates, as well as to track the success of influencer campaigns in driving
        brand awareness and sales."
    }
]
"""

BUSINESS_AREA_TO_PROCESSES_MOCK_NEW = [
    {
        "title": "Marketing Campaigns",
        "description": "Creating and executing marketing campaigns that promote Fritz-Kola's unique selling proposition, emphasizing the use of high-quality, natural ingredients and socially responsible practices, and promoting tolerance and sustainability.",
        "process_questions": [],
        "recommendations": []
    },
    {
        "title": "Brand Management",
        "description": "Managing the Fritz-Kola brand image and reputation, ensuring that it aligns with the company's values and unique selling proposition.",
        "process_questions": [],
        "recommendations": []
    },
    {
        "title": "Market Research",
        "description": "Conducting market research to identify customer preferences and trends, as well as to gather feedback on the effectiveness of marketing campaigns and brand image.",
        "process_questions": [],
        "recommendations": []
    }
    ,
    {
        "title": "Content Creation",
        "description": "Creating engaging and informative content for marketing campaigns and brand promotion, such as social media posts, blog articles, and videos.",
        "process_questions": [],
        "recommendations": []
    },
    {
        "title": "Influencer Marketing",
        "description": "Partnering with influencers and brand ambassadors to promote Fritz-Kola and its values to a wider audience.",
        "process_questions": [],
        "recommendations": []
    }
]
