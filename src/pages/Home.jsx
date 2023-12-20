import React from 'react';
import Sidebar from '../Components/Sidebar';
import Chat from '../Components/Chat';

const Home = () => {
  return (
    <div className='grid grid-flow-col m-10'>
      <div className='grid grid-cols-3'>
      <div className='h-screen bg-blue-300 col-span-1 overflow-hidden rounded-l-lg'>
          <Sidebar />
      </div>
      <div className='bg-blue-600 col-span-2 overflow-hidden rounded-r-lg'>
           <Chat/>
      </div>
</div>

    </div>
  )
}

export default Home