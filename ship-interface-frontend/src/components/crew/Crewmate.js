import React from 'react'
import CrewButton from './CrewButton'

const Crewmate = props => {
    return (
        <div className="crewmate">
            <li> Name: {props.name}
                <p>Role: {props.role}</p>
                <p>Status: {props.status}</p>
                < CrewButton removeCrew={props.removeCrew} id={props.id}/>
            </li>
        </div>
    )
}

export default Crewmate