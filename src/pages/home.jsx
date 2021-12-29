import React from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import Header from '../components/header'

import Works from '../components/works'

const Home = () => {
    
    return (
        <div className="container">
            <Header />
            <Works />
            <About />
            <Footer />
        </div>
    )
}

export default Home
