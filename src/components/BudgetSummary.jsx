import React from 'react';

const BudgetSummary = ({ transactions }) => {
  const income = transactions
    .filter(transaction => transaction.type === 'przychód')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter(transaction => transaction.type === 'wydatek')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h2>Podsumowanie</h2>
      <p>Przychody: {income} zł</p>
      <p>Wydatki: {expense} zł</p>
      <p>Saldo: {income - expense} zł</p>
    </div>
  );
};

export default BudgetSummary;

