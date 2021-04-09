// reducer for all crew related actions
const crewReducer = (state={crew: [], loading: false }, action) => {
    switch(action.type) {
        // sets status to loading
        case 'LOADING_CREW':
            return {
                ...state,
                loading: true
            }

        // recieves data on all crewmembers and adds them to the store
        case 'UPDATE_CREW':
            return {
                ...state,
                crew: action.payload,
                loading: false
            }

        // sets loading status to true for adding crew members
        case 'ADD_CREW':
            return {
                ...state,
                loading: true
            }

        // adds new crewmember to the store and resets loading status
        case 'CREW_ADDED':
            return {
                ...state,
                crew: [...state.crew, action.payload],
                loading: false
            }
        
        // sets loading status to true for removing crew members
        case 'REMOVE_CREW':
            return {
                ...state,
                loading: true
            }

        // removes crew member from store and resets loading status
        case 'CREW_REMOVED':
            const crew = state.crew.filter(crew => crew.id !== action.payload)
            return{
                ...state,
                crew: crew,
                loading: false
            }
        
        default:
            return state
    }
}

export default crewReducer