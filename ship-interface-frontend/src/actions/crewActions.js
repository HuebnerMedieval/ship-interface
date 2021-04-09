// saves crew index route as constant
const crewURL = "http://localhost:3001/crewmates"

// grabs JSON for crew data and dispatches an 'UPDATE_CREW' action to the store with that data
export const fetchCrew = () => {
    
    return (dispatch) => {
        dispatch({type: "LOADING_CREW"})
        fetch(crewURL)
        .then(resp => resp.json())
        .then(crewData => dispatch({type: 'UPDATE_CREW', payload: crewData}))
    }
}

// sends data about new crewmember to the backend, then updates the store
export const addCrew = (crewmate) => {
    return (dispatch) => {
        dispatch({type: "ADD_CREW"})
        fetch(crewURL, {
            method: 'POST',
            body: JSON.stringify(crewmate),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(crewmateData => dispatch({type: "CREW_ADDED", payload: crewmateData}))
    }
}

// sends a delete request to the backend, then updates the store that a crewmember was removed
export const removeCrew = (id) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_CREW"})
        fetch(crewURL + `/${id}`, {
            method: 'DELETE',
        })
        // .then(resp => resp.json())
        .then(dispatch({type: "CREW_REMOVED", payload: id}))
    }
}