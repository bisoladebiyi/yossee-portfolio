import React from 'react'
import headerImg from '../images/image 1 (2).png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div>
                    <p>Hey there!</p>
                    <p>I'm <span>Adetimilehin Adeyosola Adejumoke</span></p>
                    <p>A UX Designer</p>

                </div>
                <figure><img src={headerImg} alt="" /></figure>
                
            </div>
        </div>
    )
}

export default Header
