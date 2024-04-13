import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li> <li>
                <Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                </ul>
                </nav>
         {/* Route configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
