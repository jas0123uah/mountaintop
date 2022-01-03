from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

class ImageForm(FlaskForm):
    url = StringField("url",  validators=[
                            DataRequired()])
    getawayId = IntegerField("Getaway Id",  validators=[
                             DataRequired(),])
