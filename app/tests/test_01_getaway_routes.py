import pytest, json, requests, os
from wtforms import IntegerField, StringField, SubmitField, TextAreaField
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_wtf import FlaskForm
from dotenv import load_dotenv
from ..models import Getaway
from ..models import db
from flask import jsonify
from werkzeug.exceptions import BadRequest
load_dotenv()

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = True
    app.config["DEBUG"] = False

    with app.test_client() as client:
        yield client

def test_browse_getaways_returns_results(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "address" in first_getaway.keys(), "the key address was not found in the response dictionary's keys."
    assert "amenities" in first_getaway.keys(), "the key amenities was not found in the response dictionary's keys."
    assert "city" in first_getaway.keys(), "the key city was not found in the response dictionary's keys."
    assert "country" in first_getaway.keys(), "the key country was not found in the response dictionary's keys."
    assert "createdAt" in first_getaway.keys(), "the key createdAt was not found in the response dictionary's keys."
    assert "description" in first_getaway.keys(), "the key description was not found in the response dictionary's keys."
    assert "hostFirstName" in first_getaway.keys(), "the key hostFirstName was not found in the response dictionary's keys."
    assert "hostProfilePicture" in first_getaway.keys(), "the key hostProfilePicture was not found in the response dictionary's keys."
    assert "name" in first_getaway.keys(), "the key name was not found in the response dictionary's keys."
    assert "numBaths" in first_getaway.keys(), "the key numBaths was not found in the response dictionary's keys."
    assert "numBedrooms" in first_getaway.keys(), "the key numBedrooms was not found in the response dictionary's keys."
    assert "numBeds" in first_getaway.keys(), "the key numBeds was not found in the response dictionary's keys."
    assert "numGuests" in first_getaway.keys(), "the key numGuests was not found in the response dictionary's keys."
    assert "price" in first_getaway.keys(), "the key price was not found in the response dictionary's keys."
    assert "reservations" in first_getaway.keys(), "the key reservations was not found in the response dictionary's keys."
    assert "state" in first_getaway.keys(), "the key state was not found in the response dictionary's keys."
    assert "userId" in first_getaway.keys(), "the key userId was not found in the response dictionary's keys."


def test_post_getaway(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "rrrrrrrrrr",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    print(r.headers.get("Content-Type"), "LOOK JAY")
    print(r.__dict__.keys(), "KEYS")
    print(r.status_code, "STATUS_CODE")
    print(client, "CLIENT")
    print(client.__dict__, "CLIENT DICT")
    print(type(client), "TYPE CLIENT")

    assert r.headers.get("Content-Type") == mimetype



def test_edit_getaway(client):
    from app import app
    db.init_app(app)
    with app.app_context():
        fake_post = db.session.query(Getaway).filter(Getaway.city=="fakeCity").first()
        fake_post.address = "AN ADDRESS"
        fake_post = fake_post.to_dict()
        for key in ["hostProfilePicture", 'hostFirstName', 'reservations', 'amenities', 'images', 'createdAt', 'updatedAt']:
            fake_post.pop(key)
            
        #cookies = {'csrf_token': generate_csrf()}
        fake_post_id = fake_post["id"]
        fake_post_json = json.dumps(fake_post)
        print(client.__dict__.keys(), "KEYSSSSSS FOR CLIENT")
        mimetype = 'application/json'
        headers = {
            'Content-Type': mimetype,        
        }
        x = client.put(f'http://127.0.0.1:5000/api/getaways/{fake_post_id}/', headers=headers, data=fake_post_json)
        
        x = client.put(f'http://127.0.0.1:5000/api/getaways/{fake_post_id}/', headers=headers, data=fake_post_json)
        assert x.status_code == 200
        assert x.headers['Content-Type']==mimetype

def test_delete_getaway():
    from app import app
    db.init_app(app)
    with app.app_context():
        fake_post = db.session.query(Getaway).filter(Getaway.city=="fakeCity").all()
        mimetype = 'application/json'
        for post in fake_post:
            x = requests.delete(f'http://127.0.0.1:5000/api/getaways/{post.id}/')
            assert x.headers['Content-Type']==mimetype

def test_no_null_address(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    
    print(r, "RESPONSE")
    print(r.__dict__, "DICTTTT")
    print(r.data, "data")
    print(r.response, "resp")
    res_dict = json.loads(r.data.decode('utf-8'))
    print(res_dict, "DICTT")
    print(res_dict.keys(), "KEYS")
    assert res_dict['errors'][0] == 'address : This field is required.'

def test_no_null_city(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "gjhg",
            "city" : "",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'city : This field is required.'

def test_no_null_state(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'state : This field is required.'

def test_no_null_country(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'country : This field is required.'
    
def test_no_null_latitude(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'latitude : This field is required.'
    


def test_no_null_longitude(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'longitude : This field is required.'
    
def test_no_null_name(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "",
            "price" : "100",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'name : This field is required.'
    

def test_no_null_price(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'price : This field is required.'

def test_price_is_num(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "p",
            "numGuests" : "4",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'price : This field is required.'


def test_no_null_num_guests(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'numGuests : This field is required.'


def test_no_null_num_bedrooms(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "8",
            "numBedrooms" : "",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'numBedrooms : This field is required.'


def test_no_null_num_beds(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "8",
            "numBedrooms" : "3",
            "numBeds" : "",
            "numBaths" : "2",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'numBeds : This field is required.'


def test_no_null_num_baths(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "9",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "",
            "description" : "fakeDescription"}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'numBaths : This field is required.'
    
def test_no_null_description(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,

    }
    newGetaway = {"userId" : "1",
            "address" : "fakeAddress",
            "city" : "fakeCity",
            "state" : "fakeState",
            "country" : "fakeCountry",
            "latitude" : "1.0",
            "longitude" : "1.1",
            "name" : "fakeName",
            "price" : "100",
            "numGuests" : "9",
            "numBedrooms" : "3",
            "numBeds" : "3",
            "numBaths" : "2",
            "description" : ""}
    try:
        r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
        assert r.content_type == mimetype
    except BaseException as e:
            print(e, "THIS IS E")
    r = client.post('/api/getaways/', data=json.dumps(newGetaway), headers=headers)
    res_dict = json.loads(r.data.decode('utf-8'))
    assert res_dict['errors'][0] == 'description : This field is required.'
