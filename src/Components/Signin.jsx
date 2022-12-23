import React,{useState} from 'react'
import axios from 'axios'
import Notification from './Notification';
const Signin = () => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('')
    const [registermessage, setregistermessage] = useState('');
    const handleSignup=()=>{
        setregistermessage('')
        axios.post('https://mernchat-x4vd.onrender.com/register',{username,password,email}).then(response=>{  
        setregistermessage(response.data.message)

        })
        
        setusername('')
        setPassword('')
        setemail('')
    }
    
  return (
    <div className='flex flex-col w-[100%] items-center h-[100vh] justify-center '>
            <div className='text-xl text-blue-900  '>
                Create an account
            </div>
         <div className='p-5 bg-white shadow  rounded-md '>
            <div className='flex flex-col p-2 space-y-5'>
                <input type="text" placeholder='username' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none' 
                    onChange={(e)=>setusername(e.target.value)}
                    value={username}
                />
                <input type="email" placeholder='email' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none' 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                />
        
                <input type="password" placeholder='password' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
            </div>
            
            <div className='p-2 flex  items-center space-x-2'>
                <div className='p-2 bg-blue-900 hover:bg-blue-800 rounded-xl w-fit'>
                    <button className='px-2 ' onClick={handleSignup}>Sign Up</button>
                </div>
                
            </div>
        </div> 
        <div className='flex justify-center'>
            <span className='' >made with ❤️ by <a className='text-blue-900' href="mailto:imadeddinekebourlite@gmail.com">imadeddine kebour</a></span>
        </div>
        <Notification message={registermessage}/>
    </div>
  )
}

export default Signin