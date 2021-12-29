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
    startDate = db.Column(db.String, nullable=False)
    endDate = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'getawayId': self.getawayId,
            'userId': self.userId,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt   
        }
