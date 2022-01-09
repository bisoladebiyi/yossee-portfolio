import React, { useEffect, useRef } from "react";
import image from "../images/Remini20210718120431905 1.png";
import img from '../images/dot.svg'
import Footer from "../components/footer";

const AboutPage = () => {

  const ref = useRef()
  useEffect(()=> {
   ref?.current.scrollIntoView({ scrollBehavior : "smooth"})
  },[])
  return (
    <div ref={ref}>
      <div className="about-page">
        <h3>ABOUT</h3>
        <div className="about-page-header">
          <img src={image} alt="" />
          <div>
            <p>
              My name is Adetimilehin Adeyosola Adejumoke.
              <br />I am a Nigerian.
              <br />I am an entry level UX designer.
              <br />I love reading, I am also an ardent football fan.
              <br />
              Aside from all that, I also love making people feel good, that’s
              what really drew me to UX design.
              <br />I am also interested in freelance job because it will enable
              me to hone my skills as UX designer with no experience.{" "}
            </p>
          </div>
        </div>
        <div className="education-expertise">
            <div>
                <h4>Education:</h4>
                <ul>
                    <li><img src={img} alt="" />Undergraduate, OAU (Electrical and electronics Engineering).</li>
                    <li><img src={img} alt="" /><p>Google UX course from coursera <a href="#">See certificate</a></p></li>
                </ul>

            </div>
            <div>
            <h4>Expertise:</h4>
                <ul>
                    <li><img src={img} alt="" />Python</li>
                    <li><img src={img} alt="" />C++</li>
                    <li><img src={img} alt="" />Proof reading</li>
                </ul>
            </div>
        </div>
        <div className="get-in-touch">
            <h3>Let's work together!</h3>

                <p>Reach out to me via email or other social media networks. Let's create magic 💪</p>
                <a href="mailto:adeyosola7@gmail.com">Send email</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
