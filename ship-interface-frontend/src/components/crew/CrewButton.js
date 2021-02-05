import React, { Component } from 'react'

class CrewButton extends Component {
    
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