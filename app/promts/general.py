# general message schema: system message, instruction, example input, example output, actual input

SYSTEM_MESSAGE = "You are an consultant for companies aiming to integrate AI into their business."  # not that important; system messages tend to be ignored

USER_SESSION_MOCK = [
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
]


FRONT_END_USER_SESSION_MOCK = [{
    "projectName": "Fritz-Kola Campaign Optimization",
    "companyName": "Fritz-Kola GmbH",
    "description": "Optimizing the sales and marketing processes of Fritz-Kola GmbH.",
    "companyProfile": "Fritz-Kola GmbH is a German beverage company that produces soft drinks, energy drinks, and mixers.",
    "industry": "Beverage",
    "url": "https://fritz-kola.com/de",
    "business_areas": [
        {
            "title": "Sales and Marketing",
            "description": "Processes related to sales and marketing of Fritz-Kola products."
        }
    ],
    "selected_business_area": 0,
    "workflows": [
        {
            "title": "Optimizing Social Media Campaigns",
            "description": "Finding ways to improve the effectiveness of social media campaigns to increase brand awareness and drive sales."
        }
    ],
    "selected_workflow": 0,
    "questions": [
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
        }
    ],
    "summary": "The project aims to optimize Fritz-Kola's sales and marketing processes, with a focus on improving the effectiveness of social media campaigns. The company gathers customer feedback through various channels and analyzes it using sentiment analysis and data visualization to identify patterns and areas for improvement in their marketing strategies. Fritz-Kola tailors its advertising campaigns to specific target markets, such as environmentally-conscious consumers, and measures success using metrics like click-through rates, engagement rates, and conversions. The company uses a mix of online and offline channels to reach potential customers and ensures that its commitment to fair trade and sustainability is effectively communicated in advertising campaigns. This project will help Fritz-Kola further enhance its marketing efforts and drive sales growth.",
    "tools": [
        {
            "problem_description": "The company is facing customer churn due to poor customer service.",
            "ai_application_description": "Implement a chatbot that can help customers with their queries and complaints 24/7.",
            "expected_business_value_evaluation": "This will reduce the workload on customer support staff and lead to higher customer satisfaction levels, resulting in a decrease in churn rate by at least 10%.",
            "costs_and_risks": "The cost of implementing and maintaining the chatbot can be high, and there is a risk of negative customer experience if the chatbot does not function properly.",
            "required_data_sources": "Customer service logs and FAQ documents.",
            "recommended_tools": [
            {
                "name": "Jasper.ai",
                "url": "https://www.insidr.ai/aff/jasper",
                "description": "Create amazing blog posts, art & images, marketing copy, sales emails, SEO content, Facebook ads, web content, captions, video scripts, 10X faster with AI. Jasper is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster."
            },
            {
                "name": "Nando.ai",
                "url": "https://www.insidr.ai/aff/nando",
                "description": "Create High-Converting Copy For Your Online Business In Seconds! Explore Over 60 Powerful Tools to Craft Compelling Product Descriptions, Video Scripts, Ad Concepts, Copy, Blog Posts, Social Media Content, and So Much More."
            },
            {
                "name": "SinCode",
                "url": "https://www.insidr.ai/aff/sincode",
                "description": "SinCode humanize your AI written content so you don\u2019t get negative ratings from Google. SinCode will help you boost your SEO and all types of written content. Create SEO optimized plagiarism-free content for your blog, articles, website, email and all types of written content 10x faster."
            }]
        },
        {
            "problem_description": "The company's marketing campaigns are not yielding the desired results.",
            "ai_application_description": "Develop a predictive model that can identify potential customers based on their online behavior.",
            "expected_business_value_evaluation": "This will lead to more targeted marketing campaigns and a higher conversion rate, resulting in an increase in revenue by at least 15%.",
            "costs_and_risks": "The cost of developing and implementing the model can be high, and there is a risk of inaccurate predictions leading to ineffective marketing campaigns.",
            "required_data_sources": "Online user behavior data and past marketing campaign data.",
            "recommended_tools": [
            {
                "name": "Followr.ai",
                "url": "https://www.insidr.ai/aff/followr",
                "description": "Content and posting on social media automatically with AI. Advanced analytics, AI-assisted content production, and automated scheduling may all be used to improve your strategy and boost engagement on your social media platforms."
            }]
        },
        {
            "problem_description": "The company's supply chain is not optimized, leading to delays and increased costs.",
            "ai_application_description": "Develop a machine learning model that can optimize the supply chain by predicting demand and optimizing inventory levels.",
            "expected_business_value_evaluation": "This will lead to more efficient supply chain management and a decrease in costs by at least 20%.",
            "costs_and_risks": "The cost of developing and implementing the model can be high, and there is a risk of inaccurate predictions leading to supply chain disruptions.",
            "required_data_sources": "Sales data, inventory data, and supplier data.",
            "recommended_tools": []
        }
    ]
}]