
import FlashCards from './Flashcard';
import './App.css';

// Main Feature: View all Flashcards 
// Takes cards as a parameter when used by other files
export default function ViewCards({cards, deletedCard}) {

    return (
        <div>
            {/* For each c in cards, create a flashcard using card's data. 
                Where each c contains a question and an answer
            */}
            {cards.map((c) => (
                <FlashCards key={c.id} card = {c}/>
            ))}
            
            {/* For each c in cards that matches with selected deleted card,
                delete from cards collection
            */}
            {cards.map((c) => (
                <FlashCards key={c.id} card= {c} deletedCard={deletedCard}/>
            ))}
        </div>
        
    ) 
}


