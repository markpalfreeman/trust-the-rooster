import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import Header from './components/Header/Header'
import './App.css'

const App = () => (
  <Router>
    <div className='ttr'>
      <Header />
      <main className='ttr-body'>
        <Switch>
          <Route exact path='/' component={Logo} />
          <Route path='/about' component={() => <h1>ABOUT!!</h1>} />
          <Route path='/game' component={() => <h1>LET'S PLAY A GAME!!</h1>} />
          <Route component={Logo} />
        </Switch>
      </main>
    </div>
  </Router>
)

export default App
