from flask.cli import AppGroup
from .users import seed_users, undo_users
from .amenities import seed_amenities, undo_amenities
from .getaways import seed_getaways, undo_getaways
from .images import seed_images, undo_images
from .reviews import seed_reviews, undo_reviews
from .reservations import seed_reservations, undo_reservations

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_getaways()
    seed_reviews()
    seed_images()
    seed_amenities()
    seed_reservations()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_getaways()
    undo_reviews()
    undo_images()
    undo_amenities()
    undo_reservations()
    # Add other undo functions here
