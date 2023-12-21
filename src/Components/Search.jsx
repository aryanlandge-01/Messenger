import React from 'react'

const Search = () => {
  return (
    <div>
      <div className='inline-flex w-full border border-b-stone-800'>
        <input type="text" placeholder='Find a user' className='outline-none shadow-lg  w-full p-4 '/>
        <button className='p-4 bg-blue-500 opacity-80' >🔎</button>
      </div>
      <div className="flex items-center p-3 gap-4 bg-indigo-300 border border-b-2 ">
      <img
        className="h-16 w-16 rounded-full object-cover"
        src="https://images.pexels.com/photos/3410361/pexels-photo-3410361.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="User Avatar"
      />
      <div>
        <span className="text-xl font-semibold text-white">Display Name</span>
      </div>
    </div>
    </div>
  )
}

export default Search