import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShip } from './actions/shipActions'

class App extends Component {
  componentDidMount() {
    this.props.fetchShip()
    console.log(this.props.ship)
  }

  render() {
    return (
      <div id="app">
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ship: state.ship
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchShip: () => dispatch(fetchShip())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)