import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import BudgetSummary from '../components/BudgetSummary';
import ChartPage from './BalanceChart';

const BudgetPage = ({ user, handleLogout }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions_' + user));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('transactions_' + user, JSON.stringify(transactions));
    }
  }, [transactions, user]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TransactionForm addTransaction={addTransaction} />
              <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
              <BudgetSummary transactions={transactions} />
            </>
          }
        />
        <Route path="/charts" element={<ChartPage transactions={transactions} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default BudgetPage;

