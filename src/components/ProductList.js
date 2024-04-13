// src/components/ProductList.js
import React from 'react';
import { products } from '../data/products.js'; 
import './ProductList.css'; 

function ProductItem({product}){
    return(
        <div className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

function ProductList() {
    return (
        <div className="product-list">
            {products.map(product => <ProductItem key={product.id} product={product} />)}
        </div>
    );
}

export default ProductList;
