import React, { Component } from 'react'

class Buttons extends Component {

    handleDamage = () => {
        this.props.applyDamage()
    }

    handleRepair = () => {
        this.props.applyRepair()
    }


    render() {
        return (
        <div>
            <button onClick={this.handleDamage}>Damage Hull</button> 
            <button onClick={this.handleRepair}>Repair Hull</button> 
        </div>
        )
    }

}

export default Buttons