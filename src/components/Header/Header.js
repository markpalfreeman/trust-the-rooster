import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Rooster from '../../components/Rooster/Rooster'

const Header = () => (
  <header className='ttr-header'>
    <nav className='ttr-header-nav'>
      <Link to='/' className='ttr-header-link rooster-logo'>
        {<Rooster fill='#FFFFFF'/>}
      </Link>
      <Link to='/about' className='ttr-header-link'>About</Link>
      <Link to='/game'className='ttr-header-link'>Game</Link>
    </nav>
  </header>
)

export default Header
