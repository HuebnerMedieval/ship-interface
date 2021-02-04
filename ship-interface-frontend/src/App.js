import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShip } from './actions/shipActions'
import ShipParts from './containers/ShipParts'

class App extends Component {
  componentDidMount() {
    this.props.fetchShip()
    console.log(this.props.ship)
  }

  render() {

    return (
      <div className="App">
        <h1 id="heading">Roci-NOT-eh Ship's Interface</h1>
        <hr/>
        < ShipParts />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ship: state.ship,
  }
}

export default connect(mapStateToProps, { fetchShip })(App)