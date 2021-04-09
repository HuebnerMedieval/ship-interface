import React, { Component } from 'react'

// displays the buttons for updating ship status
class Buttons extends Component {

    // sends dispatch when damage button is pressed
    handleDamage = event => {
        this.props.applyDamage(event.target.name)
    }

    // sends dispatch when repair button is pressed
    handleRepair = event => {
        this.props.applyRepair(event.target.name)
    }


    render() {
        return (
        <div id="buttons">
            <div>
                <button className="damage" name="hull" onClick={this.handleDamage}>Damage Hull</button> 
                <button className="repair" name="hull" onClick={this.handleRepair}>Repair Hull</button> 
            </div>
            <div>
                <button className="damage" name="nav" onClick={this.handleDamage}>Damage Navigation</button> 
                <button className="repair" name="nav" onClick={this.handleRepair}>Repair Navigation</button> 
            </div>
            <div>
                <button className="damage" name="weapons" onClick={this.handleDamage}>Damage Weapons</button> 
                <button className="repair" name="weapons" onClick={this.handleRepair}>Repair Weapons</button> 
            </div>


        </div>
        )
    }

}

export default Buttons