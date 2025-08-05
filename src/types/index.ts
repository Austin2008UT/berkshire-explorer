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

export interface SECFiling {
  id: string
  formType: '10-K' | '10-Q' | '8-K' | 'DEF 14A' | 'Other'
  filingDate: string
  reportDate: string
  description: string
  accessionNumber: string
  fileNumber: string
  filmNumber: string
  documents: SECDocument[]
  size: string
  isInlineXBRL: boolean
}

export interface SECDocument {
  seq: number
  description: string
  documentUrl: string
  type: string
  size?: string
}