import React, { Component } from 'react'

export default class Hull extends Component {
    
    
    render() {
        return(
            <div className="ship-system">
                <p id="hull-status">
                    Hull Status: {this.props.status} 
                </p>
            </div>
        )
    }
}