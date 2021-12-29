from flask import Blueprint, request
from flask_login import login_required
from app.forms import ReservationForm
from statistics import mean
from app.models import db, Reservation

from .auth_routes import validation_errors_to_error_messages

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('getaways/<int:id>/reservations/', methods=['POST'])
def post_reservation_for_getaway(id):
    form = ReservationForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newReservation = Reservation( userId=form.data['userId'], startDate=form.data['startDate'], endDate=form.data['endDate'], getawayId=form.data['getawayId'])
        db.session.add(newReservation)
        db.session.commit()
        return newReservation.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@reservation_routes.route('reservations/<int:id>/', methods=['DELETE'])
def delete_reservation_by_id(id):
    reservationToDelete = Reservation.query.get(int(id))
    db.session.delete(reservationToDelete)
    db.session.commit()
    return {'message': f"Deleted reservation {id}"}
