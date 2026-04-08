import sqlite3 
from fastapi import FastAPI
from contextlib import asynccontextmanager


# Sets up database and table on start up

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

    # Close the database connection
    conn.close()

@asynccontextmanager
async def load(app):
    create_flashcards_table()
    yield

app = FastAPI(lifespan=load)

# Reads function and returns data
@app.get("/flashcards")
def read_flashcards():
    conn = get_database()
    cursor = conn.cursor()

    # Get everything from table
    cursor.execute("SELECT * FROM flashcards")

    # Fetch data 
    data = cursor.fetchall()
    cursor.close()
    conn.close()

    return {"flashcards": data}

@app.post("/flashcards")
def create_flashcards(question, answer):
    conn = get_database()
    cursor = conn.cursor()

    # 
    cursor.execute("INSERT INTO flashcards (question, answer) VALUES (?,?)" , (question, answer))

    conn.commit()
    conn.close()

    return {"message": "Flashcard created"}




