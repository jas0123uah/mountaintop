import json, datetime
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
