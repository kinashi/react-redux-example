import { FETCH_START, FETCH_SUCCESS } from './types'
import { fetchStart, fetchSuccess } from './actions'
import Books from '~/models/books'

interface State {
  loading: boolean
  entity: Books
}

type Actions = ReturnType<typeof fetchStart | typeof fetchSuccess>

const initialState = {
  loading: false,
  entity: new Books()
}

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: action.payload.loading
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        entity: state.entity.setList(action.payload.books)
      }
    default:
      return state
  }
}
