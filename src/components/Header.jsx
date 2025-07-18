// components/Header.jsx
import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { cleartransaction  } from '../redux/feautures/transaction';
import { cleargoals } from '../redux/feautures/Goal';
import { useDispatch } from 'react-redux';


export default function Header() {
   const [showMenu, setShowMenu] = useState(false);
   const dispatch = useDispatch();

      const handleResetAll = () =>
      {
             if(window.confirm("Are you sure you want to clear data"))
              dispatch(cleartransaction());
              dispatch(cleargoals());
              localStorage.removeItem('state');
                  }

                  


  return (<>
    <header>
      <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 relative">
      <h1 className="text-xl font-bold">Finance Tracker</h1>

      {/* Settings Button */}
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
        >
          ⚙ Settings
        </button>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg border">
            
            <button
              onClick={handleResetAll}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer" 
            >
              Clear Data
            </button>
          </div>
        )}
      </div>
    </div>
     
    </header>
    </>
  );
}
