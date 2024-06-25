import React, { useState } from 'react'
import "./Navbar.scss"
import {Link} from 'react-router-dom'
export default function Navbar() {
  const[open , setopen] = useState(false);
  const[open1 , setopen1] = useState(false);
  const handleclick = ()=>{
    setopen((prev)=>!prev);
  } 
  const handleclick2 = ()=>{
    setopen1((prev2)=>!prev2);
  } 
  return (
    
    <div className='menu'>
        <ul className='list'>
            <li onClick={handleclick} className={`drop ${open ? 'open' : ''}`}>Home
                {open && (
                  <div className='drop-down'>
                  <li>Home 1</li>
                  <li>Home 2</li>
                  </div>
                  )}
                  </li>
            <li>About</li>
            <li onClick={handleclick2} className={`drop ${open1 ? 'open' : ''}`}>Pages</li>
                {open1 && (
                  <div className='drop-down'>
                  <li>Account</li>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Page not found</li>
                  </div>
                )}
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>

        </ul>
    </div>
  )
}
