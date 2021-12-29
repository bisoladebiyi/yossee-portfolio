import React from 'react'
import { Link } from 'react-router-dom'
import close from '../images/close.svg'

const SideMenu = ({show}) => {
    return (
        <div className="side-menu">
            <button onClick={show}><img src={close} alt="" /></button>
            <ul>
                    <li onClick={show}><Link to="/">home</Link></li>
                    <li onClick={show}><Link to="/my-works">my works</Link></li>
                    <li onClick={show}><Link to="/about">about me</Link></li>
            </ul>
            
        </div>
    )
}

export default SideMenu
