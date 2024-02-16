import React from 'react';
import './About.css';
import profilePic from '../profile-pic.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="profile-pic-container">
                <img src={profilePic} alt="Abhay Tiwari"/>
            </div>
            <div className="home-content">
                <div className="home-intro">
                    <h1 className="home-title">About Me</h1>
                    <h3 className="home-subtitle">My introduction</h3>
                    <p className="home-description">
                        Hey there! 👋 I'm Abhay Tiwari, a 19-year-old Computer Science undergraduate with a passion for Software Development, specifically in MERN Stack. Currently, I'm embarking on my journey as a MERN Stack Developer 👨🏻‍💻. I'm a fresher, eager to explore new opportunities and face challenges in my field. This is my enthusiastic pursuit, and each day, I strive to learn and grow, aiming to make a meaningful impact. 🚀
                    </p>
                    <a href="/contact" className="button button--primary">
                        Resume
                    </a>
                </div>
            </div>
        </div>);
};

export default Home;
