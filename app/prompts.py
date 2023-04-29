# general message schema: system message, instruction, example input, example output, actual input

SYSTEM_MESSAGE = "You are Consult-GPT, an AI Language Model that acts as a consultant for companies aiming to integrate AI into their business."  # not that important; system messages tend to be ignored

BUSINESS_AREA_TO_PROCESSES_INSTRUCTION = """"You will receive a title and the description of a business area. With the given information, try to come up with the key processes of this business area (at most five) and return them in the following format:

[
    {
        "title": <business_process_title>,
        "description": <description_of_business_process>
    }
]"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_INPUT = """{
    "title": "Marketing",
    "description": "This includes all activities related to promoting and selling the company's products or services."
}"""

BUSINESS_AREA_TO_PROCESSES_EXAMPLE_OUTPUT = """[
    {
        "title": "Lead Generation",
        "description": "This process involves identifying and attracting potential customers for the company's products or services.",
    },
    {
        "title": "Brand Awareness",
        "description": "This process involves increasing the visibility and recognition of the company's brand.",
    },
]"""
