import React from 'react'
import "./Home.css"
import Header from '../components/Header'
import Stories from '../components/Stories'
import Body from '../components/Body'



const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <Stories />
            <Body />
        </div>
    )
}

export default Home
