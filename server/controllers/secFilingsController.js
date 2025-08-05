// Mock SEC filings data - In production, this would fetch from SEC EDGAR API
const mockSECFilings = [
  {
    id: '0001067983-24-000013',
    formType: '10-K',
    filingDate: '2024-02-24',
    reportDate: '2023-12-31',
    description: 'Annual report for year ended December 31, 2023',
    accessionNumber: '0001067983-24-000013',
    fileNumber: '001-14905',
    filmNumber: '24654321',
    size: '15.2 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-K Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000013/brk-20231231.htm',
        type: 'HTML'
      },
      {
        seq: 2,
        description: 'XBRL Instance Document',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000013/brk-20231231_htm.xml',
        type: 'XML'
      }
    ]
  },
  {
    id: '0001067983-24-000045',
    formType: '10-Q',
    filingDate: '2024-11-04',
    reportDate: '2024-09-30',
    description: 'Quarterly report for quarter ended September 30, 2024',
    accessionNumber: '0001067983-24-000045',
    fileNumber: '001-14905',
    filmNumber: '24987654',
    size: '8.5 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000045/brk-20240930.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-24-000038',
    formType: '10-Q',
    filingDate: '2024-08-03',
    reportDate: '2024-06-30',
    description: 'Quarterly report for quarter ended June 30, 2024',
    accessionNumber: '0001067983-24-000038',
    fileNumber: '001-14905',
    filmNumber: '24876543',
    size: '7.9 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000038/brk-20240630.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-24-000027',
    formType: '10-Q',
    filingDate: '2024-05-04',
    reportDate: '2024-03-31',
    description: 'Quarterly report for quarter ended March 31, 2024',
    accessionNumber: '0001067983-24-000027',
    fileNumber: '001-14905',
    filmNumber: '24765432',
    size: '7.6 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000027/brk-20240331.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-24-000018',
    formType: 'DEF 14A',
    filingDate: '2024-03-15',
    reportDate: '2024-05-04',
    description: 'Definitive proxy statement for 2024 Annual Meeting',
    accessionNumber: '0001067983-24-000018',
    fileNumber: '001-14905',
    filmNumber: '24712345',
    size: '3.2 MB',
    isInlineXBRL: false,
    documents: [
      {
        seq: 1,
        description: 'Proxy Statement',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000018/brk2024proxystatement.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-24-000041',
    formType: '8-K',
    filingDate: '2024-08-05',
    reportDate: '2024-08-03',
    description: 'Current report - Quarterly earnings results',
    accessionNumber: '0001067983-24-000041',
    fileNumber: '001-14905',
    filmNumber: '24891234',
    size: '0.5 MB',
    isInlineXBRL: false,
    documents: [
      {
        seq: 1,
        description: 'Current Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798324000041/brk-8k20240803.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-23-000009',
    formType: '10-K',
    filingDate: '2023-02-25',
    reportDate: '2022-12-31',
    description: 'Annual report for year ended December 31, 2022',
    accessionNumber: '0001067983-23-000009',
    fileNumber: '001-14905',
    filmNumber: '23654321',
    size: '14.8 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-K Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798323000009/brk-20221231.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-23-000042',
    formType: '10-Q',
    filingDate: '2023-11-04',
    reportDate: '2023-09-30',
    description: 'Quarterly report for quarter ended September 30, 2023',
    accessionNumber: '0001067983-23-000042',
    fileNumber: '001-14905',
    filmNumber: '23987654',
    size: '8.2 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798323000042/brk-20230930.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-23-000035',
    formType: '10-Q',
    filingDate: '2023-08-05',
    reportDate: '2023-06-30',
    description: 'Quarterly report for quarter ended June 30, 2023',
    accessionNumber: '0001067983-23-000035',
    fileNumber: '001-14905',
    filmNumber: '23876543',
    size: '7.7 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798323000035/brk-20230630.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-23-000024',
    formType: '10-Q',
    filingDate: '2023-05-06',
    reportDate: '2023-03-31',
    description: 'Quarterly report for quarter ended March 31, 2023',
    accessionNumber: '0001067983-23-000024',
    fileNumber: '001-14905',
    filmNumber: '23765432',
    size: '7.4 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-Q Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798323000024/brk-20230331.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-23-000015',
    formType: 'DEF 14A',
    filingDate: '2023-03-14',
    reportDate: '2023-05-06',
    description: 'Definitive proxy statement for 2023 Annual Meeting',
    accessionNumber: '0001067983-23-000015',
    fileNumber: '001-14905',
    filmNumber: '23712345',
    size: '3.1 MB',
    isInlineXBRL: false,
    documents: [
      {
        seq: 1,
        description: 'Proxy Statement',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798323000015/brk2023proxystatement.htm',
        type: 'HTML'
      }
    ]
  },
  {
    id: '0001067983-22-000007',
    formType: '10-K',
    filingDate: '2022-02-26',
    reportDate: '2021-12-31',
    description: 'Annual report for year ended December 31, 2021',
    accessionNumber: '0001067983-22-000007',
    fileNumber: '001-14905',
    filmNumber: '22654321',
    size: '14.5 MB',
    isInlineXBRL: true,
    documents: [
      {
        seq: 1,
        description: 'Complete 10-K Report',
        documentUrl: 'https://www.sec.gov/Archives/edgar/data/1067983/000106798322000007/brk-20211231.htm',
        type: 'HTML'
      }
    ]
  }
]

export const getSECFilings = async (req, res) => {
  try {
    // In production, this would fetch from SEC EDGAR API
    // For now, return mock data sorted by filing date
    const sortedFilings = [...mockSECFilings].sort((a, b) => 
      new Date(b.filingDate).getTime() - new Date(a.filingDate).getTime()
    )
    res.json(sortedFilings)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SEC filings' })
  }
}

export const getSECFilingById = async (req, res) => {
  try {
    const filing = mockSECFilings.find(f => f.id === req.params.id)
    if (!filing) {
      return res.status(404).json({ error: 'Filing not found' })
    }
    res.json(filing)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch filing' })
  }
}