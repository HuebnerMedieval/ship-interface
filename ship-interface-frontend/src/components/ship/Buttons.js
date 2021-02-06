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
            <div>
                <button className="damage" onClick={this.handleHullDamage}>Damage Hull</button> 
                <button className="repair" onClick={this.handleHullRepair}>Repair Hull</button> 
            </div>
            <div>
                <button className="damage" onClick={this.handleNavDamage}>Damage Navigation</button> 
                <button className="repair" onClick={this.handleNavRepair}>Repair Navigation</button> 
            </div>
            <div>
                <button className="damage" onClick={this.handleWeaponsDamage}>Damage Weapons</button> 
                <button className="repair" onClick={this.handleWeaponsRepair}>Repair Weapons</button> 
            </div>
        </div>
        )
    }

}

export default Buttons