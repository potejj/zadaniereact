import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <span>{transaction.name} ({transaction.date})</span>
          <span>{transaction.type === 'przychód' ? '+' : '-'}{Math.abs(transaction.amount)} zł</span>
          <button onClick={() => deleteTransaction(transaction.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;

