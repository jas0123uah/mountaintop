import pytest, json
import datetime
from dotenv import load_dotenv
from ..models import Reservation
from ..models import db
load_dotenv()
from app import app

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = True
    app.config["DEBUG"] = False

    with app.test_client() as client:
        yield client

def test_book_reservation_returns_user(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    startDate = datetime.date.today() + datetime.timedelta(days=5000)
    startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
    endDate = datetime.date.today() + datetime.timedelta(days=5005)
    endDate = endDate.strftime("%Y-%m-%d") + " 05:00:00"
    newReservation = {"userId" : "1",
            "startDate" : startDate,
            "endDate" : endDate,
            "getawayId": "4",}
    r = client.post("/api/getaways/4/reservations/", data=json.dumps(newReservation), headers=headers)
    r = client.post("/api/getaways/4/reservations/", data=json.dumps(newReservation), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    reservations = res_dict['reservations']
    latest_res = max(int(k) for k, v in reservations.items())
    latest_res = reservations[str(latest_res)]
    split_date = str.split(latest_res['startDate'], " ")
    latest_res_start_date = ' '.join(split_date[0:-2])
    res_1_start = datetime.datetime.strptime(latest_res_start_date, "%a, %d %b %Y")
    
    
    
    split_date = str.split(latest_res['endDate'], " ")
    latest_res_end_date = ' '.join(split_date[0:-2])
    res_1_end = datetime.datetime.strptime(latest_res_end_date, "%a, %d %b %Y")
    
    
    
    res2_start_date = str.split(newReservation['startDate'])[0]
    res2_start_date = datetime.datetime.strptime(res2_start_date, "%Y-%m-%d")
    
    
    res2_end_date = str.split(newReservation['endDate'])[0]
    res2_end_date = datetime.datetime.strptime(res2_end_date, "%Y-%m-%d")


    assert res_1_start.strftime("%Y-%m-%d")== res2_start_date.strftime("%Y-%m-%d")
    assert res_1_end.strftime("%Y-%m-%d")== res2_end_date.strftime("%Y-%m-%d")        

def test_edit_reservation(client):
    db.init_app(app)
    with app.app_context():
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
        mimetype = 'application/json'
        headers = {
            'Content-Type': mimetype,        
        }
        x = client.put(f'http://127.0.0.1:5000/api/reservations/{fake_post_id}/', headers=headers, data=fake_post_json)
        
        x = client.put(f'http://127.0.0.1:5000/api/reservations/{fake_post_id}/', headers=headers, data=fake_post_json)
        assert x.status_code == 200
        assert x.headers['Content-Type']==mimetype

def test_delete_reservation(client):
    db.init_app(app)
    with app.app_context():
        startDate = datetime.date.today() + datetime.timedelta(days=5001)
        startDate = startDate.strftime("%Y-%m-%d") + " 05:00:00"
        fake_post = db.session.query(Reservation).filter(Reservation.startDate==startDate).first()
        fake_post_id = fake_post.id
        mimetype = 'application/json'
        headers = {
            'Content-Type': mimetype,        
        }
        x = client.delete(f'http://127.0.0.1:5000/api/reservations/{fake_post_id}/', headers=headers)
        assert x.status_code == 200
        assert x.headers['Content-Type']==mimetype
