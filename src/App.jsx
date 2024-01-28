// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'

let cardArray = [
  {
      id: 1,
      name: "earth",
      img: "earth.svg",
  },
  {
      id: 2,
      name: "jupiter",
      img: "jupiter.svg",
  },
  {
      id: 3,
      name: "mars",
      img: "mars.svg",
  },
  {
      id: 4,
      name: "mercury",
      img: "mercury.svg",
  },
  {
      id: 5,
      name: "saturn",
      img: "saturn.svg",
  },
  {
      id: 6,
      name: "uranus",
      img: "uranus.svg",
  },
  {
      id: 7,
      name: "earth",
      img: "earth.svg",
  },
  {
      id: 8,
      name: "jupiter",
      img: "jupiter.svg",
  },
  {
      id: 9,
      name: "mars",
      img: "mars.svg",
  },
  {
      id: 10,
      name: "mercury",
      img: "mercury.svg",
  },
  {
      id: 11,
      name: "saturn",
      img: "saturn.svg",
  },
  {
      id: 12,
      name: "uranus",
      img: "uranus.svg",
  },
];

function App() {
  

  return <Game cardArray={cardArray}></Game>
}

export default App
