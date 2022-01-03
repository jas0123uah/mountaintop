from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import ImageForm

from app.models import db, Image


from .auth_routes import validation_errors_to_error_messages

getaway_routes = Blueprint('images', __name__)

@getaway_routes.route('/<int:getawayId>/', methods=['POST'])
def post_getaway_images():
    form = ImageForm()
    print(form, "LOOOOOOOOOOOOOOOOOOOK") 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newImage = Image(userId = form.data['userId'],
            getawayId = form.data['getawayId'],
            url = form.data['url'])
        db.session.add(newImage)
        db.session.commit()
        return {'success': 'image posted'}
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
@getaway_routes.route('/getawayId>/', methods=['PUT'])
def edit_getaway_images(id):
    form = ImageForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        originalImages = User.query.filter(Image.getawayId == form.data['getawayId'])
        for originalImage in originalImages:
            db.session.delete(originalImage)
            
        db.session.delete(getawayToDelete)
        db.session.commit()
        return {'message': f"Deleted getaway {id}"}


@getaway_routes.route('/all/')
def get_all_getaways():
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()
    return getawaydict

@getaway_routes.route('/<int:id>/')
def get_getaway_by_id(id):
    getawayToGet = Getaway.query.get(int(id))
    return {'currentGetaway': getawayToGet.to_dict() }

@getaway_routes.route('/', methods=['POST'])
def create_getaway():
    form = GetawayForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newGetaway = Getaway(userId = form.data['userId'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country'],
            latitude = form.data['latitude'],
            longitude = form.data['longitude'],
            name = form.data['name'],
            price = form.data['price'],
            numGuests = form.data['numGuests'],
            numBedrooms = form.data['numBedrooms'],
            numBeds = form.data['numBeds'],
            numBaths = form.data['numBaths'],
            description = form.data['description'])
        db.session.add(newGetaway)
        db.session.commit()
        return newGetaway.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
    


@getaway_routes.route('/<int:id>/', methods=['PUT'])
def edit_getaway_by_id(id):
    getawayToEdit = Getaway.query.get(int(id))
    form = GetawayForm() 
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        getawayToEdit.userId = form.data['userId']
        getawayToEdit.address = form.data['address']
        getawayToEdit.city = form.data['city']
        getawayToEdit.state = form.data['state']
        getawayToEdit.country = form.data['country']
        getawayToEdit.latitude = form.data['latitude']
        getawayToEdit.longitude = form.data['longitude']
        getawayToEdit.name = form.data['name']
        getawayToEdit.description = form.data['description']
        getawayToEdit.price = form.data['price']
        getawayToEdit.numGuests = form.data['numGuests']
        getawayToEdit.numBedrooms = form.data['numBedrooms']
        getawayToEdit.numBeds = form.data['numBeds']
        getawayToEdit.numBaths = form.data['numBaths']
        getawayToEdit.description = form.data['description']
        db.session.commit()
        return getawayToEdit.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@getaway_routes.route('/<int:id>/', methods=['DELETE'])
def delete_getaway_by_id(id):
    getawayToDelete = Getaway.query.get(int(id))
    db.session.delete(getawayToDelete)
    db.session.commit()
    return {'message': f"Deleted getaway {id}"}
