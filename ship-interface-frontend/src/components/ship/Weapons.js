import React, { Component } from 'react'

export default class Weapons extends Component {
    render() {
        return(
            <div className="ship-system">
                <p id="weapons-status">Weapons Status: {this.props.status}</p>
            </div>
        )
    }
}