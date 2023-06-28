import React from 'react';
import { Link } from 'react-router-dom';
import './styles/About.css';

function About() {
    return (
        <div className="About">
        <header className="About-header">
            <h1 className="About-title">About Me</h1>
            <p className="About-text">Work In Progress</p>
            <Link to="/" className='About-Link'>
            Go back to home
            </Link>
        </header>
        </div>
    );
}

export default About;