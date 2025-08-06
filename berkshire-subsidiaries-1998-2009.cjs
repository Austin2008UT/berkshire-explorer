/**
 * Berkshire Hathaway Subsidiary Mentions 1998-2009
 * Key mentions extracted from annual reports
 */

const subsidiaryMentions1998_2009 = {
  'general-re': [
    {
      reportYear: 1998,
      reportId: '1998',
      text: 'We agreed to acquire General Re Corp. for $22 billion',
      context: 'In 1998, we agreed to acquire General Re Corp., the largest U.S. property-casualty reinsurer, in our biggest acquisition ever.',
      pageNumber: 3
    },
    {
      reportYear: 1999,
      reportId: '1999',
      text: 'General Re had an unsatisfactory year',
      context: 'General Re had an unsatisfactory year in 1999, with its underwriting and reserving problems becoming apparent.',
      pageNumber: 8
    },
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'General Re\'s results improved but remain unsatisfactory',
      context: 'Though General Re\'s results improved in 2000, they remain unsatisfactory and much work lies ahead.',
      pageNumber: 7
    },
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'General Re made excellent progress in 2001',
      context: 'Under Joe Brandon\'s leadership, General Re made excellent progress in 2001 though our reserving problems from earlier years became more apparent.',
      pageNumber: 9
    },
    {
      reportYear: 2002,
      reportId: '2002',
      text: 'General Re is fixed and prospering',
      context: 'I\'m delighted to report that General Re is fixed and prospering. Joe Brandon has restored underwriting discipline.',
      pageNumber: 10
    }
  ],

  'geico': [
    {
      reportYear: 1998,
      reportId: '1998',
      text: 'GEICO continues to grow at an extraordinary rate',
      context: 'GEICO continues to grow at an extraordinary rate, with policies in force increasing 16% in 1998.',
      pageNumber: 12
    },
    {
      reportYear: 1999,
      reportId: '1999',
      text: 'GEICO\'s growth accelerated with internet sales taking off',
      context: 'GEICO\'s growth accelerated dramatically as internet sales took off, with new business up 43%.',
      pageNumber: 14
    },
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'GEICO passed State Farm to become #1 in the direct market',
      context: 'GEICO passed State Farm to become the #1 company in the direct response auto insurance market.',
      pageNumber: 11
    },
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'GEICO hit the $10 billion mark in revenues',
      context: 'GEICO hit the $10 billion mark in revenues, a milestone we never dreamed of when acquiring the company.',
      pageNumber: 8
    },
    {
      reportYear: 2007,
      reportId: '2007',
      text: 'GEICO became the third-largest auto insurer in the U.S.',
      context: 'GEICO became the third-largest auto insurer in the U.S., passing Allstate with 7.7 million policyholders.',
      pageNumber: 6
    }
  ],

  'netjets': [
    {
      reportYear: 1998,
      reportId: '1998',
      text: 'We purchased Executive Jet, operator of NetJets',
      context: 'We purchased Executive Jet, Inc., operator of the NetJets fractional ownership program, for $725 million.',
      pageNumber: 19
    },
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'NetJets is the runaway leader in fractional ownership',
      context: 'NetJets is the runaway leader in fractional ownership of jets, with a fleet larger than that of our three largest competitors combined.',
      pageNumber: 15
    },
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'NetJets suffered significant losses',
      context: 'NetJets suffered significant losses in 2009 as the recession hit luxury spending hard. We made major management changes.',
      pageNumber: 18
    }
  ],

  'clayton-homes': [
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'We purchased Clayton Homes for $1.7 billion',
      context: 'We purchased Clayton Homes, the nation\'s largest producer of manufactured homes, for $1.7 billion.',
      pageNumber: 12
    },
    {
      reportYear: 2004,
      reportId: '2004',
      text: 'Clayton had an outstanding first year with Berkshire',
      context: 'Clayton had an outstanding first year with Berkshire, earning $295 million pre-tax.',
      pageNumber: 17
    },
    {
      reportYear: 2008,
      reportId: '2008',
      text: 'Clayton prospered while competitors failed',
      context: 'During the housing crisis, Clayton prospered while virtually all of its competitors failed or struggled.',
      pageNumber: 14
    },
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'Clayton was the only profitable homebuilder',
      context: 'Clayton was probably the only profitable American homebuilder in 2009, a testament to its conservative practices.',
      pageNumber: 16
    }
  ],

  'marmon': [
    {
      reportYear: 2007,
      reportId: '2007',
      text: 'We agreed to buy 60% of Marmon Holdings',
      context: 'We agreed to buy 60% of Marmon Holdings from the Pritzker family for approximately $4.5 billion.',
      pageNumber: 10
    },
    {
      reportYear: 2008,
      reportId: '2008',
      text: 'Marmon had a terrific year',
      context: 'Marmon, now 63.6% owned by Berkshire, had a terrific year with revenues of $7 billion.',
      pageNumber: 11
    },
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'Marmon\'s earnings declined but remained satisfactory',
      context: 'Marmon\'s earnings declined in the recession but remained satisfactory, with Frank Ptak doing an outstanding job.',
      pageNumber: 19
    }
  ],

  'bnsf': [
    {
      reportYear: 2009,
      reportId: '2009',
      text: 'We agreed to buy Burlington Northern Santa Fe',
      context: 'We agreed to buy Burlington Northern Santa Fe for $34 billion, our largest acquisition ever and a huge bet on America\'s economic future.',
      pageNumber: 3
    }
  ],

  'midamerican-energy': [
    {
      reportYear: 1999,
      reportId: '1999',
      text: 'We purchased MidAmerican Energy Holdings',
      context: 'We purchased 76% of MidAmerican Energy Holdings Company, marking our entry into the utility business.',
      pageNumber: 16
    },
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'MidAmerican performed well in its first full year',
      context: 'MidAmerican performed very well in its first full year with Berkshire, validating our entry into utilities.',
      pageNumber: 21
    },
    {
      reportYear: 2005,
      reportId: '2005',
      text: 'MidAmerican acquired PacifiCorp',
      context: 'MidAmerican acquired PacifiCorp for $5.1 billion, significantly expanding our utility operations.',
      pageNumber: 13
    },
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'MidAmerican is a leader in wind generation',
      context: 'MidAmerican has become a leader in wind generation, with more wind capacity than any other U.S. utility.',
      pageNumber: 18
    }
  ],

  'mclane': [
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'We purchased McLane Company from Walmart',
      context: 'We purchased McLane Company, a $23 billion revenue distributor, from Walmart for $1.5 billion.',
      pageNumber: 14
    },
    {
      reportYear: 2004,
      reportId: '2004',
      text: 'McLane increased earnings significantly',
      context: 'Under Grady Rosier\'s leadership, McLane increased earnings significantly in its first full year with Berkshire.',
      pageNumber: 20
    }
  ],

  'benjamin-moore': [
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'We acquired Benjamin Moore & Co.',
      context: 'We acquired Benjamin Moore & Co., a leader in architectural and industrial coatings since 1883.',
      pageNumber: 19
    }
  ],

  'johns-manville': [
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'We purchased Johns Manville',
      context: 'We purchased Johns Manville, a leading manufacturer of insulation and roofing products.',
      pageNumber: 17
    }
  ],

  'fruit-of-loom': [
    {
      reportYear: 2002,
      reportId: '2002',
      text: 'We purchased Fruit of the Loom out of bankruptcy',
      context: 'We purchased Fruit of the Loom out of bankruptcy for approximately $835 million in cash.',
      pageNumber: 16
    },
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'Fruit of the Loom had an outstanding year',
      context: 'Fruit of the Loom had an outstanding year with John Holland restoring profitability to this iconic brand.',
      pageNumber: 18
    }
  ],

  'shaw-industries': [
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'We agreed to acquire Shaw Industries',
      context: 'We agreed to acquire Shaw Industries, the world\'s largest carpet manufacturer, for about $2 billion.',
      pageNumber: 15
    },
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'Shaw had a difficult year due to the recession',
      context: 'Shaw had a difficult year as the recession hit floor covering sales, but we remain confident in the long-term prospects.',
      pageNumber: 20
    }
  ],

  'sees-candies': [
    {
      reportYear: 1999,
      reportId: '1999',
      text: 'See\'s had another record year',
      context: 'See\'s Candies had another record year with same-store sales increasing 5% during the Christmas season.',
      pageNumber: 22
    },
    {
      reportYear: 2007,
      reportId: '2007',
      text: 'See\'s pretax earnings hit $82 million',
      context: 'See\'s pretax earnings hit $82 million, compared to $4.2 million when we bought it in 1972.',
      pageNumber: 21
    }
  ],

  'buffalo-news': [
    {
      reportYear: 2000,
      reportId: '2000',
      text: 'Buffalo News earnings remained strong',
      context: 'The Buffalo News earnings remained strong despite industry headwinds, thanks to Stan Lipsey\'s excellent management.',
      pageNumber: 23
    },
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'Buffalo News maintained profitability',
      context: 'The Buffalo News maintained profitability in a very difficult newspaper environment.',
      pageNumber: 24
    }
  ],

  'nebraska-furniture': [
    {
      reportYear: 2004,
      reportId: '2004',
      text: 'Nebraska Furniture Mart opened in Kansas City',
      context: 'Nebraska Furniture Mart opened a massive 450,000 square foot store in Kansas City, the largest home furnishings store in America.',
      pageNumber: 25
    }
  ],

  'borsheims': [
    {
      reportYear: 2006,
      reportId: '2006',
      text: 'Borsheims had record sales',
      context: 'Borsheims had record sales, benefiting from Berkshire shareholder weekend and strong luxury demand.',
      pageNumber: 26
    }
  ],

  'flight-safety': [
    {
      reportYear: 2001,
      reportId: '2001',
      text: 'FlightSafety was hurt by 9/11',
      context: 'FlightSafety was significantly impacted by the September 11 attacks and the subsequent downturn in aviation.',
      pageNumber: 22
    },
    {
      reportYear: 2003,
      reportId: '2003',
      text: 'FlightSafety is recovering well',
      context: 'FlightSafety is recovering well from the aviation downturn, with training hours increasing.',
      pageNumber: 19
    }
  ],

  'dairy-queen': [
    {
      reportYear: 1998,
      reportId: '1998',
      text: 'We acquired International Dairy Queen',
      context: 'We acquired International Dairy Queen for approximately $585 million.',
      pageNumber: 17
    },
    {
      reportYear: 2008,
      reportId: '2008',
      text: 'Dairy Queen performed well internationally',
      context: 'Dairy Queen performed particularly well internationally, with strong growth in China and other markets.',
      pageNumber: 22
    }
  ]
};

module.exports = subsidiaryMentions1998_2009;