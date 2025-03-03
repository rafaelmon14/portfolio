import { Link } from 'gatsby';
import React from 'react';
import {useLocation} from '@reach/router';
import '../styles/global.css';

export default function Navbar() {
  const location = useLocation();
  const basePath = "/portfolio";
  const currentPath = location.pathname.replace(basePath, "").replace(/\/$/, ""); 
  //console.log("current path:", currentPath);
  
  return (
    <nav>
        {/* <h1>Web Portfolio</h1> */}
        <div className='links'>
         <Link to='/' className={currentPath === '' ? 'active': ''}>Inicio</Link>      
         <Link to='/projects' className={currentPath === '/projects' ? 'active': ''}>Portfolio</Link> 
         <Link to='/about' className={currentPath === '/about' ? 'active': ''}>Currículum</Link>  
        </div>
    </nav>
  )
}
