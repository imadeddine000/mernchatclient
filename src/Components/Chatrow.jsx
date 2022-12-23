import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Chatrow = ({friend,id}) => {
  return (
   <>
         <div>
         <div className='flex justify-between px-6 sm:px-1 items-center hover:bg-gray-200 cursor-pointer rounded-md mx-1 sm:mx-0 my-4 p-1 sm:p-1'>
             <div className='h-10 w-10 bg-gray-200  border-2 border-violet-900 flex justify-center items-center rounded-full'>
                <h1>
                    {friend.username[0].toUpperCase()}
                </h1>
             </div>
             <div className=' grow p-1 mx-3 sm:mx-1 md:mx-3'>
                 <h1 className='text-md'>
                     <Link to={"/chat/"+id}>
                         {friend.username}
                     </Link>
                 </h1>
                 <div className='flex items-center'>
                     <p className='text-gray-400 text-xs'>
                          message
                     </p>
                     <p className='text-gray-400 px-3 text-xs'>
                           5m
                     </p>
                 </div>
             </div>
         </div>
     </div>   
   </>
  )
}

export default Chatrow