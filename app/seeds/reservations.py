from app.models import db, Reservation


# Adds a demo user, you can add other users here if you want
def seed_reservations():
    reservation1 = Reservation(userId = 1, endDate="2021-12-30T16:59:38.000Z", startDate="2022-01-05T16:59:38", getawayId = 1)
    reservation2 = Reservation(userId = 1, startDate="2022-1-15T16:59:38.000Z", endDate="2022-01-20T16:59:38", getawayId = 2)
    reservation3 = Reservation(userId = 1, startDate="2022-01-20T18:01:59.000Z", endDate="2022-01-25T16:59:38", getawayId = 3)
    reservation4 = Reservation(userId = 1, startDate="2020-12-28T18:01:59.000Z", endDate="2020-12-30T18:01:59.000Z", getawayId = 5)
    reservation5 = Reservation(userId = 1, startDate="2020-01-14T18:01:59.000Z", endDate="2020-01-28T16:59:38", getawayId = 6)
    reservation6 = Reservation(userId = 1, startDate="2020-02-21T18:01:59.000Z", endDate="2020-02-28T18:01:59.000Z", getawayId = 7)

    
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
