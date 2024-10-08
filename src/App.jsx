import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BudgetPage from './pages/BudgetPage';
import HomePage from './pages/HomePage';
import HamburgerMenu from "./pages/hamburger";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('user', JSON.stringify(username));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        {/* Pasek nawigacyjny */}
        <nav>
          <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/budget">Budżet</Link></li>
                <li><Link to="/charts">Wykres wydatków</Link></li>
                <li> <HamburgerMenu /></li>
          </ul>
        </nav>

        {/* Trasy */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {user ? (
            <Route path="/budget" element={<BudgetPage user={user} handleLogout={handleLogout} />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

