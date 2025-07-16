import React from 'react'
import Header from '../components/Header'
import StatCard from '../components/Statcard'
function Dashboard() {
  return (
  <>
     <Header/>

     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Balance" value="$4,499.50" subtitle="Your current available balance" icon="💳" />
        <StatCard title="Total Income" value="$5,000.00" subtitle="Income this period" icon="💰" />
        <StatCard title="Total Expenses" value="$500.50" subtitle="Expenses this period" icon="💸" />
      </div>
  </>
 )
}

export default Dashboard