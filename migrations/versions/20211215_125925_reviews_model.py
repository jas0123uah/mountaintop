"""reviews model

Revision ID: 7bfec8636d9e
Revises: eef34d5facc1
Create Date: 2021-12-15 12:59:25.092441

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7bfec8636d9e'
down_revision = 'eef34d5facc1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('getawayId', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('reviewText', sa.Text(), nullable=False),
    sa.Column('cleanlinessRating', sa.Integer(), nullable=False),
    sa.Column('communicationRating', sa.Integer(), nullable=False),
    sa.Column('checkinRating', sa.Integer(), nullable=False),
    sa.Column('accuracyRating', sa.Integer(), nullable=False),
    sa.Column('locationRating', sa.Integer(), nullable=False),
    sa.Column('valueRating', sa.Integer(), nullable=False),
    sa.Column('overallRating', sa.Float(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['getawayId'], ['getaways.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    # ### end Alembic commands ###
