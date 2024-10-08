import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('przychód');
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !amount) {
      alert('Wprowadź poprawne dane');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      name,
      amount: parseFloat(amount),
      type,
      date: new Date().toISOString().slice(0, 10),
    };

    addTransaction(newTransaction);

    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nazwa transakcji</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Kwota</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Typ</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="przychód">Przychód</option>
          <option value="wydatek">Wydatek</option>
        </select>
      </div>
      <button type="submit">Dodaj transakcję</button>
    </form>
  );
};

export default TransactionForm;

