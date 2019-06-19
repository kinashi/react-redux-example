interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

interface VolumeInfo {
  title: string
  description: string
  authors: string[]
  publishedDate: string
  publisher: string
  averageRating: number
  imageLinks: ImageLinks
  previewLink: string
}

interface BookProps {
  id: string
  volumeInfo: VolumeInfo
}

export default class Book {
  public id: string
  public volumeInfo: VolumeInfo

  constructor({ id, volumeInfo }: BookProps) {
    this.id = id
    this.volumeInfo = volumeInfo
  }
}
