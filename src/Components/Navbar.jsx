import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-400 h-16 items-center'>
      <span className='p-2 font-bold text-xl mx-2'>we-chat</span>
      <div className=' flex gap-5 items-center p-2 text-lg'>
        <span className='font-light'>Aryan</span>
        <img className='h-5 rounded-full' src="https://cdn.iconscout.com/icon/free/png-256/free-user-1648810-1401302.png" alt="user_icon_photo" />
        <button className="text-xs p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Logout</button>
      </div>
    </div>
  )
}

export default Navbar