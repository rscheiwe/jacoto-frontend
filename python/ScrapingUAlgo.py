import pandas as pd
import numpy as np
import bleach
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium.webdriver.common.proxy import Proxy, ProxyType
from selenium.webdriver.support.ui import WebDriverWait

import random
from lxml.html import fromstring
import requests
from itertools import cycle
import traceback

from urllib.request import urlopen
import urllib
import time
from fake_useragent import UserAgent
from bs4 import BeautifulSoup
pd.set_option('display.max_colwidth', -1)

profile = webdriver.FirefoxProfile()
profile.set_preference("general.useragent.override", UserAgent().random)
profile.set_preference("browser.cache.disk.enable", False)
profile.set_preference("browser.cache.memory.enable", False)
profile.set_preference("browser.cache.offline.enable", False)
profile.set_preference("network.http.use-cache", False)
profile.update_preferences()
binary = FirefoxBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe')

driver = webdriver.Firefox(firefox_profile=profile, firefox_binary=binary, executable_path='/Python3/Scripts/geckodriver.exe')
driver.get("https://www.udemy.com/topic/python/?p=1")

elems = driver.find_elements_by_xpath('//a[@href]')
for index, elem in enumerate(elems):
    print(index, elem.get_attribute('href'))

for i in elems[262:273]:
    if i.get_attribute('href') and "https://" in i.get_attribute('href'):
        print(i.get_attribute('href'))

def get_proxies():
    url = 'https://free-proxy-list.net/'
    response = requests.get(url)
    parser = fromstring(response.text)
    proxies = set()
    for i in parser.xpath('//tbody/tr')[:10]:
        if i.xpath('.//td[7][contains(text(),"yes")]'):
            proxy = ":".join([i.xpath('.//td[1]/text()')[0], i.xpath('.//td[2]/text()')[0]])
            proxies.add(proxy)
    return proxies

proxies = get_proxies()
proxy_pool = cycle(proxies)

url = 'https://httpbin.org/ip'
for i in range(1,5):
    #Get a proxy from the pool
    proxy = next(proxy_pool)
    print("Request #%d"%i)
    try:
        response = requests.get(url,proxies={"http": proxy, "https": proxy})
#         print(response.json())
    except:
        pass
#         print("Skipping. Connnection error")

profile = webdriver.FirefoxProfile()
profile.set_preference("general.useragent.override", UserAgent().random)
profile.set_preference("browser.cache.disk.enable", False)
profile.set_preference("browser.cache.memory.enable", False)
profile.set_preference("browser.cache.offline.enable", False)
profile.set_preference("network.http.use-cache", False)
profile.set_preference("places.history.enabled", False)
profile.set_preference("privacy.clearOnShutdown.offlineApps", True)
profile.set_preference("privacy.clearOnShutdown.passwords", True)
profile.set_preference("privacy.clearOnShutdown.siteSettings", True)
profile.set_preference("privacy.sanitize.sanitizeOnShutdown", True)
my_proxy = Proxy({'proxyType': ProxyType.MANUAL,
                  'httpProxy': random.choice(['121.129.127.209:80', '124.41.215.238:45169', '185.93.3.123:8080', '194.182.64.67:3128', '106.0.38.174:8080', '163.172.175.210:3128', '13.92.196.150:8080']),
                  'sslProxy': random.choice(['121.129.127.209:80', '124.41.215.238:45169', '185.93.3.123:8080', '194.182.64.67:3128', '106.0.38.174:8080', '163.172.175.210:3128', '13.92.196.150:8080']),
                  'noProxy': 'www.google-analytics.com, ajax.googleapis.com, apis.google.com'
                 })

PROXY = random.sample(proxies, 1)
new_prox = ''
for x in PROXY:
    new_prox = new_prox + x
webdriver.DesiredCapabilities.FIREFOX['proxy']={
    "httpProxy":new_prox,
    "ftpProxy":new_prox,
    "sslProxy":new_prox,
    "proxyType":"MANUAL"
}
profile.update_preferences()
binary = FirefoxBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe')

links = []

driver = webdriver.Firefox(firefox_profile=profile, firefox_binary=binary, executable_path='/Python3/Scripts/geckodriver.exe')
wait = WebDriverWait(driver, 1000000)

for i in range(1,3):
    driver.get("https://www.udemy.com/topic/python/?p=%s" %i)
    time.sleep(5)
    elems = driver.find_elements_by_xpath('//a[@href]')
    for x in elems[262:273]:
        if x.get_attribute('href') and "https://www.udemy.com/topic/python/" in x.get_attribute('href'):
            links.append(x.get_attribute('href'))
