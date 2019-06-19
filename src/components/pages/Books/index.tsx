import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import BooksOperation from '~/redux/books/operarion'
import Books from './Books'
import { AppState } from '~/redux/store'

const booksSelector = createSelector(
  (state: AppState) => state.books,
  books => ({
    books: books.entity.list
  })
)

const useBooks = () => ({
  ...useSelector(booksSelector),
  booksOperation: new BooksOperation(useDispatch())
})

const BooksPage: FC = () => <Books {...useBooks()} />

export default BooksPage
