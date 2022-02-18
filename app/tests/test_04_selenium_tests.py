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
def log_out_old_users(driver):
    try:
        #time.sleep(3)
        element = WebDriverWait(driver, 2).until(
            EC.presence_of_element_located((By.ID, "sign-out-button"))
        )
        element.click()
        return
    except BaseException as e:
        return 
@pytest.mark.parametrize("driver", [(driver)])
def test_demo_login(driver):
    driver.get("https://mountain-top.herokuapp.com/")
    log_out_old_users(driver)
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "demo-button"))
    )
    element.click()
    time.sleep(4)
    assert 'My Getaways' in driver.page_source
def check_for_error_message(message):
    return message in driver.page_source

# def clear_element_field(element):
#     element.clear()
# def populate_text_field(element, string):
#     element.send_keys(string)
#     driver.find_element_by_xpath('//html').click()
    
# def get_element_by_id(id_string):
#     element = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.ID, id_string))
#     )
#     return element
# def get_element_by_xpath(id_string):
#     element = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.XPATH, id_string))
#     )
#     return element
# def get_element_by_css_selector(selector):
#     element = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CSS_SELECTOR, selector))
#     )
#     driver.find_element_by_css_selector(selector)
# def get_elements_by_class(class_name):
#     element = WebDriverWait(driver, 10).until(
#         EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
#     )
#     return element[-1]
#     #time.sleep(4)
#     return driver.find_elements_by_class_name(class_name)[-1]
# def get_element_by_class(class_name):
#     element = WebDriverWait(driver, 10).until(
#         EC.presence_of_element_located((By.CLASS_NAME, class_name))
#     )
#     return element
# def get_date_suffix(datetime_obj):
#     if 4 <= datetime_obj <= 20 or 24 <= datetime_obj <= 30:
#         suffix = "th"
#     else:
#         suffix = ["st", "nd", "rd"][datetime_obj % 10 - 1]
#     return suffix
# def analyze_field(id_string, error_message, new_text):
#     address = get_element_by_id(id_string)
#     clear_element_field(address)
#     check_for_error_message(error_message)
#     populate_text_field(address, new_text)
# def submit_edited_getaway(id_string):
#     edit_getaway_button = get_element_by_id(id_string)
#     edit_getaway_button.click()
# def undo_edit_getaway(driver):
#     edit_getaway_button = get_element_by_class("edit-getaway-button")
#     edit_getaway_button.click()
    
#     analyze_field("address", "Please enter an address.", "653 Hidden Valley Rd" )
#     analyze_field("city", "Please enter a city.", "Gatliburg")
#     analyze_field("state", "Please enter a state.", "Tennessee")
#     analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "2")
#     analyze_field("beds", "Getaway must have at least 1 bed.", "1")
#     analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "4")
#     analyze_field("guests", "Getaway must house at least 1 guest.", "1")
#     analyze_field("name", "Getaway names should be at least 10 characters.", "Lookout Loft")
#     analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""")
#     analyze_field("price","Getaway must cost at least $100 a night.", "400")
#     # analyze_field("img1", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
#     # analyze_field("img2", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/c8f3983a-9c79-4083-ac8c-9800970bac75.jpg?im_w=720")
#     # analyze_field("img3", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/beb670d9-8a55-487e-a607-f3c9d761b330.jpg?im_w=720")
#     # analyze_field("img4", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/8c259bb5-561d-4724-8076-90764f661fe5.jpg?im_w=720")
#     # analyze_field("img5", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
#     submit_edited_getaway('edit-getaway-submit-button')
# @pytest.mark.parametrize("driver", [(driver)])
# def test_demo_edit_getaway(driver):
#     # webElement= driver.findElement(By.className("edit-getaway-button"))
#     edit_getaway_button = get_element_by_class("edit-getaway-button")
#     edit_getaway_button.click()
    
#     analyze_field("address", "Please enter an address.", "123 Main Street" )
#     analyze_field("city", "Please enter a city.", "Tampa")
#     analyze_field("state", "Please enter a state.", "Florida")
#     analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "1")
#     analyze_field("beds", "Getaway must have at least 1 bed.", "1")
#     analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "1")
#     analyze_field("guests", "Getaway must house at least 1 guest.", "1")
#     analyze_field("name", "Getaway names should be at least 10 characters.", "Selenium Testing")
#     analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""" )
#     analyze_field("price","Getaway must cost at least $100 a night.", "400")
    # analyze_field("img1", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    # analyze_field("img2", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    # analyze_field("img3", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    # analyze_field("img4", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    # analyze_field("img5", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    submit_edited_getaway('edit-getaway-submit-button')
# @pytest.mark.parametrize("driver", [(driver)])
# def test_create_getaway(driver):
#     add_getaway_button = get_element_by_id("add-new-getaway-button")
#     add_getaway_button.click()
#     assert 'Address' in driver.page_source, "Address not in new getaway page"
#     assert 'City' in driver.page_source, "City not in new getaway page"
#     analyze_field("address", "Please enter an address.", "653 Hidden Valley Rd" )
#     analyze_field("city", "Please enter a city.", "Gatlinburg")
#     analyze_field("state", "Please enter a state.", "Tennessee")
#     analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "2")
#     analyze_field("beds", "Getaway must have at least 1 bed.", "1")
#     analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "4")
#     analyze_field("guests", "Getaway must house at least 1 guest.", "1")
#     analyze_field("name", "Getaway names should be at least 10 characters.", "Selenium Test Getaway")
#     analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""")
#     analyze_field("price","Getaway must cost at least $100 a night.", "400")
#     analyze_field("img1", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
#     analyze_field("img2", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/c8f3983a-9c79-4083-ac8c-9800970bac75.jpg?im_w=720")
#     analyze_field("img3", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/beb670d9-8a55-487e-a607-f3c9d761b330.jpg?im_w=720")
#     analyze_field("img4", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/8c259bb5-561d-4724-8076-90764f661fe5.jpg?im_w=720")
#     analyze_field("img5", "Please upload 5 images.", "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
#     submit_edited_getaway('create-getaway-submit-button')
#     time.sleep(4)
#     assert 'Selenium Test Getaway' in driver.page_source, "Selenium Test Getaway was found in profile page"
# @pytest.mark.parametrize("driver", [(driver)])
# def test_delete_getaway(driver):
#     delete_getaway_button = get_elements_by_class("delete-getaway-button")
#     delete_getaway_button.click()
#     assert 'Selenium Testing' not in driver.page_source, "Selenium Testing was found in profile page"
# @pytest.mark.parametrize("driver", [(driver)])
# def test_leave_a_review(driver):
#     leave_a_review_button = get_element_by_class("leave-a-review-button")
#     leave_a_review_button.click()
#     cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[5]")
#     cleanliness_rating_div.click()
#     communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[5]")
#     communication_rating_div.click()
#     check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]")
#     check_in_div.click()
#     accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[5]")
#     accuracy_rating_div.click()
#     location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[5]")
#     location_rating_div.click()
#     value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[5]")
#     value_rating_div.click()
#     analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis! Provident facere ut illo beatae dicta? Commodi, distinctio molestiae reiciendis delectus minus dolorum quaerat deleniti. Qui, veritatis consectetur? Voluptas eum sint natus consectetur provident, labore id rerum animi in molestiae ipsum facere ipsam. Illum itaque quisquam repellat dolor dicta iste veniam quis soluta molestias in. Esse obcaecati natus adipisci commodi assumenda. Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora!""")
    
#     review_submit_button = get_element_by_class("reviewSubmitButton")
#     review_submit_button.click()
#     time.sleep(4)
#     assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was not found in getaway page."
    
    
# @pytest.mark.parametrize("driver", [(driver)])
# def test_edit_a_review(driver):
#     driver.get('https://mountain-top.herokuapp.com/profile/')
#     # profile_button= get_element_by_xpath("/html/body/div/div[1]/nav/ul/div/li[1]/a")
#     # profile_button.click()
#     edit_a_review_button = get_element_by_class("edit-review-button")
#     edit_a_review_button.click()
#     cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[4]")
#     cleanliness_rating_div.click()
#     communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[4]")
#     communication_rating_div.click()
#     check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]")
#     check_in_div.click()
#     accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[4]")
#     accuracy_rating_div.click()
#     location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[4]")
#     location_rating_div.click()
#     value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[4]")
#     value_rating_div.click()
#     analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis!""")
    
#     review_submit_button = get_element_by_class("reviewSubmitButton")
#     review_submit_button.click()
#     time.sleep(4)
#     assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' not in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was found in getaway page."
# @pytest.mark.parametrize("driver", [(driver)])
# def test_delete_a_review(driver):
#     driver.get('https://mountain-top.herokuapp.com/profile/')
#     # profile_button= get_element_by_xpath("/html/body/div/div[1]/nav/ul/div/li[1]/a")
#     # profile_button.click()
#     delete_a_review_button = get_element_by_class("delete-review-button")
#     delete_a_review_button.click()
# @pytest.mark.parametrize("driver", [(driver)])
# def test_search(driver):
#     search_input=get_element_by_class("searchBar")
#     search_button=get_element_by_class("search-icon")
#     populate_text_field(search_input, "Loft")
#     search_button.click()
#     time.sleep(4)
#     assert 'Lookout Loft' in driver.page_source, "Lookout Loft was not found in getaway page."
@pytest.mark.parametrize("driver", [(driver)])
def test_create_reservation(driver):
    next_month_button=get_element_by_xpath("/html/body/div/div[2]/div[3]/div[1]/div[2]/div[2]/div/button[2]")
    for i in range(1,20):
        next_month_button.click()
        i+=1
    today=datetime.datetime.today()
    res_start_19_months_from_today = today+relativedelta(months=+19)
    res_end_19_months_and_5_days_from_today = today+relativedelta(months=+19, days=+5)
    start_date_suffix = get_date_suffix(res_start_19_months_from_today)
    end_date_suffix = get_date_suffix(res_end_19_months_and_5_days_from_today)
    aria_label_for_start = res_start_19_months_from_today.strftime(f'Choose %A, %B %-d{start_date_suffix}, %Y')
    aria_label_for_end = res_start_19_months_from_today.strftime(f'Choose %A, %B %-d{end_date_suffix}, %Y')
    
    start_date_ele = get_element_by_css_selector(f'[aria-label={aria_label_for_start}]')
    start_date_ele.click()
    end_date_ele = get_element_by_css_selector(f'[aria-label={aria_label_for_end}]')
    end_date_ele.click()
    res_button=get_element_by_class("resButton")
    
    profile_page_start_date = res_start_19_months_from_today.strftime(f'%b %d, %Y')
    profile_page_end_date = res_end_19_months_and_5_days_from_today.strftime(f'%b %d, %Y')
    
    res_button.click()
    time.sleep(4)
    assert profile_page_start_date in driver.page_source, f'{profile_page_start_date} was not found in profile page.'
    assert profile_page_end_date in driver.page_source, f'{profile_page_end_date} was not found in profile page.'
test_demo_login(driver)
test_create_getaway(driver)
test_demo_edit_getaway(driver)
undo_edit_getaway(driver)
test_delete_getaway(driver)
test_leave_a_review(driver)
test_edit_a_review(driver)
test_delete_a_review(driver)
test_search(driver)
