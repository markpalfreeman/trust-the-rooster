import React from 'react'
import { BrowserRouter, Link, Match, Miss } from 'react-router'
import Logo from './components/Logo/Logo'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className='ttr'>
      <header>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/game'>Game</Link>
        </nav>
      </header>
      <main>
        <Match exactly pattern='/' component={Logo} />
        <Match exactly pattern='/about' component={() => <h1>ABOUT!!</h1>} />
        <Match exactly pattern='/game' component={() => <h1>LET'S PLAY A GAME!!</h1>} />
        <Miss component={() => <h1>404!!</h1>} />
      </main>
    </div>
  </BrowserRouter>
)

export default App
