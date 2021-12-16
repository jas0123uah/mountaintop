from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, DateField
from wtforms.validators import DataRequired

class ReservationForm(FlaskForm):
    getawayId = IntegerField("Getaway Id", validators=[DataRequired()])
    userId = IntegerField("User Id",validators=[DataRequired()])
    startDate = DateField("Start Date", validators=[
                                DataRequired()])
    endDate = DateField("End Date", validators=[
                                DataRequired()])
