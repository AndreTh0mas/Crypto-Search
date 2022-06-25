import React from 'react'
import { GiAndroidMask } from "react-icons/gi";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Link to = '/'>
        <div className='navbar'>
            <GiAndroidMask className='icons'/>
            <h1>Crypto<span className='blue'> Search</span></h1>
        </div>
    </Link>
  )
}

export default Navbar