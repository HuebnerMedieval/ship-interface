import React, { Component } from 'react'
import CrewButton from './CrewButton'

class Crewmate extends Component {
    
    
    render() {
        return (
            <div className="crewmate">
                <li> Name: {this.props.name}
                    <p>Role: {this.props.role}</p>
                    <p>Status: {this.props.status}</p>
                    < CrewButton removeCrew={this.props.removeCrew} id={this.props.id}/>
                </li>
            </div>
        )
    }
}

export default Crewmate