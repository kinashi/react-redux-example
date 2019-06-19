import React, { FC, useEffect } from 'react'
import Book from '~/models/Book'
import BooksOperation from '~/redux/books/operarion'
import BookList from '~/components/organisms/BookList'

interface Props {
  books: Book[]
  booksOperation: BooksOperation
}

const Books: FC<Props> = ({ books, booksOperation }) => {
  useEffect(() => {
    booksOperation.fetchBooks().catch((e: Error) => {
      console.error(e.message)
    })
  }, [])

  return (
    <>
      <h1>Books</h1>
      <BookList books={books} />
    </>
  )
}

export default Books
