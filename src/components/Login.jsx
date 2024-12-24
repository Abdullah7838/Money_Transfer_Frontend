import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login(props) {
  const [balance, setbalance] = useState();
  const [name, setname] = useState();
  const [phone, setphone] = useState();

  const navigate = useNavigate();

  const Logincontrol=async(event)=>{
    event.preventDefault();
    let phone = document.getElementById('phone').value;
    let passcode = document.getElementById('passcode').value;
    if (phone && passcode) {
      try {
       const res = await axios.post('http://localhost:3001/login', {phone, passcode });
      //  console.log(res.data.balance);
      props.setName(res.data.name);
      props.setPhone(res.data.phone);
      props.setBalance(res.data.balance);
      navigate('/account');
        // const balance = res.data.balance;
        // const phone1 = res.data.phone;
        // const name = res.data.name;
        // setbalance(balance); 
        // setname(name);
        // setphone(phone1);
      } catch {
        toast.error('Failed to signup. Please check your inputs and try again.');
      }
    } else {
      toast.error('All fields are required');
    }
  }
  return (
    <div className="bg-gradient-to-t from-purple-800 via-indigo-600 to-blue-500 border-t-4 border-t-teal-500 p-8  shadow-lg min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-500 mb-4 text-center">Login</h1>
        <form className="space-y-4" onSubmit={Logincontrol}>
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
            Login
          </button>
        </form>
        {/* Signup Link */}
        <p className="text-gray-600 text-sm mt-4 text-center">
          No account yet?{' '}
          <Link to="/signup" className="text-teal-500 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
}

export default Login;
