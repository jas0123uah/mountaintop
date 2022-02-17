from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pytest
from dateutil.relativedelta import *
import datetime
from ..pytest_helper_functions import *
PATH = "/usr/bin/chromedriver"
driver = webdriver.Chrome(PATH)
@pytest.mark.parametrize("driver", [(driver)])
def test_search(driver):
    search_input=get_element_by_class("searchBar")
    search_button=get_element_by_class("search-icon")
    populate_text_field(search_input, "Loft")
    search_button.click()
    time.sleep(4)
    assert 'Lookout Loft' in driver.page_source, "Lookout Loft was not found in getaway page."
