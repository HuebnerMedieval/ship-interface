import React, { Component } from 'react'

class Crewmate extends Component {
    
    handleClick = () => {
        this.props.removeCrew(this.props.id)
    }
    
    render() {
        return (
            <div className="crewmate">
                <li> Name: {this.props.name}
                    <p>Role: {this.props.role}</p>
                    <p>Status: {this.props.status}</p>
                    <button onClick={this.handleClick}>Remove</button>
                </li>
            </div>
        )
    }
}

export default Crewmate