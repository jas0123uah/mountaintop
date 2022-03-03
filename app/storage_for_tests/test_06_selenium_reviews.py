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
def test_leave_a_review(driver):
    leave_a_review_button = get_element_by_class("leave-a-review-button")
    leave_a_review_button.click()
    cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[5]")
    cleanliness_rating_div.click()
    communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[5]")
    communication_rating_div.click()
    check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]")
    check_in_div.click()
    accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[5]")
    accuracy_rating_div.click()
    location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[5]")
    location_rating_div.click()
    value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[5]")
    value_rating_div.click()
    analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis! Provident facere ut illo beatae dicta? Commodi, distinctio molestiae reiciendis delectus minus dolorum quaerat deleniti. Qui, veritatis consectetur? Voluptas eum sint natus consectetur provident, labore id rerum animi in molestiae ipsum facere ipsam. Illum itaque quisquam repellat dolor dicta iste veniam quis soluta molestias in. Esse obcaecati natus adipisci commodi assumenda. Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora!""")
    
    review_submit_button = get_element_by_class("reviewSubmitButton")
    review_submit_button.click()
    time.sleep(4)
    assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was not found in getaway page."
    
    
@pytest.mark.parametrize("driver", [(driver)])
def test_edit_a_review(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/')
    # profile_button= get_element_by_xpath("/html/body/div/div[1]/nav/ul/div/li[1]/a")
    # profile_button.click()
    edit_a_review_button = get_element_by_class("edit-review-button")
    edit_a_review_button.click()
    cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[4]")
    cleanliness_rating_div.click()
    communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[4]")
    communication_rating_div.click()
    check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]")
    check_in_div.click()
    accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[4]")
    accuracy_rating_div.click()
    location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[4]")
    location_rating_div.click()
    value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[4]")
    value_rating_div.click()
    analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis!""")
    
    review_submit_button = get_element_by_class("reviewSubmitButton")
    review_submit_button.click()
    time.sleep(4)
    assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' not in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was found in getaway page."
@pytest.mark.parametrize("driver", [(driver)])
def test_delete_a_review(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/')
    # profile_button= get_element_by_xpath("/html/body/div/div[1]/nav/ul/div/li[1]/a")
    # profile_button.click()
    delete_a_review_button = get_element_by_class("delete-review-button")
    delete_a_review_button.click()
