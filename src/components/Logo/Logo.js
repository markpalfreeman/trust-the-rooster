import React from 'react'
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
      <a href='#' className='logo-rooster'>
        <img className='rooster-img' src={rooster} alt='Rooster graphic' />
      </a>
    </div>
  )
}

export default Logo
