import React from 'react'
import CV from'./cv'
import Me from '../../assets/me.png'
import Socials from './header_social'
import './header.css'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nur Arifin</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CV />
        <Socials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
