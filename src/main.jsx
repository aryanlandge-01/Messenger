import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    
]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
