from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DecimalField
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
    price = DecimalField("Price", places=2, validators=[
                                DataRequired()])
    img1 = FileField("Image1", validators=[
                                DataRequired()])
    img2 = FileField("Image2", validators=[
                                DataRequired()])
    img3 = FileField("Image3", validators=[
                                DataRequired()])
    img4 = FileField("Image4", validators=[
                                DataRequired()])
    img5 = FileField("Image5", validators=[
                                DataRequired()])
    hasHotTub = StringField("Hot tub")
    hasWifi = StringField("WiFi")
    hasPatio = StringField("Patio")
    hasKitchen = StringField("Kitchen")
    hasFireplace = StringField("Fireplace")
    description = TextAreaField("Description",  validators=[DataRequired()])
