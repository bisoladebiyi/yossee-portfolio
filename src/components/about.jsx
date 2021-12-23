import React from "react";
import image from "../images/Remini20210718120431905 1.png";

const About = () => {
  return (
    <div className="about">
      <h3>ABOUT</h3>
      <div className="about-content">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div>
          <p>
            My name is Adetimilehin Adeyosola Adejumoke.<br/><br/>I am a Nigerian and
            an entry level UX designer.
          </p>
          <p>Like to know more about me?</p>
          <button>See more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
