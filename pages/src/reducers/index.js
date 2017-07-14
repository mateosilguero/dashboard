import { combineReducers } from 'redux'
import user from './todos'

//https://github.com/reactjs/redux/tree/master/examples/todos

const todoApp = combineReducers({
  user
})

export default todoApp