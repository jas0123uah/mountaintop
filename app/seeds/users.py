from app.models import db, User
from randomuser import RandomUser

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Jay', lastName='Spencer', profilePictureUrl="https://i.ibb.co/rsM01H6/download-2.png", email='demo@aa.io', password='password')
    marnie = User(
        firstName='Marnie', lastName='Martin', email='marnie@aa.io', profilePictureUrl="https://i.ibb.co/N19bxXR/Business-Headshot-Women-006.jpg", password='password')
    joe = User(
        firstName='Joe', lastName='Johnson', profilePictureUrl="https://i.ibb.co/37H19Lt/c0899a5fb5be4db614cf9387f2fede31.jpg", email='joe@aa.io', password='password')
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(joe)
    for user in range(1,51):
        user = RandomUser()
        firstName = str(user.get_first_name())
        lastName = str(user.get_last_name())
        password = user.get_password()
        profilePictureUrl = user.get_picture()
        email = user.get_email()
        seed_user = User(firstName=firstName, lastName=lastName, password=password, profilePictureUrl=profilePictureUrl, email=email)
        db.session.add(seed_user)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
