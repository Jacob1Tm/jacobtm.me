import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

function NotFound() {
    return (
        <div className="NotFound">
        <header className="NotFound-header">
            <h1 className="NotFound-title">404</h1>
            <p className="NotFound-text">Page not found</p>
            <Link to="/" className='NotFound-Link'>
            Go back to home
            </Link>
        </header>
        </div>
    );
}

export default NotFound;