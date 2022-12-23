import React,{useState,useContext} from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiThumbUp} from 'react-icons/hi'
import {BiSend} from 'react-icons/bi'
import MessagesContext from '../MessagesContext'
import RoomContext from '../RoomContext'
const Sendmessage = ({socket}) => {
    const [message, setmessage] = useState('');
    const {messages,setmessages}=useContext(MessagesContext)
    const {room,setroom}=useContext(RoomContext)
    const sendMessage=()=>{
        if(message.length>0){
            setmessages(messages=>[...messages,{message:message,sender:window.localStorage.getItem('username'),room:'room1'}])
            socket.emit("send",{message:message,sender:window.localStorage.getItem('username'),room:room})
            setmessage('')
        }
      }
  return (
    <div className='flex p-1 w-[100%]'>
        <div className='flex items-center space-x-0 grow'>
            <div className='flex items-center grow bg-gray-300 rounded-2xl p-1 justify-between'>
                <input className='outline-none bg-gray-300 pl-1 w-[17rem] md:w-[25rem]' type="text" name="" id=""  placeholder='Type a message ...' onChange={(e)=>setmessage(e.target.value)} value={message}/>
                <div className='flex items-center text-xl '>
                    <div className='text-violet-600 text-xl p-1 hover:rounded-full hover:bg-gray-400  cursor-pointer flex jistify-center align-center'>
                        <button onClick={sendMessage} className=''>
                        <BiSend/>
                        </button>
                    </div>
                </div>
                
            </div>
                <div className='text-violet-600 text-2xl cursor-pointer flex items-center '>
                    <button>
                    <HiThumbUp/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Sendmessage