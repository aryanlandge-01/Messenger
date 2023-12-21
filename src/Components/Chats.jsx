import React from 'react'

const Chats = () => {
  return (
    <div>
      <div className="flex items-center p-3 gap-4 bg-indigo-300 border border-b-2 ">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src="https://images.pexels.com/photos/3410361/pexels-photo-3410361.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="User Avatar"
      />
      <div className=' text-white'>
        <span className="text-xl font-semibold">Display Name</span>
        <p className='text-gray-500 '>hello</p>
      </div>
    </div>
  
    </div>
  )
}

export default Chats