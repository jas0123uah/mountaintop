from .db import db
from sqlalchemy.sql import func
from sqlalchemy.orm import backref
import datetime
class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    getawayId = db.Column(db.Integer,db.ForeignKey(
        "getaways.id"), nullable=False)
    getawayRev = db.relationship(
        'Getaway', back_populates="getawayReview")
    
    
    userId = db.Column(db.Integer,db.ForeignKey(
        "users.id"), nullable=False)
    reviewUserId = db.relationship(
        'User', back_populates="reviewForUser")
    
    
    reservationsId = db.Column(db.Integer, db.ForeignKey('reservations.id'))
    reservations = db.relationship("Reservation", back_populates="reviews")
    
    
    reviewText = db.Column(db.Text, nullable=False)
    cleanlinessRating = db.Column(db.Integer, nullable=False)
    communicationRating = db.Column(db.Integer, nullable=False)
    checkinRating = db.Column(db.Integer, nullable=False)
    accuracyRating = db.Column(db.Integer, nullable=False)
    locationRating = db.Column(db.Integer, nullable=False)
    valueRating = db.Column(db.Integer, nullable=False)
    overallRating = db.Column(db.Float, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'getawayId': self.getawayId,
            'reviewText': self.reviewText,
            'cleanlinessRating': self.cleanlinessRating,
            'communicationRating': self.communicationRating,
            'checkinRating': self.checkinRating,
            'accuracyRating': self.accuracyRating,
            'locationRating': self.locationRating,
            'valueRating':self.valueRating,
            'overallRating': self.overallRating,
            'userId': self.userId,
            'userProfilePicture': self.reviewUserId.profilePictureUrl,
            'reservationStartDate':self.reservationReview.startDate,
            'reservationEndDate':self.reservationReview.endDate,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt   
        }
