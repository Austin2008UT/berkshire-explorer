// Complete annual reports data from 1977-2024
const mockReports = [
  {
    id: '2024',
    year: 2024,
    title: 'Berkshire Hathaway Inc. 2024 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2024.pdf', // 2024 letter not yet available
    bookValuePerShare: 415000, // Estimated
    marketValuePerShare: 585000, // Estimated
    datePublished: '2025-02-22'
  },
  {
    id: '2023',
    year: 2023,
    title: 'Berkshire Hathaway Inc. 2023 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2023.pdf',
    bookValuePerShare: 378030,
    marketValuePerShare: 546869,
    datePublished: '2024-02-24'
  },
  {
    id: '2022',
    year: 2022,
    title: 'Berkshire Hathaway Inc. 2022 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2022.pdf',
    bookValuePerShare: 353465,
    marketValuePerShare: 468626,
    datePublished: '2023-02-25'
  },
  {
    id: '2021',
    year: 2021,
    title: 'Berkshire Hathaway Inc. 2021 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2021.pdf',
    bookValuePerShare: 326967,
    marketValuePerShare: 455830,
    datePublished: '2022-02-26'
  },
  {
    id: '2020',
    year: 2020,
    title: 'Berkshire Hathaway Inc. 2020 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2020.pdf',
    bookValuePerShare: 287111,
    marketValuePerShare: 347815,
    datePublished: '2021-02-27'
  },
  {
    id: '2019',
    year: 2019,
    title: 'Berkshire Hathaway Inc. 2019 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2019.pdf',
    bookValuePerShare: 261417,
    marketValuePerShare: 339590,
    datePublished: '2020-02-22'
  },
  {
    id: '2018',
    year: 2018,
    title: 'Berkshire Hathaway Inc. 2018 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2018.pdf',
    bookValuePerShare: 212503,
    marketValuePerShare: 306000,
    datePublished: '2019-02-23'
  },
  {
    id: '2017',
    year: 2017,
    title: 'Berkshire Hathaway Inc. 2017 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2017.pdf',
    bookValuePerShare: 211750,
    marketValuePerShare: 304180,
    datePublished: '2018-02-24'
  },
  {
    id: '2016',
    year: 2016,
    title: 'Berkshire Hathaway Inc. 2016 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2016.pdf',
    bookValuePerShare: 172108,
    marketValuePerShare: 244121,
    datePublished: '2017-02-25'
  },
  {
    id: '2015',
    year: 2015,
    title: 'Berkshire Hathaway Inc. 2015 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2015.pdf',
    bookValuePerShare: 155501,
    marketValuePerShare: 197800,
    datePublished: '2016-02-27'
  },
  {
    id: '2014',
    year: 2014,
    title: 'Berkshire Hathaway Inc. 2014 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2014.pdf',
    bookValuePerShare: 146186,
    marketValuePerShare: 226000,
    datePublished: '2015-02-28'
  },
  {
    id: '2013',
    year: 2013,
    title: 'Berkshire Hathaway Inc. 2013 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2013.pdf',
    bookValuePerShare: 134973,
    marketValuePerShare: 177900,
    datePublished: '2014-03-01'
  },
  {
    id: '2012',
    year: 2012,
    title: 'Berkshire Hathaway Inc. 2012 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2012.pdf',
    bookValuePerShare: 114214,
    marketValuePerShare: 134060,
    datePublished: '2013-03-01'
  },
  {
    id: '2011',
    year: 2011,
    title: 'Berkshire Hathaway Inc. 2011 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2011.pdf',
    bookValuePerShare: 99860,
    marketValuePerShare: 114755,
    datePublished: '2012-02-25'
  },
  {
    id: '2010',
    year: 2010,
    title: 'Berkshire Hathaway Inc. 2010 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2010.pdf',
    bookValuePerShare: 95453,
    marketValuePerShare: 120450,
    datePublished: '2011-02-26'
  },
  {
    id: '2009',
    year: 2009,
    title: 'Berkshire Hathaway Inc. 2009 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2009.pdf',
    bookValuePerShare: 84487,
    marketValuePerShare: 99200,
    datePublished: '2010-02-27'
  },
  {
    id: '2008',
    year: 2008,
    title: 'Berkshire Hathaway Inc. 2008 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2008.pdf',
    bookValuePerShare: 70530,
    marketValuePerShare: 84250,
    datePublished: '2009-02-28'
  },
  {
    id: '2007',
    year: 2007,
    title: 'Berkshire Hathaway Inc. 2007 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2007.pdf',
    bookValuePerShare: 78008,
    marketValuePerShare: 141600,
    datePublished: '2008-02-29'
  },
  {
    id: '2006',
    year: 2006,
    title: 'Berkshire Hathaway Inc. 2006 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2006.pdf',
    bookValuePerShare: 70281,
    marketValuePerShare: 109990,
    datePublished: '2007-03-01'
  },
  {
    id: '2005',
    year: 2005,
    title: 'Berkshire Hathaway Inc. 2005 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2005.pdf',
    bookValuePerShare: 59377,
    marketValuePerShare: 88620,
    datePublished: '2006-03-01'
  },
  {
    id: '2004',
    year: 2004,
    title: 'Berkshire Hathaway Inc. 2004 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2004.pdf',
    bookValuePerShare: 55824,
    marketValuePerShare: 87900,
    datePublished: '2005-03-05'
  },
  {
    id: '2003',
    year: 2003,
    title: 'Berkshire Hathaway Inc. 2003 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2003.pdf',
    bookValuePerShare: 50498,
    marketValuePerShare: 84250,
    datePublished: '2004-03-06'
  },
  {
    id: '2002',
    year: 2002,
    title: 'Berkshire Hathaway Inc. 2002 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2002.pdf',
    bookValuePerShare: 41727,
    marketValuePerShare: 72750,
    datePublished: '2003-03-01'
  },
  {
    id: '2001',
    year: 2001,
    title: 'Berkshire Hathaway Inc. 2001 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2001.pdf',
    bookValuePerShare: 37920,
    marketValuePerShare: 75600,
    datePublished: '2002-03-01'
  },
  {
    id: '2000',
    year: 2000,
    title: 'Berkshire Hathaway Inc. 2000 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-2000.pdf',
    bookValuePerShare: 40442,
    marketValuePerShare: 71000,
    datePublished: '2001-03-01'
  },
  {
    id: '1999',
    year: 1999,
    title: 'Berkshire Hathaway Inc. 1999 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1999.pdf',
    bookValuePerShare: 37987,
    marketValuePerShare: 56100,
    datePublished: '2000-03-01'
  },
  {
    id: '1998',
    year: 1998,
    title: 'Berkshire Hathaway Inc. 1998 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1998.pdf',
    bookValuePerShare: 29773,
    marketValuePerShare: 70000,
    datePublished: '1999-03-01'
  },
  {
    id: '1997',
    year: 1997,
    title: 'Berkshire Hathaway Inc. 1997 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1997.pdf',
    bookValuePerShare: 25488,
    marketValuePerShare: 46000,
    datePublished: '1998-03-01'
  },
  {
    id: '1996',
    year: 1996,
    title: 'Berkshire Hathaway Inc. 1996 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1996.pdf',
    bookValuePerShare: 19011,
    marketValuePerShare: 34100,
    datePublished: '1997-03-01'
  },
  {
    id: '1995',
    year: 1995,
    title: 'Berkshire Hathaway Inc. 1995 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1995.pdf',
    bookValuePerShare: 14426,
    marketValuePerShare: 32100,
    datePublished: '1996-03-01'
  },
  {
    id: '1994',
    year: 1994,
    title: 'Berkshire Hathaway Inc. 1994 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1994.pdf',
    bookValuePerShare: 10083,
    marketValuePerShare: 20400,
    datePublished: '1995-03-01'
  },
  {
    id: '1993',
    year: 1993,
    title: 'Berkshire Hathaway Inc. 1993 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1993.pdf',
    bookValuePerShare: 8854,
    marketValuePerShare: 16325,
    datePublished: '1994-03-01'
  },
  {
    id: '1992',
    year: 1992,
    title: 'Berkshire Hathaway Inc. 1992 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1992.pdf',
    bookValuePerShare: 7745,
    marketValuePerShare: 11750,
    datePublished: '1993-03-01'
  },
  {
    id: '1991',
    year: 1991,
    title: 'Berkshire Hathaway Inc. 1991 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1991.pdf',
    bookValuePerShare: 6437,
    marketValuePerShare: 9050,
    datePublished: '1992-03-01'
  },
  {
    id: '1990',
    year: 1990,
    title: 'Berkshire Hathaway Inc. 1990 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1990.pdf',
    bookValuePerShare: 4612,
    marketValuePerShare: 6675,
    datePublished: '1991-03-01'
  },
  {
    id: '1989',
    year: 1989,
    title: 'Berkshire Hathaway Inc. 1989 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1989.pdf',
    bookValuePerShare: 4296,
    marketValuePerShare: 8675,
    datePublished: '1990-03-01'
  },
  {
    id: '1988',
    year: 1988,
    title: 'Berkshire Hathaway Inc. 1988 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1988.pdf',
    bookValuePerShare: 2975,
    marketValuePerShare: 4700,
    datePublished: '1989-03-01'
  },
  {
    id: '1987',
    year: 1987,
    title: 'Berkshire Hathaway Inc. 1987 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1987.pdf',
    bookValuePerShare: 2477,
    marketValuePerShare: 2950,
    datePublished: '1988-03-01'
  },
  {
    id: '1986',
    year: 1986,
    title: 'Berkshire Hathaway Inc. 1986 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1986.pdf',
    bookValuePerShare: 2073,
    marketValuePerShare: 3000,
    datePublished: '1987-03-01'
  },
  {
    id: '1985',
    year: 1985,
    title: 'Berkshire Hathaway Inc. 1985 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1985.pdf',
    bookValuePerShare: 1643,
    marketValuePerShare: 2443,
    datePublished: '1986-03-01'
  },
  {
    id: '1984',
    year: 1984,
    title: 'Berkshire Hathaway Inc. 1984 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1984.pdf',
    bookValuePerShare: 1108,
    marketValuePerShare: 1275,
    datePublished: '1985-03-01'
  },
  {
    id: '1983',
    year: 1983,
    title: 'Berkshire Hathaway Inc. 1983 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1983.pdf',
    bookValuePerShare: 975,
    marketValuePerShare: 1310,
    datePublished: '1984-03-01'
  },
  {
    id: '1982',
    year: 1982,
    title: 'Berkshire Hathaway Inc. 1982 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1982.pdf',
    bookValuePerShare: 737,
    marketValuePerShare: 999,
    datePublished: '1983-03-01'
  },
  {
    id: '1981',
    year: 1981,
    title: 'Berkshire Hathaway Inc. 1981 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1981.pdf',
    bookValuePerShare: 526,
    marketValuePerShare: 470,
    datePublished: '1982-03-01'
  },
  {
    id: '1980',
    year: 1980,
    title: 'Berkshire Hathaway Inc. 1980 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1980.pdf',
    bookValuePerShare: 400,
    marketValuePerShare: 430,
    datePublished: '1981-03-01'
  },
  {
    id: '1979',
    year: 1979,
    title: 'Berkshire Hathaway Inc. 1979 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1979.pdf',
    bookValuePerShare: 335,
    marketValuePerShare: 310,
    datePublished: '1980-03-01'
  },
  {
    id: '1978',
    year: 1978,
    title: 'Berkshire Hathaway Inc. 1978 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1978.pdf',
    bookValuePerShare: 218,
    marketValuePerShare: 220,
    datePublished: '1979-03-01'
  },
  {
    id: '1977',
    year: 1977,
    title: 'Berkshire Hathaway Inc. 1977 Annual Report',
    fileUrl: '/pdfs/annual-reports/berkshire-1977.pdf',
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