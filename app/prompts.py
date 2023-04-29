# general message schema: system message, instruction, example input, example output, actual input

SYSTEM_MESSAGE = "You are Consult-GPT, an AI Language Model that acts as a consultant for companies aiming to integrate AI into their business."  # not that important; system messages tend to be ignored

BUSINESS_AREA_TO_PROCESSES_INSTRUCTION = """"You will a title and the description of a business area. With the given information, try to come up with the key processes of this business area (at most five) and return them in the following format:

[
    {
        "title": <business_process_title>,
        "description": <description_of_business_process>
    }
]"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE = """{
    "title": "Marketing",
    "description": "This includes all activities related to promoting and selling the company's products or services."
}"""