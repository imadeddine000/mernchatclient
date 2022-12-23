import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import axios from 'axios'
const Addfriend = ({user}) => {
    const handleAddUser=(id)=>{
        const username=window.localStorage.getItem('username')
        axios.post('https://mernchat-x4vd.onrender.com/addfriend',{id,username}).then(response=>{
            console.log(response.data.message)
        })
    }
  return (
    <div>
        <div className='flex items-center space-x-2 cursor-pointer hover:bg-blue-100  p-2 rounded-md justify-between'>
           <div className='flex items-center space-x-3'>
           <div className='w-10 h-10 rounded-full bg-orange-400 items-center flex justify-center'>
                <span className=''>
                    {user.username[0].toUpperCase()}
                </span>
            </div>
            <div>
                <h1>
                    {user.username}
                </h1>
            </div>
           </div>
            <div className='flex  items-center'>
                <abbr title="add contact">
                <button className='text-orange-400 text-2xl hover:bg-gray-300 p-2 rounded-full '
                    onClick={()=>handleAddUser(user._id)}
                >
                <AiFillPlusCircle/>
                </button>
                </abbr>
            </div>
        </div>
    </div>
  )
}

export default Addfriend