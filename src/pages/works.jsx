import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import work1 from "../images/omega copy.png";
import work2 from "../images/landing copy.png";

const Works = ({ setNav }) => {
  const ref = useRef()
  useEffect(()=> {
    setNav(true)
   ref.current.scrollIntoView({ behavior : "smooth"})
  },[])
  return (
    <div ref={ref}>
      <div className="work-page">
        <h3>MY WORKS</h3>
        <div className="work-grid">
          <Link to={"/omega-bakery"}><figure>
            <img src={work1} alt="" />
          </figure></Link>
          <Link to="/innovation-landing"><figure>
            <img src={work2} alt="" />
          </figure></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
