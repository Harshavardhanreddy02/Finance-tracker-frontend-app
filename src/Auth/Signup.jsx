import React from 'react'
import { Link } from 'react-router'

function Signup() {
  return (
    <>
     <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Sign up</h2>
        <form className="space-y-4">
           <input className="w-full p-2 border rounded" type="password" placeholder="Full Name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
            Register
          </button>
        </form>
        <div className='m-3 underline'>Alreday a Register?   <Link to='/signin' className='w-full hover:text-blue-800 cursor-pointer'>SignIn</Link></div>
      </div>
    </div>
    
    </>
  )
}

export default Signup