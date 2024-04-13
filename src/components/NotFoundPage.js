// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>We're sorry, the page you requested could not be found.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default NotFoundPage;

