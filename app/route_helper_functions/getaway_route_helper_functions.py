from app.forms import GetawayForm
from app.models import db, Getaway, Image, Amenity
from app.aws_upload import (
    upload_file_to_s3, allowed_file, get_unique_filename)
def uploadImage(img, form, newGetaway, imageNumber):
    image = form.data[img]       
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    
    db.session.add(Image(url=url, getawayId=newGetaway.id, imageNumber=imageNumber))
    db.session.commit()
def uploadAllImages(form, newGetaway):
    uploadImage("img1", form, newGetaway, 1)
    uploadImage("img2", form, newGetaway, 2)
    uploadImage("img3", form, newGetaway, 3)
    uploadImage("img4", form, newGetaway, 4)
    uploadImage("img5", form, newGetaway, 5)

def addAmenities(form, getawayToEdit):
    if form.data['hasHotTub'] is True:
            db.session.add(Amenity(amenity='Hot Tub', getawayId=getawayToEdit.id))
            db.session.commit()
    if form.data['hasWifi'] is True:
        db.session.add(Amenity(amenity='Wifi', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasPatio'] is True:
        db.session.add(Amenity(amenity='Patio', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasKitchen'] is True:
        db.session.add(Amenity(amenity='Kitchen', getawayId=getawayToEdit.id))
        db.session.commit()
    if form.data['hasFireplace'] is True:
        db.session.add(Amenity(amenity='Fireplace', getawayId=getawayToEdit.id))
        db.session.commit()
def deleteExistingAmenities(currentAmenities):
    for amenity in currentAmenities:
            db.session.delete(amenity)
            db.session.commit()
def getAllGetaways():
    all_getaways = db.session.query(Getaway)
    getawaydict ={}
    for getaway in all_getaways:
        getawaydict[getaway.id]=getaway.to_dict()

    return getawaydict
def checkForEditedImages(currentImages, getawayToEdit, form):
    for image in currentImages:
        currentImageId = image.id
        potentiallyNewImage = getImageFromFormWithId(form, image.id, currentImageId)
        if "mountaintopapp.s3.amazonaws.com" not in potentiallyNewImage.url:
            
            
            
            
            image.filename = get_unique_filename(image.filename)

            upload = upload_file_to_s3(image)

            if "url" not in upload:
                # if the dictionary doesn't have a url key
                # it means that there was an error when we tried to upload
                # so we send back that error message
                return upload, 400

            url = upload["url"]
            
            db.session.add(Image(url=url, getawayId=getawayToEdit.id))
            db.session.commit()
            
            

def getImageFromFormWithId(form, idno):
    if form.data['img1'].id == idno:
        return form.data['img1']
    elif form.data['img2'].id ==idno:
        return form.data['img2']
    elif form.data['img3'].id == idno:
        return form.data['img3']
    elif form.data['img4'].id == idno:
        return form.data['img4']
    elif form.data['img5'].id == idno:
        return form.data['img5']
        