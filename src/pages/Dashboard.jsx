import React, { useState } from 'react';
import Header from '../components/Header';
import StatCard from '../components/Statcard';
import Transaction from '../components/forms/Transaction';
import Transactionform from '../components/forms/Transactionform';
import PieChart from '../components/Piechart';
import Goalbox from '../components/Goalbox';
import { useSelector } from 'react-redux';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

    const transactions = useSelector((state) => state.transaction.transaction);

    let income = transactions.filter((t) => t.type === 'income').reduce((acc,t) => acc + t.amount,0)
    let expenses = transactions.filter((t) => t.type === 'expense').reduce((acc,t) => acc +t.amount,0)

  let balance = income - expenses;

  return (
    <>
      <Header />

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Balance" value={balance} subtitle="Your current available balance" icon="💳" />
        <StatCard title="Total Income" value={income} subtitle="Income this month" icon="💰" />
        <StatCard title="Total Expenses" value={expenses} subtitle="Expenses this month" icon="💸" />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {/* Pass onAddClick prop to open modal */}
          <Transaction onAddClick={() => setShowModal(true)} />

          {showModal && <Transactionform onClose={() => setShowModal(false)} />}
        </div>

        <div className="space-y-4">
          <PieChart />
          <Goalbox />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
