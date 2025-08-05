// Mock data for development - will be replaced with database queries
const mockReports = [
  {
    id: '2023',
    year: 2023,
    title: 'Berkshire Hathaway Inc. 2023 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2023ar/2023ar.pdf',
    bookValuePerShare: 378030,
    marketValuePerShare: 546869,
    datePublished: '2024-02-24'
  },
  {
    id: '2022',
    year: 2022,
    title: 'Berkshire Hathaway Inc. 2022 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2022ar/2022ar.pdf',
    bookValuePerShare: 353465,
    marketValuePerShare: 468626,
    datePublished: '2023-02-25'
  },
  {
    id: '2021',
    year: 2021,
    title: 'Berkshire Hathaway Inc. 2021 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2021ar/2021ar.pdf',
    bookValuePerShare: 326967,
    marketValuePerShare: 455830,
    datePublished: '2022-02-26'
  },
  {
    id: '2020',
    year: 2020,
    title: 'Berkshire Hathaway Inc. 2020 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2020ar/2020ar.pdf',
    bookValuePerShare: 287111,
    marketValuePerShare: 347815,
    datePublished: '2021-02-27'
  },
  {
    id: '2019',
    year: 2019,
    title: 'Berkshire Hathaway Inc. 2019 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2019ar/2019ar.pdf',
    bookValuePerShare: 261417,
    marketValuePerShare: 339590,
    datePublished: '2020-02-22'
  },
  {
    id: '2018',
    year: 2018,
    title: 'Berkshire Hathaway Inc. 2018 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2018ar/2018ar.pdf',
    bookValuePerShare: 212503,
    marketValuePerShare: 306000,
    datePublished: '2019-02-23'
  },
  {
    id: '2017',
    year: 2017,
    title: 'Berkshire Hathaway Inc. 2017 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2017ar/2017ar.pdf',
    bookValuePerShare: 211750,
    marketValuePerShare: 304180,
    datePublished: '2018-02-24'
  },
  {
    id: '2016',
    year: 2016,
    title: 'Berkshire Hathaway Inc. 2016 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2016ar/2016ar.pdf',
    bookValuePerShare: 172108,
    marketValuePerShare: 244121,
    datePublished: '2017-02-25'
  },
  {
    id: '2015',
    year: 2015,
    title: 'Berkshire Hathaway Inc. 2015 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2015ar/2015ar.pdf',
    bookValuePerShare: 155501,
    marketValuePerShare: 197800,
    datePublished: '2016-02-27'
  },
  {
    id: '2010',
    year: 2010,
    title: 'Berkshire Hathaway Inc. 2010 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2010ar/2010ar.pdf',
    bookValuePerShare: 95453,
    marketValuePerShare: 120450,
    datePublished: '2011-02-26'
  },
  {
    id: '2005',
    year: 2005,
    title: 'Berkshire Hathaway Inc. 2005 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2005ar/2005ar.pdf',
    bookValuePerShare: 59377,
    marketValuePerShare: 88620,
    datePublished: '2006-03-01'
  },
  {
    id: '2000',
    year: 2000,
    title: 'Berkshire Hathaway Inc. 2000 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2000ar/2000ar.pdf',
    bookValuePerShare: 40442,
    marketValuePerShare: 71000,
    datePublished: '2001-03-01'
  },
  {
    id: '1995',
    year: 1995,
    title: 'Berkshire Hathaway Inc. 1995 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1995ar/1995ar.pdf',
    bookValuePerShare: 14426,
    marketValuePerShare: 32100,
    datePublished: '1996-03-01'
  },
  {
    id: '1990',
    year: 1990,
    title: 'Berkshire Hathaway Inc. 1990 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1990ar/1990ar.pdf',
    bookValuePerShare: 4612,
    marketValuePerShare: 6675,
    datePublished: '1991-03-01'
  },
  {
    id: '1985',
    year: 1985,
    title: 'Berkshire Hathaway Inc. 1985 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1985.html',
    bookValuePerShare: 1643,
    marketValuePerShare: 2443,
    datePublished: '1986-03-01'
  },
  {
    id: '1980',
    year: 1980,
    title: 'Berkshire Hathaway Inc. 1980 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1980.html',
    bookValuePerShare: 400,
    marketValuePerShare: 430,
    datePublished: '1981-03-01'
  },
  {
    id: '1977',
    year: 1977,
    title: 'Berkshire Hathaway Inc. 1977 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1977.html',
    bookValuePerShare: 147,
    marketValuePerShare: 155,
    datePublished: '1978-03-01'
  }
]

export const getReports = async (req, res) => {
  try {
    // In production, this would query the database
    res.json(mockReports)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reports' })
  }
}

export const getReportById = async (req, res) => {
  try {
    const report = mockReports.find(r => r.id === req.params.id)
    if (!report) {
      return res.status(404).json({ error: 'Report not found' })
    }
    res.json(report)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch report' })
  }
}

export const getBookValueData = async (req, res) => {
  try {
    const bookValueData = mockReports.map(report => ({
      year: report.year,
      bookValue: report.bookValuePerShare,
      marketValue: report.marketValuePerShare,
      percentChange: null // Would be calculated from previous year
    }))
    res.json(bookValueData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book value data' })
  }
}