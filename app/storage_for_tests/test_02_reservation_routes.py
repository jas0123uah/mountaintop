import pytest, json
import datetime
from dotenv import load_dotenv
from ..models import Reservation
from ..models import db
load_dotenv()
from app import app
from ..pytest_helper_functions import demo_login, remove_extra_keys_from_dict, get_header_and_mimetype, get_latest_reservation_id, get_startDate_and_endDate_object_from_reservation
@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = True
    app.config["DEBUG"] = False

    with app.test_client() as client:
        yield client

def test_book_reservation_returns_user(client):
    headers, mimetype = get_header_and_mimetype()
    startDate = datetime.date.today() + datetime.timedelta(days=5000)
    startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
    endDate = datetime.date.today() + datetime.timedelta(days=5005)
    endDate = endDate.strftime("%Y-%m-%d") + " 05:00:00"
    newReservation = {"userId" : "1",
            "startDate" : startDate,
            "endDate" : endDate,
            "getawayId": "4",}
    r = demo_login(client)
    r = client.post("/api/getaways/4/reservations/", data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    reservations = res_dict['reservations']
    latest_res_id = get_latest_reservation_id(reservations)
    latest_res = reservations[str(latest_res_id)]
    split_date = str.split(latest_res['startDate'], " ")
    latest_res_start_date = ' '.join(split_date[0:-2])
    #res_1_start = datetime.datetime.strptime(latest_res_start_date, "%a, %d %b %Y")
    
    
    
    split_date = str.split(latest_res['endDate'], " ")
    latest_res_end_date = ' '.join(split_date[0:-2])
    date_format_1 = "%a, %d %b %Y"
    
    date_format_2 = "%Y-%m-%d"
    res_1_start, res_1_end = get_startDate_and_endDate_object_from_reservation(latest_res, date_format_1)
    
    
    
    
    res2_start_date = str.split(newReservation['startDate'])[0]
    res2_start_date = datetime.datetime.strptime(res2_start_date, "%Y-%m-%d") #datetimeobj
    
    
    res2_end_date = str.split(newReservation['endDate'])[0]
    res2_end_date = datetime.datetime.strptime(res2_end_date, "%Y-%m-%d")


    assert res_1_start.strftime("%Y-%m-%d")== res2_start_date.strftime("%Y-%m-%d")
    assert res_1_end.strftime("%Y-%m-%d")== res2_end_date.strftime("%Y-%m-%d")        

def test_edit_reservation(client):
    db.init_app(app)
    with app.app_context():
        headers, mimetype = get_header_and_mimetype()
        startDate = datetime.date.today() + datetime.timedelta(days=5000)
        startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
        fake_post = db.session.query(Reservation).filter(Reservation.startDate==startDate).first()
        startDate = datetime.date.today() + datetime.timedelta(days=5001)
        startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
        fake_post.startDate = startDate
        
        
        endDate = datetime.date.today() + datetime.timedelta(days=5020)
        endDate = endDate.strftime("%Y-%m-%d") + " 05:00:00"
        fake_post.endDate = endDate
        
        
        fake_post_id = fake_post.id
        fake_post_dict={'getawayId': fake_post.getawayId,'userId':fake_post.userId, 'startDate':fake_post.startDate, 'endDate':fake_post.endDate}
        fake_post_json = json.dumps(fake_post_dict)
        
        x = demo_login(client)
        
        x = client.put(f'http://127.0.0.1:5000/api/reservations/{fake_post_id}/', headers=headers, data=fake_post_json)
        assert x.status_code == 200
        assert x.headers['Content-Type']==mimetype

def test_delete_reservation(client):
    db.init_app(app)
    with app.app_context():
        headers, mimetype = get_header_and_mimetype()
        startDate = datetime.date.today() + datetime.timedelta(days=5001)
        startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
        fake_post = db.session.query(Reservation).filter(Reservation.startDate==startDate).first()
        fake_post_id = fake_post.id
        x = client.delete(f'http://127.0.0.1:5000/api/reservations/{fake_post_id}/', headers=headers)
        assert x.status_code == 200
        assert x.headers['Content-Type']==mimetype

def test_no_null_reservation_user_id(client):
    headers, mimetype = get_header_and_mimetype()
    newReservation = {"userId" : "",
            "getawayId" : "4",
            "startDate" : "2035-10-03 05:00:00",
            "endDate" : "2035-10-08 05:00:00"}

    r = demo_login(client)
    r = client.post('/api/getaways/4/reservations/', data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'userId : This field is required.'

def test_no_null_reservation_getaway_id(client):
    headers, mimetype = get_header_and_mimetype()
    newReservation = {"userId" : "1",
            "getawayId" : "",
            "startDate" : "2035-10-03 05:00:00",
            "endDate" : "2035-10-08 05:00:00"}

    r = demo_login(client)
    r = client.post('/api/getaways/4/reservations/', data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    print(res_dict['errors'], "ERRORS 137")
    assert res_dict['errors'][0] == 'getawayId : This field is required.'

def test_no_null_reservation_start_date(client):
    headers, mimetype = get_header_and_mimetype()
    newReservation = {"userId" : "1",
            "getawayId" : "4",
            "startDate" : "",
            "endDate" : "2035-10-08 05:00:00"}
    r = demo_login(client)
    r = client.post('/api/getaways/4/reservations/', data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'startDate : This field is required.'


def test_no_null_reservation_end_date(client):
    headers, mimetype = get_header_and_mimetype()
    newReservation = {"userId" : "1",
            "getawayId" : "4",
            "startDate" : "2035-10-03 05:00:00",
            "endDate" : ""}

    r = demo_login(client)
    r = client.post('/api/getaways/4/reservations/', data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'endDate : This field is required.'
