import React from 'react';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="bg-gradient-to-t from-purple-800 via-indigo-600 to-blue-500 p-8 min-h-screen flex flex-col items-center justify-center text-white font-sans">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-teal-600 mb-4">Money Transfer System</h1>
        
        {/* User Details */}
        <div className="space-y-4 text-center">
          <p className="text-lg">
            <span className="font-semibold">Your Name:</span> John Doe
          </p>
          <p className="text-lg">
            <span className="font-semibold">Your Balance:</span> PKR 50,000
          </p>
        </div>
        
        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <Link to="/transfer">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200">
              Send Money
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
