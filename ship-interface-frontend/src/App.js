import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { fetchShip } from './actions/shipActions'
import { fetchCrew } from './actions/crewActions'
import ShipParts from './containers/ShipParts'
import CrewContainer from './containers/CrewContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchShip()
    this.props.fetchCrew()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" component={Home}/>
          <Route exact path="/ship" component={ShipParts}/>
          <Route exact path="/crew" component={CrewContainer}/>
        </div>
      </Router>
    )
  }
}


export default connect(null, { fetchShip, fetchCrew })(App)