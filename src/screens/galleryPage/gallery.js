import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeProfile from '../../components/changeprofile/changeProfile';
import SignOut from '../../components/changeprofile/signOut';
import Chat from '../../components/chatbox/chat';
import { setProfile } from '../../stores/reducers/users';
import './gallery.css'

export default function Gallery() {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.users.profile);

  useEffect(()=>{
    dispatch(setProfile(false));
  },[])

  return (
    <div className='gallery-container'>
      <div className='header'>
        <h4>Gallery</h4>
        <ChangeProfile/>
      </div>
      {profile ? <SignOut/> : null}
      <div className='coming-soon'>Coming Soon</div>
      <Chat/>
    </div>
  )
}
