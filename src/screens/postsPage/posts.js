import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './posts.css';
import ChangeProfile from '../../components/changeprofile/changeProfile';
import SignOut from '../../components/changeprofile/signOut';
import Chat from '../../components/chatbox/chat';
import { setProfile } from '../../stores/reducers/users';

export default function Posts() {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.users.profile);

  useEffect(()=>{
    dispatch(setProfile(false))
  },[])

  return (
    <div className='post-container'>
      <div className='header'>
        <h4>Posts</h4>
        <ChangeProfile/>
      </div>
      {profile ? <SignOut/> : null}
      <div className='coming-soon'>Coming Soon</div>
      <Chat/>
    </div>
  )
}
