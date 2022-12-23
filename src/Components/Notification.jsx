import React, { useState,useEffect } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
const Notification = ({message}) => {
  const [isactive, setisactive] = useState(false);

  const handleClose=()=>{
    setisactive(false)
  }
  useEffect(()=>{
      if(message.length>2){
          setisactive(true)
      }
  },[message])
  return (
    <div className='absolute top-5 right-3'>
        <div>   
            {isactive?<div className='flex  items-center space-x-4 justify-between bg-blue-900 rounded-md p-2  shadow-md '>
                <h1 className='text-sm '>{message}</h1>
                <div className='text-gray-200'>
                    <button onClick={handleClose} className='flex  items-center hover:bg-orange-600 p-1 rounded-full'>
                    <AiFillCloseCircle/>
                    </button>
                </div>
            </div>:<></>}
        </div>
    </div>
  )
}

export default Notification