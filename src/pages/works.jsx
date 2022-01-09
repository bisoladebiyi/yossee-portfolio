import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";

const Works = () => {
  const ref = useRef()
  useEffect(()=> {
   ref?.current.scrollIntoView({ scrollBehavior : "smooth"})
  },[])
  return (
    <div ref={ref}>
      <div className="work-page">
        <h3>MY WORKS</h3>
        <div className="work-grid">
          <figure>
            <img src={work1} alt="" />
          </figure>
          <figure>
            <img src={work2} alt="" />
          </figure>
          <figure>
            <img src={work2} alt="" />
          </figure>
          <figure>
            <img src={work3} alt="" />
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
