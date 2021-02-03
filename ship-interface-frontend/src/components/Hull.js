import React, { Component } from 'react'

export default class Hull extends Component {
    handleDamage = () => {
        console.log("Hull Damaged!")
    }

    handleRepair = () => {
        console.log("All Better")
    }
    
    render() {
        return(
            <div className="ship-system">
                <p id="hull-status">
                    Hull Status: {this.props.status} 
                    <button onClick={this.handleDamage}>Damage Hull</button> 
                    <button onClick={this.handleRepair}>Repair Hull</button> 
                </p>
            </div>
        )
    }
}