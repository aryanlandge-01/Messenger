import React from 'react'

const Message = () => {

  const owner = true;


  return (
    <div  className={`flex ${ owner && 'flex-row-reverse'} items-end text-gray-500 my-4 gap-4 mx-4`} >
      <div>
      <img
        className="h-10 w-10 rounded-full object-cover "
        src="https://images.pexels.com/photos/3410361/pexels-photo-3410361.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="User Avatar"
      />
      <span className='text-xs font-light'>Just now</span>
      </div>
      <section className='flex flex-col items-end gap-5'>  
        <img src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sender_image" />
        <div className={`h-12 max-w-40 rounded-r-lg rounded-bl-3xl  ${owner ? 'bg-blue-300' : 'bg-white'}  `}>
        <p className='text-lg p-3 max-w-40'>Hello</p>   
      </div>
      </section>
    </div>
  )
}

export default Message;