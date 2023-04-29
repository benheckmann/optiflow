from haystack.nodes import Crawler

crawler = Crawler(output_dir="data/crawled_files")
docs = crawler.crawl(
	urls=["https://www.mymuesli.com/"],
	filter_urls=["mymuesli"],
	crawler_depth=2
)

print(docs)