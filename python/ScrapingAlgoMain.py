import pandas as pd
import numpy as np
import bleach
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from urllib.request import urlopen
import urllib
from bs4 import BeautifulSoup
pd.set_option('display.max_colwidth', -1)

oec_url = "https://www.oeconsortium.org/providers/13?page="
cc_url = "https://www.class-central.com/provider/futurelearn"

class Scrape():

    def __init__(self, url):
        self.url = url

    def mitScrape(self):

        browser=webdriver.Chrome(executable_path='C:/Python3/Scripts/chromedriver.exe')
        browser.get(self.url)
        elem = browser.find_elements_by_xpath("//*[@href]")
        links = []
        for i in elem:
            links.append(i.get_attribute("href"))
        sublist_2=links[50:100]
        sublist_2=[i for i in sublist_2 if "https://www.oeconsortium.org" not in i]

        values = []

        for i in sublist_2:
            options = Options()
            options.add_argument('--headless')
            options.add_argument('--disable-gpu')
            driver = webdriver.Chrome(executable_path='C:/Python3/Scripts/chromedriver.exe', chrome_options=options)

            url = i
            driver.get(url)

            if driver.find_elements_by_tag_name("h1")[0].text != "Page not found":

                title = driver.find_elements_by_tag_name("h1")[0].text
#                 print("getting %s" %title)
                try:
                    image_url = driver.find_element_by_xpath("//div[@class='image']").find_element_by_tag_name("img").get_attribute("src")
                    description = driver.find_element_by_xpath("//h2[@class='subhead']/following-sibling::p").text
                    course_url = driver.current_url
                    materials_url = driver.current_url + "readings"
                    articles=[title, image_url, description, course_url, materials_url]
                    values.append(articles)
                except:
                    pass

        return values

    def futurelearnScrape(self):
        browser=webdriver.Chrome(executable_path='C:/Python3/Scripts/chromedriver.exe')
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

        for i in sublist_3[2:10]:
            options = Options()
            options.add_argument("--disable-notifications")
            options.add_argument('--headless')
            options.add_argument('--disable-gpu')
            driver = webdriver.Chrome(executable_path='C:/Python3/Scripts/chromedriver.exe', chrome_options=options)

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
                    sub_window = webdriver.Chrome(executable_path='C:/Python3/Scripts/chromedriver.exe', chrome_options=options)
                    sub_window.get(link)
                    try:
                        sub_window.find_element_by_tag_name("video")
                        image_url = sub_window.find_element_by_tag_name("video").get_attribute('poster')
                    except:
                        pass
                    course_url = sub_window.current_url
                    materials = float('nan')

                articles=[title, image_url, description, course_url, materials]
                values.append(articles)

        return values

courses = []
for i in range(101,125):
    now = Scrape(oec_url + "%s" %i)
    print("Scraping Main Page: %s" %i)
    courses.append(now.mitScrape())

scraped_courses = [item for sublist in courses for item in sublist]
# df = pd.DataFrame(scraped_courses)
