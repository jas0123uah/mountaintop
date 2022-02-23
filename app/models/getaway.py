from .db import db
import datetime
from sqlalchemy.sql import func

from sqlalchemy.orm.collections import (MappedCollection,
                                        _SerializableAttrGetter,
                                        collection,
                                        _instrument_class)
class Getaway(db.Model):
    __tablename__ = 'getaways'
    id = db.Column(db.Integer, primary_key=True)

    userId = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    userGetaway = db.relationship(
        'User', back_populates="getaway")
    getawayReservation = db.relationship(
        'Reservation', back_populates="getawayRes", cascade="all, delete-orphan")
    getawayAme = db.relationship(
        'Amenity', back_populates="getawayAmenity", cascade="all, delete-orphan")
    
    
    getawayReview = db.relationship(
        'Review', back_populates="getawayRev", cascade="all, delete-orphan")
    
    getawayImg = db.relationship(
        'Image', back_populates="getawayImage", cascade="all, delete-orphan")

    address = db.Column(db.String(500), nullable=False)
    city = db.Column(db.String(285), nullable=False)
    state = db.Column(db.String(285), nullable=False)
    country = db.Column(db.String(285), nullable=False, default="United States")
    
    latitude = db.Column(db.Float, default=False)
    longitude = db.Column(db.Float, nullable=False)

    name = db.Column(db.String(285), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    numGuests = db.Column(db.Integer, nullable=False)
    numBeds = db.Column(db.Integer, nullable=False)
    numBaths = db.Column(db.Float, nullable=False)
    numBedrooms = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updatedAt = db.Column(
        db.DateTime, default=datetime.datetime.utcnow, onupdate=func.now())

    def get_reservations(self):
        res_dict={}

        for reservation in self.getawayReservation:
            res_dict[reservation.id] = {"id":reservation.id,
                                        "getawayId":reservation.getawayId,
                                        "userId":reservation.userId,
                                        'userProfilePicture': reservation.reservationUserId.profilePictureUrl,
                                        'userFirstName': reservation.reservationUserId.firstName,
                                        "startDate":reservation.startDate,
                                        "endDate":reservation.endDate,
                                        "reviewId":None,
                                        "reviewText":None,
                                        "cleanlinessRating":None,
                                        "communicationRating":None,
                                        "checkinRating":None,
                                        "accuracyRating":None,
                                        "locationRating":None,
                                        "valueRating":None,
                                        "overallRating":None,
                                        }
            if reservation.reviews is not None:
                dict_to_edit = res_dict[reservation.id]
                dict_to_edit['reviewId'] = reservation.reviews.id
                dict_to_edit['reviewText'] = reservation.reviews.reviewText
                dict_to_edit['cleanlinessRating'] = reservation.reviews.cleanlinessRating
                dict_to_edit['communicationRating'] = reservation.reviews.communicationRating
                dict_to_edit['checkinRating'] = reservation.reviews.checkinRating
                dict_to_edit['accuracyRating'] = reservation.reviews.accuracyRating
                dict_to_edit['locationRating'] = reservation.reviews.locationRating
                dict_to_edit['valueRating'] = reservation.reviews.valueRating
                dict_to_edit['overallRating'] = reservation.reviews.overallRating
                res_dict[reservation.id] = dict_to_edit
            
            
  
        return res_dict
    
    def get_reviews(self):
        rev_dict={}
        for review in self.getawayReview:
            rev_dict[review.id] = {"id":review.id,
                                        "getawayId":review.getawayId,
                                        "reviewText":review.reviewText,
                                        "cleanlinessRating":review.cleanlinessRating,
                                        "communicationRating":review.communicationRating,
                                        "checkinRating":review.checkinRating,
                                        "accuracyRating":review.accuracyRating,
                                        "locationRating":review.locationRating,
                                        "valueRating":review.valueRating,
                                        "overallRating":review.overallRating,
                                        'userProfilePicture': review.reviewUserId.profilePictureUrl,
                                        }
        return rev_dict
    
    def get_images(self):
        img_dict={}
        for image in self.getawayImg:
            img_dict[image.id] = {"id":image.id,
                                        "getawayId":image.getawayId,
                                        "url":image.url,
                                        "imageNumber":image.imageNumber
                                        }
        return img_dict
    
    def get_amenities(self):
        ame_dict={}
        for amenity in self.getawayAme:
            ame_dict[amenity.id] = {"id":amenity.id,
                                        "getawayId":amenity.getawayId,
                                        "amenity":amenity.amenity,
                                        }
        return ame_dict
    def get_host_info(self):
        host_dict={}
        
        return host_dict
    
    def to_dict(self):
        res_dict = self.get_reservations() 
        rev_dict = self.get_reviews()
        img_dict = self.get_images()
        ame_dict = self.get_amenities()
        return {
            'id': self.id,
            'userId': self.userId,
            'hostFirstName': self.userGetaway.firstName,
            'hostProfilePicture':self.userGetaway.profilePictureUrl,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'numGuests': self.numGuests,
            'numBedrooms': self.numBedrooms,
            'numBeds': self.numBeds,
            'numBaths': self.numBaths,
            'reservations': res_dict,
            #'reviews': rev_dict,
            'amenities':ame_dict,
            'images':img_dict,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt}
