import React from 'react'
import {Link} from 'react-router-dom';
function Main() {
  return (
    <div className='bg-gradient-to-t from-purple-800 via-indigo-600 to-blue-500 border-t-4 border-t-teal-500 p-8 rounded-lg shadow-lg min-h-screen'>
      <div className='bg-gray-700 text-center m-2'>
        <strong className='font-black text-white text-4xl'>Money Trasfer System</strong>
        <p className='text-orange-500 mt-2'>Convinient way to transfer Money</p>
      </div>
      <div className='text-center mt-12'>
      <strong className='text-2xl text-black'>Login to Continue</strong>
      <p><Link to='/login'><button className='bg-blue-800 p-4 pl-8 pr-8 rounded-md text-white mt-4 font-bold border-2 border-black text-xl'>Login</button></Link></p>
      </div>
    </div>
  )
}

export default Main
