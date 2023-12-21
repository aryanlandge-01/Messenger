import React from 'react';
import { IoAttachOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";


const Input = () => {
  return (
    <div className='flex items-center justify-between cursor-pointer '>
      <input className='w-full h-16 outline-none' type="text" placeholder='type here!' />
      <div className='flex h-16 items-center gap-8 bg-blue-400 text-xl'>
        <span><IoAttachOutline/></span>
        <input type="file" className='hidden' id='file' />
        <label htmlFor="file">
          <FaRegImage/>
        </label>
        <button className='bg-blue-600 h-16 p-2'>Send</button>
      </div>
    </div>
  )
}

export default Input;