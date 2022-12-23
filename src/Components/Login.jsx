import React from 'react'
import Signin from './Signin'
import { useState } from 'react';
import Logo from './iconlogo.png'
import axios from 'axios'


const Login = () => {
    const [loginpage, setloginpage] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLoginPage=()=>{
        setloginpage(true)
    }
    const handleLogin=()=>{
        axios.post('https://mernchat-x4vd.onrender.com/login',{username,password}).then(response=>{
            window.localStorage.setItem('token',response.data.token)
            window.localStorage.setItem('username',response.data.username)
            window.localStorage.setItem('id',response.data.id)
        })
        setUsername('')
        setPassword('')
        setTimeout(()=>{
            window.location.href='/'
        },2000)
    }
  return (
    <>
    {loginpage?<>
     <button className='text-blue-900 p-5 hover:text-gray-300' onClick={()=>setloginpage(false)}> back to Login</button>   
    <Signin/>
    </>:
        <div className='relative h-[100vh]'>
        <div className='p-5 flex  items-center justify-between'>
            <div className=''>
               <img src={Logo} alt="" />
            </div>
            <div className='bg-orange-500 p-2 rounded-md hover:bg-orange-300'>
                <a href="https://www.iekdev.netlify.app">
                    contact developer
                </a>
            </div>
        </div>
        <div className='p-5'>
            <h1 className='text-5xl'>
                Chat with friends <span className='text-blue-900 space-x-2'>Anytime</span>
                <br /> <span className=''>& Anywhere</span>
            </h1>

        </div>
        <div className='p-5 '>
            <div className='flex flex-col p-2 space-y-5'>
                <input type="text" placeholder='username' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none'
                    onChange={(e)=>setUsername(e.target.value) } value={username}
                />
                <input type="password" placeholder='password' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none'
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                />
            </div>
            <div className='p-2 flex  items-center space-x-2'>
                <div className='p-2 bg-blue-900 rounded-xl w-fit'>
                    <button className='px-2' onClick={handleLogin}>Login</button>
                </div>
                <div>
                    <button onClick={handleLoginPage} className='hover:text-blue-900'>u don't have an accout?</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <span className='' >made with ❤️ by <a className='text-blue-900' href="mailto:imadeddinekebourlite@gmail.com">imadeddine kebour</a></span>
            </div>
        </div> 
       
        
    </div>
    }
    </>
    
  )
}

export default Login