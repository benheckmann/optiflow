LINKS_TO_RELEVANT_LINKS_INSTRUCTION = '''
You will receive a list of links about a company. Find the most relevant links (strict maximum of 2 link) which give us the most infomation about:
- business model 
- offered products and services 
- their goals and values 
Important: only send the links without any other text or description!
'''

LINKS_TO_RELEVANT_LINKS_EXAMPLE_INPUT = '''
https://fritz-kola.com/maft
https://fritz-kola.com/de/das-gute-schlaeft-nie
https://fritz-kola.com/de/nachhaltigkeitsbericht
https://fritz-kola.com/de/produkte
https://fritz-kola.com/de/neuigkeiten/mund%20auf%20f%C3%BCr%20toleranz
https://open.spotify.com/user/31ycmfaar7vl4jb3p2be57dszc3i?si=393b5b40aa304c29
https://fritz-kola.com/de/ueber-uns
https://fritz-kola.com/de/mischwerke
https://fritz-kola.com/de/presse
https://fritz-kola.com/de/downloads
https://fritz-kola.com/de/kontakt
https://fritz-kola.com/de/impressum
https://fritz-kola.com/de/agbs
https://fritz-kola.com/de/datenschutz
'''

CHUNK_TO_SUMMARY_INSTRUCTION = '''
You will receive information about a company and the company name. Filter and summarize the most important aspects about their: 
- offered products and services 
- business model 
- their goals and values 
- what makes their business unique 
'''
#Important: only filter information that are related to the company name and not other referenced company names!
#'''

# SUMMARIES_TO_TOTAL_SUMMARY = '''
# You will receive information about a company.
# Combine the information to one short description about the company including the following aspects:
# - company name and general information about their history
# - business model
# - offered products and services
# - their goals and values
# - what makes their business unique

SUMMARIES_TO_TOTAL_SUMMARY = '''
You get multiple summaries about a company.
Take the given summaries about a company and write a new short summary about the given company. 
It needs to include:
 - company name and general information about their history
 - business model 
 - offered products and services 
 - their goals and values 
 - what makes their business unique
'''



