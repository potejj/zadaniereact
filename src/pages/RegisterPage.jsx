import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sprawdzamy, czy użytkownik już istnieje w localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.username === username);

    if (userExists) {
      setError('Nazwa użytkownika już istnieje');
    } else {
      // Dodajemy nowego użytkownika do localStorage
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Przekierowanie na stronę logowania
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nazwa użytkownika:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Zarejestruj się</button>
      </form>
      <p>Masz już konto? <a href="/login">Zaloguj się</a></p>
    </div>
  );
};

export default RegisterPage;

