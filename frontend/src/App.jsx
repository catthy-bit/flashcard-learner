
import {useState, useEffect} from 'react';
import AddFlashcard from './AddFlashcard';
import ViewCards from './CardOverview';
import './App.css';

export default function App() {
  // creates an array for all flashcards
  const [allCards, setAllCards] = useState([]);

  //for switching between viewing all cards and adding new card to deck
  const [isSwitched, setIsSwitched] = useState(false); 
  //if isSwitched == true -> View all
  //if isSwitched == false -> Add new flashcard

  useEffect(() => {
    // fetch backend 
    fetch('http://localhost:8000/flashcards')
      .then(res => res.json())
      .then(data => setAllCards(data.flashcards))
  }, [])

  // (Read)
  const fetchCards = () => {
    /* Calls mysql for current flashcards &
       React retrieves all flashcards
    */
    fetch('http://localhost:8000/flashcards')
      .then(res => res.json())
      .then(data => setAllCards(data.flashcards))
  }

  // Takes all cards part of the card list and 
  // (Create)
  const handleFlashCard = (question, answer) => {
    fetch('http://localhost:8000/flashcards', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({question , answer})
    })
    .then(res => res.json())
    .then(() => fetchCards())
  }

  // (Delete)
  const removeFlashCard = (id) => {
    fetch(`http://localhost:8000/flashcards/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => fetchCards(

    ))
    /*
    const remainingCards = allCards.filter(card => card.id != id);
    setAllCards(remainingCards);*/
  }

  // takes a new id, question and answer to edit
  // (Update)
  const saveEditedFlashCard = (id, question, answer) => {

    fetch(`http://localhost:8000/flashcards/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({question , answer})
    })
    .then(res => res.json())
    .then(() => fetchCards(

    ))
    /* iterates through each card in array and checks if card matches card id. 
       If yes, call the card array and update its question and answer only
       If no, leaves card as is and stops updating
    */

    /*
    const savingCards = allCards.map(card => card.id === id ? {...card, question, answer} : card);
    // Saves updated array
    setAllCards(savingCards);
    */
  }

  return (
    <div>
      {/* Buttons' states are read when specific button is clicked */}
      <button className="view-all-btn" onClick={() => setIsSwitched(true)}>View All</button>
      <button className="add-new-card-btn" onClick={() => setIsSwitched(false)}>Add New Card</button>
      
      {/* If switched is true, view all flashcards. Else, show a add new flashcard button 
          Should delete a card from entire collection when removeFlashCard is used
      */}
      
      <div className={isSwitched ? 'card-overview' : 'add-new-flashcard'}>
        {isSwitched ? <ViewCards cards={allCards} deletedCard={removeFlashCard} saveEditedCard={saveEditedFlashCard}></ViewCards> : <AddFlashcard addCard={handleFlashCard}></AddFlashcard>}
      </div>
    </div>
  ) 

 
}