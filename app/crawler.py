import requests
from bs4 import BeautifulSoup

from app.gpt import ask_gpt
from app.promts.crawler import *


def get_company_info(url):
    index_links, index_text = crawl_page(url)
    links = ask_useful_links(index_links)

    texts = [index_text]
    for link in links:
        _, page_text = crawl_page(link)
        texts.append(page_text)

    text_string = " ".join(texts)

    chunks = split_text_into_chunks(text_string)

    individual_summaries = []
    for chunk in chunks:
        individual_summaries.append(ask_for_scrape_summary(chunk))

    individual_summaries_string = "\n".join(individual_summaries)
    total_summary = ask_for_summary_of_summaries(individual_summaries_string)

    return total_summary


def crawl_page(url):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")

    page_text = soup.get_text()
    page_text_without_whitespaces = " ".join(page_text.split())

    links = []

    for link in soup.find_all('a'):
        link_href = link.get('href')
        if link_href.startswith("/"):
            link_href = url + link_href
        if url in link_href:
            links.append(link_href)

    return "\n".join(links), page_text_without_whitespaces


def split_text_into_chunks(text):
    chunk_length = 9000  # chunk length
    return [text[i:i + chunk_length] for i in range(0, len(text), chunk_length)]


def ask_useful_links(links):
    messages = [
        {"role": "user", "content": LINKS_TO_RELEVANT_LINKS_INSTRUCTION},
        {"role": "user", "content": links}
    ]
    llm_answer, tokens_spend = ask_gpt(messages)
    print('tokens spend: ', tokens_spend)
    return llm_answer.split("\n")


def ask_for_scrape_summary(raw_text):
    messages = [
        {"role": "user", "content": CHUNK_TO_SUMMARY_INSTRUCTION},
        {"role": "user", "content": raw_text}
    ]
    llm_answer, tokens_spend = ask_gpt(messages)
    print('tokens spend: ', tokens_spend)
    return llm_answer


def ask_for_summary_of_summaries(summaries):
    messages = [
        {"role": "user", "content": SUMMARIES_TO_TOTAL_SUMMARY},
        {"role": "user", "content": summaries}
    ]
    llm_answer, tokens_spend = ask_gpt(messages)
    print('tokens spend: ', tokens_spend)
    return llm_answer
