import React, {useEffect} from 'react';
import './profile.css'
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../../components/chatbox/chat';
import ChangeProfile from '../../components/changeprofile/changeProfile';
import SignOut from '../../components/changeprofile/signOut';
import { setProfile } from '../../stores/reducers/users';

// import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

export default function Profile() {

    const profile = useSelector((state) => state.users.profile);
    const selectedUser = useSelector((state) => state.users.selectedUser);
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: 'Your API Key',
    // })
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setProfile(false))
    },[])

  return (
    <div className='profile-container'>
        <div className='header'>
            <h4>Profile</h4>
            <ChangeProfile/>
        </div>
        {profile ? <SignOut/> : null}        
        <div className='body'>
            <div className='user-company'>
                <div className='user-body'>
                    <div className='imgBx'>
                        <img src={selectedUser.profilepicture} alt={selectedUser.name}/>
                    </div>
                    <p>{selectedUser.name}</p>
                    <div className='table'>
                        <div>Username :</div>
                        <div>&nbsp;{selectedUser.username}</div>
                        <div>e-mail :</div>
                        <div>&nbsp;{selectedUser.email}</div>
                        <div>Phone :</div>
                        <div>&nbsp;{selectedUser.phone}</div>
                        <div>Website :</div>
                        <div>&nbsp;{selectedUser.website}</div>
                    </div>
                </div>
                <div className='company-body'>
                    <p>Company</p>
                    <div className='table'>
                        <div>Name :</div>
                        <div>&nbsp;{selectedUser.company.name}</div>
                        <div>catchphrase :</div>
                        <div>&nbsp;{selectedUser.company.catchPhrase}</div>
                        <div>bs :</div>
                        <div>&nbsp;{selectedUser.company.bs}</div>
                    </div>
                </div>
            </div>
            <div className='address-body'>
                <p>Address</p>
                <div className='table address'>
                    <div>Street :</div>
                    <div>&nbsp;{selectedUser.address.street}</div>
                    <div>Suite :</div>
                    <div>&nbsp;{selectedUser.address.suite}</div>
                    <div>City :</div>
                    <div>&nbsp;{selectedUser.address.city}</div>
                    <div>Zipcode :</div>
                    <div>&nbsp;{selectedUser.address.zipcode}</div>
                </div>
                <div className='map-image'>
                    <img src={require('./map1.PNG')} alt='map'/>
                </div>
                <div className='ltd-lng'>
                    <div><span>Lat:</span> {selectedUser.address.geo.lat}</div>
                    <div><span>Long:</span> {selectedUser.address.geo.lng}</div>
                </div>                
                {/* { !isLoaded ?
                    <div> Loading...</div>
                    :
                    <div id='map-container'><Map map={selectedUser.address.geo}/></div>
                }                 */}
            </div>
            <Chat/>
        </div>
    </div>
  )
}

// function Map({map}) {
//     const center = {lat:44, lng:-80};
//     return(
//         <GoogleMap zoom={10} center={center} mapContainerClassName='map'>

//         </GoogleMap>
//     );
// }