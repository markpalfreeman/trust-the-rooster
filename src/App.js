import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import Header from './components/Header/Header'
import About from './components/About/About'
import Game from './components/Game/Game'
import './App.css'

const App = () => (
  <Router>
    <div className='ttr'>
      <Header />
      <main className='ttr-body'>
        <Switch>
          <Route exact path='/' component={Logo} />
          <Route path='/about' component={About} />
          <Route path='/game' component={Game} />
          <Route component={Logo} />
        </Switch>
      </main>
    </div>
  </Router>
)

export default App
