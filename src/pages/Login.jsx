import React, { useState } from 'react';
import { Client, Account } from 'appwrite'; // Import Appwrite modules
import { useNavigate,Link } from 'react-router-dom';


const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('65853296578eb163bc3b');                 // Your project ID

const account = new Account(client);



const Login = () => {
 
   
  const [errormsg,setErrormsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // Create a new user account session
      const response = await account.createEmailSession(email, password);
      console.log(response); // Success - you may want to redirect the user or perform additional actions here
      navigate("/home")
    } catch (error) {
      console.error(error); // Failure - handle errors gracefully, display an error message, etc.
      setErrormsg(error)
    }
  };

  return (
    <div className="bg-blue-100 p-6 max-w-md mx-auto rounded-md shadow-md mt-20">
      <div className="text-center mb-4 text-3xl font-semibold text-blue-600">We-Chat</div>
      <div>
        <span className="text-center block text-sm text-gray-600">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" className="w-full py-2 px-4 mt-2 rounded-md border focus:outline-none focus:border-blue-500" placeholder="Email" />
          <input type="password" className="w-full py-2 px-4 mt-2 rounded-md border focus:outline-none focus:border-blue-500" placeholder="Password" />
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file" className='w-full py-2 px-2 flex gap-3 mt-2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIjFamqWpnkxWnbpe0bDdsTc_gfabnPelm2R1MW2uUw&s" className='h-7 ml-3' alt="addimage" />
            add image
          </label>
          <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Login
          </button>
          <p>{errormsg}</p>
        </form>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an Account?
      <Link to={"/"}>
        <span className="text-blue-500">Sign_up</span>
      </Link>
      </p>
    </div>
  );
};

export default Login;
