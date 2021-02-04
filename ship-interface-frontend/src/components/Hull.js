import React, { Component } from 'react'
// import { updateShip } from '../actions/shipActions'

export default class Hull extends Component {
    
    handleDamage = () => {
        this.props.applyDamage()
        this.props.updateShip()
    }

    handleRepair = () => {
        this.props.applyRepair()
        this.props.updateShip()
    }
    
    render() {
        return(
            <div className="ship-system">
                <p id="hull-status">
                    Hull Status: {this.props.status} 
                    {/* <button onClick={this.handleDamage}>Damage Hull</button> 
                    <button onClick={this.handleRepair}>Repair Hull</button>  */}
                </p>
            </div>
        )
    }
}