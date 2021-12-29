import React from 'react'
import { Link } from 'react-router-dom'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'



const Works = () => {
   
    const manual = (e) => {
        let figure = document.querySelector(".fig-1")
        if(e.target.id === "first"){
            figure.setAttribute("style", "margin-left: 0%;")
        }else if(e.target.id === "second"){
            figure.setAttribute("style", "margin-left: -20%;")
        }else if(e.target.id === "third"){
            figure.setAttribute("style", "margin-left: -40%;")
        }else if(e.target.id === "fourth"){
            figure.setAttribute("style", "margin-left: -60%;")
        }else if(e.target.id === "fifth"){
            figure.setAttribute("style", "margin-left: -82%;")
        }
    }
    return (
        <div className="works">
            <h3>WORKS</h3>
            <div className="work-grid">
                <figure className="fig-1"><img src={work1} alt="" /></figure>
                <figure><img src={work2} alt="" /></figure>
                <figure><img src={work2} alt="" /></figure>
                <figure><img src={work3} alt="" /></figure>
            </div>
            <div className="controls">
            {/* <button><svg className="arrows" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M352 115.4 331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="#6798a3" class="fill-000000"></path></svg></button> */}
                <button onClick={(e) => manual(e)}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16"><circle  id="first" cx="8" cy="8" r="8" fill="#6798a3" class="fill-000000"></circle></svg></button>
                <button onClick={(e) => manual(e)}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16"><circle id="second" cx="8" cy="8" r="8" fill="#6798a3" class="fill-000000"></circle></svg></button>
                <button onClick={(e) => manual(e)}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16"><circle id="third" cx="8" cy="8" r="8" fill="#6798a3" class="fill-000000"></circle></svg></button>
                <button onClick={(e) => manual(e)}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16"><circle id="fourth" cx="8" cy="8" r="8" fill="#6798a3" class="fill-000000"></circle></svg></button>
                <button onClick={(e) => manual(e)}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16"><circle id="fifth" cx="8" cy="8" r="8" fill="#6798a3" class="fill-000000"></circle></svg></button>
 
               
{/* 
                <button><svg className="arrows" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M160 115.4 180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="#6798a3" class="fill-000000"></path></svg></button> */}
            </div>
            <Link to="/my-works"><button className="more-projects">More Projects</button></Link>
        </div>
    )
}

export default Works
