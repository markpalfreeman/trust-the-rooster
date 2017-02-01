import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import rooster from '../../img/rooster.svg'

const Header = () => {
  return (
    <header className='ttr-header'>
      <nav className='ttr-header-nav'>
        <Link to='/' className='ttr-header-link'>
          <img className='ttr-header-logo' src={rooster} alt='rooster logo' />
        </Link>
        <Link to='/about' className='ttr-header-link'>About</Link>
        <Link to='/game'className='ttr-header-link'>Game</Link>
      </nav>
    </header>
  )
}

export default Header
