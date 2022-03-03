import json, datetime
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from dateutil.relativedelta import *
import datetime
def demo_login(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newLogin = {'email':"demo@aa.io", 'password':'password'}
    return client.post('/api/auth/login', data=json.dumps(newLogin), headers=headers)

def remove_extra_keys_from_dict(dict_to_edit, list_of_keys):
    for key in list_of_keys:
        dict_to_edit.pop(key, None)
    return dict_to_edit

def get_header_and_mimetype():
    return  [{
            'Content-Type': 'application/json',        
        }, 'application/json' ]
def get_latest_reservation_id(reservations):
    latest_res = max(int(k) for k, v in reservations.items())
    return latest_res

def get_startDate_and_endDate_object_from_reservation(latest_res, date_format):
    split_date = str.split(latest_res['startDate'], " ")
    latest_res_start_date = ' '.join(split_date[0:-2])
    res_1_start = datetime.datetime.strptime(latest_res_start_date, date_format)
    split_date = str.split(latest_res['endDate'], " ")
    latest_res_end_date = ' '.join(split_date[0:-2])
    res_1_end = datetime.datetime.strptime(latest_res_end_date, date_format)
    return (res_1_start, res_1_end)

def check_for_error_message(message, driver):
    return message in driver.page_source

def clear_element_field(element):
    element.clear()
def populate_text_field(element, string, driver):
    element.send_keys(string)
    driver.find_element_by_xpath('//html').click()
    
def get_element_by_id(id_string, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, id_string))
    )
    return element
def get_element_by_xpath(id_string, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, id_string))
    )
    return element
def get_element_by_css_selector(selector, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, selector))
    )
    driver.find_element_by_css_selector(selector)
def get_last_element_in_class(class_name, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
    )
    return element[-1]

def get_element_by_class(class_name, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, class_name))
    )
    return element
def get_date_suffix(datetime_obj):
    if 4 <= datetime_obj <= 20 or 24 <= datetime_obj <= 30:
        suffix = "th"
    else:
        suffix = ["st", "nd", "rd"][datetime_obj % 10 - 1]
    return suffix
def analyze_field(id_string, error_message, new_text, driver):
    address = get_element_by_id(id_string, driver)
    clear_element_field(address)
    check_for_error_message(error_message, driver)
    populate_text_field(address, new_text, driver)
def submit_edited_getaway(id_string, driver):
    edit_getaway_button = get_element_by_id(id_string, driver)
    edit_getaway_button.click()
def undo_edit_getaway(driver):
    edit_getaway_button = get_element_by_class("edit-getaway-button")
    edit_getaway_button.click()
    
    analyze_field("address", "Please enter an address.", "653 Hidden Valley Rd" )
    analyze_field("city", "Please enter a city.", "Gatliburg")
    analyze_field("state", "Please enter a state.", "Tennessee")
    analyze_field("bedrooms", "Getaway must have at least 1 bedroom.", "2")
    analyze_field("beds", "Getaway must have at least 1 bed.", "1")
    analyze_field("bathrooms", "Getaway must have at least 1 bathroom.", "4")
    analyze_field("guests", "Getaway must house at least 1 guest.", "1")
    analyze_field("name", "Getaway names should be at least 10 characters.", "Lookout Loft")
    analyze_field("description", "Getaway descriptons must be at least 100 characters.","""Lookout Loft is a brand new luxurious cabin with mountain views that you've been dreaming of! Our cabin is located just 3 miles to downtown Gatlinburg. Designed with a 'slow' pace in mind. Our hope is that you enjoy every part of your stay at our cabin; from enjoying your morning cup of coffee to curling up by the fire as the sun sets over the mountains. Our cabin is a cozy place for friends and family to gather for a memorable stay in the mountains!""")
    analyze_field("price","Getaway must cost at least $100 a night.", "400")
    submit_edited_getaway('edit-getaway-submit-button', driver)

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

def get_start_date_19_months_from_today():
    today=datetime.datetime.today()
    return today+relativedelta(months=+19)
    
def get_end_date_19_months_and_5_days_from_today():
    today=datetime.datetime.today()
    return today+relativedelta(months=+19, days=+5)
    
def get_start_date_20_months_from_today():
    today=datetime.datetime.today()
    return today+relativedelta(months=+20)
    
def get_end_date_20_months_and_5_days_from_today():
    today=datetime.datetime.today()
    return today+relativedelta(months=+20, days=+5)

def create_aria_label_to_search_for_searching_calendar(datetime_obj, date_suffix):
    aria_label = datetime_obj.strftime(f'Choose %A, %B %-d{date_suffix}, %Y')

def get_profile_page_reservation_date_strings(start_datetime_obj, end_datetime_obj):
    return [start_datetime_obj.strftime(f'%b %d, %Y'), end_datetime_obj.strftime(f'%b %d, %Y')]



def get_first_element_in_class(class_name, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
    )
    return element[0]

def get_nth_element_in_class(class_name, n, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
    )
    return element[n-1]
def get_nth_child_of_type(parent, child_type, n):
    all_children_of_type = parent.find_elements_by_tag_name(child_type)
    return all_children_of_type[n-1]
    
    
def get_last_element_in_class(class_name, driver):
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
    )
    return element[-1]

def upload_image(id_string, image_path, driver):
    image_field = get_element_by_id(id_string, driver)
    image_field.send_keys(image_path)

    
def check_or_uncheck_amenity(id_string, driver):
    amenity_check_button = get_element_by_id(id_string, driver)
    amenity_check_button.click()
def get_number_of_elements_in_class(class_name, driver):
    try:
        
        deleteButtons = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, class_name))
        )
        return len(deleteButtons)
    except Exception as e:
        return 0
        