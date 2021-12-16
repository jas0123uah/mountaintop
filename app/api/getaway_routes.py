import re
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import GetawayForm

from app.models import db, Getaway
#from app.forms import NewRestaurant, RestaurantOwnerReservationForm, CustomerReservationForm, EditRestaurant

from .auth_routes import validation_errors_to_error_messages

getaway_routes = Blueprint('getaways', __name__)

@getaway_routes.route('/')
def get_most_recent_getaways():
    recent_getaways = db.session.query(Getaway).order_by(Getaway.id.desc()).limit(5)
    return {'getaways': [getaway.to_dict() for getaway in recent_getaways]}

@getaway_routes.route('/<int:id>/')
def get_getaway_by_id(id):
    getawayToGet = Getaway.query.get(int(id))
    return {'currentGetaway': getawayToGet.to_dict() }

@getaway_routes.route('/<int:id>/', methods=['PUT'])
def edit_getaway_by_id(id):
    getawayToEdit = Getaway.query.get(int(id))
    form = GetawayForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        getawayToEdit.userId = form.data['userId']
        getawayToEdit.address = form.data['address']
        getawayToEdit.city = form.data['city']
        getawayToEdit.state = form.data['state']
        getawayToEdit.country = form.data['country']
        getawayToEdit.latitude = form.data['latitude']
        getawayToEdit.longitude = form.data['longitude']
        getawayToEdit.name = form.data['name']
        getawayToEdit.description = form.data['description']
        getawayToEdit.price = form.data['price']
        getawayToEdit.numGuests = form.data['numGuests']
        getawayToEdit.numBedrooms = form.data['numBedrooms']
        getawayToEdit.numBeds = form.data['numBeds']
        getawayToEdit.numBaths = form.data['numBaths']
        getawayToEdit.description = form.data['description']
        db.session.commit()
        return getawayToEdit.to_dict()
    else:

        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@getaway_routes.route('/<int:id>/', methods=['DELETE'])
def delete_getaway_by_id(id):
    restaurantToDelete = Getaway.query.get(int(id))
    db.session.delete(restaurantToDelete)
    db.session.commit()
    return {'message': f"Deleted getaway {id}"}
