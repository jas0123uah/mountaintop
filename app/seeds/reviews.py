# from app.models import db, User, Getaway, Review
# from sqlalchemy.sql.expression import func
# from random import randrange
# from faker import Faker
# from statistics import mean
# fake = Faker()


# def seed_reviews():

#     for review in range(1, 16):
#         userId = db.session.query(
#             User.id).order_by(func.random()).first()[0]
#         getaway_obj = db.session.query(Getaway).filter(
#             Getaway.userId != userId).order_by(func.random()).first()
#         getaway_id = getaway_obj.id
#         cleanlinessRating = randrange(1, 3)
#         communicationRating = randrange(1, 3)
#         checkinRating = randrange(1, 3)
#         accuracyRating = randrange(1, 3)
#         locationRating = randrange(1, 3)
#         valueRating = randrange(1, 3)
#         overallRating = mean([cleanlinessRating, communicationRating, accuracyRating, checkinRating, locationRating, valueRating])
#         reviewText = fake.paragraph(nb_sentences=3)
#         seed_review = Review(checkinRating=checkinRating, reviewText=reviewText,
#                              userId=userId, getawayId=getaway_id, cleanlinessRating=cleanlinessRating,communicationRating=communicationRating, accuracyRating=accuracyRating, locationRating=locationRating, valueRating=valueRating, overallRating=overallRating)
#         db.session.add(seed_review)
        
        
#     for review in range(0, 100):
#         userId = db.session.query(
#             User.id).order_by(func.random()).first()[0]
#         getaway_obj = db.session.query(Getaway).filter(
#             Getaway.userId != userId).order_by(func.random()).first()
#         getaway_id = getaway_obj.id
#         cleanlinessRating = randrange(4, 5)
#         communicationRating = randrange(4, 5)
#         checkinRating = randrange(4, 5)
#         accuracyRating = randrange(4, 5)
#         locationRating = randrange(4, 5)
#         valueRating = randrange(4, 5)
#         overallRating = mean([cleanlinessRating, communicationRating, checkinRating, accuracyRating, locationRating, valueRating])
#         reviewText = fake.paragraph(nb_sentences=3)
#         seed_review = Review(checkinRating=checkinRating, reviewText=reviewText,
#                              userId=userId, getawayId=getaway_id, cleanlinessRating=cleanlinessRating,communicationRating=communicationRating, accuracyRating=accuracyRating, locationRating=locationRating, valueRating=valueRating, overallRating=overallRating)
#         db.session.add(seed_review)
        
        
        
        
#     for review in range(0, 10):
#         userId = db.session.query(
#             User.id).order_by(func.random()).first()[0]
#         getaway_obj = db.session.query(Getaway).filter(
#             Getaway.userId != userId).order_by(func.random()).first()
#         getaway_id = getaway_obj.id
#         cleanlinessRating = randrange(2, 3)
#         communicationRating = randrange(2, 3)
#         checkinRating = randrange(2, 3)
#         accuracyRating = randrange(2, 3)
#         locationRating = randrange(2, 3)
#         valueRating = randrange(2, 3)
#         overallRating = mean([cleanlinessRating, communicationRating, accuracyRating, locationRating, valueRating, checkinRating])
#         reviewText = fake.paragraph(nb_sentences=3)
#         seed_review = Review(checkinRating=checkinRating, reviewText=reviewText,
#                              userId=userId, getawayId=getaway_id, cleanlinessRating=cleanlinessRating,communicationRating=communicationRating, accuracyRating=accuracyRating, locationRating=locationRating, valueRating=valueRating, overallRating=overallRating)
#         db.session.add(seed_review)
        

#     for review in range(0, 100):
#         userId = db.session.query(
#             User.id).order_by(func.random()).first()[0]
#         getaway_obj = db.session.query(Getaway).filter(
#             Getaway.userId != userId).order_by(func.random()).first()
#         getaway_id = getaway_obj.id
#         cleanlinessRating = randrange(4, 5)
#         communicationRating = randrange(4, 5)
#         checkinRating = randrange(4, 5)
#         accuracyRating = randrange(4, 5)
#         locationRating = randrange(4, 5)
#         valueRating = randrange(4, 5)
#         overallRating = mean([checkinRating, cleanlinessRating, communicationRating, accuracyRating, locationRating, valueRating])
#         reviewText = fake.paragraph(nb_sentences=3)
#         seed_review = Review(checkinRating=checkinRating, reviewText=reviewText,
#                              userId=userId, getawayId=getaway_id, cleanlinessRating=cleanlinessRating,communicationRating=communicationRating, accuracyRating=accuracyRating, locationRating=locationRating, valueRating=valueRating, overallRating=overallRating)
#         db.session.add(seed_review)

#     db.session.commit()


# def undo_reviews():
#     db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
#     db.session.commit()
