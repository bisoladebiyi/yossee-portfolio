import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/icons8-menu (1).svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <Link to="/"><p>
                    AY
               </p></Link>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/my-works">my works</Link></li>
                    <li><Link to="/about">about me</Link></li>
                </ul>
                <button className="menu"><img src={menu} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar
