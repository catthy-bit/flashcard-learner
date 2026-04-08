import mysql 
from fastapi import FastAPI
from contextlib import asynccontextmanager

# Sets up database and table on start up

app = FastAPI()

def get_database():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="s3cur31smysw0rd?",
        database="flashcards_db"
    )







