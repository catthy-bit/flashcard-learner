import sqlite3 
from fastapi import FastAPI

app = FastAPI()

def get_database():
    return sqlite3.connect('flashcards.db')


