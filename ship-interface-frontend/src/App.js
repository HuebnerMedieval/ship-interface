import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShip } from './actions/shipActions'
import { fetchCrew } from './actions/crewActions'
import ShipParts from './containers/ShipParts'
import CrewContainer from './containers/CrewContainer'
import CrewForm from './components/crew/CrewForm'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.fetchShip()
    this.props.fetchCrew()
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* need to make Navigation with links to ShipParts and Crew */}
          <Navigation/>
          <h1 id="heading">Roci-NOT-eh Ship's Interface</h1>
          <hr/>
          < ShipParts />
          <hr/>
          < CrewContainer />
          <Switch>
            {/* Move heading into Home */}
            <Route exact path="/" component={Home}/>
            {/* remove ShipParts */}
            <Route exact path="/ship" component={ShipParts}/>
            {/* remove CrewContainer and move CrewForm out*/}
            <Route exact path="/crew" component={CrewContainer}/>
            <Route exact path="/crew/new" component={CrewForm}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    ship: state.ship.ship,
  }
}

export default connect(mapStateToProps, { fetchShip, fetchCrew })(App)