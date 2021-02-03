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
        default:
            return state
    }
}

export default shipReducer