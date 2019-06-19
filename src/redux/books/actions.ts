import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './types'
import Book from '~/models/book'

export const fetchStart = () => ({
  type: FETCH_START as typeof FETCH_START,
  payload: {
    loading: true
  }
})

export const fetchSuccess = (books: Book[]) => ({
  type: FETCH_SUCCESS as typeof FETCH_SUCCESS,
  payload: {
    loading: false,
    books: books
  }
})

export const fetchError = () => ({
  type: FETCH_ERROR as typeof FETCH_ERROR,
  payload: {
    loading: false
  }
})
