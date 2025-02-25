import { Link } from 'gatsby';
import React from 'react';
import {useLocation} from '@reach/router';
import '../styles/global.css';

export default function Navbar() {
  const location = useLocation();
  return (
    <nav>
        {/* <h1>Web Portfolio</h1> */}
        <div className='links'>
         <Link to='/' className={location.pathname === '/' ? 'active': ''}>Inicio</Link>      
         <Link to='/projects' className={location.pathname === '/projects/' ? 'active': ''}>Portfolio</Link> 
         <Link to='/about' className={location.pathname === '/about/' ? 'active': ''}>Currículum</Link>  
        </div>
    </nav>
  )
}
