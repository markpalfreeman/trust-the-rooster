import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import Rooster from '../../components/Rooster/Rooster'

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
        {<Rooster fill='#CA3A36' />}
      </Link>
    </div>
  )
}

export default Logo
