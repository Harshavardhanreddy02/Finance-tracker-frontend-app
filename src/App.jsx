import React from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router'
import Signin from './Auth/Signin'
import Signup from './Auth/Signup'
import Notfound from './Auth/Notfound'

function App() {
 

  return (
    <>

    
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
     
    </>
  )
}

export default App
