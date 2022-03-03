from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import os
import pytest
from dateutil.relativedelta import *
from ..pytest_helper_functions import *
PATH = "/usr/bin/chromedriver"
#driver=Service(PATH)
#driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver', options=chrome_options)

# caps = {}

# caps['name'] = 'GitHub Actions Example'
# caps['browserName'] = 'Chrome'
# caps['platform'] = 'Windows 10'
# caps['screenResolution'] = '1366x768'
# caps['record_video'] = 'true'


caps=[{
      'os_version': '10',
      'os': 'Windows',
      'browser': 'chrome',
      'browser_version': 'latest',
      'name': 'Parallel Test1', # test name
      'build': 'browserstack-build-1' # Your tests will be organized within this build
      },
      {
      'os_version': '10',
      'os': 'Windows',
      'browser': 'firefox',
      'browser_version': 'latest',
      'name': 'Parallel Test2',
      'build': 'browserstack-build-1'
      },
      {
      'os_version': 'Big Sur',
      'os': 'OS X',
      'browser': 'safari',
      'browser_version': 'latest',
      'name': 'Parallel Test3',
      'build': 'browserstack-build-1'
}]

driver = webdriver.Remote(desired_capabilities = caps, command_executor='https://jayspencer_NfPy0E:7KPgMNB7gprXUJs58PPs@hub-cloud.browserstack.com/wd/hub')

@pytest.mark.parametrize("driver", [(driver)])
def test_demo_login(driver):
    driver.get("https://mountain-top.herokuapp.com/")
    log_out_old_users(driver)
    time.sleep(4)
    myLinks = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "burger"))
    )
    myLinks.click()
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "demo-button-mobile"))
    )
    element.click()
    time.sleep(4)
    assert 'My Getaways' in driver.page_source
def check_for_error_message(message):
    return message in driver.page_source





@pytest.mark.parametrize("driver", [(driver)])
def test_create_getaway(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/getaways/')
    add_getaway_button = get_element_by_id("add-new-getaway-button", driver)
    add_getaway_button.click()
    assert 'Address' in driver.page_source, "Address not in new getaway page"
    assert 'City' in driver.page_source, "City not in new getaway page"
    analyze_field("address", "Please enter an address.", "9798790870987097ytru54", driver )
    analyze_field("city", "Please enter a city.", "Gatlinburg", driver)
    analyze_field("state", "Please enter a state.", "Tennessee", driver)
    analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "2", driver)
    analyze_field("beds", "Getaway must have at least 1 bed.", "1", driver)
    analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "4", driver)
    analyze_field("guests", "Getaway must house at least 1 guest.", "1", driver)
    analyze_field("name", "Getaway names should be at least 10 characters.", "Selenium Test Getaway", driver)
    analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""", driver)
    analyze_field("price","Getaway must cost at least $100 a night.", "400", driver)
    check_or_uncheck_amenity("hottub", driver)
    check_or_uncheck_amenity("wifi", driver)
    check_or_uncheck_amenity("patio", driver)
    check_or_uncheck_amenity("kitchen", driver)
    check_or_uncheck_amenity("fireplace", driver)
    upload_image("img1Upload", "/mnt/c/Users/jaysp/Downloads/testImage1.jpeg", driver)
    upload_image("img2Upload", "/mnt/c/Users/jaysp/Downloads/testImage2.jpeg", driver)
    upload_image("img3Upload", "/mnt/c/Users/jaysp/Downloads/testImage3.jpeg", driver)
    upload_image("img4Upload", "/mnt/c/Users/jaysp/Downloads/testImage4.jpeg", driver)
    upload_image("img5Upload", "/mnt/c/Users/jaysp/Downloads/testImage5.jpeg", driver)
    submit_edited_getaway('create-getaway-submit-button', driver)
    assert 'Selenium Test Getaway' in driver.page_source, "Selenium Test Getaway was found in profile page"
    
    

@pytest.mark.parametrize("driver", [(driver)])
def test_delete_getaway(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/getaways/')
    delete_getaway_button = get_last_element_in_class("delete-getaway-button", driver)
    delete_getaway_button.click()
    assert 'Selenium Testing' not in driver.page_source, "Selenium Testing was found in profile page"



@pytest.mark.parametrize("driver", [(driver)])
def test_leave_a_review(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/previousreservations/')
    leave_a_review_button = get_first_element_in_class("leave-a-review-button", driver)
    leave_a_review_button.click()
    cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[5]", driver)
    cleanliness_rating_div.click()
    communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[5]", driver)
    communication_rating_div.click()
    check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]", driver)
    check_in_div.click()
    accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[5]", driver)
    accuracy_rating_div.click()
    location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[5]", driver)
    location_rating_div.click()
    value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[5]", driver)
    value_rating_div.click()
    analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis! Provident facere ut illo beatae dicta? Commodi, distinctio molestiae reiciendis delectus minus dolorum quaerat deleniti. Qui, veritatis consectetur? Voluptas eum sint natus consectetur provident, labore id rerum animi in molestiae ipsum facere ipsam. Illum itaque quisquam repellat dolor dicta iste veniam quis soluta molestias in. Esse obcaecati natus adipisci commodi assumenda. Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora!""", driver)

    review_submit_button = get_element_by_class("reviewSubmitButton", driver)
    review_submit_button.click()
    time.sleep(4)
    assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was not found in getaway page."


@pytest.mark.parametrize("driver", [(driver)])
def test_edit_a_review(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/previousreservations/')

    edit_a_review_button = get_first_element_in_class("edit-review-button", driver)
    edit_a_review_button.click()
    cleanliness_rating_div = get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[2]/i[4]", driver)
    cleanliness_rating_div.click()
    communication_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[4]/i[4]", driver)
    communication_rating_div.click()
    check_in_div=get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[6]/i[5]", driver)
    check_in_div.click()
    accuracy_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[8]/i[4]", driver)
    accuracy_rating_div.click()
    location_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[10]/i[4]", driver)
    location_rating_div.click()
    value_rating_div= get_element_by_xpath("/html/body/div/div[4]/div/div[2]/div/form/fieldset/div[2]/div[12]/i[4]", driver)
    value_rating_div.click()
    analyze_field('review-text-area', "Review must be at least 100 characters.", """Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repellendus quisquam nulla doloremque cum inventore aspernatur, laborum labore maxime recusandae dicta eligendi aliquam architecto magnam consequuntur accusamus vel consequatur, ex saepe voluptatum consectetur? Voluptates, pariatur perferendis!""", driver)

    review_submit_button = get_element_by_class("reviewSubmitButton", driver)
    review_submit_button.click()
    time.sleep(4)
    assert 'Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora' not in driver.page_source, "Maxime vel suscipit officiis ducimus quis. Veritatis tempore suscipit numquam quod necessitatibus tempora was found in getaway page."


@pytest.mark.parametrize("driver", [(driver)])
def test_delete_a_review(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/previousreservations/')
    original_num_reviews = get_number_of_elements_in_class("delete-review-button", driver)
    
    delete_a_review_button = get_element_by_class("delete-review-button", driver)
    delete_a_review_button.click()
    time.sleep(4)
    new_num_reviews = get_number_of_elements_in_class("delete-review-button", driver)
    assert int(new_num_reviews) == int(original_num_reviews -1) , f'There are {new_num_reviews} delete review buttons on the page when there should be {original_num_reviews - 1}.'

@pytest.mark.parametrize("driver", [(driver)])
def test_search(driver):
    search_input=get_element_by_class("searchBar", driver)
    search_button=get_element_by_class("search-icon", driver)
    populate_text_field(search_input, "Loft", driver)
    search_button.click()
    time.sleep(4)
    assert 'Lookout Loft' in driver.page_source, "Lookout Loft was not found in getaway page."


@pytest.mark.parametrize("driver", [(driver)])
def test_create_reservation(driver):
    driver.get('https://mountain-top.herokuapp.com/profile/upcomingreservations/')
    original_number_of_reservations = get_number_of_elements_in_class("singleRes", driver)
    driver.get('https://mountain-top.herokuapp.com/getaways/1/')
    
    next_month_button=get_element_by_xpath("/html/body/div/div[2]/div[3]/div[1]/div[2]/div[2]/div/button[2]", driver)
    for i in range(1,20):
        next_month_button.click()
        i+=1

    booking_week = get_nth_element_in_class("react-datepicker__week", 2, driver)
    start_date_ele = get_nth_child_of_type(booking_week, "div", 1)
    end_date_ele = get_nth_child_of_type(booking_week, "div", 5)
    start_date_ele.click()
    end_date_ele.click()
    res_button=get_element_by_class("resButton", driver)
    
    res_button.click()
    new_number_of_reservations = get_number_of_elements_in_class("singleRes", driver)
    time.sleep(4)
    assert int(new_number_of_reservations) == int(original_number_of_reservations + 1) , f'There are {new_number_of_reservations}  reservations on the page when there should be {original_number_of_reservations + 1}.'


@pytest.mark.parametrize("driver", [(driver)])
def test_delete_reservation(driver):
    
    driver.get('https://mountain-top.herokuapp.com/profile/upcomingreservations/')
    original_number_of_reservations = get_number_of_elements_in_class("singleRes", driver)

    
    cancel_reservation_button = get_last_element_in_class("cancel-reservation-button", driver)
    cancel_reservation_button.click()
    
    new_number_of_reservations = get_number_of_elements_in_class("singleRes", driver)
    assert int(new_number_of_reservations) == int(original_number_of_reservations - 1) , f'There are {new_number_of_reservations}  reservations on the page when there should be {original_number_of_reservations - 1}.'
