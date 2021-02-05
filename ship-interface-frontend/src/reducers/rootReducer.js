import { combineReducers } from 'redux'
import shipReducer from './shipReducer'
import crewReducer from './crewReducer'

const rootReducer = combineReducers({
    ship: shipReducer,
    crew: crewReducer
})

export default rootReducer