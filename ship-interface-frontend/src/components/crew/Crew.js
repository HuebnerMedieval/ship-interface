import React from 'react'
import Crewmate from './Crewmate'

// renders the list of crew
const Crew = props => {

    // iterates through the crew passed down as props, rendering a <Crewmate> for each
    return(
        <div id="crew-list">
            {props.crew.map(crewmate => <Crewmate key={crewmate.id} {...crewmate} removeCrew={props.removeCrew}/>)}
        </div>
    )
}


export default Crew