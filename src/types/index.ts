export interface Report {
  id: string
  year: number
  title: string
  fileUrl: string
  content?: string
  bookValuePerShare?: number
  marketValuePerShare?: number
  letterFromWarren?: string
  datePublished: string
}

export interface Subsidiary {
  id: string
  name: string
  industry: string
  acquisitionYear?: number
  description?: string
  mentions: SubsidiaryMention[]
}

export interface SubsidiaryMention {
  reportYear: number
  reportId: string
  text: string
  context: string
  pageNumber?: number
}

export interface BookValueData {
  year: number
  bookValue: number
  marketValue?: number
  percentChange?: number
}