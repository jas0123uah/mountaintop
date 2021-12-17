from flask import Blueprint, jsonify, request
from itertools import chain

from app.models import db, Getaway
from .auth_routes import validation_errors_to_error_messages

search_routes = Blueprint('search', __name__)


def searchGetaways(term):
    nameSearchResults = Getaway.query.filter(
        Getaway.name.ilike(f"%{term}%")).all()
    descriptionSearchResults = Getaway.query.filter(
        Getaway.description.ilike(f"%{term}%")).all()
    searchSet = set(chain(nameSearchResults, descriptionSearchResults))
    return list(searchSet)


@search_routes.route('/<term>/')
def get_search(term):
    searchResults = searchGetaways(term)
    return {'search': [getaway.to_dict() for getaway in searchResults]}
