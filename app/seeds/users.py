from app.models import db, User
from randomuser import RandomUser

# Adds a demo user, you can add other users here if you want
def seed_users():
    user = RandomUser()
    firstName = str(user.get_first_name())
    lastName = str(user.get_last_name())
    password = user.get_password()
    profilePictureUrl = user.get_picture()
    email = user.get_email()
    demo = User(
        firstName=firstName, lastName=lastName, profilePictureUrl=profilePictureUrl, email=email, password='password')
    user = RandomUser()
    firstName = str(user.get_first_name())
    lastName = str(user.get_last_name())
    password = user.get_password()
    profilePictureUrl = user.get_picture()
    email = user.get_email()
    demo2 = User(
        firstName=firstName, lastName=lastName, profilePictureUrl=profilePictureUrl, email=email, password='password')
    user = RandomUser()
    firstName = str(user.get_first_name())
    lastName = str(user.get_last_name())
    password = user.get_password()
    profilePictureUrl = user.get_picture()
    email = user.get_email()
    demo3 = User(
        firstName=firstName, lastName=lastName, profilePictureUrl=profilePictureUrl, email=email, password='password')
    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
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
