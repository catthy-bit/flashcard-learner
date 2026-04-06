
import { useState } from 'react';
import './Flashcard.css'; 

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
    
}

