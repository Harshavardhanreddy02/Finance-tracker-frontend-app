import React from 'react'

function Signin() {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-50 bg-[url(/login.jpg)]">
      <div className="bg-blue-100 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          Email<input className="w-full p-2 border rounded" placeholder="Email" />
          Password<input className="w-full p-2 border rounded" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
            Sign In
          </button>
        </form>
      </div>
    </div>

    </>
  )
}

export default Signin