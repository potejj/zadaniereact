import React from 'react';

const Header = ({ user, handleLogout }) => {
  return (
    <header>
      <h1>Budżet Domowy</h1>
      {user && (
        <div>
          <span>Zalogowany jako: {user}</span>
          <li onClick={handleLogout}>  Wyloguj</li>
        </div>
      )}
    </header>
  );
};

export default Header;

