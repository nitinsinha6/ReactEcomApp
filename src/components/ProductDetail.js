// src/components/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example data
const products = [
    { id: '1', name: 'Product 1', description: 'This is a great product', price: 20.00 },
    { id: '2', name: 'Product 2', description: 'This is an even better product', price: 40.00 },
];

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to="/products">Back to Products</Link>
        </div>
    );
}

export default ProductDetail;
