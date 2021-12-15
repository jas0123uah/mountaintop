from .db import db
import datetime
from sqlalchemy.sql import func
class Getaway(db.Model):
    __tablename__ = 'getaways'
    id = db.Column(db.Integer, primary_key=True)

    userId = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    userGetaway = db.relationship(
        'User', back_populates="getaway")
    getawayReservation = db.relationship(
        'Reservation', back_populates="getawayRes")
    
    
    getawayReview = db.relationship(
        'Review', back_populates="getawayRev")
    
    getawayImg = db.relationship(
        'Image', back_populates="getawayImage")

    address = db.Column(db.String(500), nullable=False)
    city = db.Column(db.String(285), nullable=False)
    state = db.Column(db.String(285), nullable=False)
    country = db.Column(db.String(285), nullable=False, default="United States")
    
    latitude = db.Column(db.Float, default=False)
    longitude = db.Column(db.Float, nullable=False)

    name = db.Column(db.String(285), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt}
