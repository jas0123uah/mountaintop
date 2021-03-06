from .db import db
from sqlalchemy.sql import func
import datetime
class Image(db.Model):
    __tablename__ = 'images'
    id = db.Column(db.Integer, primary_key=True)
    getawayId = db.Column(db.Integer,db.ForeignKey(
        "getaways.id"), nullable=False)
    getawayImage = db.relationship(
        'Getaway', back_populates="getawayImg")
    url = db.Column(db.Text, nullable=False)
    imageNumber = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'getawayId': self.getawayId,
            'url': self.url,
            'imageNumber': self.imageNumber,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt   
        }
