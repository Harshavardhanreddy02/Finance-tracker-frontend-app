import React from 'react'
import Header from '../components/Header'
import StatCard from '../components/Statcard'
import Transaction from '../components/Transaction'
import PieChart from '../components/Piechart'
import Goalbox from '../components/Goalbox'
function Dashboard() {
  return (
  <>
     <Header/>

     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Balance" value="$4,499.50" subtitle="Your current available balance" icon="💳" />
        <StatCard title="Total Income" value="$5,000.00" subtitle="Income this month" icon="💰" />
        <StatCard title="Total Expenses" value="$500.50" subtitle="Expenses this month" icon="💸" />
      </div>
        

         <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Transaction />
        </div>
        <div className="space-y-4">
          <PieChart />
         <Goalbox />
        </div>
      </div>

  </>
 )
}

export default Dashboard