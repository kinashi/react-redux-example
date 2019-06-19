import { Dispatch } from 'redux'
import { createSelector } from 'reselect'
import { findByKeyword, Item } from '~/repositories/booksRepository'
import { fetchError, fetchStart, fetchSuccess } from './actions'
import Book from '~/models/book'

const volumeInfoSelector = createSelector(
  (item: Item) => item.volumeInfo,
  volumeInfo => ({
    title: volumeInfo.title,
    description: volumeInfo.description,
    authors: volumeInfo.authors,
    publishedDate: volumeInfo.publishedDate,
    publisher: volumeInfo.publisher,
    averageRating: volumeInfo.averageRating,
    previewLink: volumeInfo.previewLink,
    imageLinks: volumeInfo.imageLinks
  })
)

const mapper = (items: Item[]) => {
  return items.map(
    (item): Book => ({
      id: item.id,
      volumeInfo: { ...volumeInfoSelector(item) }
    })
  )
}

export default class {
  constructor(private dispatch: Dispatch) {}

  public async fetchBooks(): Promise<void> {
    this.dispatch(fetchStart())

    const result = await findByKeyword('javascript').catch((e: Error) => {
      this.dispatch(fetchError())
      throw e
    })

    const books = mapper(result.items)
    this.dispatch(fetchSuccess(books))
  }
}
