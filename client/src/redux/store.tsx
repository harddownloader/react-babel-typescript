import { combineReducers, createStore } from 'redux';
import example from './action/example-reducer'

const reducer = combineReducers({
})

let store = createStore(reducer);


export default store;