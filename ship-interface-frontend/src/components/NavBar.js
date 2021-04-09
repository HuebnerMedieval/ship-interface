import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS styling for the nav bar
const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

// CSS for active button
const active = {
    background: 'darkblue'
}

const NavBar = () => {
    return (
        <div id="navbar">
            <NavLink
                to="/ship"
                exact
                style={link}
                activeStyle={active}
            >Ship Subsystems</NavLink>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={active}
            >Clear Screen</NavLink>
            <NavLink
                to="/crew"
                exact
                style={link}
                activeStyle={active}
            >Crew Management</NavLink>
        </div>
    )
}

export default NavBar