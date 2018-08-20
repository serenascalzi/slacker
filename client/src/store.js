import {createStore, combineReducers} from 'redux'

import chatReducer from './reducers/chatReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  chatReducer: chatReducer,
  authReducer: authReducer
})

const store = createStore(rootReducer)

export default store
