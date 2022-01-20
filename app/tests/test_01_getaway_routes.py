import pytest, json
from wtforms import IntegerField, StringField, SubmitField, TextAreaField
from flask_wtf import FlaskForm
from dotenv import load_dotenv
load_dotenv()

@pytest.fixture
def client():
    from app import app
    app.config["TESTING"] = True
    app.config["WTF_CSRF_ENABLED"] = False
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
    assert "address" in first_getaway.keys(), "the key address was not found in the response dictionary's keys"
    assert "amenities" in first_getaway.keys(), "the key amenities was not found in the response dictionary's keys"
    assert "address" in first_getaway.keys(), "the key address was not found in the response dictionary's keys"

def test_browse_getaways_results_has_key_address(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "address" in first_getaway.keys(), "the key address was not found in the response dictionary's keys."
    
def test_browse_getaways_results_has_key_amenities(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "amenities" in first_getaway.keys(), "the key amenities was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_city(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "city" in first_getaway.keys(), "the key city was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_country(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "country" in first_getaway.keys(), "the key country was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_createdAt(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "createdAt" in first_getaway.keys(), "the key createdAt was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_description(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "description" in first_getaway.keys(), "the key description was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_hostFirstName(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "hostFirstName" in first_getaway.keys(), "the key hostFirstName was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_hostProfilePicture(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "hostProfilePicture" in first_getaway.keys(), "the key hostProfilePicture was not found in the response dictionary's keys."
def test_browse_getaways_results_has_key_name(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "name" in first_getaway.keys(), "the key name was not found in the response dictionary's keys."
    
def test_browse_getaways_results_has_key_numBaths(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "numBaths" in first_getaway.keys(), "the key numBaths was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_numBedrooms(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "numBedrooms" in first_getaway.keys(), "the key numBedrooms was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_numBeds(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "numBeds" in first_getaway.keys(), "the key numBeds was not found in the response dictionary's keys."
    
def test_browse_getaways_results_has_key_numGuests(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "numGuests" in first_getaway.keys(), "the key numGuests was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_price(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "price" in first_getaway.keys(), "the key price was not found in the response dictionary's keys."
def test_browse_getaways_results_has_key_reservations(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "reservations" in first_getaway.keys(), "the key reservations was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_state(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "state" in first_getaway.keys(), "the key state was not found in the response dictionary's keys."

def test_browse_getaways_results_has_key_userId(client):
    r = client.get("/api/getaways/")
    res_dict = json.loads(r.data.decode('utf-8'))
    
    assert "1" in res_dict.keys()
    first_getaway=res_dict["1"]
    print(res_dict.keys())
    assert r.status_code == 200
    assert "userId" in first_getaway.keys(), "the key userId was not found in the response dictionary's keys."