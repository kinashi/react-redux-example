const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export interface Item {
  id: string
  kind: 'books#volume'
  etag: string
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    webReaderLink: string
  }
  volumeInfo: {
    title: string
    description: string
    infoLink: string
    language: string
    pageCount: number
    previewLink: string
    publishedDate: string
    publisher: string
    authors: string[]
    averageRating: number
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

interface ApiResponse {
  items: Item[]
  kind: 'books#volumes'
  totalItems: number
}

const findByKeyword = async (keyword: string): Promise<ApiResponse> => {
  const res = await fetch(`${API_URL}${keyword}`)

  if (!res.ok) {
    const body = await res.json()
    throw new Error(body.error.message)
  }

  return res.json()
}

export { findByKeyword }
