// components/Header.jsx
import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold text-blue-800 ">Personal Stake</h1>
      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
        <button className="p-2 hover:bg-gray-100 rounded">
      <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
    </button>
      </div>
    </header>
  );
}
