
import {useState} from 'react';

//Function: Flip and dismiss card

export default function FlashCards( { card }) {
    
    const [isFlipped, setIsFlipped] = useState(false);
    const [isUsed, setIsUsed] = useState(false);

    const flipCard = () => {
        setIsFlipped(true);
    }

    const useCard = () => {
        setIsUsed(true);
    }
    
    
    return (
        <div className={isUsed ? 'hide-card' : 'card'}>
            {isFlipped ? card.answer : card.question}
            {isFlipped && <button onClick={useCard}>Done</button>}
        </div>

    )
}