import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import Logo from './components/Logo/Logo'
import Header from './components/Header/Header'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className='ttr'>
      <Header />
      <main className='ttr-body'>
        <Match exactly pattern='/' component={Logo} />
        <Match exactly pattern='/about' component={() => <h1>ABOUT!!</h1>} />
        <Match exactly pattern='/game' component={() => <h1>LET'S PLAY A GAME!!</h1>} />
        <Miss component={Logo} />
      </main>
    </div>
  </BrowserRouter>
)

export default App
