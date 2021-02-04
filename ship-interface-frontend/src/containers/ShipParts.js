import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hull from '../components/Hull'
import Nav from '../components/Nav'
import Weapons from '../components/Weapons'
import { updateShip } from '../actions/shipActions'
import Buttons from '../components/Buttons'

class ShipParts extends Component {

    render(){
        return (
            <div id="ship-parts">
                <h3>Subsystems Status</h3>
                < Hull 
                    status={this.props.ship.hull} 
                    applyDamage={this.props.applyHullDamage}
                    applyRepair={this.props.applyHullRepair}
                    updateShip={updateShip(this.props.ship)}/>
                < Nav status={this.props.ship.nav}/>
                < Weapons status={this.props.ship.weapons}/>
                <Buttons/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      ship: state.ship,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        applyHullDamage: () => dispatch({type: 'APPLY_HULL_DAMAGE'}),
        applyHullRepair: () => dispatch({type: 'APPLY_HULL_REPAIR'})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ShipParts)