import React, { FC } from 'react'
import Book from '~/models/book'
import BookListItem from '~/components/molecules/BookListItem'

interface Props {
  books: Book[]
}

const BookList: FC<Props> = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <BookListItem book={book} key={book.id} />
      ))}
    </ul>
  )
}

export default BookList
