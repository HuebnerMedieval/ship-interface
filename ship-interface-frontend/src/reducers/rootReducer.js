import { combineReducers } from 'redux'
import shipReducer from './shipReducer'
import crewReducer from './crewReducer'

// combines reducers
const rootReducer = combineReducers({
    ship: shipReducer,
    crew: crewReducer
})

export default rootReducer