import { combineReducers } from 'redux'
import depositsReducer from './deposits'
import withdrawsReducer from './withdraws'
import swapsReducer from './swaps'

const todoApp = combineReducers({
    deposits: depositsReducer,
    withdraws: withdrawsReducer,
    swaps: swapsReducer,
})

export default todoApp
