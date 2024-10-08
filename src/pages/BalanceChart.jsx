import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Rejestracja elementów wykresu
ChartJS.register(ArcElement, Tooltip, Legend);

const BalanceChart = ({ transactions }) => {
  // Filtrujemy przychody i wydatki
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);

  const data = {
    labels: ['Przychody', 'Wydatki'],
    datasets: [
      {
        label: 'Balans',
        data: [income, expense],
        backgroundColor: ['#4caf50', '#f44336'], // Kolory dla przychodów i wydatków
        borderColor: ['#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bilans przychodów i wydatków</h2>
      <Pie data={data} />
    </div>
  );
};

export default BalanceChart;

