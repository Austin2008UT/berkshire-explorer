// Complete annual reports data from 1977-2024
const mockReports = [
  {
    id: '2024',
    year: 2024,
    title: 'Berkshire Hathaway Inc. 2024 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2024ar/2024ar.pdf',
    bookValuePerShare: 415000, // Estimated
    marketValuePerShare: 585000, // Estimated
    datePublished: '2025-02-22'
  },
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
    id: '2014',
    year: 2014,
    title: 'Berkshire Hathaway Inc. 2014 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2014ar/2014ar.pdf',
    bookValuePerShare: 146186,
    marketValuePerShare: 226000,
    datePublished: '2015-02-28'
  },
  {
    id: '2013',
    year: 2013,
    title: 'Berkshire Hathaway Inc. 2013 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2013ar/2013ar.pdf',
    bookValuePerShare: 134973,
    marketValuePerShare: 177900,
    datePublished: '2014-03-01'
  },
  {
    id: '2012',
    year: 2012,
    title: 'Berkshire Hathaway Inc. 2012 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2012ar/2012ar.pdf',
    bookValuePerShare: 114214,
    marketValuePerShare: 134060,
    datePublished: '2013-03-01'
  },
  {
    id: '2011',
    year: 2011,
    title: 'Berkshire Hathaway Inc. 2011 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2011ar/2011ar.pdf',
    bookValuePerShare: 99860,
    marketValuePerShare: 114755,
    datePublished: '2012-02-25'
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
    id: '2009',
    year: 2009,
    title: 'Berkshire Hathaway Inc. 2009 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2009ar/2009ar.pdf',
    bookValuePerShare: 84487,
    marketValuePerShare: 99200,
    datePublished: '2010-02-27'
  },
  {
    id: '2008',
    year: 2008,
    title: 'Berkshire Hathaway Inc. 2008 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2008ar/2008ar.pdf',
    bookValuePerShare: 70530,
    marketValuePerShare: 84250,
    datePublished: '2009-02-28'
  },
  {
    id: '2007',
    year: 2007,
    title: 'Berkshire Hathaway Inc. 2007 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2007ar/2007ar.pdf',
    bookValuePerShare: 78008,
    marketValuePerShare: 141600,
    datePublished: '2008-02-29'
  },
  {
    id: '2006',
    year: 2006,
    title: 'Berkshire Hathaway Inc. 2006 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2006ar/2006ar.pdf',
    bookValuePerShare: 70281,
    marketValuePerShare: 109990,
    datePublished: '2007-03-01'
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
    id: '2004',
    year: 2004,
    title: 'Berkshire Hathaway Inc. 2004 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2004ar/2004ar.pdf',
    bookValuePerShare: 55824,
    marketValuePerShare: 87900,
    datePublished: '2005-03-05'
  },
  {
    id: '2003',
    year: 2003,
    title: 'Berkshire Hathaway Inc. 2003 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2003ar/2003ar.pdf',
    bookValuePerShare: 50498,
    marketValuePerShare: 84250,
    datePublished: '2004-03-06'
  },
  {
    id: '2002',
    year: 2002,
    title: 'Berkshire Hathaway Inc. 2002 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2002ar/2002ar.pdf',
    bookValuePerShare: 41727,
    marketValuePerShare: 72750,
    datePublished: '2003-03-01'
  },
  {
    id: '2001',
    year: 2001,
    title: 'Berkshire Hathaway Inc. 2001 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/2001ar/2001ar.pdf',
    bookValuePerShare: 37920,
    marketValuePerShare: 75600,
    datePublished: '2002-03-01'
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
    id: '1999',
    year: 1999,
    title: 'Berkshire Hathaway Inc. 1999 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1999ar/1999ar.pdf',
    bookValuePerShare: 37987,
    marketValuePerShare: 56100,
    datePublished: '2000-03-01'
  },
  {
    id: '1998',
    year: 1998,
    title: 'Berkshire Hathaway Inc. 1998 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1998ar/1998ar.pdf',
    bookValuePerShare: 29773,
    marketValuePerShare: 70000,
    datePublished: '1999-03-01'
  },
  {
    id: '1997',
    year: 1997,
    title: 'Berkshire Hathaway Inc. 1997 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1997ar/1997ar.pdf',
    bookValuePerShare: 25488,
    marketValuePerShare: 46000,
    datePublished: '1998-03-01'
  },
  {
    id: '1996',
    year: 1996,
    title: 'Berkshire Hathaway Inc. 1996 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/1996ar/1996ar.pdf',
    bookValuePerShare: 19011,
    marketValuePerShare: 34100,
    datePublished: '1997-03-01'
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
    id: '1994',
    year: 1994,
    title: 'Berkshire Hathaway Inc. 1994 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1994.html',
    bookValuePerShare: 10083,
    marketValuePerShare: 20400,
    datePublished: '1995-03-01'
  },
  {
    id: '1993',
    year: 1993,
    title: 'Berkshire Hathaway Inc. 1993 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1993.html',
    bookValuePerShare: 8854,
    marketValuePerShare: 16325,
    datePublished: '1994-03-01'
  },
  {
    id: '1992',
    year: 1992,
    title: 'Berkshire Hathaway Inc. 1992 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1992.html',
    bookValuePerShare: 7745,
    marketValuePerShare: 11750,
    datePublished: '1993-03-01'
  },
  {
    id: '1991',
    year: 1991,
    title: 'Berkshire Hathaway Inc. 1991 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1991.html',
    bookValuePerShare: 6437,
    marketValuePerShare: 9050,
    datePublished: '1992-03-01'
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
    id: '1989',
    year: 1989,
    title: 'Berkshire Hathaway Inc. 1989 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1989.html',
    bookValuePerShare: 4296,
    marketValuePerShare: 8675,
    datePublished: '1990-03-01'
  },
  {
    id: '1988',
    year: 1988,
    title: 'Berkshire Hathaway Inc. 1988 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1988.html',
    bookValuePerShare: 2975,
    marketValuePerShare: 4700,
    datePublished: '1989-03-01'
  },
  {
    id: '1987',
    year: 1987,
    title: 'Berkshire Hathaway Inc. 1987 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1987.html',
    bookValuePerShare: 2477,
    marketValuePerShare: 2950,
    datePublished: '1988-03-01'
  },
  {
    id: '1986',
    year: 1986,
    title: 'Berkshire Hathaway Inc. 1986 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1986.html',
    bookValuePerShare: 2073,
    marketValuePerShare: 3000,
    datePublished: '1987-03-01'
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
    id: '1984',
    year: 1984,
    title: 'Berkshire Hathaway Inc. 1984 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1984.html',
    bookValuePerShare: 1108,
    marketValuePerShare: 1275,
    datePublished: '1985-03-01'
  },
  {
    id: '1983',
    year: 1983,
    title: 'Berkshire Hathaway Inc. 1983 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1983.html',
    bookValuePerShare: 975,
    marketValuePerShare: 1310,
    datePublished: '1984-03-01'
  },
  {
    id: '1982',
    year: 1982,
    title: 'Berkshire Hathaway Inc. 1982 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1982.html',
    bookValuePerShare: 737,
    marketValuePerShare: 999,
    datePublished: '1983-03-01'
  },
  {
    id: '1981',
    year: 1981,
    title: 'Berkshire Hathaway Inc. 1981 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1981.html',
    bookValuePerShare: 526,
    marketValuePerShare: 470,
    datePublished: '1982-03-01'
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
    id: '1979',
    year: 1979,
    title: 'Berkshire Hathaway Inc. 1979 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1979.html',
    bookValuePerShare: 335,
    marketValuePerShare: 310,
    datePublished: '1980-03-01'
  },
  {
    id: '1978',
    year: 1978,
    title: 'Berkshire Hathaway Inc. 1978 Annual Report',
    fileUrl: 'https://www.berkshirehathaway.com/letters/1978.html',
    bookValuePerShare: 218,
    marketValuePerShare: 220,
    datePublished: '1979-03-01'
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