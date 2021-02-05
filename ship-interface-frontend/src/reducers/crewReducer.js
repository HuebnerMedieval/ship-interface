const crewReducer = (state={crew: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_CREW':
            return {
                ...state,
                loading: true
            }

        case 'UPDATE_CREW':
            return {
                ...state,
                crew: action.payload,
                loading: false
            }

        case 'ADD_CREW':
            return {
                ...state,
                loading: true
            }

        case 'CREW_ADDED':
            return {
                ...state,
                crew: [...state.crew, action.payload],
                loading: false
            }
        
        case 'REMOVE_CREW':
            return {
                ...state,
                loading: true
            }

        case 'CREW_REMOVED':
            const crew = state.crew.filter(crew => crew.id !== action.payload)
            return{
                ...state,
                crew: [crew],
                loading: false
            }
        
        default:
            return state
    }
}

export default crewReducer