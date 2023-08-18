import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blue from './colors/Blue'; 
import Red from './colors/Red';   
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/colors/Blue'>Blue</Link>
          <Link to='/colors/Red'>Red</Link>
        </div>
        <div id="main-section">
          <Route exact path='/' element={<Home />} />
          <Route path='/colors/Blue' element={<Blue />} />
          <Route path='/colors/Red' element={<Red />} />
        </div>
      </div>
    </Router>
  );
};

export default App;
