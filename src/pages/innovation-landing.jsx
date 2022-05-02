import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import landing from '../images/landing2.png'
import arrow from '../images/211689_left_arrow_icon.svg'

const Innovation = ({ setNav }) => {
    const ref = useRef()
    useEffect(()=> {
      setNav(false)
     ref.current.scrollIntoView({ behavior : "smooth"})
    },[])
  return (
    <div ref={ref}>
        <div className='innovation-image-container'>
            <h1>Full Preview</h1>
            <div className='innovation-image'>
                <img src={landing} alt="" />
            </div>
            <div className="back-to-home">
          <Link to="/"><button className="back-to-home-button">
            <img src={arrow} alt="" />
          </button></Link>
          <p className="back-to-home-text">Back to home</p>
        </div>
        </div>
       
    </div>
  )
}

export default Innovation