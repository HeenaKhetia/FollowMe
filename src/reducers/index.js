import langreducer from './langreducer'
import routereducer from './routereducer'
import { combineReducers } from 'redux'

const Reducers = combineReducers({
    lang: langreducer,
    route: routereducer
})

export default Reducers