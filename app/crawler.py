import requests
from bs4 import BeautifulSoup


def crawl_page(url):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")

    page_text = soup.get_text()
    page_text_without_whitespaces = " ".join(page_text.split())

    links = ""

    for link in soup.find_all('a'):
        links += link.get('href') + "\n"

    return links, page_text_without_whitespaces


def split_text_into_chunks(text):
    chunk_length = 1500  # chunk length
    return [text[i:i + chunk_length] for i in range(0, len(text), chunk_length)]


def get_company_info(url):
    index_links, index_text = crawl_page(url)
    links = ask_useful_links(index_links)
    text = index_text
    for link in links:
        _, page_text = crawl_page(link)
        text = text.join(" ").join(page_text)

    chunks = split_text_into_chunks(text)

    individual_summaries = ""
    for chunk in chunks:
        individual_summaries.join("\n").join(ask_for_scrape_summary(chunk))

    total_summary = ask_for_summary_summary(individual_summaries)

    return total_summary
