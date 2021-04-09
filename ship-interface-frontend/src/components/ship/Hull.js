import React from 'react'

// displays hull information
const Hull = props => {
    return(
        <div className="ship-system">
            <p id="hull-status">Hull Status: {props.status}</p>
            <li>{props.status === "green" ? "Full Vacuum Seal" : "Hull Breached"}</li>
        </div>
    )
}

export default Hull