import sqlite3 
from fastapi import FastAPI
from contextlib import asynccontextmanager


def get_database():
    return sqlite3.connect('flashcards.db')

def create_flashcards_table():
    # Establishes the connection to get appropriate database
    conn = get_database()

    # Use cursor to interact with data
    cursor = conn.cursor()

    # Create a data table containing the following columns if it doesnt exist
    cursor.execute("""CREATE TABLE IF NOT EXISTS flashcards (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        question TEXT NOT NULL,
                        answer TEXT NOT NULL
                   )""")
    conn.commit()
    conn.close()

@asynccontextmanager
async def load(app):
    create_flashcards_table()
    yield

app = FastAPI(lifespan=load)

