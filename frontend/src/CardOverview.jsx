
import FlashCards from './Flashcard';
import './App.css';

// Function: View all Flashcards 

export default function ViewCards({cards}) {

    // same as for each c in cards, create a flashcard using card's data
    // c passes individual question and answer
    return (
        <div>
            {cards.map((c) => (
                <FlashCards key={c.id} card = {c}/>
            ))}
        </div>
        
    ) 
}


