import React, { Component } from 'react'

export default class Hull extends Component {
    render() {
        return(
            <div className="ship-system">
                <p id="hull-status">Hull Status: {this.props.status}</p>
                <li>{this.props.status === "green" ? "Full Vacuum Seal" : "Hull Breached"}</li>
            </div>
        )
    }
}