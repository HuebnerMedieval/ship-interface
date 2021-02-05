import React from 'react'
import Crewmate from './Crewmate'

const Crew = props => {
    return(
        <div id="crew-list">
            {props.crew.map(crewmate => <Crewmate key={crewmate.id} {...crewmate} removeCrew={props.removeCrew}/>)}
        </div>
    )
}

export default Crew