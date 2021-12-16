from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

class GetawayForm(FlaskForm):
    userId = IntegerField("User Id", validators=[DataRequired()])
    address = StringField("Address",  validators=[
                            DataRequired()])
    city = StringField("City",  validators=[
                             DataRequired(), ])
    state = StringField("State", validators=[
                                DataRequired()])
    country = StringField("Country", validators=[
                                DataRequired()])
    latitude = DecimalField("Latitude", validators=[
                                DataRequired()])
    longitude = DecimalField("Latitude", validators=[
                                DataRequired()])
    name = StringField("Name",  validators=[DataRequired()])
    numBaths = DecimalField("Number of Baths", validators=[
                                DataRequired()])
    numGuests = IntegerField("Number of Guests", validators=[
                                DataRequired()])
    numBeds = IntegerField("Number of Beds", validators=[
                                DataRequired()])
    numBedrooms = IntegerField("Number of Bedrooms", validators=[
                                DataRequired()])
    price = DecimalField("Price", validators=[
                                DataRequired()])
    description = TextAreaField("Description",  validators=[DataRequired()])
