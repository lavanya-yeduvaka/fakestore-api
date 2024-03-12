import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css'
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    
  <div className="app-container">
  <div className="responsive-container">
  
    <div className="app-body">
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
      
          <Route path="/product/:id" element={<ProductDetails />} />
        
        </Routes>
      </div>
    </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
