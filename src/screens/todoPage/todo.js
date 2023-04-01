import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todo.css';
import ChangeProfile from '../../components/changeprofile/changeProfile';
import SignOut from '../../components/changeprofile/signOut';
import Chat from '../../components/chatbox/chat';
import { setProfile } from '../../stores/reducers/users';

export default function Todo() {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.users.profile);

  useEffect(()=>{
    dispatch(setProfile(false));
  },[])

  return (
    <div className='todo-container'>
      <div className='header'>
        <h4>ToDo</h4>
        <ChangeProfile/>
      </div>
      {profile ? <SignOut/> : null}
      <div className='coming-soon'>Coming Soon</div>
      <Chat/>
    </div>
  )
}
