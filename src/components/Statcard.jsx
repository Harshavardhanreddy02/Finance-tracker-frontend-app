import React from 'react'



function Statcard({title,icon,value,subtitle}) {


  return (
    <>
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm text-gray-500 font-medium">{title}</h2>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
    
    </>
  )
}

export default Statcard