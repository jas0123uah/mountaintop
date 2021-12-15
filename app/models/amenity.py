from .db import db
from sqlalchemy.sql import func
import datetime
class Amenity(db.Model):
    __tablename__ = 'amenities'
    id = db.Column(db.Integer, primary_key=True)
    getawayId = db.Column(db.Integer,db.ForeignKey(
        "getaways.id"), nullable=False)
    getawayAmenity = db.relationship(
        'Getaway', back_populates="getawayAme")
    amenity = db.Column(db.String(50), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'getawayId': self.getawayId,
            'amenity': self.amenity,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt   
        }
