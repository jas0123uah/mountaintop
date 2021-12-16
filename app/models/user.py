from .db import db
from .getaway import get_reservations
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

        for reservation in self.getawayReservation:
            res_dict[reservation.id] = {"id":reservation.id,
                                        "getawayId":reservation.getawayId,
                                        "userId":reservation.userId,
                                        "startDate":reservation.startDate,
                                        "endDate":reservation.endDate,
                                        }
  
        return res_dict

    def to_dict(self):
        res_dict = self.get_reservations()
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'profilePictureUrl': self.profilePictureUrl,
            'email': self.email,
            'reservations': res_dict
        }
