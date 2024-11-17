import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1><black>SKILL </black><bold color = 'black'>LAB</bold></h1> 
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h2>Bienveue</h2>
      </div>
      <div class="box">
        <h2>Heureux de te revoir!</h2>
        <p>CONNECTIONS</p>
      </div>
      <div class="box">
        <h2>C'est ta premiére fois ??</h2>
        <p>Inscription</p>
      </div>
     
    </>
  )
}

export default App
