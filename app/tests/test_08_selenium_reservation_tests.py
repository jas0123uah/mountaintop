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
def test_create_reservation(driver):
    next_month_button=get_element_by_xpath("/html/body/div/div[2]/div[3]/div[1]/div[2]/div[2]/div/button[2]")
    for i in range(1,20):
        next_month_button.click()
        i+=1
    res_start_19_months_from_today = get_start_date_19_months_from_today()
    res_end_19_months_and_5_days_from_today = get_end_date_19_months_and_5_days_from_today()
    start_date_suffix = get_date_suffix(res_start_19_months_from_today)
    end_date_suffix = get_date_suffix(res_end_19_months_and_5_days_from_today)
    aria_label_for_start =    create_aria_label_to_search_for_searching_calendar(res_start_19_months_from_today, start_date_suffix ) 
    #res_start_19_months_from_today.strftime(f'Choose %A, %B %-d{start_date_suffix}, %Y')
    
    aria_label_for_end = create_aria_label_to_search_for_searching_calendar(res_end_19_months_and_5_days_from_today, end_date_suffix ) 
    
    aria_label_for_end = res_start_19_months_from_today.strftime(f'Choose %A, %B %-d{end_date_suffix}, %Y')
    
    start_date_ele = get_element_by_css_selector(f'[aria-label={aria_label_for_start}]')
    start_date_ele.click()
    end_date_ele = get_element_by_css_selector(f'[aria-label={aria_label_for_end}]')
    end_date_ele.click()
    res_button=get_element_by_class("resButton")
    profile_page_start_date, profile_page_end_date = get_profile_page_reservation_date_strings(res_start_19_months_from_today, res_end_19_months_and_5_days_from_today )
    # profile_page_start_date = res_start_19_months_from_today.strftime(f'%b %d, %Y')
    # profile_page_end_date = res_end_19_months_and_5_days_from_today.strftime(f'%b %d, %Y')
    
    res_button.click()
    time.sleep(4)
    assert profile_page_start_date in driver.page_source, f'{profile_page_start_date} was not found in profile page.'
    assert profile_page_end_date in driver.page_source, f'{profile_page_end_date} was not found in profile page.'

@pytest.mark.parametrize("driver", [(driver)])
def test_delete_reservation(driver):
    cancel_reservation_button = get_elements_by_class("cancel-reservation-button")
    
    deleted_reservation_start_date = get_start_date_20_months_from_today()
    
    deleted_reservation_end_date = get_end_date_20_months_and_5_days_from_today()
    deleted_reservation_start_date_string, deleted_reservation_end_date_string = get_profile_page_reservation_date_strings(deleted_reservation_start_date, deleted_reservation_end_date)
    assert deleted_reservation_start_date_string in driver.page_source, f'{deleted_reservation_start_date_string} was not found in the profile page before clicking cancel reservation button.'
    
    assert deleted_reservation_end_date_string in driver.page_source, f'{deleted_reservation_end_date_string} was not found in the profile page before clicking cancel reservation button.'
    
    cancel_reservation_button.click()
    time.sleep(4)
    
    assert deleted_reservation_start_date_string in driver.page_source, f'{deleted_reservation_start_date_string} was found in the profile page after clicking cancel reservation button.'
    
    assert deleted_reservation_end_date_string in driver.page_source, f'{deleted_reservation_end_date_string} was found in the profile page after clicking cancel reservation button.'
    
    