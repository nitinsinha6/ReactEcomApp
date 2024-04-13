// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Our eCommerce Site</h1>
            <p>Explore our wide range of products!</p>
            <Link to="/products">Shop Now</Link>
        </div>
    );
}

export default HomePage;
