import React from 'react'

const Nav = props => {
    return(
        <div className="ship-system">
            <p id="nav-status">Nav Status: {props.status}</p>
            <li>{props.status === "green" ? "Full Nav Control" : "Limited Nav Control"}</li>
        </div>
    )
}

export default Nav
