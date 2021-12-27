import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about">
      <h3>ABOUT</h3>
      <div className="about-content">
        <div className="img"></div>
        <div>
          <p>
            My name is Adetimilehin Adeyosola Adejumoke.<br/><br/>I am a Nigerian and
            an entry level UX designer.
          </p>
          <p>Like to know more about me?😉</p>
          <Link to="/about"><button>See more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
