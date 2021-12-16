import re
from flask import Blueprint, jsonify, request
from flask_login import login_required


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
