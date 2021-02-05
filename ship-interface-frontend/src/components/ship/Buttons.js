import React, { Component } from 'react'

class Buttons extends Component {

    handleHullDamage = () => {
        this.props.applyHullDamage()
    }

    handleHullRepair = () => {
        this.props.applyHullRepair()
    }

    handleNavDamage = () => {
        this.props.applyNavDamage()
    }

    handleNavRepair = () => {
        this.props.applyNavRepair()
    }

    handleWeaponsDamage = () => {
        this.props.applyWeaponsDamage()
    }

    handleWeaponsRepair = () => {
        this.props.applyWeaponsRepair()
    }


    render() {
        return (
        <div id="buttons">
            <div className="buttons"id="hull-buttons">
                <button onClick={this.handleHullDamage}>Damage Hull</button> 
                <button onClick={this.handleHullRepair}>Repair Hull</button> 
            </div>
            <div className="buttons"id="nav-buttons">
                <button onClick={this.handleNavDamage}>Damage Navigation</button> 
                <button onClick={this.handleNavRepair}>Repair Nagigation</button> 
            </div>
            <div className="buttons"id="Weapons-buttons">
                <button onClick={this.handleWeaponsDamage}>Damage Weapons</button> 
                <button onClick={this.handleWeaponsRepair}>Repair Weapons</button> 
            </div>
        </div>
        )
    }

}

export default Buttons