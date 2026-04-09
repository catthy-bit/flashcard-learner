
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
### Visual Presentation
#### Aesthetics
To enhance users' experience when interacting with this application, the design has been kept minimal and easy on the eye to avoid eye straining. Additionally, it was designed to be user friendly and to provide visual indicators that aid individuals using the application.

To curate the application, the following discusses in detail below the qualities that help to enhance the user experience of this app and thus, achieve the app’s intentions.

#### Colour
To create a minimalist appeal, CSS was used to design each state the application takes on. In which, it focuses on the visual appearance of the app and how it enhances users’ experience when interacting with the app. For example, a shadow appearing on the flashcard when the user first hovers on the page.

To accomplish a tailored user experience, a colour palette was carefully chosen to achieve a consistent look throughout the website while also being visually appealing and minimalistic. The colours picked also take into consideration different users that have different levels of colour blindness, to increase accessibility of this website.

In addittion to this, the colours used for the buttons represent di'

This was achieved by using WhoCanUse.com which visually represents how colour contrast is perceived by different users with different types of visual impairments

#### Interactive buttons
Since CSS primarily deals with the design of websites, it is an invaluable tool when it comes to enhancing user engagement and interaction with websites. For example, using the hover effect to change the colour of the View All button when the user hovers over it. This increases user interactivity with the app and improves navigation for first time users.

### Accessibility
To make this app easy to navigate for different types of users - experienced and inexperienced, each state features buttons that clearly defines its function and contains text where user input is needed. In which, it allows users to enter different states when clicked on. In doing so, it clearly explain what each feature entails, reducing ambiguity for users and enhancing users’ overall experience with the website.


