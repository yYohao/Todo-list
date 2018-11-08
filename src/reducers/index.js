import { combineReducers} from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'


const allReducers = {
    todos,
    visibilityFilter
}

const rootReducer = combineReducers(allReducers);

export default rootReducer

