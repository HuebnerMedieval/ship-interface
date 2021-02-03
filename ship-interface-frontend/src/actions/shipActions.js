const shipURL = "http://localhost:3001/ships/1"

export const fetchShip = () => {
    
    return (dispatch) => {
        dispatch({type: "LOADING_SHIP"})
        fetch(shipURL)
        .then(resp => resp.json())
        .then(shipData => dispatch({type: 'UPDATE_SHIP', payload: shipData}))
    }
}

export const updateShip = () => {
    
}