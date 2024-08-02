import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub , FaFacebook } from 'react-icons/fa'
const header_social = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub/></a>
      <a href="https://facebook.com" target='_blank' rel="noreferrer"><FaFacebook/></a>
    </div>
  )
}

export default header_social
