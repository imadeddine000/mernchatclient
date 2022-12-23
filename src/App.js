import './App.css';
import Chatside from './Components/Chatside';
import Topbar from './Components/Topbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nofriendchosed from './Components/Nofriendchosed';
import Login from './Components/Login';
import {useState,useEffect} from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import MessagesContext from '../src/MessagesContext'
import RoomContext from './RoomContext';
const socket=io('https://mernchat-x4vd.onrender.com')

function App() {
  const [messages,setmessages]=useState([])
  const [isloggedin, setisloggedin] = useState(false);
  const [room, setroom] = useState('');
  
  useEffect(()=>{
    socket.on('receive', (message)=>{
      if(message.message.length>0){
        setmessages(messages=>[...messages,message])
      }
     })
   },[socket])
  
  useEffect(() => {
    const token=window.localStorage.getItem('token')
    const username=window.localStorage.getItem('username')
   axios.post('https://mernchat-x4vd.onrender.com/check',{token,username}).then(response=>{
      setisloggedin(response.data.state)
   })
  }, []);
  return (
   <>
   
  {!isloggedin?<Login/>:<>
  <div className='flex'>
  <BrowserRouter>
    <Topbar/>
    <MessagesContext.Provider value={{messages,setmessages}}>
    <RoomContext.Provider value={{room,setroom}}>
    <Routes>
      <Route exact path='/' element={<Nofriendchosed/>}/>
      <Route exact path ='/chat/:id' element={<Chatside socket={socket}/>}/>
    </Routes>
    </RoomContext.Provider>
    </MessagesContext.Provider>

    </BrowserRouter>
   </div>
  </>}

   </>
  );
}

export default App;
