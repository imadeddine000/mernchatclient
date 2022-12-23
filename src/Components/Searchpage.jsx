import React,{useState,useEffect} from 'react'
import Addfriend from './Addfriend'
import axios from 'axios'
const Searchpage = ({search}) => {
  const [users, setusers] = useState([]);
  useEffect(()=>{
    axios.post('https://mernchat-x4vd.onrender.com/search').then(response=>{
        setusers(response.data)
    })
  },[search])
  return (
    <div className='absolute flex w-[100%] md:w-[39%]'>
          <div className=' bg-white shadow grow p-4 rounded-md mt-20 m-2' >
          {users&&users.map((user,index)=>(
            user.username.includes(search)?<Addfriend user={user} key={index}/>:<></>
            ))}
          </div>
        
    </div>
  )
}

export default Searchpage