import React from 'react';
import './changeProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { setChat, setProfile, setSubChat } from '../../stores/reducers/users';

export default function ChangeProfile() {

  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  
  const handleProfile = () => {
    dispatch(setProfile(true));
    dispatch(setChat(false));
    dispatch(setSubChat(null));
  }

  return (
    <div>
      <div className='change-profile' onClick={()=>handleProfile()}>
        <div className='imgBx'>
            <img src={selectedUser.profilepicture} alt={selectedUser.name}/>
        </div>
        <p>{selectedUser.name}</p>
      </div>
    </div>
  )
}
