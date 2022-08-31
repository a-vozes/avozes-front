import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './paginas/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics//footer/Footer';
import Login from './paginas/login/Login';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />

        <div style={{minHeight: '100vh'}}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
      </div>
      
        <Footer />
    </Router>
  );
}

export default App;