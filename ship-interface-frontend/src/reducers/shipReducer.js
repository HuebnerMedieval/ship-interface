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

        case 'APPLY_HULL_DAMAGE':
            let hdstatus = state.ship.hull
            if (state.ship.hull === "green"){
                hdstatus = "yellow"
            }else if (state.ship.hull === "yellow"){
                hdstatus = "red"
            } 
            return {
                ...state,
                ship: {
                    ...state.ship,
                    hull: hdstatus
                }
            }

        case 'APPLY_HULL_REPAIR':
            let hrstatus = state.ship.hull
            if (state.ship.hull === "red"){
                hrstatus = "yellow"
            }else if (state.ship.hull === "yellow"){
                hrstatus = "green"
            } 
            return {
                ...state,
                ship: {
                    ...state.ship,
                    hull: hrstatus
                }
            }
        
        default:
            return state

    }
}

export default shipReducer