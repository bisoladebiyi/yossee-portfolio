import React, { useEffect, useRef } from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import Header from '../components/header'
import Works from '../components/works'

const Home = () => {
    const ref = useRef()
    useEffect(()=> {
     ref.current.scrollIntoView({ behavior : "smooth"})
    },[])
    
    return (
        <div className="container" ref={ref}>
            <Header />
            <Works />
            <About />
            <Footer />
        </div>
    )
}

export default Home
