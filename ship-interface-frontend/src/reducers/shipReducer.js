const shipReducer = (state={ship: {hull: "checking", nav: "checking", weapons: "checking"}, loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_SHIP':
            return {
                ...state,
                loading: true
            }

        case 'UPDATE_SHIP':
            return {
                ...state,
                ship: action.payload,
                loading: false
            }

        case 'APPLY_DAMAGE':
            let dStatus
            let dKey = action.payload
            console.log("reducer action")
            if (state.ship.[dKey] === "green"){
                dStatus = "yellow"
            }else if (state.ship.[dKey] === "yellow"){
                dStatus = "red"
            } 
            console.log(`status is ${dStatus}`)
            return {
                ...state,
                ship: {
                    ...state.ship,
                    [dKey]: dStatus
                }
            }

        case 'APPLY_REPAIR':
            let rStatus
            let rKey = action.payload
            if (state.ship.[rKey] === "red"){
                rStatus = "yellow"
            }else if (state.ship.[rKey] === "yellow"){
                rStatus = "green"
            } 
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