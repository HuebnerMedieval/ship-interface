import React, { Component } from 'react'
import { connect } from 'react-redux'
import Crew from '../components/crew/Crew'
import CrewForm from '../components/crew/CrewForm'
import { addCrew, removeCrew } from '../actions/crewActions'


// holds all information about the crew
class CrewContainer extends Component {
    
    // renders the <CrewForm> followed by the list of crew
    render(){
        return(
            <div className="container">
                <h3>Crew Status</h3>
                < CrewForm addCrew={this.props.addCrew} />
                < Crew crew={this.props.crew} removeCrew={this.props.removeCrew}/>
            </div>
        )
    }
}

// adds global state to the component's props
const mapStateToProps = state => {
    return {
      crew: state.crew.crew
    }
}

export default connect(mapStateToProps, { addCrew, removeCrew })(CrewContainer)