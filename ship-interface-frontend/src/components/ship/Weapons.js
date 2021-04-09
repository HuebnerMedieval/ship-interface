import React from 'react'

// displays weapons information
const Weapons = props => {
    return(
        <div className="ship-system">
            <p id="weapons-status">Weapons Status: {props.status}</p>
            <li>{props.status === "green" ? "Torpedo Tubes Ready" : "Weapons Unavailable"}</li>
        </div>
    )
}

export default Weapons
