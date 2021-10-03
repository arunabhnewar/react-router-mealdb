import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <h5 className="about-details">React Resturant: An open, crowd-sourced database of Recipes from around the world.</h5>
            <h5 className="about-details"> It was found in 2000 to provide a free data source api for recipes online in the hope that</h5>
            <h5 className="about-details">developers would build applications and cool projects on-top of it.React Resturant</h5>
            <h5 className="about-details">originated on the chef forums as a way to browse recipes on your TV.</h5>
        </div >
    );
};

export default About;