import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pobieramy listę zarejestrowanych użytkowników z localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
      handleLogin(username);  // Logowanie
      navigate('/');          // Przekierowanie do głównej strony po zalogowaniu
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło');
    }
  };

  return (
    <div>
      <h2>Logowanie</h2>
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
        <button type="submit">Zaloguj się</button>
      </form>
      <p>Nie masz konta? <a href="/register">Zarejestruj się</a></p>
    </div>
  );
};

export default LoginPage;

