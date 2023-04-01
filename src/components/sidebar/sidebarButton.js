import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './sidebarButton.css';

export default function SidebarButton({title,to}) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const btnClass = isActive ? "btn-title active" : "btn-title";

  return (
    <Link to={to}>
        <div className='btn'>
            <p className={btnClass}>{title}</p>
        </div>
    </Link>
  )
}
