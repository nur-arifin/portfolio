import React from 'react'
import CV from '../../assets/cv.pdf'
const cv = () => {
  return (
    <div className="cv">
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default cv
