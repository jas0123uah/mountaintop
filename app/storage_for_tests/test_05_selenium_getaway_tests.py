from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import pytest
from dateutil.relativedelta import *
import datetime
from ..pytest_helper_functions import *
PATH = "/usr/bin/chromedriver"
#driver = webdriver.Chrome(PATH)
driver=Service(PATH)
@pytest.mark.parametrize("driver", [(driver)])
def test_create_getaway(driver):
    add_getaway_button = get_element_by_id("add-new-getaway-button")
    add_getaway_button.click()
    assert 'Address' in driver.page_source, "Address not in new getaway page"
    assert 'City' in driver.page_source, "City not in new getaway page"
    analyze_field("address", "Please enter an address.", "653 Hidden Valley Rd" )
    analyze_field("city", "Please enter a city.", "Gatlinburg")
    analyze_field("state", "Please enter a state.", "Tennessee")
    analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "2")
    analyze_field("beds", "Getaway must have at least 1 bed.", "1")
    analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "4")
    analyze_field("guests", "Getaway must house at least 1 guest.", "1")
    analyze_field("name", "Getaway names should be at least 10 characters.", "Selenium Test Getaway")
    analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""")
    analyze_field("price","Getaway must cost at least $100 a night.", "400")
    analyze_field("img1", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    analyze_field("img2", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/c8f3983a-9c79-4083-ac8c-9800970bac75.jpg?im_w=720")
    analyze_field("img3", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/beb670d9-8a55-487e-a607-f3c9d761b330.jpg?im_w=720")
    analyze_field("img4", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/8c259bb5-561d-4724-8076-90764f661fe5.jpg?im_w=720")
    analyze_field("img5", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    submit_edited_getaway('create-getaway-submit-button')
    time.sleep(4)
    assert 'Selenium Test Getaway' in driver.page_source, "Selenium Test Getaway was found in profile page"
@pytest.mark.parametrize("driver", [(driver)])
def test_demo_edit_getaway(driver):
    # webElement= driver.findElement(By.className("edit-getaway-button"))
    edit_getaway_button = get_element_by_class("edit-getaway-button")
    edit_getaway_button.click()
    
    analyze_field("address", "Please enter an address.", "123 Main Street" )
    analyze_field("city", "Please enter a city.", "Tampa")
    analyze_field("state", "Please enter a state.", "Florida")
    analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "1")
    analyze_field("beds", "Getaway must have at least 1 bed.", "1")
    analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "1")
    analyze_field("guests", "Getaway must house at least 1 guest.", "1")
    analyze_field("name", "Getaway names should be at least 10 characters.", "Selenium Testing")
    analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""" )
    analyze_field("price","Getaway must cost at least $100 a night.", "400")
    submit_edited_getaway('edit-getaway-submit-button')

@pytest.mark.parametrize("driver", [(driver)])
def test_delete_getaway(driver):
    delete_getaway_button = get_last_element_in_class("delete-getaway-button")
    delete_getaway_button.click()
    assert 'Selenium Testing' not in driver.page_source, "Selenium Testing was found in profile page"
