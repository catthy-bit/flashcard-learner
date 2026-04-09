
# Flashcard Learner App
## About 
Flashcard-learner is an application designed to support users’s learning. Formatted as flashcards, they allow users to:
* Create their own questions and answers (that are then saved for late use)
* View all the flashcards they made 
* Edit their existing flashcards
* Delete flashcards that they no longer need it use
In which case, answers can be viewed upon clicking the card where the question is

## Features
This application includes:
* An overview feature that enables users to see all available flashcard questions at a glance;
* A click feature that reveals a flashcard's answer and removes it after it has been used
* A create or delete feature that allows users to make or delete desired flashcards;
* And the ability to edit their cards or, cancel their edits

## Application Structure
### Single Page Application (SPA)
The flashcard-learner app operates as a SPA. This is done through employing useStates from REACT to alter the page's state without rendering the page to the server. 

For the making this application, the following files were used: 

### Frontend Logic
| File Name           | Type  | Description                                       |
|---------------------|-------|---------------------------------------------------|
| AddFlashcard.jsx    | .jsx  | Creates flashcards with question and answer input |
| FlashCard.jsx       | .jsx  | Handles card interactions (edit, delete, save)    |
| CardOverview.jsx    | .jsx  | Shows all saved flashcards                        |
| App.jsx             | .jsx  | Handles data retrieval and app logic              |

### Frontend Styling
| File Name           | Type  | Description                                       |
|---------------------|-------|---------------------------------------------------|
| AddFlashcard.css    | .css  | Styles flashcard layout                           |
| FlashCard.css       | .css  | Styles cards' interactions e.g. buttons, effects  |
| CardOverview.css    | .css  | Styles overview page                              |
| App.css             | .css  | Global styling for the app                        |

### Backend 
| File Name           | Type  | Description                                           |
|---------------------|-------|-------------------------------------------------------|
| main.py             | .py   | Sets up flashcard database and CRUD operations        |
| flashcards.db       | .db   | Database that stores information related to flashcards|

## CRUD Operations
The crud operations (CREATE, READ, UPDATE, DELETE) are handled by the main.py file and are retrieved by the fetch function in the frontend logic files.

This application supports full CRUD functionality. Where:
* CREATE - Adds new flashcards
* READ - Displays flashcards
* UPDATE - Edits existing flashcards
* DELETE - Removes flashcard from database

This is handled by the `main.py`, `flashcards.db` using FastAPI and MySQL. This ensures persistent data storage and avoid data loss from occuring when the page is refreshed.

## Presentation and User Experience
### 1) Visual Presentation
#### Aesthetics
To enhance users' experience when interacting with this application, the design has been kept minimal and easy on the eye to avoid eye straining.  
