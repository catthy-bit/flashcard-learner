
import {useState} from 'react';
import './Flashcard.css';

export default function FlashCards( { card, deletedCard, savedCard}) {
    
    const [isFlipped, setIsFlipped] = useState(false);
    const [isUsed, setIsUsed] = useState(false);

    const [isEdited, setIsEdited] = useState(false);
    const [editQuestion, setEditQuestion] = useState('');
    const [editAnswer, setEditAnswer] = useState('');

    const flipCard = () => {
        setIsFlipped(true);
    }

    const useCard = () => {
        setIsUsed(true);
    }

    const editCard = () => {
        setIsEdited(true);
        setEditQuestion(card.question);
        setEditAnswer(card.answer);
    }

    const saveEditedCard = () => {
        setIsEdited(false);
        savedCard(card.id, editQuestion, editAnswer);
    }

    const cancelEditedCard = () => {
        setIsEdited(false);
    }
    
    return (
        // Role 1: If true, card input can be edited and saved or, edited and cancelled
        // Role 2: Clicking on the card flips its and shows question
        <div className="flashcard-container">
            <div className={isEdited ? 'edit-input' : 'leave-input'}>
                {isEdited && 
                    <input 
                        value={editQuestion}
                        onChange = {(e) => setEditQuestion (e.target.value)}
                        className="edit-question-input"
                    />
                }

                {isEdited && 
                    <input 
                        value={editAnswer}
                        onChange = {(e) => setEditAnswer (e.target.value)}
                        className="edit-answer-input"
                    />
                }

                {isEdited && 
                    <div>
                        <button className="save-btn" onClick={saveEditedCard}>Save</button>
                        <button className="cancel-btn" onClick={cancelEditedCard}>Cancel</button>
                    </div>
                }
            </div> 

            
            {!isEdited && 
                <div className={isUsed ? 'hide-card' : 'card'} onClick={flipCard}>
                    {isFlipped ? card.answer : card.question}
                    {isFlipped && <button className="done-btn" onClick={useCard}>Done</button>}
                    
                    {!isUsed &&
                    <div>
                        <button className="edit-btn" onClick={editCard}>Edit Card</button>
                        <button className="delete-btn" onClick={() => deletedCard(card.id)}>Delete</button>
                    </div>
                    }

                </div>
            }
               
        </div>

    )
}