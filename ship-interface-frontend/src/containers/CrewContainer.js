import React, { Component } from 'react'
import { connect } from 'react-redux'

class CrewContainer extends Component {
    
    
    
    render(){
        return(
            <div id="crew-container">
                <h3>Crew Status</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      crew: state.crew.crew
    }
}

export default connect(mapStateToProps)(CrewContainer)