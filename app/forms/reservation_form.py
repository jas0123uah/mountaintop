from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

class ReservationForm(FlaskForm):
    getawayId = IntegerField("Getaway Id", validators=[DataRequired()])
    userId = IntegerField("User Id",validators=[DataRequired()])
    reviewText = TextAreaField("Review",  validators=[DataRequired()])
    startDate = IntegerField("Start Date", validators=[
                                DataRequired()])
    communicationRating = IntegerField("Communication Rating",validators=[DataRequired()])
    checkinRating = IntegerField("Check-in Rating",validators=[DataRequired()])
    accuracyRating = IntegerField("Accuracy Rating",validators=[DataRequired()])
    locationRating = IntegerField("Location Rating",validators=[DataRequired()])
    valueRating = IntegerField("Value Rating",validators=[DataRequired()])
