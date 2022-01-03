import re
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import GetawayForm
from app.forms import ImageForm
from app.models import db, Getaway, Image
from app.seeds import images


from .auth_routes import validation_errors_to_error_messages

getaway_routes = Blueprint('getaways', __name__)

@getaway_routes.route('/')
def get_most_recent_getaways():
    # recent_getaways = db.session.query(Getaway).order_by(Getaway.id.desc()).limit(5)
    # getawaydict ={}
    # for getaway in recent_getaways:
    #     getawaydict[getaway.id]=getaway.to_dict()
    # return getawaydict
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()
    return getawaydict

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
        
        print(newGetaway.id, "LOOK AT THIS")
        
        if form.data['img1'] is not None:
            db.session.add(Image(url=form.data['img1'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img2'] is not None:
            db.session.add(Image(url=form.data['img2'], getawayId=newGetaway.id))
            db.session.commit()
            
        if form.data['img3'] is not None:
            db.session.add(Image(url=form.data['img3'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img4'] is not None:
            db.session.add(Image(url=form.data['img4'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img5'] is not None:
            db.session.add(Image(url=form.data['img5'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img6'] is not None:
            db.session.add(Image(url=form.data['img6'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img7'] is not None:
            db.session.add(Image(url=form.data['img7'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img8'] is not None:
            db.session.add(Image(url=form.data['img8'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img9'] is not None:
            db.session.add(Image(url=form.data['img9'], getawayId=newGetaway.id))
            db.session.commit()
        if form.data['img10'] is not None:
            db.session.add(Image(url=form.data['img10'], getawayId=newGetaway.id))
            db.session.commit()
        all_getaways = db.session.query(Getaway)
        getawaydict ={}
        for getaway in all_getaways:
            getawaydict[getaway.id]=getaway.to_dict()
            print("THIS IS GETAWAY OBJ", getaway)
            print("THIS IS GETAWAY OBJ ID", getaway.id)
        print(getawaydict, "<-------- FINAL DICT")
        return getawaydict
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
        db.session.add(getawayToEdit)
        db.session.commit()
        
        currentImages = db.session.query(Image).filter(Image.getawayId == getawayToEdit.id)
        for image in currentImages:
            db.session.delete(image)
            db.session.commit()
        
        if form.data['img1'] is not None:
            db.session.add(Image(url=form.data['img1'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img2'] is not None:
            db.session.add(Image(url=form.data['img2'], getawayId=getawayToEdit.id))
            db.session.commit()
            
        if form.data['img3'] is not None:
            db.session.add(Image(url=form.data['img3'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img4'] is not None:
            db.session.add(Image(url=form.data['img4'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img5'] is not None:
            db.session.add(Image(url=form.data['img5'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img6'] is not None:
            db.session.add(Image(url=form.data['img6'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img7'] is not None:
            db.session.add(Image(url=form.data['img7'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img8'] is not None:
            db.session.add(Image(url=form.data['img8'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img9'] is not None:
            db.session.add(Image(url=form.data['img9'], getawayId=getawayToEdit.id))
            db.session.commit()
        if form.data['img10'] is not None:
            db.session.add(Image(url=form.data['img10'], getawayId=getawayToEdit.id))
            db.session.commit()
        
        
        
        all_getaways = db.session.query(Getaway)
        getawaydict ={}
        for getaway in all_getaways:
            getawaydict[getaway.id]=getaway.to_dict()
            print("THIS IS GETAWAY OBJ", getaway)
            print("THIS IS GETAWAY OBJ ID", getaway.id)
        return getawaydict
    else:
        print({'errors': validation_errors_to_error_messages(form.errors)}, "JAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@getaway_routes.route('/<int:id>/', methods=['DELETE'])
def delete_getaway_by_id(id):
    getawayToDelete = Getaway.query.get(int(id))
    db.session.delete(getawayToDelete)
    db.session.commit()
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()
    return getawaydict
