import React from 'react'

const Messagereceiver = ({message}) => {
  return (
    <div className='flex space-x-2 items-center m-1 '>
        <div className='bg-gray-200 flex items-center justify-center w-10 h-10  rounded-full'>
            <span className='flex font-bold'>
                {message.sender[0].toUpperCase()}
            </span>
        </div>
        <div className='bg-violet-800 w-fit p-1 rounded-full px-3'>
            <h1 className=''>
                {message.message}
            </h1>
        </div>
    </div>
  )
}

export default Messagereceiver