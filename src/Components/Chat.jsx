import React from 'react';
import bgimage from "../images/bgimage.jpg";
import { FaVideo } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoPersonAddSharp } from "react-icons/io5"
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
  return (  
    // <div>
    //   <div className='flex items-center justify-between  bg-indigo-300'>
    //   <div className='flex gap-2 items-center p-2'>
    //     <img className='h-16 w-16 rounded-full object-cover' src={bgimage} alt="user_avatar" />
    //     <span className='text-gray-500 text-xl '>Joe black</span>
    //   </div>
    //   <div className='flex items-center gap-5 p-5'>
    //       <button className='text-2xl'><FaVideo/></button>
    //       <button className='text-2xl'><IoPersonAddSharp/></button>
    //       <button className='text-2xl'><PiDotsThreeOutlineFill/> </button>
    //   </div>
    //   </div>
    //   <Messages/>
    //   <div>
    //      <Input/>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen">
      <div className='flex items-center justify-between bg-indigo-300 p-4'>
        <div className='flex gap-2 items-center'>
          <img className='h-16 w-16 rounded-full object-cover' src={bgimage} alt="user_avatar" />
          <span className='text-gray-500 text-xl'>Joe Black</span>
        </div>
        <div className='flex items-center gap-8'>
          <button className='text-2xl'><FaVideo /></button>
          <button className='text-2xl'><IoPersonAddSharp /></button>
          <button className='text-2xl'><PiDotsThreeOutlineFill /></button>
        </div>
      </div>
      <Messages />
      <div className="mt-auto h-16"> 
        <Input />
      </div>
    </div>
  );
}

export default Chat;
