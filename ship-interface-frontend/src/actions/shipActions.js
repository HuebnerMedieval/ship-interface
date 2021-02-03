export const fetchShip = () => {
    const shipURL = "http://localhost:3001/ships/1"
    
    return (dispatch) => {
        dispatch({type: "LOADING_SHIP"})
        fetch(shipURL)
        .then(resp => resp.json())
        .then(shipData => dispatch({type: 'UPDATE_SHIP', ship: shipData}))
    }
}