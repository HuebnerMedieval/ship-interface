// reducer for all ship related actions
const shipReducer = (state={ship: {hull: "checking", nav: "checking", weapons: "checking"}, loading: false }, action) => {
    switch(action.type) {
        // sets loading status while receiving ship data from backend
        case 'LOADING_SHIP':
            return {
                ...state,
                loading: true
            }

        // updates ship status and resets loading
        case 'UPDATE_SHIP':
            return {
                ...state,
                ship: action.payload,
                loading: false
            }

        // handles damage done to the ship
        case 'APPLY_DAMAGE':
            let dKey = action.payload
            let dStatus = state.ship.[dKey]
            // checks current status and changes accordingly
            if (state.ship.[dKey] === "green"){
                dStatus = "yellow"
            }else if (state.ship.[dKey] === "yellow"){
                dStatus = "red"
            }
            // updates the store
            return {
                ...state,
                ship: {
                    ...state.ship,
                    [dKey]: dStatus
                }
            }

        // handles repaits to the ship
        case 'APPLY_REPAIR':
            let rKey = action.payload
            let rStatus = state.ship.[rKey]
            // checks current status and changes accordingly
            if (state.ship.[rKey] === "red"){
                rStatus = "yellow"
            }else if (state.ship.[rKey] === "yellow"){
                rStatus = "green"
            } 
            // updates the store
            return {
                ...state,
                ship: {
                    ...state.ship,
                    [rKey]: rStatus
                }
            }
        
        default:
            return state

    }
}

export default shipReducer