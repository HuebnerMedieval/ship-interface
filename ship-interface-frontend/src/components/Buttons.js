import React, { Component } from 'react'
import { connect } from 'react-redux'

class Buttons extends Component {

    render() {
        <div>
            <button onClick={this.handleDamage}>Damage Hull</button> 
            <button onClick={this.handleRepair}>Repair Hull</button> 
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Buttons)