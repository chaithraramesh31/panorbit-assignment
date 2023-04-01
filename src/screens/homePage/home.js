import React from 'react';
import './home.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';
import Gallery from '../galleryPage/gallery';
import Posts from '../postsPage/posts';
import Profile from '../profilePage/profile';
import Todo from '../todoPage/todo';

export default function Home() {
  return (
    <BrowserRouter>
      <div className='main-body'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/todo' element={<Todo/>}/>
        </Routes>
      </div>        
    </BrowserRouter>
  )
}
