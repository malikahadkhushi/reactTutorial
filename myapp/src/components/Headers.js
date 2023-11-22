import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
function Headers() {
    return (
        <header style={{ display: 'flex', width: '100%', justifyContent: 'space-around', height: '50px', alignItems: 'center' }}>
            <div className='header'>
                <Link to='/home'>LOGO</Link>
            </div>

            <div className='header' >
                <Link to='/home'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </header>
    )
}

export default Headers;