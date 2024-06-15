import React, { useState, useEffect } from 'react';
import './App.css'
import Home from './Home';
import './App.css';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="Loja">
      <Home />
    </div>
  );
};

export default App;
