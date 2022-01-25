import datetime
import pytest, json
import datetime
from dotenv import load_dotenv
from ..models import Review
from ..models import db
load_dotenv()
from ..pytest_helper_functions import demo_login, remove_extra_keys_from_dict, get_header_and_mimetype, get_latest_reservation_id
from app import app

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = True
    app.config["DEBUG"] = False

    with app.test_client() as client:
        yield client
def test_review_post_returns_updated_user(client):
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
    latest_res = get_latest_reservation_id(reservations)
    newReview = {'reviewText': 'I love this place!', 'cleanlinessRating': '5', 'communicationRating': '5', 'checkinRating':'5', 'accuracyRating':'5', 'locationRating': '5', 'valueRating' :'5', 'overallRating':'5', 'reservationsId':str(latest_res), 'userId': '1', 'getawayId': '4'}
    revPost  = client.post(f'/api/getaways/4/reviews/', data=json.dumps(newReview), headers=headers)
    
    res_dict = json.loads(revPost.data.decode('utf-8'))
    new_review = res_dict['4']['reservations'][str(latest_res)]
    assert new_review['reviewText'] == 'I love this place!'       


def test_review_edit_returns_updated_user(client):
    db.init_app(app)
    with app.app_context():
        reviewText= 'I love this place!'
        fake_rev = db.session.query(Review).filter(Review.reviewText==reviewText).first()
        fake_rev.reviewText = 'This place is great!'
        revId = fake_rev.id
        headers, mimetype = get_header_and_mimetype()
        editedRev = {
            'id': fake_rev.id,
            'getawayId':fake_rev.getawayId,
            'reviewText':'This place is great!',
            'cleanlinessRating':fake_rev.cleanlinessRating,
            'communicationRating':fake_rev.communicationRating,
            'checkinRating': fake_rev.checkinRating ,
            'accuracyRating': fake_rev.accuracyRating,
            'locationRating':fake_rev.locationRating,
            'valueRating':fake_rev.valueRating,
            'overallRating':fake_rev.overallRating,
            'reservationsId':fake_rev.reservationsId,
            'userId': '1'
        }
        r = demo_login(client)
        r = client.put(f'/api/reviews/{revId}/', data=json.dumps(editedRev), headers=headers)
        res_dict = json.loads(r.data.decode('utf-8'))
        reservations = res_dict['4']['reservations']
        latest_res = get_latest_reservation_id(reservations)  
        res_dict = json.loads(r.data.decode('utf-8'))
        new_review = reservations[str(latest_res)]
        assert new_review['reviewText'] == 'This place is great!'
        
def test_delete_review_returns_updated_user(client):
    db.init_app(app)
    with app.app_context():
        reviewText= 'This place is great!'
        fake_rev = db.session.query(Review).filter(Review.reviewText==reviewText).first()
        revId = fake_rev.id
        headers, mimetype = get_header_and_mimetype()
        r = client.delete(f'/api/reviews/{revId}/', headers=headers)
        res_dict = json.loads(r.data.decode('utf-8'))
        reservations = res_dict['4']['reservations']
        latest_res = get_latest_reservation_id(reservations)   
        res_dict = json.loads(r.data.decode('utf-8'))
        new_review = reservations[str(latest_res)]
        assert new_review['reviewText'] == None
