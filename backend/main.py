import mysql.connector
from fastapi import FastAPI
from contextlib import asynccontextmanager
from pydantic import BaseModel

# Sets up database and table on start up

app = FastAPI()

class Flashcard(BaseModel):
    question: str
    answer: str

def get_database():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="s3cur31smysw0rd?",
        database="flashcards_db"
    )

# GET Route (Read)
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

# POST Route (Create)
@app.post("/flashcards")
def create_flashcards(card: Flashcard):
    conn = get_database()
    cursor = conn.cursor()

    cursor.execute("INSERT INTO flashcards (question, answer) VALUES (%s, %s)" , (card.question, card.answer))

    conn.commit()
    conn.close()
    return {"message": "Flashcard created"}





