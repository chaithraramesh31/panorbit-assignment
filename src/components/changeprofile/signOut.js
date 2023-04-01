import React from 'react';
import './signOut.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setSelectedUser } from '../../stores/reducers/users';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function SignOut() {

    const signoutRef = useRef(null);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const selectedUser = useSelector((state) => state.users.selectedUser);
    const navigate = useNavigate();

    const handleChangeUser = (user) => {
        dispatch(setProfile(false));
        dispatch(setSelectedUser(user));
    }

    const handleSignOut = () => {
        dispatch(setProfile(false));
        navigate('/');
        dispatch(setSelectedUser(null));
    }

    const handleClickOutside = (event) => {
        if(signoutRef.current && !signoutRef.current.contains(event.target)){
            dispatch(setProfile(false));
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[])

  return (
    <div>
        <div className='signout-box' ref={signoutRef}>
            <div className='imgBx'>
                <img src={selectedUser.profilepicture} alt={selectedUser.name}/>
            </div>
            <h4>{selectedUser.name}</h4>
            <p className='email'>{selectedUser.email}</p>
            <div className='users-list'>
                {users.map((user)=>(
                    <div key={user.id} className='users' onClick={()=>handleChangeUser(user)}>
                    <div className='imgBox'>
                        <img src={user.profilepicture} alt={user.name}/>
                    </div>
                    <p>{user.name}</p>
                    </div>
                ))}
            </div>
            <div className='sign-out-btn' onClick={()=>handleSignOut()}>Sign out</div>
        </div>
    </div>
  )
}
