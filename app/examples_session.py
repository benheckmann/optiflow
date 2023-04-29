EXAMPLE_SESSION = {  # TODO: example stückweise verbessern (echte ChatGPT Ergebnisse verwenden!)
    "name": "ABC Company",
    "url": "https://www.abccompany.com/",
    "scraped_pages": [
        "Home page: Welcome to ABC Company! We offer a wide range of products and services to help you achieve your goals.",
        "About Us: Learn more about our history, mission, and values.",
        "Products: Check out our product offerings and find the perfect solution for your needs.",
        "Services: From consulting to implementation, our team of experts is here to help you succeed.",
        "Blog: Read our latest insights on industry trends and best practices.",
        "Contact Us: Get in touch with us and let us know how we can assist you.",
        "FAQ: Find answers to our most frequently asked questions."
    ],
    "business_areas": [
        {
            "title": "Marketing",
            "description": "This includes all activities related to promoting and selling the company's products or services.",
            "processes": [
                {
                    "title": "Lead Generation",
                    "description": "This process involves identifying and attracting potential customers for the company's products or services.",
                    "process_questions": [
                        {
                            "question": "What is the current lead generation process?",
                            "answer": "The current process involves running social media ads and collecting leads through a landing page.",
                        },
                        {
                            "question": "What are the biggest challenges faced in the current process?",
                            "answer": "The biggest challenge is getting high-quality leads that are more likely to convert into customers.",
                        },
                    ],
                    "recommendations": [
                        {
                            "problem_description": "The current lead generation process is not generating enough high-quality leads.",
                            "ai_application_description": "Using AI to analyze customer data and identify the characteristics of high-quality leads can help improve the lead generation process.",
                            "expected_business_value_evaluation": "Expected increase in lead conversion rate by 20%.",
                            "costs_and_risks": "Costs: Hiring a data scientist and acquiring the necessary data sources. Risks: Results may not be accurate due to data limitations.",
                            "required_data_sources": "Customer data from the company's CRM and external data sources such as social media and web analytics.",
                        },
                        {
                            "problem_description": "The current lead generation process is not targeting the right audience.",
                            "ai_application_description": "Using AI to analyze customer data and identify the characteristics of the target audience can help improve the targeting of social media ads.",
                            "expected_business_value_evaluation": "Expected increase in ad conversion rate by 15%.",
                            "costs_and_risks": "Costs: Hiring a data scientist and acquiring the necessary data sources. Risks: Results may not be accurate due to data limitations.",
                            "required_data_sources": "Customer data from the company's CRM and external data sources such as social media and web analytics.",
                        },
                    ],
                },
                {
                    "title": "Brand Awareness",
                    "description": "This process involves increasing the visibility and recognition of the company's brand.",
                    "process_questions": [
                        {
                            "question": "What are the current brand awareness activities?",
                            "answer": "The current activities include running social media ads, sponsoring events, and influencer marketing.",
                        },
                        {
                            "question": "What are the main metrics used to measure brand awareness?",
                            "answer": "The main metrics are reach, engagement, and sentiment analysis.",
                        },
                    ],
                    "recommendations": [
                        {
                            "problem_description": "The current brand awareness activities are not generating enough engagement.",
                            "ai_application_description": "Using AI to analyze customer feedback and sentiment can help identify the types of content that resonate with the target audience.",
                            "expected_business_value_evaluation": "Expected increase in engagement rate by 10%.",
                            "costs_and_risks": "Costs: Hiring a data scientist and acquiring the necessary data sources. Risks: Results may not be accurate due to data limitations.",
                            "required_data_sources": "Social media and customer feedback data.",
                        }
                    ],
                },
            ],
        }
    ],
}
