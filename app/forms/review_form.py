from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    getawayId = IntegerField("Getaway Id", validators=[DataRequired()])
    reviewText = TextAreaField("Review",  validators=[DataRequired()])
    cleanlinessRating = IntegerField("Cleanliness Rating", validators=[
                                DataRequired()])
    communicationRating = IntegerField("Communication Rating",validators=[DataRequired()])
    checkinRating = IntegerField("Check-in Rating",validators=[DataRequired()])
    accuracyRating = IntegerField("Accuracy Rating",validators=[DataRequired()])
    locationRating = IntegerField("Location Rating",validators=[DataRequired()])
    valueRating = IntegerField("Value Rating",validators=[DataRequired()])
    userId = IntegerField("User Id",validators=[DataRequired()])
    reservationsId = IntegerField("Reservation Id",validators=[DataRequired()])
