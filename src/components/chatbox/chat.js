import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chat.css';
import {IconContext} from 'react-icons';
import {IoChatboxOutline} from "react-icons/io5";
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';
import SubChat from './subChat';
import { setChat, setProfile, setSubChat } from '../../stores/reducers/users';

export default function Chat() {

    const chatRef = useRef(null);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const isActive = useSelector((state)=>state.users.chat);
    const subChat = useSelector((state)=>state.users.subChat);
    const chatClass = isActive ? 'chat-container active' : 'chat-container';
    const handleChat = () => {
        dispatch(setChat(!isActive));
        dispatch(setSubChat(null));
        dispatch(setProfile(false))
    }

    const handleClickOutside = (event) => {
        if(chatRef.current && !chatRef.current.contains(event.target)){
            dispatch(setChat(false));
            dispatch(setSubChat(null));
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[])

  return (
    <div className='main-container' ref={chatRef}>
        <div className={chatClass}>
            <div className='chat-header' onClick={()=>handleChat()}>
                <IconContext.Provider value={{color:'#fff', size:'20px'}}>
                    <div className='chat-icon'><IoChatboxOutline/></div>
                </IconContext.Provider>
                <p>Chats</p>
                <div className='chat-open-close'>
                    {isActive ? <FaChevronDown/> : <FaChevronUp/>}
                </div>
            </div>
            <div className='chat-body'>
                {users.map((user)=>(
                    <div key={user.id} className='chat' onClick={()=>dispatch(setSubChat(user))}>
                        <div className='imgBx'>
                            <img src={user.profilepicture} alt={user.name}/>
                        </div>
                        <p>{user.name}</p>
                        <div className='chat-status'></div>
                    </div>
                ))}
            </div>
        </div>
        {subChat ? <SubChat/> : null}
    </div>
    
  )
}
