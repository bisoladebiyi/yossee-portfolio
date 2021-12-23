import React from 'react'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'


const Works = () => {
    return (
        <div className="works">
            <h3>WORKS</h3>
            <div>
                <figure><img src={work1} alt="" /></figure>
                <figure><img src={work2} alt="" /></figure>
                <figure><img src={work2} alt="" /></figure>
                <figure><img src={work3} alt="" /></figure>
            </div>
            <button>More Projects</button>
        </div>
    )
}

export default Works
