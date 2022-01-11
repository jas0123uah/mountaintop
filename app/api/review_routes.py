import re
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import ReviewForm
from statistics import mean
from app.models import db, Review, Getaway

from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

@review_routes.route('getaways/<int:id>/reviews/', methods=['POST'])
def post_review_for_getaway(id):
    form = ReviewForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newReview = Review(getawayId = form.data['getawayId'], reviewText = form.data['reviewText'], cleanlinessRating = form.data['cleanlinessRating'], communicationRating = form.data['communicationRating'], checkinRating = form.data['checkinRating'], accuracyRating = form.data['accuracyRating'],locationRating = form.data['locationRating'],valueRating = form.data['valueRating'], 
                           overallRating = mean([form.data['cleanlinessRating'], 
                                                 form.data['communicationRating'], form.data['checkinRating'], form.data['accuracyRating'], form.data['valueRating'], form.data['locationRating']]), userId=form.data['userId'], reservationsId = form.data['reservationsId'])
        db.session.add(newReview)
        db.session.commit()
        all_getaways = db.session.query(Getaway)
        getawaydict ={}
        for getaway in all_getaways:
            getawaydict[getaway.id]=getaway.to_dict()
        return getawaydict
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@review_routes.route('reviews/<int:id>/', methods=['PUT'])
def edit_review_by_id(id):
    reviewToEdit = Review.query.get(int(id))
    form = ReviewForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reviewToEdit.getawayId = form.data['getawayId']
        reviewToEdit.reviewText = form.data['reviewText']
        reviewToEdit.cleanlinessRating = form.data['cleanlinessRating']
        reviewToEdit.communicationRating = form.data['communicationRating']
        reviewToEdit.checkinRating = form.data['checkinRating']
        reviewToEdit.accuracyRating = form.data['accuracyRating']
        reviewToEdit.locationRating = form.data['locationRating']
        reviewToEdit.valueRating = form.data['valueRating']
        reviewToEdit.overallRating = mean([form.data['cleanlinessRating'], form.data['communicationRating'], form.data['checkinRating'], form.data['accuracyRating'], form.data['valueRating'], form.data['locationRating']])
        reviewToEdit.reservationsId = form.data['reservationsId']
        db.session.commit()
        all_getaways = db.session.query(Getaway)
        getawaydict ={}
        for getaway in all_getaways:
            getawaydict[getaway.id]=getaway.to_dict()
        return getawaydict
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@review_routes.route('reviews/<int:id>/', methods=['DELETE'])
def delete_review_by_id(id):
    reviewToDelete = Review.query.get(int(id))
    db.session.delete(reviewToDelete)
    db.session.commit()
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()
    return getawaydict
