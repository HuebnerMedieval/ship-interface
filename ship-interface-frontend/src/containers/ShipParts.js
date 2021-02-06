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
            <div className="container">
                <h3>Subsystems Status</h3>
                < Hull 
                    status={this.props.ship.hull} />
                < Nav status={this.props.ship.nav}/>
                < Weapons status={this.props.ship.weapons}/>
                < Buttons 
                    applyDamage={this.props.applyDamage}
                    applyRepair={this.props.applyRepair}
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
        applyDamage: (system) => dispatch({type: 'APPLY_DAMAGE', payload: system}),
        applyRepair: (system) => dispatch({type: 'APPLY_REPAIR', payload: system}),
        updateShip: (ship) => dispatch(updateShip(ship))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShipParts)