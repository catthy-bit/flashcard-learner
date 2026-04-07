
import {useState} from 'react';
import AddFlashcard from './AddFlashcard';
import ViewCards from './CardOverview';
import './App.css';
import FlashCards from './Flashcard';

export default function App() {
  // creates an array for all flashcards
  const [allCards, setAllCards] = useState([]);

  //for switching between viewing all cards and adding new card to deck
  const [isSwitched, setIsSwitched] = useState(false); 
  //if isSwitched == true -> View all
  //if isSwitched == false -> Add new flashcard

  // Takes all cards part of the card list and 
  const handleFlashCard = (question, answer) => {
    setAllCards([...allCards, {
      id: Date.now(),
      question: question,
      answer: answer,
    }]);
  }
  
  const removeFlashCard = (id) => {
    //
    const remainingCards = allCards.filter(card => card.id != id);
    setAllCards(remainingCards);
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
        {isSwitched ? <ViewCards cards={allCards} deletedCard={removeFlashCard}></ViewCards> : <AddFlashcard addCard={handleFlashCard}></AddFlashcard>}
      </div>
    </div>
  ) 

 
}