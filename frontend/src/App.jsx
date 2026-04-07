
import {useState} from 'react';
import AddFlashcard from './AddFlashcard';
import ViewCards from './CardOverview';
import './App.css';

export default function App() {

  const [allCards, setAllCards] = useState([]);

  //for switching between viewing all cards and adding new card to deck
  const [isSwitched, setIsSwitched] = useState(false); 
  //if isSwitched == true -> View all
  //if isSwitched == false -> Add new flashcard

  const handleFlashCard = (question, answer) => {
    setAllCards([...allCards, {
      id: Date.now(),
      question: question,
      answer: answer,
    }]);
  }

  return (
    <div>
      <button onClick={() => isSwitched(true)}>View All</button>
      <button onClick={() => isSwitched(false)}>Add New Card</button>
      <div className={isSwitched ? 'card-overview' : 'add-new-flashcard'}>
        {isSwitched ? <ViewCards cards={allCards}></ViewCards> : <AddFlashcard addCard={handleFlashCard}></AddFlashcard>}
      </div>
    </div>
  ) 

   

    /*
     <div className="flashcard-features">

    </div>
    <div className="flashcard-features">
      <AddFlashcard addCard={handleFlashCard}></AddFlashcard>
      
      <div className="show-all-cards">
        <ViewCards cards={allCards}></ViewCards>
        <button onClick={allCards}>View All</button>
      </div>

    </div>*/
 

  

}

/*
function App({addCard, cards}) {
  
  const [cards, setCards] = useState([]);



  return (


  )

  

}
  */



/*
const [viewAll, setViewAll] = useState([]); // view all cards stored in the list
  const [makeCard, setMakeCard] = useState(null);
  const [flipCard, setFlipCard] = useState(null); // reveals answer when clicked


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/