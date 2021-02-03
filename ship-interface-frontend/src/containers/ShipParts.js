import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hull from '../components/Hull'
import Nav from '../components/Nav'
import Weapons from '../components/Weapons'

class ShipParts extends Component {

    render(){
        return (
            <div id="ship-parts">
                < Hull status={this.props.ship.hull} />
                < Nav status={this.props.ship.nav}/>
                < Weapons status={this.props.ship.weapons}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      ship: state.ship,
    }
  }

export default connect(mapStateToProps)(ShipParts)