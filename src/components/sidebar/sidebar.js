import React from 'react';
import SidebarButton from './sidebarButton';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <SidebarButton title='Profile' to='/'/>
        <SidebarButton title='Posts' to='/posts'/>
        <SidebarButton title='Gallery' to='/gallery'/>
        <SidebarButton title='ToDo' to='/todo'/>
    </div>
  )
}
