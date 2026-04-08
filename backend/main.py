import mysql.connector
from fastapi import FastAPI
from contextlib import asynccontextmanager
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Sets up database and table on start up

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class Flashcard(BaseModel):
    question: str
    answer: str

def get_database():
    return mysql.connector.connect(
        host="127.0.0.1",
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

# PUT Route (Update)
@app.put("/flashcards/{id}")
def update_flashcards(id: int, card: Flashcard):
    conn = get_database()
    cursor = conn.cursor()

    cursor.execute("UPDATE flashcards SET question = %s, answer = %s WHERE id = %s", (card.question, card.answer, id))

    conn.commit()
    conn.close()
    return {"message": "Flashcard updated"}

# DELETE Route (Delete)
@app.delete("/flashcards/{id}")
def delete_flashcards(id: int):
    conn = get_database()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM flashcards WHERE id = %s", (id,))

    conn.commit()
    conn.close()
    return {"message": "Flashcard deleted"}

if __name__ == "__main__":
    print(get_database())





