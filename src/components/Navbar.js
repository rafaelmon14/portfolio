import { Link } from 'gatsby'
import React from 'react'
import '../styles/global.css'
export default function Navbar() {
  return (
    <nav>
        {/* <h1>Web Portfolio</h1> */}
        <div className='links'>
         <Link to='/'>Inicio</Link>      
         <Link to='/projects'>Portfolio</Link> 
         <Link to='/about'>Currículum</Link>  
        </div>
    </nav>
  )
}
