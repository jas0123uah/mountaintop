from flask import Blueprint, request
from flask_login import login_required
from app.forms import ReservationForm
from statistics import mean
from app.models import db, Reservation, User

from .auth_routes import validation_errors_to_error_messages

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('getaways/<int:id>/reservations/', methods=['POST'])
def post_reservation_for_getaway(id):
    form = ReservationForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        userIdToFind=form.data['userId']
        newReservation = Reservation( userId=form.data['userId'], startDate=form.data['startDate'], endDate=form.data['endDate'], getawayId=form.data['getawayId'])
        db.session.add(newReservation)
        db.session.commit()
        user = User.query.get(int(userIdToFind))
        return user.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@reservation_routes.route('reservations/<int:id>/', methods=['PUT'])
def edit_reservation_by_id(id):
    reservationToEdit = Reservation.query.get(int(id))
    
    
    form = ReservationForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        userIdToFind=form.data['userId']
        reservationToEdit.userId = form.data['userId']
        reservationToEdit.startDate = form.data['startDate']
        reservationToEdit.endDate = form.data['endDate']
        reservationToEdit.getawayId = form.data['getawayId']
        db.session.add(reservationToEdit)
        db.session.commit()
        user = User.query.get(int(userIdToFind))
        return user.to_dict()

    else:
        print({'errors': validation_errors_to_error_messages(form.errors)})
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@reservation_routes.route('reservations/<int:id>/', methods=['DELETE'])
def delete_reservation_by_id(id):
    reservationToDelete = Reservation.query.get(int(id))
    userId = reservationToDelete.userId
    db.session.delete(reservationToDelete)
    db.session.commit()
    user = User.query.get(int(userId))
    return user.to_dict()
























# from flask import Blueprint, request
# from flask_login import login_required
# from app.forms import ReservationForm
# from statistics import mean
# from app.models import db, Reservation, User

# from .auth_routes import validation_errors_to_error_messages

# reservation_routes = Blueprint('reservations', __name__)

# @reservation_routes.route('getaways/<int:id>/reservations/', methods=['POST'])
# def post_reservation_for_getaway(id):
#     form = ReservationForm() 
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         userIdToFind=form.data['userId']
#         newReservation = Reservation( userId=form.data['userId'], startDate=form.data['startDate'], endDate=form.data['endDate'], getawayId=form.data['getawayId'])
#         db.session.add(newReservation)
#         db.session.commit()
#         user = User.query.get(int(userIdToFind))
#         return user.to_dict()
#     else:
#         return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# @reservation_routes.route('reservations/<int:id>/', methods=['PUT'])
# def delete_reservation_by_id(id):
#     reservationToEdit = Reservation.query.get(int(id))
    
    
    
#     db.session.delete(reservationToEdit)
#     db.session.commit()
#     return {'message': f"Deleted reservation {id}"}


# @reservation_routes.route('reservations/<int:id>/', methods=['DELETE'])
# def delete_reservation_by_id(id):
#     reservationToDelete = Reservation.query.get(int(id))
#     db.session.delete(reservationToDelete)
#     db.session.commit()
#     return {'message': f"Deleted reservation {id}"}
