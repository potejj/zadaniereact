import React, { useState } from "react";
import "./menu.css"; // Importujemy stylizację
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('user', JSON.stringify(username));
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return (<Router>
    <div className="hamburger-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
        <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
        <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
      </div>
      <nav className={isOpen ? "menu open" : "menu"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><Link to="/register">Rejestracja</Link></li>
          <li><Link onClick={handleLogout}>Wyloguj</Link></li>
          <li><Link to="/login">Logowanie</Link></li>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/budget">Budżet</Link></li>
          <li><Link to="/charts">Wykres wydatków</Link></li>
        </ul>
      </nav>
      <Routes>
            <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
      </Routes>
  </div>
</Router>
  );
    
};

export default HamburgerMenu;

