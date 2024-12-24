import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Transfer(props) {
  const [senderNumber, setSenderNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (amount > props.balance) {
      toast.error('Amount should not be greater than available balance');
      return;
    }

    try {
      const mynumber = props.phone;
      const response = await axios.post('http://localhost:3001/transfer', {
        mynumber,
        senderNumber,
        amount
      });

      toast.success('Successfully Transferred');
      setSenderNumber('');  
      setAmount('');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="bg-gradient-to-t from-blue-600 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">Transfer Money</h2>
        <div className="grid grid-cols-8 gap-0">
          <strong className="col-span-4">Your Available Balance:</strong>
          <p className="text-blue-700 col-span-4 font-semibold">{props.balance} PKR</p>
        </div>
        <form className="space-y-4 mt-4" onSubmit={handlesubmit}>
          {/* Sender Number */}
          <div>
            <label htmlFor="senderNumber" className="block text-gray-700 font-medium mb-1">Enter Sender's Number:</label>
            <input
              id="senderNumber"
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={senderNumber}
              onChange={(e) => setSenderNumber(e.target.value)}
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Transfer Amount */}
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-1">Enter Amount to Send:</label>
            <input
              id="amount"
              type="number"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount in PKR"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-200"
          >
            Send Money
          </button>
        </form>
      </div>
      <ToastContainer theme="light" />
    </div>
  );
}

export default Transfer;
