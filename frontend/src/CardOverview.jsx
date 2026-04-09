
import FlashCards from './Flashcard';
import './App.css';

// Main Feature: View all Flashcards 
// Takes cards as a parameter when used by other files
export default function ViewCards({cards, deletedCard, saveEditedCard}) {

    return (
        <div className="card-overview">
            {/* For each c in cards, create a flashcard using card's data. 
                Where each c contains a question and an answer
                If delete button is clicked (from FlashCards), delete card from array
                Is also passed from App.jsx
            */}
            {cards.map((c) => (
                <FlashCards key={c[0]} card = {c} deletedCard={deletedCard} savedCard={saveEditedCard}/>
            ))}
            
        </div>
        
    ) 
}


