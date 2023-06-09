LINKS_TO_RELEVANT_LINKS_INSTRUCTION = """
You will receive a list of links about a company. Find the most relevant links (strict maximum of 2 link) which give us the most infomation about:
- business model 
- offered products and services 
- their goals and values 
Important: only send the links without any other text or description!
"""

CHUNK_TO_SUMMARY_INSTRUCTION = """
You will receive information about a company and the company name. Filter and summarize the most important aspects about their: 
- offered products and services 
- business model 
- their goals and values 
- what makes their business unique 
"""

SUMMARIES_TO_TOTAL_SUMMARY = """
You get multiple summaries about a company.
Take the given summaries about a company and write a new short summary about the given company. 
It needs to include:
 - company name and general information about their history
 - business model 
 - offered products and services 
 - their goals and values 
 - what makes their business unique
"""

COMPANY_PROFILE_MOCK = """
{
    "company_name": "fritz-kulturgüter gmbh",
    "industry": "Beverage industry",
    "company_profile": "Fritz-Kola is a German soft drink company that offers a range of unique and natural sodas, including their signature kola with high caffeine content. Their business model is based on providing a healthier alternative to traditional soft drinks, using natural ingredients and promoting sustainability. Their goal is to offer high-quality products while promoting tolerance and social responsibility. What makes Fritz-Kola unique is their commitment to creating a unique taste and experience for their customers, with a focus on high caffeine content and natural ingredients."
}
"""
