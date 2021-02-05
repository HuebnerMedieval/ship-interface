import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hull from '../components/ship/Hull'
import Nav from '../components/ship/Nav'
import Weapons from '../components/ship/Weapons'
import { updateShip } from '../actions/shipActions'
import Buttons from '../components/ship/Buttons'

class ShipParts extends Component {


    componentDidUpdate(){
        this.props.updateShip(this.props.ship)
    }

    render(){
        return (
            <div id="ship-parts">
                <h3>Subsystems Status</h3>
                < Hull 
                    status={this.props.ship.hull} />
                < Nav status={this.props.ship.nav}/>
                < Weapons status={this.props.ship.weapons}/>
                < Buttons 
                    applyHullDamage={this.props.applyHullDamage}
                    applyHullRepair={this.props.applyHullRepair}
                    applyNavDamage={this.props.applyNavDamage}
                    applyNavRepair={this.props.applyNavRepair}
                    applyWeaponsDamage={this.props.applyWeaponsDamage}
                    applyWeaponsRepair={this.props.applyWeaponsRepair}
                    />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      ship: state.ship.ship
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        applyHullDamage: () => dispatch({type: 'APPLY_DAMAGE', payload: "hull"}),
        applyHullRepair: () => dispatch({type: 'APPLY_REPAIR', payload: "hull"}),
        applyNavDamage: () => dispatch({type: 'APPLY_DAMAGE', payload: "nav"}),
        applyNavRepair: () => dispatch({type: 'APPLY_REPAIR', payload: "nav"}),
        applyWeaponsDamage: () => dispatch({type: 'APPLY_DAMAGE', payload: "weapons"}),
        applyWeaponsRepair: () => dispatch({type: 'APPLY_REPAIR', payload: "weapons"}),
        updateShip: (ship) => dispatch(updateShip(ship))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShipParts)