import React from 'react'
import logo from '../assets/react.svg'

function Navbar () {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <h3 className='logo-text'>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar

