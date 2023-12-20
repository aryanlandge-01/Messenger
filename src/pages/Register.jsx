import React from 'react'

const Register = () => {
  return (
    <div  className="bg-blue-100 p-6 max-w-md mx-auto rounded-md shadow-md mt-20">
    <div className="text-center mb-4 text-3xl font-semibold text-blue-600">We-Chat</div>
    <div>
      <span className="text-center block text-sm text-gray-600">Register</span>
      <form>
      <input type="text" className=" w-full py-2 px-4 mt-2 rounded-md border focus:outline-none focus:border-blue-500" placeholder="Username"/>
      <input type="email" className="w-full py-2 px-4 mt-2 rounded-md border focus:outline-none focus:border-blue-500" placeholder="Email"/>
      <input type="password" className="w-full py-2 px-4 mt-2 rounded-md border focus:outline-none focus:border-blue-500" placeholder="Password"/>
      <input type="file" id="file" className="hidden" />
      <label htmlFor="file" className='w-full py-2 px-2 flex gap-3 mt-2'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIjFamqWpnkxWnbpe0bDdsTc_gfabnPelm2R1MW2uUw&s" className='h-7 ml-3' alt="addimage" />
         add image
      </label>
      <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
         Sign up
      </button>
      </form>
    </div>
    <p className="mt-4 text-sm text-gray-600">Do you have an account? <span className="text-blue-500">Login</span></p>
  </div>
   
  )
}

export default Register;