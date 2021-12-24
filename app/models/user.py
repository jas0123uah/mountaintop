from .db import db
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    getaway = db.relationship(
        'Getaway', back_populates="userGetaway", cascade="all, delete-orphan")
    reservationForUser = db.relationship(
        'Reservation', back_populates="reservationUserId", cascade="all, delete-orphan")
    
    reviewForUser = db.relationship(
        'Review', back_populates="reviewUserId", cascade="all, delete-orphan")
    
    
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    profilePictureUrl = db.Column(db.String(500), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    def get_reservations(self):
        res_dict={}

        for reservation in self.reservationForUser:
            res_dict[reservation.id] = {"id":reservation.id,
                                        "getawayId":reservation.getawayId,
                                        "userId":reservation.userId,
                                        "startDate":reservation.startDate,
                                        "endDate":reservation.endDate,
                                        }
  
        return res_dict
    def get_getaways(self):
        get_dict={}

        for _getaway in self.getaway:
            get_dict[_getaway.id] = {'id': self.id,
            'userId': _getaway.userId,
            'address': _getaway.address,
            'city': _getaway.city,
            'state': _getaway.state,
            'country': _getaway.country,
            'latitude': _getaway.latitude,
            'longitude': _getaway.longitude,
            'name': _getaway.name,
            'price': _getaway.price,
            'description': _getaway.description,
            'numGuests': _getaway.numGuests,
            'numBedrooms': _getaway.numBedrooms,
            'numBeds': _getaway.numBeds,
            'numBaths': _getaway.numBaths}
  
        return get_dict


    def to_dict(self):
        res_dict = self.get_reservations()
        get_dict = self.get_getaways()
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'profilePictureUrl': self.profilePictureUrl,
            'email': self.email,
            'reservations': res_dict,
            'getaways': get_dict
        }
