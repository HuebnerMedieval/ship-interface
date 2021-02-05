import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return(
            <div className="ship-system">
                <p id="nav-status">Nav Status: {this.props.status}</p>
                <li>{this.props.status === "green" ? "Full Nav Control" : "Limited Nav Control"}</li>
            </div>
        )
    }
}