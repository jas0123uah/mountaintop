from .db import db
from sqlalchemy.sql import func
import datetime
class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    getawayId = db.Column(db.Integer,db.ForeignKey(
        "getaways.id"), nullable=False)
    
    getawayRes = db.relationship(
        'Getaway', back_populates="getawayReservation")
    
    
    
    
    userId = db.Column(db.Integer,db.ForeignKey(
        "users.id"), nullable=False)
    reservationUserId = db.relationship(
        'User', back_populates="reservationForUser")
    
    startDate = db.Column(db.String(255), nullable=False)
    endDate = db.Column(db.String(50), nullable=False)
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

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
