import React,{useState,useEffect,useContext} from 'react'
import Messagereceiver from './Messagereceiver'
import Messagesender from './Messagesender'
import MessagesContext from '../MessagesContext'
import RoomContext from '../RoomContext'
const Messagespage = ({socket}) => {
  const {messages,setmessages} =useContext(MessagesContext)
  const {room,setroom}=useContext(RoomContext)
  socket.emit('join_room',{room:room})  
  return (
    <div className='grow p-2 flex flex-col scroll-smooth w-[100%] overflow-auto'>
        {messages&&messages.map((message,index)=>(
         <>
          {message.sender==window.localStorage.getItem('username')?<Messagesender message={message} key={index}/>:<Messagereceiver message={message} key={index}/>}
         </>
        ))}
    </div>
  )
}

export default Messagespage