from flask import Blueprint, request
from app.forms import GetawayForm
from app.models import db, Getaway, Image, Amenity
import json
import time
from app.aws_upload import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.route_helper_functions import uploadImage, uploadAllImages, addAmenities, deleteExistingAmenities, getAllGetaways, checkForEditedImages, getImageFromFormWithId

from .auth_routes import validation_errors_to_error_messages

getaway_routes = Blueprint('getaways', __name__)

def set_list(l, i, v):
      try:
          l[i] = v
      except IndexError:
          for _ in range(i-len(l)+1):
              l.append(None)
          l[i] = v
@getaway_routes.route('/')
def get_most_recent_getaways():
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
        
        getawayAtExistingAddress=db.session.query(Getaway).filter(Getaway.address == form.data['address'] and Getaway.address == form.data['address']).first()
        if getawayAtExistingAddress is not None:
            return {'errors': 'A getaway at this address already exists.'}, 400


        
    if "img1" not in form.data or "img2" not in form.data or "img3" not in form.data or "img4" not in form.data or "img5" not in form.data :
            return {"errors": "5 images required"}, 400
    for i in range(1, 6):
        image = form.data[f'img{i}']
        if hasattr(image, 'filename'):
            if not allowed_file(image.filename):
                return {"errors": "file type not permitted"}, 400
    
    db.session.add(newGetaway)
    db.session.commit()
    uploadAllImages(form, newGetaway)

    
    
    
    if form.data['hasHotTub'] == 'true':
        db.session.add(Amenity(amenity='Hot Tub', getawayId=newGetaway.id))
        db.session.commit()
    if form.data['hasWifi'] == 'true':
        db.session.add(Amenity(amenity='Wifi', getawayId=newGetaway.id))
        db.session.commit()
    if form.data['hasPatio'] == 'true':
        db.session.add(Amenity(amenity='Patio', getawayId=newGetaway.id))
        db.session.commit()
    if form.data['hasKitchen'] == 'true':
        db.session.add(Amenity(amenity='Kitchen', getawayId=newGetaway.id))
        db.session.commit()
    if form.data['hasFireplace'] == 'true':
        db.session.add(Amenity(amenity='Fireplace', getawayId=newGetaway.id))
        db.session.commit()
            
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()
    return getawaydict
    


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
    newImages = []
    uneditedImages = []
    allImages = [form.data['img1'], form.data['img2'],form.data['img3'],form.data['img4'], form.data['img5']]
    for imageNumber, image in enumerate(allImages, start=1): #oldImage
        if type(image) is str:
            imageAsDict = json.loads(image)     
            uneditedImages.append(str(imageAsDict['id']))
            uneditedImages.append(imageAsDict['id'])
        else: #newImage
            set_list(newImages, int(imageNumber), image)

    editedImages = db.session.query(Image).filter(Image.getawayId == getawayToEdit.id)
    removedImageNumbers=[]
    for image in editedImages:
        if image.id not in uneditedImages:
            removedImageNumbers.append(image.imageNumber)
            db.session.delete(image)
            db.session.commit()
        
    for idx, image in enumerate(newImages):
        if image is not None:
            image.filename = get_unique_filename(image.filename)

            upload = upload_file_to_s3(image)

            if "url" not in upload:
                # if the dictionary doesn't have a url key
                # it means that there was an error when we tried to upload
                # so we send back that error message
                return upload, 400

            url = upload["url"]
            
            db.session.add(Image(url=url, getawayId=getawayToEdit.id, imageNumber=idx))
            db.session.commit()
        
        
        
    
    
    
    
    
    currentAmenities = db.session.query(Amenity).filter(Amenity.getawayId == getawayToEdit.id)
    
    deleteExistingAmenities(currentAmenities)




    if form.data['hasHotTub'] == 'true':
        db.session.add(Amenity(amenity='Hot Tub', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasWifi'] == 'true':
        db.session.add(Amenity(amenity='Wifi', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasPatio'] == 'true':
        db.session.add(Amenity(amenity='Patio', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasKitchen'] == 'true':
        db.session.add(Amenity(amenity='Kitchen', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasFireplace'] == 'true':
        db.session.add(Amenity(amenity='Fireplace', getawayId=getawayToEdit.id))
        db.session.commit()
    
    
    return get_all_getaways()
    
    

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
