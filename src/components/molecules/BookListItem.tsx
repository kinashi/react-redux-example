import React, { FC } from 'react'
import Book from '~/models/book'

interface Props {
  book: Book
}

const BookListItem: FC<Props> = ({ book }) => {
  return (
    <li>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.description}</p>
      <p>{book.volumeInfo.averageRating}</p>
    </li>
  )
}

export default BookListItem
