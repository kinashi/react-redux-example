import Book from './book'

export default class Books {
  private _list: Map<string, Book>

  constructor(books?: Book[]) {
    this._list = new Map()
    if (books) this.setList(books)

    return this
  }

  get list() {
    return Array.from(this._list.values())
  }

  public setList(books: Book[]) {
    books.forEach((book: Book) => {
      this._list.set(book.id, new Book(book))
    })

    return this
  }
}
