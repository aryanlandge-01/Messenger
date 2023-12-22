import React, { useState } from 'react';
import { Client, Account, ID ,Storage } from "appwrite";
import { Link, useNavigate } from 'react-router-dom';

const client = new Client()
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('65853296578eb163bc3b');            // Your project ID

const account = new Account(client);  


const Register = () => {

    const [e,setE] = useState('');

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        // const image = e.target[3].value

        try {
            // Create a new user account
            const response = await account.create(ID.unique(),email,password,username);
            console.log(response); // Success
            console.log(image);

            navigate("/home");
        } catch (error) {
            console.error(error); // Failure
            setE(error);
        }
    }
   
 
  return (
    <div className="bg-blue-100 p-6 max-w-md mx-auto rounded-md shadow-md mt-20">
    <div className="text-center mb-4 text-3xl font-semibold text-blue-600">We-Chat</div>
    <div>
      <span className="text-center block text-sm text-gray-600">Register</span>
      <form onSubmit={handleSubmit}>
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
      <p>{e}</p>
      </form>
    </div>
    <p className="mt-4 text-sm text-gray-600">Do you have an account?
       <Link to={"/login"}>
         <span className="text-blue-500">Login</span>
       </Link>
    </p>
  </div>
   
  )
}

export default Register;