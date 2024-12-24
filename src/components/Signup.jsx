import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const signupnow=async(event)=>{
  event.preventDefault();
  let name  = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let passcode = document.getElementById('passcode').value;
  console.log(name + phone + passcode);
  if(!name || !phone || !passcode){
    toast.error('All fields are required');
    return;
  }
    try{
    await axios.post('/amrood.com//',{name,phone,passcode});
    navigate('/login');
  }
  catch{
    toast.error('Error while saving data');
       }
  }
  return (
    <div className="bg-gradient-to-t from-purple-800 via-indigo-600 to-blue-500 border-t-4 border-t-teal-500 p-8 shadow-lg min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-500 mb-4 text-center">Signup</h1>
        <form className="space-y-4" onSubmit={signupnow}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Enter Your Name:</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Enter Your Number:</label>
            <input
              id="phone"
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          {/* Passcode */}
          <div>
            <label htmlFor="passcode" className="block text-gray-700 font-medium mb-1">Enter Your Passcode:</label>
            <input
              id="passcode"
              type="password"
              placeholder="4 digits passcode"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-teal-600 transition duration-200"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
}

export default Signup;
