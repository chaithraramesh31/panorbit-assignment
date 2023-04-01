
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './screens/homePage/home';
import { setSelectedUser } from './stores/reducers/users';
import { fetchUsers } from './stores/utils/thunks';

function App() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);

  useEffect(()=>{
    dispatch(fetchUsers());
  },[])

  const handleSelectedUser = (user) => {
    dispatch(setSelectedUser(user));
  }

  return !selectedUser ? 
  (
    <div className='container'>
      <div className='wave1'></div>
      <div className='wave2'></div>
      <div className='account-container'>
        <h3>Select an account</h3>
        <div className='account-list'>
          {users.map((user)=>(
            <div key={user.id} className='account' onClick={()=>handleSelectedUser(user)}>
              <div className='imgBx'>
                <img src={user.profilepicture} alt={user.name}/>
              </div>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : 
  (
    <Home/>
  );
}

export default App;
