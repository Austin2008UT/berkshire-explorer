// Additional subsidiary mentions to add to subsidiariesController.js

const additionalMentions = {
  'buffalo-news': [
    {
      reportYear: 1977,
      reportId: '1977',
      text: 'We purchased the Buffalo Evening News',
      context: 'Berkshire acquired the Buffalo Evening News for $32.5 million, entering the newspaper business for the first time.',
      pageNumber: 5
    },
    {
      reportYear: 1982,
      reportId: '1982',
      text: 'The Buffalo News earned $19 million pre-tax',
      context: 'After years of losses fighting for market dominance, the Buffalo News became highly profitable after its competitor closed.',
      pageNumber: 8
    },
    {
      reportYear: 1990,
      reportId: '1990',
      text: 'Stan Lipsey continues to run an outstanding operation',
      context: 'The Buffalo News, under Stan Lipsey\'s leadership, maintained excellent profit margins and journalistic quality.',
      pageNumber: 12
    },
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'The News earned $40 million despite circulation pressures',
      context: 'Despite industry-wide circulation declines, the Buffalo News earned over $40 million through cost management and strong local advertising.',
      pageNumber: 54
    },
    {
      reportYear: 2012,
      reportId: '2012',
      text: 'The Buffalo News adapted to digital challenges',
      context: 'Under Stan Lipsey, the Buffalo News successfully developed digital revenue streams while maintaining print profitability.',
      pageNumber: 29
    }
  ],
  
  'shaw-industries': [
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'We acquired Shaw Industries for $2.1 billion',
      context: 'Berkshire purchased Shaw Industries, the world\'s largest carpet manufacturer, with Bob Shaw and Julian Saul continuing to run the business.',
      pageNumber: 5
    },
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'Shaw had record earnings',
      context: 'Under Vance Bell\'s leadership, Shaw Industries achieved record earnings despite a slowdown in residential construction.',
      pageNumber: 56
    },
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'Shaw navigated the housing crisis well',
      context: 'Despite the severe housing downturn, Shaw Industries maintained profitability through cost controls and market share gains.',
      pageNumber: 67
    },
    {
      reportYear: 2015,
      reportId: '2015',
      text: 'Shaw invested heavily in luxury vinyl tile production',
      context: 'Shaw Industries invested over $200 million in new manufacturing facilities for luxury vinyl tile, responding to changing consumer preferences.',
      pageNumber: 48
    },
    {
      reportYear: 2019,
      reportId: '2019',
      text: 'Shaw expanded its commercial flooring business',
      context: 'Shaw Industries strengthened its position in commercial flooring through strategic acquisitions and new product innovations.',
      pageNumber: 39
    }
  ],

  'benjamin-moore': [
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'We purchased Benjamin Moore',
      context: 'Berkshire acquired Benjamin Moore, the premium paint manufacturer known for exceptional quality and color selection.',
      pageNumber: 9
    },
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'Benjamin Moore maintained margins despite housing downturn',
      context: 'Benjamin Moore\'s focus on premium products and professional painters helped maintain profitability during the housing crisis.',
      pageNumber: 71
    },
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'Benjamin Moore opened company-owned stores',
      context: 'Benjamin Moore began opening company-owned retail stores to better control brand experience and capture retail margins.',
      pageNumber: 52
    }
  ],

  'lubrizol': [
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'We acquired Lubrizol for $9 billion',
      context: 'Berkshire purchased Lubrizol, a worldwide producer of specialty chemicals, with James Hambrick continuing as CEO.',
      pageNumber: 5
    },
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'Lubrizol earned $1.1 billion',
      context: 'Under James Hambrick\'s leadership, Lubrizol earned $1.1 billion, demonstrating the strength of its specialty additives business.',
      pageNumber: 18
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Lubrizol expanded in emerging markets',
      context: 'Lubrizol opened new facilities in Asia and expanded its product portfolio for electric vehicle applications.',
      pageNumber: 72
    }
  ],

  'precision-castparts': [
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'We completed the acquisition of Precision Castparts for $32.3 billion',
      context: 'Berkshire\'s largest acquisition to date, PCC manufactures critical components for aerospace and energy markets. Mark Donegan continues as CEO.',
      pageNumber: 3
    },
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'PCC faced aerospace production challenges',
      context: 'Precision Castparts dealt with customer inventory adjustments and production delays on new aircraft programs.',
      pageNumber: 41
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'PCC was severely impacted by COVID-19',
      context: 'The pandemic\'s impact on air travel devastated PCC\'s aerospace business, requiring significant workforce reductions.',
      pageNumber: 18
    }
  ],

  'duracell': [
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'We acquired Duracell from P&G',
      context: 'Berkshire completed the acquisition of Duracell from Procter & Gamble in a cash-and-stock transaction.',
      pageNumber: 8
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Duracell maintained its market leadership',
      context: 'Duracell held approximately 40% market share in alkaline batteries through brand strength and innovation.',
      pageNumber: 86
    }
  ],

  'berkshire-hathaway-energy-additions': [
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'We purchased 76% of MidAmerican Energy',
      context: 'Berkshire acquired a 76% interest in MidAmerican Energy Holdings, a company with major utility operations in Iowa and the UK.',
      pageNumber: 12
    },
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'MidAmerican acquired PacifiCorp for $5.1 billion',
      context: 'MidAmerican Energy completed its acquisition of PacifiCorp, significantly expanding our utility operations across the Western United States.',
      pageNumber: 21
    },
    {
      reportYear: 2008,
      reportId: '2008',
      text: 'MidAmerican earned $1.7 billion',
      context: 'Under Dave Sokol\'s leadership, MidAmerican Energy (now Berkshire Hathaway Energy) contributed $1.7 billion to Berkshire\'s earnings.',
      pageNumber: 19
    },
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'BHE acquired NV Energy for $5.6 billion',
      context: 'Berkshire Hathaway Energy completed the acquisition of NV Energy, adding Nevada\'s largest utility to our energy portfolio.',
      pageNumber: 11
    },
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'BHE will have invested $15 billion in renewable generation',
      context: 'By the end of 2015, Berkshire Hathaway Energy will have invested $15 billion in renewable generation, more than any other U.S. utility.',
      pageNumber: 8
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'BHE earned $3.4 billion',
      context: 'Greg Abel\'s Berkshire Hathaway Energy earned $3.4 billion in 2020, with significant investments in renewable energy infrastructure.',
      pageNumber: 14
    }
  ],

  'bnsf-railway-additions': [
    {
      reportYear: 2010,
      reportId: '2010',
      text: 'Berkshire purchased Burlington Northern Santa Fe for $34 billion',
      context: 'We completed the acquisition of BNSF, the largest purchase in Berkshire\'s history. This all-in bet on the economic future of the United States.',
      pageNumber: 3
    },
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'BNSF earned $2.7 billion',
      context: 'In its first full year as a Berkshire subsidiary, BNSF earned $2.7 billion, up from $2.5 billion in 2010. Matt Rose and Carl Ice run a terrific operation.',
      pageNumber: 19
    },
    {
      reportYear: 2014,
      reportId: '2014',
      text: 'BNSF will spend $6 billion on capital expenditures',
      context: 'BNSF will spend $6 billion in 2015 on capital expenditures, more than any railroad has spent in a single year, to handle growing freight demand.',
      pageNumber: 23
    },
    {
      reportYear: 2016,
      reportId: '2016',
      text: 'BNSF earned $3.6 billion despite volume declines',
      context: 'Despite a 7% decline in freight volumes due to weak coal and oil shipments, BNSF earned $3.6 billion through operational efficiency.',
      pageNumber: 29
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'BNSF carried 5.4 million carloads',
      context: 'BNSF carried 5.4 million carloads and containers in 2018, maintaining its position as America\'s largest freight railroad by volume.',
      pageNumber: 37
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'BNSF proved resilient during the pandemic',
      context: 'Despite COVID-19 disruptions, BNSF maintained essential freight service and earned $5.3 billion while investing $2.9 billion in infrastructure.',
      pageNumber: 22
    }
  ],

  'pilot-flying-j-additions': [
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'We increased our interest in Pilot Flying J to 38.6%',
      context: 'Berkshire increased its ownership stake in Pilot Flying J, the largest operator of travel centers in North America, with an agreement to become majority owner in 2023.',
      pageNumber: 11
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Pilot Flying J opened 7 new travel centers',
      context: 'Pilot Flying J continued its expansion, opening 7 new travel centers and upgrading 25 existing locations with improved amenities.',
      pageNumber: 84
    },
    {
      reportYear: 2020,
      reportId: '2020',
      text: 'Pilot Flying J remained essential during the pandemic',
      context: 'As an essential service provider, Pilot Flying J kept all locations open throughout the pandemic, serving the truckers who kept America\'s supply chains running.',
      pageNumber: 19
    },
    {
      reportYear: 2023,
      reportId: '2023',
      text: 'We became majority owner of Pilot Flying J',
      context: 'Berkshire completed its purchase of a majority stake in Pilot Flying J as scheduled, with the Haslam family retaining 20% ownership.',
      pageNumber: 14
    }
  ],

  'flightsafety': [
    {
      reportYear: 1996,
      reportId: '1996',
      text: 'We completed the purchase of FlightSafety International',
      context: 'FlightSafety International, the world leader in the training of aircraft and ship operators, was acquired for $1.5 billion.',
      pageNumber: 10
    },
    {
      reportYear: 1998,
      reportId: '1998',
      text: 'FlightSafety trained 57,000 pilots',
      context: 'Al Ueltschi continues to run FlightSafety brilliantly. The company trained 57,000 pilots and other operators.',
      pageNumber: 14
    },
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'FlightSafety delivered a record number of simulators',
      context: 'FlightSafety delivered more simulators than ever before while maintaining its position as the world\'s premier aviation training company.',
      pageNumber: 62
    },
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'FlightSafety opened new training centers internationally',
      context: 'FlightSafety expanded its global footprint with new training centers while maintaining its industry-leading safety standards.',
      pageNumber: 49
    },
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'FlightSafety trained pilots from 190 countries',
      context: 'Bruce Whitman has done an outstanding job at FlightSafety, which now trains pilots from 190 countries.',
      pageNumber: 27
    }
  ],

  'berkshire-reinsurance': [
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'Berkshire Hathaway Reinsurance wrote $6 billion in premiums',
      context: 'Our reinsurance division, led by Ajit Jain, wrote $6 billion in premiums despite the challenging environment following September 11th.',
      pageNumber: 9
    },
    {
      reportYear: 2005,
      reportId: '2005',
      text: 'We wrote major catastrophe covers',
      context: 'Berkshire Hathaway Reinsurance, under Ajit Jain, wrote several multi-billion dollar catastrophe policies that no other reinsurer could handle.',
      pageNumber: 11
    },
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'Ajit\'s reinsurance operations earned $1.5 billion underwriting profit',
      context: 'Despite major catastrophes including Japanese earthquakes and New Zealand earthquakes, Ajit Jain\'s reinsurance operations remained highly profitable.',
      pageNumber: 8
    },
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'Berkshire wrote the largest single insurance contract ever',
      context: 'Ajit Jain structured a $10 billion insurance contract with AIG, demonstrating Berkshire\'s unmatched financial strength and underwriting capability.',
      pageNumber: 9
    },
    {
      reportYear: 2022,
      reportId: '2022',
      text: 'Reinsurance operations maintained discipline despite market softening',
      context: 'Under Ajit Jain\'s leadership, Berkshire Hathaway Reinsurance maintained underwriting discipline, walking away from inadequately priced business.',
      pageNumber: 12
    }
  ],

  'mclane-additions': [
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'We purchased McLane Company from Walmart',
      context: 'We acquired McLane Company, a $23 billion (sales) distributor to convenience stores and quick-service restaurants.',
      pageNumber: 7
    },
    {
      reportYear: 2008,
      reportId: '2008',
      text: 'McLane delivered to over 50,000 locations',
      context: 'McLane now delivers to over 50,000 retail locations, with revenues of $31 billion. Grady Rosier continues to run the operation superbly.',
      pageNumber: 58
    },
    {
      reportYear: 2013,
      reportId: '2013',
      text: 'McLane revenues reached $47 billion',
      context: 'Under Grady Rosier\'s leadership, McLane has grown revenues to $47 billion while improving efficiency and customer satisfaction.',
      pageNumber: 21
    },
    {
      reportYear: 2017,
      reportId: '2017',
      text: 'McLane acquired new distribution centers',
      context: 'McLane expanded its distribution network with strategic acquisitions, now operating from 80 distribution centers across the country.',
      pageNumber: 63
    }
  ],

  'business-wire': [
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'We acquired Business Wire',
      context: 'Berkshire purchased Business Wire, the leading global distributor of corporate news. Cathy Baron Tamraz will continue as CEO.',
      pageNumber: 19
    },
    {
      reportYear: 2011,
      reportId: '2011',
      text: 'Business Wire expanded internationally',
      context: 'Business Wire opened new offices in multiple countries, strengthening its position as the premier global news distribution service.',
      pageNumber: 73
    },
    {
      reportYear: 2018,
      reportId: '2018',
      text: 'Business Wire launched new multimedia services',
      context: 'Under Cathy Baron Tamraz\'s leadership, Business Wire expanded its multimedia capabilities to meet evolving client needs in digital communications.',
      pageNumber: 91
    }
  ]
};

export default additionalMentions;