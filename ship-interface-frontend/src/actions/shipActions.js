// saves ship show route as a constant
const shipURL = "http://localhost:3001/ships/1"

// sents a get request to the backend, then dispatches an 'UPDATE_SHIP' action to the store with the current ship data
export const fetchShip = () => {
    
    return (dispatch) => {
        dispatch({type: "LOADING_SHIP"})
        fetch(shipURL)
        .then(resp => resp.json())
        .then(shipData => dispatch({type: 'UPDATE_SHIP', payload: shipData}))
    }
}

// takes ship data from the store, and sends it to the backend to update the database
/*ideal solution would be to send data directly to the backend, then take that data to update store
opening dispatch action breaks the rest of the code, and the easiest solution for form management was
to update the store first. May refactor later to fit convention*/
export const updateShip = (ship) => {
    return () => {
        // dispatch({type: "LOADING_SHIP"})
        fetch(shipURL, {
            method: "PATCH",
            body: JSON.stringify(ship),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(resp => resp.json())
        // .then(shipData => dispatch({type: 'UPDATE_SHIP', payload: shipData}))
    }
}