/**
 * Berkshire Hathaway Subsidiary Mentions 2010-2023
 * Key mentions extracted from annual reports
 */

const subsidiaryMentions2010_2023 = {
  'bnsf': [
    {
      reportYear: 2010,
      reportId: '2010',
      text: 'BNSF\'s first year as part of Berkshire was everything we hoped',
      context: 'BNSF, our new subsidiary, had a record year in 2010. The railroad carried 10% more freight than in 2009.',
      pageNumber: 5
    },
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'BNSF is the most important purchase we\'ve ever made',
      context: 'BNSF is the most important purchase we\'ve ever made. It ties our future to the future of America.',
      pageNumber: 7
    },
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'BNSF will spend $6 billion on capital expenditures',
      context: 'BNSF will spend a record $6 billion on capital expenditures in 2015, more than any railroad has ever spent.',
      pageNumber: 9
    },
    {
      reportYear: 2021,
      reportId: '2021',
      text: 'BNSF carried 535 million tons of freight',
      context: 'BNSF carried 535 million tons of freight in 2021, earning $6 billion after-tax.',
      pageNumber: 8
    }
  ],

  'berkshire-energy': [
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'MidAmerican Energy is now Berkshire Hathaway Energy',
      context: 'We renamed MidAmerican Energy Holdings Company to Berkshire Hathaway Energy to better reflect its scope.',
      pageNumber: 11
    },
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'BHE acquired NV Energy and AltaLink',
      context: 'Berkshire Hathaway Energy completed major acquisitions of NV Energy in Nevada and AltaLink in Canada.',
      pageNumber: 12
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'BHE will have invested $18 billion in renewables',
      context: 'By the end of 2021, BHE will have invested $18 billion in renewable generation, far more than any other utility.',
      pageNumber: 14
    },
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'BHE owns 28% of U.S. transmission assets',
      context: 'BHE now owns approximately 28% of all U.S. electric transmission assets.',
      pageNumber: 10
    }
  ],

  'lubrizol': [
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'We purchased Lubrizol for $9 billion',
      context: 'We purchased Lubrizol, a worldwide producer of specialty chemicals, for approximately $9 billion.',
      pageNumber: 6
    },
    {
      reportYear: 2012,
      reportId: '2012',
      text: 'Lubrizol had record earnings',
      context: 'Lubrizol had record earnings in 2012 under James Hambrick\'s leadership.',
      pageNumber: 13
    },
    {
      reportYear: 2019,
      reportId: '2019',
      text: 'Lubrizol continues to perform well',
      context: 'Lubrizol continues to perform well, with its specialty chemicals essential to many industries.',
      pageNumber: 17
    }
  ],

  'precision-castparts': [
    {
      reportYear: 2015,
      reportId: '2015',
      text: 'We agreed to purchase Precision Castparts',
      context: 'We agreed to purchase Precision Castparts Corp. for $37.2 billion, our largest acquisition ever.',
      pageNumber: 3
    },
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'PCC is adjusting to aerospace downturn',
      context: 'Precision Castparts is adjusting to the aerospace downturn but remains a superb business.',
      pageNumber: 11
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'PCC was severely impacted by COVID-19',
      context: 'Precision Castparts was severely impacted by COVID-19\'s effect on aerospace, but we remain confident in its future.',
      pageNumber: 15
    }
  ],

  'duracell': [
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'We agreed to acquire Duracell from P&G',
      context: 'We agreed to acquire Duracell from Procter & Gamble in exchange for our P&G shares.',
      pageNumber: 14
    },
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'Duracell is the clear leader in batteries',
      context: 'Duracell is the clear leader in batteries with a powerful brand and strong market position.',
      pageNumber: 18
    },
    {
      reportYear: 2023,
      reportId: '2023',
      text: 'Duracell maintained market leadership',
      context: 'Duracell maintained its market leadership position despite competitive pressures.',
      pageNumber: 19
    }
  ],

  'geico': [
    {
      reportYear: 2012,
      reportId: '2012',
      text: 'GEICO passed 10 million policies in force',
      context: 'GEICO passed 10 million policies in force, doubling from 5 million in just eight years.',
      pageNumber: 7
    },
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'GEICO is now the second-largest auto insurer',
      context: 'GEICO is now the second-largest auto insurer in the United States with over 12% market share.',
      pageNumber: 8
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'GEICO benefited from reduced driving during COVID',
      context: 'GEICO benefited from reduced driving during COVID lockdowns, with lower claims frequencies.',
      pageNumber: 9
    },
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'GEICO faced profitability challenges',
      context: 'GEICO faced profitability challenges as claims inflation exceeded rate increases.',
      pageNumber: 7
    },
    {
      reportYear: 2023,
      reportId: '2023',
      text: 'GEICO is fixing its problems under new leadership',
      context: 'GEICO is fixing its profitability problems under Todd Combs\' leadership with technology improvements.',
      pageNumber: 8
    }
  ],

  'sees-candies': [
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'See\'s pretax earnings were $83 million',
      context: 'See\'s Candies earned $83 million pretax, a testament to its pricing power and brand strength.',
      pageNumber: 19
    },
    {
      reportYear: 2019,
      reportId: '2019',
      text: 'See\'s continues to delight customers',
      context: 'See\'s continues to delight customers with the same quality that has made it successful for over 100 years.',
      pageNumber: 21
    },
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'See\'s faced cost pressures but maintained quality',
      context: 'See\'s faced significant cost pressures but maintained its commitment to quality.',
      pageNumber: 20
    }
  ],

  'clayton-homes': [
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'Clayton is America\'s largest homebuilder',
      context: 'Clayton became America\'s largest homebuilder, selling 34,000 homes in 2013.',
      pageNumber: 16
    },
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'Clayton built 42,000 homes',
      context: 'Clayton built 42,000 homes in 2017, capturing nearly half of the manufactured housing market.',
      pageNumber: 15
    },
    {
      reportYear: 2021,
      reportId: '2021',
      text: 'Clayton is thriving in a hot housing market',
      context: 'Clayton is thriving in a hot housing market, with both manufactured and site-built homes in high demand.',
      pageNumber: 16
    }
  ],

  'marmon': [
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'We increased our Marmon ownership to 80%',
      context: 'We increased our ownership of Marmon to approximately 80% as planned in our original agreement.',
      pageNumber: 18
    },
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'We now own 100% of Marmon',
      context: 'We completed our purchase of Marmon, now owning 100% of this collection of over 100 businesses.',
      pageNumber: 17
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Marmon had record results',
      context: 'Marmon had record results with its diverse industrial businesses performing well.',
      pageNumber: 20
    }
  ],

  'pilot-flying-j': [
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'We increased our stake in Pilot Flying J',
      context: 'We increased our ownership stake in Pilot Flying J to 38.6%, with plans to become majority owner in 2023.',
      pageNumber: 14
    },
    {
      reportYear: 2023,
      reportId: '2023',
      text: 'We now own 80% of Pilot Travel Centers',
      context: 'We now own 80% of Pilot Travel Centers, completing our planned ownership increase.',
      pageNumber: 13
    }
  ],

  'apple': [
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'We own 5.5% of Apple',
      context: 'Our Apple position, now 5.5% of the company, has become our largest common stock investment.',
      pageNumber: 4
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Apple is our largest common stock holding',
      context: 'Apple represents our largest common stock holding with a market value exceeding $40 billion.',
      pageNumber: 5
    },
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'Apple remains our largest position',
      context: 'Apple remains far and away our largest common stock position, representing our confidence in its ecosystem.',
      pageNumber: 6
    }
  ],

  'nebraska-furniture': [
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'NFM opened its third store in Dallas',
      context: 'Nebraska Furniture Mart opened its third store in Dallas, a massive 560,000 square foot facility.',
      pageNumber: 22
    },
    {
      reportYear: 2023,
      reportId: '2023',
      text: 'The Blumkin family continues to excel',
      context: 'The Blumkin family continues to excel at Nebraska Furniture Mart, now in its fourth generation of family leadership.',
      pageNumber: 24
    }
  ],

  'brooks-sports': [
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'Brooks became #1 in running shoes',
      context: 'Brooks became the #1 brand in running shoes at specialty stores, an amazing achievement.',
      pageNumber: 23
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'Brooks thrived during the running boom',
      context: 'Brooks thrived during COVID as running became a popular pandemic activity.',
      pageNumber: 25
    }
  ],

  'oriental-trading': [
    {
      reportYear: 2012,
      reportId: '2012',
      text: 'We acquired Oriental Trading',
      context: 'We acquired Oriental Trading Company, a direct marketer of party supplies and crafts.',
      pageNumber: 24
    }
  ],

  'h-h-brown': [
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'H.H. Brown faced challenges but adapted',
      context: 'H.H. Brown faced challenges from changing footwear trends but successfully adapted its product mix.',
      pageNumber: 26
    }
  ],

  'business-wire': [
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Business Wire continues steady growth',
      context: 'Business Wire continues its steady growth as the premier press release distribution service.',
      pageNumber: 27
    }
  ],

  'berkshire-specialty': [
    {
      reportYear: 2021,
      reportId: '2021',
      text: 'Berkshire Hathaway Specialty Insurance is thriving',
      context: 'Berkshire Hathaway Specialty Insurance, launched in 2013, is now thriving with premiums exceeding $2 billion.',
      pageNumber: 12
    }
  ],

  'alleghany': [
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'We acquired Alleghany Corporation',
      context: 'We acquired Alleghany Corporation for $11.6 billion, adding to our insurance operations.',
      pageNumber: 4
    }
  ],

  'occidental': [
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'We own 20% of Occidental Petroleum',
      context: 'We increased our ownership of Occidental Petroleum to over 20%, becoming its largest shareholder.',
      pageNumber: 5
    }
  ]
};

module.exports = subsidiaryMentions2010_2023;