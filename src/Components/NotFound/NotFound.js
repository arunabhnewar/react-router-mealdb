import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="error-found">404</h1>
            <span>Your page is not found</span>
        </div>
    );
};

export default NotFound;