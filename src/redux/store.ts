import { createStore, combineReducers } from 'redux'
import books from './books/reducer'

const rootReducer = combineReducers({
  books
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
