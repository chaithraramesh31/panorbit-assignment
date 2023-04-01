import React from 'react';
import './subChat.css';
import { IoClose } from "react-icons/io5";
import {TiChevronRight} from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux';
import { setSubChat } from '../../stores/reducers/users';

export default function SubChat() {

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.users.subChat);

  return (
    <div className='subChat-container'>
        <div className='subChat-header'>
            <div className='imgBx'>
                <img src={user.profilepicture} alt={user.name}/>
            </div>
            <p>{user.name}</p>
            <div className='close' onClick={()=>dispatch(setSubChat(null))}><IoClose/></div>
        </div>
        <div className='subChat-body'>
            <div className='body-msg'>Lorem ipsum dolor sit amet consectetur</div><br/>
            <div className='body-msg'>Lorem ipsum dolor sit</div><br/>
            <p>9:16 PM</p>
            <div className='body-msg'>Lorem ipsum dolor</div><br/>
            <div className='body-msg'>Lorem ipsum</div>
        </div>
        <div className='subChat-msgbox'>
            <div className='send'><TiChevronRight/></div>
        </div>
    </div>
  )
}
