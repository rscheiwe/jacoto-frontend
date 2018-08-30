import pandas as pd
import numpy as np
import bleach
import io

import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# from selenium.webdriver.common.by import By
from urllib.request import urlopen
import urllib
from bs4 import BeautifulSoup
pd.set_option('max_colwidth', 800)

url = "https://www.class-central.com/provider/futurelearn"

class ScrapeClassCentral():

    def __init__(self, url):
        self.url = url

    def futurelearnScrape(self):
        browser=webdriver.Chrome()
        browser.get(self.url)

        elem = browser.find_elements_by_xpath("//*[@href]")
        links = []
        for i in elem:
            links.append(i.get_attribute("href"))

        sublist_3=[]
        for i in links:
            if "course" in i and "https://www.class-central.com" in i and "futurelearn" in i and "reviews" not in i and "provider" not in i:
                sublist_3.append(i)

        values = []

        for i in sublist_3[2:4]:
            options = Options()
            options.add_argument("--disable-notifications")
            options.add_argument('--headless')
            options.add_argument('--disable-gpu')
            driver = webdriver.Chrome(chrome_options=options)

            url = i
            driver.get(url)

            if driver.find_element_by_id("course-title"):
                title = driver.find_element_by_id("course-title").text
                if driver.find_elements_by_tag_name("p")[50].text == "##":
                    description = driver.find_elements_by_tag_name("p")[51].text
                else:
                    description = driver.find_elements_by_tag_name("p")[50].text

                if driver.find_element_by_xpath("//a[@class='btn--large btn-green width-100']") and 'https://' in driver.find_element_by_xpath("//a[@class='btn--large btn-green width-100']").get_attribute('href'):
                    link = driver.find_element_by_xpath("//a[@class='btn--large btn-green width-100']").get_attribute('href')
                    sub_window = webdriver.Chrome(chrome_options=options)
                    sub_window.get(link)
                    if sub_window.find_element_by_tag_name("video"):
                        image = sub_window.find_element_by_tag_name("video").get_attribute('poster')

                articles=[title, description, image]
                values.append(articles)

        return values
