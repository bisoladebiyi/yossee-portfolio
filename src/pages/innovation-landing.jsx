import React, { useRef, useEffect } from 'react'
import landing from '../images/landing2.png'

const Innovation = () => {
    const ref = useRef()
    useEffect(()=> {
     ref.current.scrollIntoView({ behavior : "smooth"})
    },[])
  return (
    <div ref={ref}>
         <div className='innovation'>
            <h1>INNOVATION LANDING PAGE</h1> 
        </div>
        <div className='innovation-image-container'>
            <h1>Full Preview</h1>
            <div className='innovation-image'>
                <img src={landing} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Innovation