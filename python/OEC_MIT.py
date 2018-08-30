import pandas as pd
import numpy as np
import bleach
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# from selenium.webdriver.common.by import By
from urllib.request import urlopen
import urllib
from bs4 import BeautifulSoup
pd.set_option('max_colwidth', 800)

browser=webdriver.Chrome()
url = "https://www.oeconsortium.org/providers/13?page=2"
browser.get(url)

elem = browser.find_elements_by_xpath("//*[@href]")
links = []
for i in elem:
    links.append(i.get_attribute("href"))
for index, elem in enumerate(links):
    print(index, elem)

def mitScrape():
    sublist_2=links[50:100]
    sublist_2=[i for i in sublist_2 if "https://www.oeconsortium.org" not in i]

    values = []

    for i in sublist_2[1:5]:
        options = Options()
        options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        driver = webdriver.Chrome(chrome_options=options)

        url = i
        driver.get(url)

        if driver.find_elements_by_tag_name("h1")[0].text != "Page not found":
            title = driver.find_elements_by_tag_name("h1")[0].text
            image_url = driver.find_element_by_xpath("//div[@class='image']").find_element_by_tag_name("img").get_attribute("src")
            description = driver.find_element_by_xpath("//h2[@class='subhead']/following-sibling::p").text
            course_url = driver.current_url
            materials_url = driver.current_url + "readings"
            articles=[title, image_url, description, course_url, materials_url]
            values.append(articles)

    return values
