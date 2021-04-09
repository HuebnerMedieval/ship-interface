import React, { Component } from 'react'

// delete button for crewmate
class CrewButton extends Component {
    
    // tells the backend and frontend to remove crew member
    handleClick = () => {
        this.props.removeCrew(this.props.id)
    }
    
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Remove</button>
            </div>
        )
    }
}

export default CrewButton