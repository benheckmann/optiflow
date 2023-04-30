# general message schema: system message, instruction, example input, example output, actual input

SYSTEM_MESSAGE = "You are an consultant for companies aiming to integrate AI into their business."  # not that important; system messages tend to be ignored

USER_SESSION_MOCK = """[
    {
        "company_name": "Fritz-Kola GmbH",
        "url": "https://fritz-kola.com/de",
        "location": "Hamburg, Germany",
        "number_of_employees": "51-200",
        "company_description": "Fritz-Kola GmbH is a German beverage company that produces soft drinks, energy drinks, and mixers.",
        "products_and_services": "Soft drinks, energy drinks, and mixers.",
        "scraped_pages": [],
        "business_areas": [
            {
                "title": "Sales and Marketing",
                "description": "Processes related to sales and marketing of Fritz-Kola products.",
                "processes": [
                    {
                        "title": "Optimizing Social Media Campaigns",
                        "description": "Finding ways to improve the effectiveness of social media campaigns to increase brand awareness and drive sales.",
                        "process_questions": [
                            {
                                "question": "How does Fritz-Kola currently gather customer feedback, and what methods do they use to analyze this feedback to improve their marketing strategies?",
                                "answer": "We gather customer feedback through various channels, including social media, email, and surveys. We use tools like sentiment analysis and data visualization to analyze this feedback and identify patterns and areas for improvement in our marketing strategies."
                            },
                            {
                                "question": "Can you provide an example of how Fritz-Kola has tailored its advertising campaigns to appeal to specific target markets?",
                                "answer": "Sure, we recently ran a campaign that focused on the sustainability and fair trade aspects of our products, which we knew would resonate with environmentally-conscious consumers. We used messaging and imagery that emphasized our commitment to these values, and targeted our ads to users who had previously expressed interest in sustainability and environmentalism."
                            },
                            {
                                "question": "How does Fritz-Kola measure the success of their advertising campaigns, and what metrics do they use to evaluate their performance?",
                                "answer": "We measure the success of our campaigns using a variety of metrics, including click-through rates, engagement rates, and conversions. We also conduct surveys and analyze customer feedback to get a sense of how our advertising is resonating with our target audience."
                            },
                            {
                                "question": "What methods does Fritz-Kola use to reach potential customers in their target markets, and how do they determine which channels to use?",
                                "answer": "We use a combination of online and offline channels to reach potential customers in our target markets. For example, we might run targeted ads on social media, sponsor events or festivals that align with our brand values, or partner with local retailers to offer in-store promotions. We determine which channels to use based on factors like the demographics and interests of our target audience, the reach and cost-effectiveness of different channels, and our overall marketing strategy."
                            },
                            {
                                "question": "How does Fritz-Kola ensure that their commitment to fair trade and sustainability is effectively communicated in their advertising campaigns?",
                                "answer": "We make sure to use messaging and imagery that emphasizes our commitment to fair trade and sustainability in our advertising campaigns. We also work to ensure that our products and production processes align with these values, and that our customers are aware of our efforts to be a socially responsible company. Additionally, we might partner with organizations or influencers that share our values to further amplify our message."
                            },
                        ],
                        "recommendations": [
                            {
                                "problem_description": "Low engagement on social media posts",
                                "ai_application_description": "Using natural language processing (NLP) algorithms to analyze social media comments and identify patterns in user feedback.",
                                "expected_business_value_evaluation": "By identifying common complaints or suggestions from users, we can make more informed decisions about how to improve our products and social media content.",
                                "costs_and_risks": "The main costs would be in developing or acquiring an NLP algorithm and hiring someone to manage the analysis of social media comments. The main risk would be that the algorithm fails to accurately capture the sentiment of users or identify meaningful patterns.",
                                "required_data_sources": "We would need access to our social media data, including comments and engagement metrics."
                            },
                            {
                                "problem_description": "Difficulty in tracking the effectiveness of in-store promotions",
                                "ai_application_description": "Using computer vision and machine learning algorithms to analyze in-store footage and track customer behavior, including how they interact with our products and what products they tend to gravitate towards.",
                                "expected_business_value_evaluation": "By better understanding customer behavior and preferences, we can optimize our in-store promotions and product placement to drive sales and increase customer satisfaction.",
                                "costs_and_risks": "The main costs would be in developing or acquiring the necessary computer vision and machine learning technologies and hiring someone to manage the analysis of in-store footage. The main risk would be that the algorithms fail to accurately track customer behavior or that the analysis fails to generate meaningful insights.",
                                "required_data_sources": "We would need access to footage from our in-store cameras and point-of-sale data to train our computer vision and machine learning algorithms."
                            },
                            {
                                "problem_description": "Difficulty in predicting and managing inventory levels",
                                "ai_application_description": "Using machine learning algorithms to analyze historical sales data and predict future demand for our products.",
                                "expected_business_value_evaluation": "By accurately predicting demand for our products, we can optimize our inventory levels and reduce waste and lost sales due to stockouts or overstocking.",
                                "costs_and_risks": "The main costs would be in developing or acquiring the necessary machine learning technologies and hiring someone to manage the inventory forecasting process. The main risk would be that the algorithms fail to accurately predict demand or that inaccurate predictions lead to inventory shortages or overstocking.",
                                "required_data_sources": "We would need access to historical sales data and other relevant business metrics to train our machine learning algorithms."
                            }
                        ]
                    }
                ]
            }
        ]
    }
]"""
