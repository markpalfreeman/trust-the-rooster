import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import rooster from '../../img/rooster.svg'

const Logo = () => {
  return (
    <div className='logo'>
      <div className="logo-box">
        <h1 className='logo-title'>
          <span>Trust</span>
          <span>the</span>
          <span>Rooster</span>
        </h1>
      </div>
      <Link to='/game' className='logo-rooster'>
        <img className='rooster-img' src={rooster} alt='Rooster graphic' />
      </Link>
    </div>
  )
}

export default Logo
