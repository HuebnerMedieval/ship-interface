import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hull from '../components/ship/Hull'
import Nav from '../components/ship/Nav'
import Weapons from '../components/ship/Weapons'
import { updateShip } from '../actions/shipActions'
import Buttons from '../components/ship/Buttons'

class ShipParts extends Component {

    componentDidMount() {
        console.log("ship parts mounted")
      }

    componentDidUpdate(){
        console.log(this.props.ship)
        this.props.updateShip(this.props.ship)
    }

    render(){
        console.log("ship parts rendering")
        return (
            <div id="ship-parts">
                <h3>Subsystems Status</h3>
                < Hull 
                    status={this.props.ship.hull} />
                < Nav status={this.props.ship.nav}/>
                < Weapons status={this.props.ship.weapons}/>
                < Buttons 
                    applyDamage={this.props.applyHullDamage}
                    applyRepair={this.props.applyHullRepair}
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
        applyHullDamage: () => dispatch({type: 'APPLY_HULL_DAMAGE'}),
        applyHullRepair: () => dispatch({type: 'APPLY_HULL_REPAIR'}),
        updateShip: (ship) => dispatch(updateShip(ship))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShipParts)