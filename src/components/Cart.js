// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

// Simulated cart data
const cartItems = [
    { id: '1', name: 'Product 1', quantity: 2, price: 20.00 },
    { id: '2', name: 'Product 2', quantity: 1, price: 40.00 },
];

function Cart() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/products">Continue Shopping</Link>
        </div>
    );
}

export default Cart;
