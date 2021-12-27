import React from 'react'
import twitter from '../images/icons8-twitter-50.svg'
import behance from '../images/icons8-behance-50.svg'
import linkedin from '../images/icons8-linkedin-50.svg'
import dribble from '../images/icons8-dribbble-50.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="socials">
                <a href="https://mobile.twitter.com/yosi_mite"><img src={twitter} alt="" /></a>
                <a href="https://www.behance.net/0581fd0a"><img src={behance} alt="" /></a>
                <a href="https://ng.linkedin.com/in/adetimilehin-adeyosola-234a14203"><img src={linkedin} alt="" /></a>
                <a href="https://dribbble.com/yossee07"><img src={dribble} alt="" /></a>
            </div>
            <p>©2021 Adetimilehin Adeyosola.</p>
        </div>
    )
}

export default Footer
