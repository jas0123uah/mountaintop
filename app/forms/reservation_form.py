from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, DateField, StringField
from wtforms.validators import DataRequired

class ReservationForm(FlaskForm):
    getawayId = IntegerField("Getaway Id", validators=[DataRequired()])
    userId = IntegerField("User Id",validators=[DataRequired()])
    startDate = StringField("Start Date", validators=[
                                DataRequired()])
    endDate = StringField("End Date", validators=[
                                DataRequired()])
