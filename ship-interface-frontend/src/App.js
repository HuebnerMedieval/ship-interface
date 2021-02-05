import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShip } from './actions/shipActions'
import ShipParts from './containers/ShipParts'
import CrewContainer from './containers/CrewContainer'

class App extends Component {
  componentDidMount() {
    console.log("app mounted")
    this.props.fetchShip()
  }

  render() {
    return (
      <div className="App">
        <h1 id="heading">Roci-NOT-eh Ship's Interface</h1>
        <hr/>
        < ShipParts />
        <hr/>
        < CrewContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ship: state.ship.ship,
  }
}

export default connect(mapStateToProps, { fetchShip })(App)