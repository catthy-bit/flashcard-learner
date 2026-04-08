
import { useState } from 'react';
// Function: Create card

export default function AddFlashcard({addCard}) {
    // Initialises states
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // Makes flashcards that contain question and answer
    const makeFlashcard = () => {
        if (question.trim() && answer.trim()) {
            addCard(question, answer); //sent to App.jsx
            setQuestion('');
            setAnswer('');
        }
    }

    return (
        <div className="flashcard-wrapper">
            <input 
                value = {question}
                onChange = {(e) => setQuestion (e.target.value)}
                placeholder="Type your question here"
                className="question-input"
            />

            <input
                value = {answer}
                onChange = {(e) => setAnswer (e.target.value)}
                placeholder="Type your answer here"
                className="answer-input"
            />
            <button className="add-btn" onClick={makeFlashcard}>Add Card</button>
        </div>
    )
    
}

