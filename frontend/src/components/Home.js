import React from 'react';
import './Home.css';
import profilePic from '../profile-pic.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-intro">
                    <h1 className="home-title">Hi, I'm Abhay</h1>
                    <h3 className="home-subtitle">I'm a MERN Stack Developer</h3>
                    <p className="home-description">
                        Building Software to solve real-life problems.
                    </p>
                    <a href="/contact" className="button button--primary">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="profile-pic-container">
                <img src={profilePic} alt="Abhay Tiwari"/>
            </div>
        </div>);
};

export default Home;
