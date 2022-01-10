from app.models import db, Reservation, Review
from random import randint
from random import randrange

from faker import Faker
from statistics import mean
fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_reservations():
    reservation1 = Reservation(userId = 1, endDate="2021-12-30T16:59:38.000Z", startDate="2022-01-05T16:59:38", getawayId = 1)
    reservation2 = Reservation(userId = 1, startDate="2022-1-15T16:59:38.000Z", endDate="2022-01-20T16:59:38", getawayId = 2)
    reservation3 = Reservation(userId = 1, startDate="2022-01-20T18:01:59.000Z", endDate="2022-01-25T16:59:38", getawayId = 3)
    reservation4 = Reservation(userId = 1, startDate="2020-12-28T18:01:59.000Z", endDate="2020-12-30T18:01:59.000Z", getawayId = 5)
    reservation5 = Reservation(userId = 1, startDate="2020-01-14T18:01:59.000Z", endDate="2020-01-28T16:59:38", getawayId = 6)
    reservation6 = Reservation(userId = 1, startDate="2020-02-21T18:01:59.000Z", endDate="2020-02-28T18:01:59.000Z", getawayId = 7)
    
    dates = ["2021-01-05T16:59:38", "2021-01-10T16:59:38.000Z", 
             "2021-01-15T16:59:38", "2021-01-20T16:59:38.000Z", 
             "2021-01-25T16:59:38", "2021-01-30T16:59:38.000Z" , 
             "2021-02-05T16:59:38", "2021-02-10T16:59:38.000Z",
             
             "2021-03-05T16:59:38", "2021-03-10T16:59:38.000Z", 
             "2021-03-15T16:59:38", "2021-03-20T16:59:38.000Z", 
             "2021-03-25T16:59:38", "2021-03-30T16:59:38.000Z" ,
             
             "2021-04-05T16:59:38", "2021-04-10T16:59:38.000Z", 
             "2021-04-15T16:59:38", "2021-04-20T16:59:38.000Z", 
             "2021-04-25T16:59:38", "2021-04-30T16:59:38.000Z" ,  
             ]
    
    reviewCount = 1
    dateCount=0
    for i in range(1, 16):
        for x in range(1, 10):
            randUser = randint(1, 50)
            reservation = Reservation(userId = randUser, endDate=dates[dateCount+1], startDate=dates[dateCount], getawayId = i)
            cleanlinessRating = randrange(1, 5)
            communicationRating = randrange(1, 5)
            checkinRating = randrange(1, 5)
            accuracyRating = randrange(1, 5)
            locationRating = randrange(1, 5)
            valueRating = randrange(1, 5)
            overallRating = mean([cleanlinessRating, communicationRating, accuracyRating, checkinRating, locationRating, valueRating])
            reviewText = fake.paragraph(nb_sentences=3)
            seed_review = Review(checkinRating=checkinRating, reviewText=reviewText,
                                userId=randUser, getawayId=i, cleanlinessRating=cleanlinessRating,communicationRating=communicationRating, accuracyRating=accuracyRating, locationRating=locationRating, valueRating=valueRating, overallRating=overallRating, reservationsId=reviewCount)
            db.session.add(seed_review)
            db.session.add(reservation)
            db.session.commit()
            reviewCount+=1
            dateCount+=2
            x+=1
        dateCount=0

    
    db.session.add(reservation1)
    db.session.add(reservation2)
    db.session.add(reservation3)
    db.session.add(reservation4)
    db.session.add(reservation5)
    db.session.add(reservation6)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
