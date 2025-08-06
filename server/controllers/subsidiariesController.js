// Comprehensive list of Berkshire Hathaway's 65 main subsidiaries
const mockSubsidiaries = [
  // Insurance Group
  {
    id: 'geico',
    name: 'GEICO',
    industry: 'Insurance',
    acquisitionYear: 1996,
    description: 'One of the largest auto insurance companies in the United States, known for direct-to-consumer sales and advertising.',
    mentions: [
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
      },
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
    ]
  },
  {
    id: 'berkshire-reinsurance',
    name: 'Berkshire Hathaway Reinsurance Group',
    industry: 'Reinsurance',
    acquisitionYear: null,
    description: 'Global reinsurance operations including property/casualty and life/health reinsurance.',
    mentions: [
      {
        reportYear: 1977,
        reportId: '1977',
        text: 'Our holdings in GEICO Corporation',
        context: 'We continue to hold a significant stake in GEICO Corporation, which represents one of our major equity investments.',
        pageNumber: 4
      },
      {
        reportYear: 1980,
        reportId: '1980',
        text: 'GEICO Corporation common stock',
        context: 'Our investment in GEICO Corporation common stock has a cost basis of $47.1 million and a market value of $105.3 million.',
        pageNumber: 8
      },
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'GEICO continues to prosper',
        context: 'GEICO Corporation, in which we own approximately 36%, continues to prosper under the leadership of Jack Byrne and Bill Snyder.',
        pageNumber: 9
      },
      {
        reportYear: 1990,
        reportId: '1990',
        text: 'GEICO has become a powerhouse',
        context: 'GEICO, now 48% owned by Berkshire, has become a powerhouse in auto insurance, with Tony Nicely showing exceptional management skills.',
        pageNumber: 11
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'We will acquire the rest of GEICO',
        context: 'We agreed to acquire the 49% of GEICO we don\'t already own for $2.3 billion, completing a 45-year investment saga.',
        pageNumber: 3
      },
      {
        reportYear: 1996,
        reportId: '1996',
        text: 'GEICO is now a wholly-owned subsidiary',
        context: 'The GEICO acquisition was completed in January 1996, making it a wholly-owned subsidiary. Tony Nicely continues as CEO.',
        pageNumber: 5
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'GEICO passed State Farm in new business',
        context: 'GEICO wrote more voluntary auto business than State Farm, becoming the #1 company in new business production.',
        pageNumber: 12
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'GEICO insured 6.3 million vehicles',
        context: 'GEICO now insures 6.3 million vehicles, up from 2.5 million when we acquired full control in 1996.',
        pageNumber: 8
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'GEICO became the third-largest auto insurer',
        context: 'GEICO passed Allstate to become the third-largest private passenger auto insurer in the United States.',
        pageNumber: 14
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'GEICO hit 14% market share',
        context: 'GEICO\'s market share reached 14%, insuring over 20 million vehicles. The gecko continues to be America\'s favorite advertising icon.',
        pageNumber: 9
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'GEICO gave back $2.8 billion to customers',
        context: 'During COVID-19, GEICO returned $2.8 billion to customers through credits and rate reductions as driving decreased.',
        pageNumber: 17
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'GEICO faced challenges in 2022 due to inflation in auto parts and labor costs...',
        context: 'Despite headwinds from inflation affecting repair costs, GEICO implemented rate increases and tightened underwriting standards. The company remains focused on improving profitability while maintaining competitive pricing.',
        pageNumber: 8
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'wonderful experience with GEICO that began early in 1951 and will never end',
        context: 'Warren Buffett references his long relationship with GEICO, calling it an \"almost unbelievably wonderful experience\" that helped build Berkshire\'s insurance operations.',
        pageNumber: 15
      }
    ]
  },
  {
    id: 'general-re',
    name: 'General Re',
    industry: 'Reinsurance',
    acquisitionYear: 1998,
    description: 'One of the world\'s leading reinsurance companies, providing property and casualty and life and health coverages.',
    mentions: [
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
    ]
  },
  {
    id: 'berkshire-primary',
    name: 'Berkshire Hathaway Primary Group',
    industry: 'Insurance',
    acquisitionYear: null,
    description: 'Commercial property/casualty insurance operations including multiple specialty insurers.',
    mentions: [
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'We merged with General Re Corporation',
        context: 'In December 1998, we completed our largest acquisition ever, merging with General Re, one of the world\'s leading reinsurers.',
        pageNumber: 3
      },
      {
        reportYear: 1999,
        reportId: '1999',
        text: 'General Re integration proceeding',
        context: 'The integration of General Re is proceeding well, though reinsurance markets remain very competitive.',
        pageNumber: 8
      },
      {
        reportYear: 2001,
        reportId: '2001',
        text: 'General Re\'s underwriting results were unsatisfactory',
        context: 'Following September 11th, General Re faced significant losses, but we remain confident in its long-term prospects and exceptional management.',
        pageNumber: 7
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'Joe Brandon is fixing General Re',
        context: 'Under Joe Brandon\'s leadership, General Re is returning to underwriting discipline and profitability.',
        pageNumber: 9
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'General Re had an outstanding underwriting year',
        context: 'Under Joe Brandon\'s leadership, General Re\'s underwriting discipline has been restored. The company earned an underwriting profit of $342 million.',
        pageNumber: 10
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'General Re\'s float totaled $20 billion',
        context: 'General Re continues to be conservatively run under Tad Montross. The company\'s float of $20 billion costs us nothing.',
        pageNumber: 11
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'General Re produced $5.6 billion in premiums',
        context: 'General Re wrote $5.6 billion of business in 2016 while maintaining excellent underwriting standards. Tad Montross has done a superb job.',
        pageNumber: 8
      }
    ]
  },
  {
    id: 'national-indemnity',
    name: 'National Indemnity Company',
    industry: 'Insurance',
    acquisitionYear: 1967,
    description: 'Berkshire\'s first insurance acquisition, specializing in commercial auto and general liability.',
    mentions: [
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'National Indemnity celebrated its 50th anniversary with Berkshire',
        context: 'In 2017, we celebrated the 50th anniversary of our purchase of National Indemnity, the acquisition that set us on the road to building the Berkshire of today.',
        pageNumber: 5
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'National Indemnity\'s float has grown from $17 million to $11 billion',
        context: 'When we purchased National Indemnity in 1967, it held $17 million of float. Today National Indemnity holds $11 billion of float.',
        pageNumber: 10
      },
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'National Indemnity wrote $366 million in premiums',
        context: 'National Indemnity, our largest primary insurer, wrote $366 million of business, down from previous years as we maintained pricing discipline.',
        pageNumber: 9
      },
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'National Indemnity\'s traditional business had excellent results',
        context: 'National Indemnity Company, our oldest insurance subsidiary, had an excellent year in its traditional lines.',
        pageNumber: 3
      },
      {
        reportYear: 1977,
        reportId: '1977',
        text: 'National Indemnity Company had a satisfactory underwriting year',
        context: 'Our insurance subsidiaries, led by National Indemnity Company, had satisfactory underwriting results despite a competitive environment.',
        pageNumber: 2
      }
    ]
  },
  {
    id: 'guard-insurance',
    name: 'GUARD Insurance Companies',
    industry: 'Insurance',
    acquisitionYear: 2012,
    description: 'Workers\' compensation specialist serving small to mid-sized businesses.',
    mentions: [
      {
        reportYear: 1977,
        reportId: '1977',
        text: 'National Indemnity Company had a satisfactory underwriting year',
        context: 'Our insurance subsidiaries, led by National Indemnity Company, had satisfactory underwriting results despite a competitive environment.',
        pageNumber: 2
      },
      {
        reportYear: 1980,
        reportId: '1980',
        text: 'National Indemnity\'s premium volume increased',
        context: 'National Indemnity Company and its affiliated companies increased premium volume while maintaining underwriting discipline.',
        pageNumber: 6
      },
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'National Indemnity\'s traditional business had excellent results',
        context: 'National Indemnity Company, our oldest insurance subsidiary, had an excellent year in its traditional lines.',
        pageNumber: 3
      },
      {
        reportYear: 1990,
        reportId: '1990',
        text: 'National Indemnity wrote $267 million in premiums',
        context: 'National Indemnity\'s traditional operation wrote $267 million in premiums with excellent underwriting results.',
        pageNumber: 9
      },
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'National Indemnity wrote $366 million in premiums',
        context: 'National Indemnity, our largest primary insurer, wrote $366 million of business, down from previous years as we maintained pricing discipline.',
        pageNumber: 9
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'National Indemnity\'s float has grown from $17 million to $11 billion',
        context: 'When we purchased National Indemnity in 1967, it held $17 million of float. Today National Indemnity holds $11 billion of float.',
        pageNumber: 10
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'National Indemnity celebrated its 50th anniversary with Berkshire',
        context: 'In 2017, we celebrated the 50th anniversary of our purchase of National Indemnity, the acquisition that set us on the road to building the Berkshire of today.',
        pageNumber: 5
      }
    ]
  },
  {
    id: 'applied-underwriters',
    name: 'Applied Underwriters',
    industry: 'Insurance',
    acquisitionYear: 2016,
    description: 'Workers\' compensation insurance and services for small and medium-sized businesses.',
    mentions: [
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'Our reinsurance business is growing',
        context: 'Under Ajit Jain\'s leadership, our reinsurance operations are growing rapidly by writing large, unusual risks.',
        pageNumber: 8
      },
      {
        reportYear: 1990,
        reportId: '1990',
        text: 'Ajit Jain wrote $600 million in premiums',
        context: 'Ajit Jain\'s reinsurance operations wrote over $600 million in premiums, focusing on super-catastrophe business.',
        pageNumber: 10
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'We are the reinsurer of choice for large risks',
        context: 'When insurers need to lay off huge risks, they come to Berkshire. Ajit Jain has built a unique franchise.',
        pageNumber: 9
      },
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
    ]
  },
  {
    id: 'medical-protective',
    name: 'Medical Protective',
    industry: 'Insurance',
    acquisitionYear: 2005,
    description: 'Leading provider of medical professional liability insurance.',
    mentions: [
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'Our reinsurance business is growing',
        context: 'Under Ajit Jain\'s leadership, our reinsurance operations are growing rapidly by writing large, unusual risks.',
        pageNumber: 8
      },
      {
        reportYear: 1990,
        reportId: '1990',
        text: 'Ajit Jain wrote $600 million in premiums',
        context: 'Ajit Jain\'s reinsurance operations wrote over $600 million in premiums, focusing on super-catastrophe business.',
        pageNumber: 10
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'We are the reinsurer of choice for large risks',
        context: 'When insurers need to lay off huge risks, they come to Berkshire. Ajit Jain has built a unique franchise.',
        pageNumber: 9
      },
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
    ]
  },
  {
    id: 'us-liability',
    name: 'U.S. Liability Insurance Group',
    industry: 'Insurance',
    acquisitionYear: 2007,
    description: 'Specialty lines insurance for unique and hard-to-place risks.',
    mentions: [
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'Our primary insurance operations are growing',
        context: 'The Berkshire Hathaway Primary Group consists of various specialty insurers writing commercial property/casualty coverage.',
        pageNumber: 23
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'Primary Group wrote $2.4 billion in premiums',
        context: 'Our primary insurance operations wrote $2.4 billion in premiums while maintaining underwriting discipline.',
        pageNumber: 31
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Primary Group continues selective underwriting',
        context: 'The Berkshire Hathaway Primary Group maintains its focus on profitable underwriting rather than market share.',
        pageNumber: 19
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'U.S. Liability continues to excel in specialty lines',
        context: 'U.S. Liability Insurance Group maintains its leadership in hard-to-place specialty insurance lines.',
        pageNumber: 82
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Primary insurers navigated pandemic challenges',
        context: 'Our primary insurance operations successfully navigated COVID-19 related claims while maintaining profitability.',
        pageNumber: 26
      }
    ]
  },

  // Railroad
  {
    id: 'bnsf',
    name: 'BNSF Railway',
    industry: 'Transportation',
    acquisitionYear: 2010,
    description: 'One of North America\'s leading freight railroad networks, operating 32,500 route miles in 28 states.',
    mentions: [
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'We agreed to buy Burlington Northern Santa Fe',
        context: 'We agreed to buy Burlington Northern Santa Fe for $34 billion, our largest acquisition ever and a huge bet on America\'s economic future.',
        pageNumber: 3
      },
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
    ]
  },

  // Utilities & Energy
  {
    id: 'berkshire-energy',
    name: 'Berkshire Hathaway Energy',
    industry: 'Utilities & Energy',
    acquisitionYear: 2000,
    description: 'Global leader in producing and delivering energy, serving 12 million customers worldwide.',
    mentions: [
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
    ]
  },
  {
    id: 'pacificorp',
    name: 'PacifiCorp',
    industry: 'Utilities',
    acquisitionYear: 2006,
    description: 'Electric utility serving 2 million customers across six Western states.',
    mentions: [
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
        reportYear: 2013,
        reportId: '2013',
        text: 'BNSF is investing heavily in infrastructure',
        context: 'BNSF will invest $4.3 billion in capital expenditures, preparing for increased freight volumes from energy and agricultural sectors.',
        pageNumber: 15
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
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'BNSF\'s performance was impacted by supply chain disruptions...',
        context: 'Despite operational challenges from weather events and labor negotiations, BNSF maintained service levels and continued its multi-billion dollar capital investment program to improve infrastructure and capacity.',
        pageNumber: 71
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BNSF is the largest of six major rail systems that blanket North America...',
        context: 'BNSF carries 23,759 miles of main track, 99 tunnels, 13,495 bridges, 7,521 locomotives. The railroad must spend more than its depreciation charge annually - $22 billion over 14 years since acquisition. Despite challenges, BNSF remains essential to America\'s economic future.',
        pageNumber: 12
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Last year BNSF\'s earnings declined more than I expected, as revenues fell...',
        context: 'Though fuel costs fell, wage increases promulgated in Washington were far beyond inflation goals. BNSF\'s profit margins have slipped relative to other major railroads since acquisition, though Buffett believes the vast service territory is second to none.',
        pageNumber: 13
      }
    ]
  },
  {
    id: 'midamerican-energy',
    name: 'MidAmerican Energy',
    industry: 'Utilities',
    acquisitionYear: 2000,
    description: 'Iowa\'s largest energy company, leader in renewable energy generation.',
    mentions: [
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
    ]
  },
  {
    id: 'nv-energy',
    name: 'NV Energy',
    industry: 'Utilities',
    acquisitionYear: 2013,
    description: 'Electric utility serving Nevada, including Las Vegas and Reno.',
    mentions: [
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'We acquired GUARD Insurance Companies',
        context: 'Berkshire acquired GUARD Insurance Companies, a workers\' compensation specialist focused on small to mid-sized businesses.',
        pageNumber: 14
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'GUARD expanded into new states',
        context: 'GUARD Insurance expanded its workers\' compensation offerings into several new states while maintaining underwriting standards.',
        pageNumber: 42
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'NV Energy invested in renewable transmission',
        context: 'NV Energy continued major investments in transmission infrastructure to connect renewable generation.',
        pageNumber: 56
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'GUARD adapted to workplace changes',
        context: 'GUARD Insurance successfully adapted its workers\' compensation coverage to address pandemic-related workplace changes.',
        pageNumber: 57
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'NV Energy expanded battery storage',
        context: 'NV Energy significantly expanded battery storage capacity to support Nevada\'s renewable energy goals.',
        pageNumber: 78
      }
    ]
  },
  {
    id: 'northern-powergrid',
    name: 'Northern Powergrid',
    industry: 'Utilities',
    acquisitionYear: 2010,
    description: 'Electricity distribution company serving Northeast England and Yorkshire.',
    mentions: [
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'We acquired Applied Underwriters',
        context: 'Berkshire acquired Applied Underwriters, a leading provider of workers\' compensation solutions for small and medium-sized businesses.',
        pageNumber: 12
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Applied Underwriters expanded its EquityComp program',
        context: 'Applied Underwriters continued to grow its innovative EquityComp workers\' compensation program.',
        pageNumber: 67
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Northern Powergrid won industry awards',
        context: 'Northern Powergrid received multiple industry awards for customer service and network reliability.',
        pageNumber: 89
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Northern Powergrid maintained service during pandemic',
        context: 'Northern Powergrid successfully maintained critical electricity service throughout the UK lockdowns.',
        pageNumber: 93
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'Applied Underwriters maintained strong growth',
        context: 'Applied Underwriters achieved strong premium growth while maintaining excellent underwriting results.',
        pageNumber: 44
      }
    ]
  },
  {
    id: 'altalink',
    name: 'AltaLink',
    industry: 'Utilities',
    acquisitionYear: 2014,
    description: 'Alberta\'s largest regulated electricity transmission company.',
    mentions: [
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'We acquired Medical Protective',
        context: 'Berkshire acquired Medical Protective, a leading provider of medical professional liability insurance.',
        pageNumber: 16
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'Medical Protective expanded coverage offerings',
        context: 'Medical Protective expanded its professional liability coverage to include new healthcare specialties.',
        pageNumber: 62
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Medical Protective maintained market leadership',
        context: 'Medical Protective maintained its position as a premier provider of medical malpractice insurance.',
        pageNumber: 53
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'AltaLink completed Fort McMurray transmission',
        context: 'AltaLink completed the Fort McMurray West 500-kV Transmission Project, enhancing Alberta\'s grid reliability.',
        pageNumber: 84
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Medical Protective navigated COVID liability issues',
        context: 'Medical Protective successfully navigated COVID-19 related liability issues for healthcare providers.',
        pageNumber: 38
      }
    ]
  },
  {
    id: 'bhe-pipeline',
    name: 'BHE Pipeline Group',
    industry: 'Energy',
    acquisitionYear: null,
    description: 'Natural gas pipeline operations including Northern Natural Gas and Kern River Gas.',
    mentions: [
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'We acquired U.S. Liability Insurance Group',
        context: 'Berkshire acquired U.S. Liability Insurance Group, a specialty lines insurer for unique and hard-to-place risks.',
        pageNumber: 21
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'U.S. Liability expanded entertainment insurance',
        context: 'U.S. Liability Insurance Group expanded its entertainment industry coverage, including film and event insurance.',
        pageNumber: 71
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Pipeline group expanded capacity',
        context: 'BHE Pipeline Group completed expansion projects on both Northern Natural Gas and Kern River systems.',
        pageNumber: 91
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'U.S. Liability grew specialty lines',
        context: 'U.S. Liability continued to grow its specialty lines business in niche markets where expertise matters.',
        pageNumber: 85
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Pipelines transported record gas volumes',
        context: 'BHE Pipeline Group transported record natural gas volumes as demand shifted from coal to gas generation.',
        pageNumber: 67
      }
    ]
  },

  // Manufacturing
  {
    id: 'precision-castparts',
    name: 'Precision Castparts',
    industry: 'Aerospace Manufacturing',
    acquisitionYear: 2016,
    description: 'Manufacturer of complex metal components and products for aerospace, power, and industrial markets.',
    mentions: [
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
    ]
  },
  {
    id: 'lubrizol',
    name: 'Lubrizol',
    industry: 'Specialty Chemicals',
    acquisitionYear: 2011,
    description: 'Global leader in specialty chemicals for transportation and industrial applications.',
    mentions: [
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
    ]
  },
  {
    id: 'marmon',
    name: 'Marmon Holdings',
    industry: 'Industrial Conglomerate',
    acquisitionYear: 2008,
    description: 'Diversified industrial organization with over 100 autonomous manufacturing and service businesses.',
    mentions: [
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
      },
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
    ]
  },
  {
    id: 'imc',
    name: 'IMC International Metalworking Companies',
    industry: 'Metalworking Tools',
    acquisitionYear: 2006,
    description: 'One of the world\'s largest metalworking companies, including Iscar cutting tools.',
    mentions: [
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'We acquired Lubrizol for $9 billion',
        context: 'Berkshire purchased Lubrizol, a worldwide producer of specialty chemicals, with James Hambrick continuing as CEO.',
        pageNumber: 5
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'Lubrizol had an outstanding first full year',
        context: 'In its first full year with Berkshire, Lubrizol performed exceptionally well under James Hambrick\'s leadership.',
        pageNumber: 27
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'Lubrizol earned $1.1 billion',
        context: 'Under James Hambrick\'s leadership, Lubrizol earned $1.1 billion, demonstrating the strength of its specialty additives business.',
        pageNumber: 18
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'Lubrizol invested in new facilities',
        context: 'Lubrizol continues to invest in new facilities and R&D to maintain its technological edge in specialty chemicals.',
        pageNumber: 51
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Lubrizol expanded in emerging markets',
        context: 'Lubrizol opened new facilities in Asia and expanded its product portfolio for electric vehicle applications.',
        pageNumber: 72
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Lubrizol\'s specialty additives business performed well...',
        context: 'Lubrizol generated $7.2 billion in revenues with strong performance in additives for electric vehicle fluids and sustainable solutions. The company invested $300 million in R&D for next-generation products.',
        pageNumber: 92
      }
    ]
  },
  {
    id: 'cti',
    name: 'CTB International',
    industry: 'Agricultural Equipment',
    acquisitionYear: 2002,
    description: 'Designer and manufacturer of systems for poultry, pig, egg production, and grain storage.',
    mentions: [
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'We acquired 60% of Marmon Holdings',
        context: 'Berkshire acquired 60% of Marmon Holdings from the Pritzker family, with an agreement to purchase the remainder over several years.',
        pageNumber: 4
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'We increased our Marmon stake to 80%',
        context: 'As scheduled, we increased our ownership of Marmon to approximately 80%. Frank Ptak runs this diverse collection of businesses superbly.',
        pageNumber: 23
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'We now own 100% of Marmon',
        context: 'We completed our purchase of Marmon, now owning 100% of this remarkable collection of businesses.',
        pageNumber: 17
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Marmon companies are thriving',
        context: 'Marmon\'s diverse collection of over 100 businesses continues to thrive under autonomous management.',
        pageNumber: 38
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Marmon continues to excel in its diverse industrial markets...',
        context: 'Marmon\'s 11 business sectors generated combined revenues of $10.9 billion in 2023. The crane and foodservice equipment divisions showed particularly strong growth.',
        pageNumber: 89
      }
    ]
  },
  {
    id: 'shaw-industries',
    name: 'Shaw Industries',
    industry: 'Flooring',
    acquisitionYear: 2001,
    description: 'World\'s largest carpet manufacturer and leading flooring provider.',
    mentions: [
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
    ]
  },
  {
    id: 'benjamin-moore',
    name: 'Benjamin Moore',
    industry: 'Paint & Coatings',
    acquisitionYear: 2000,
    description: 'Premium paint manufacturer known for quality products and color expertise.',
    mentions: [
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'We acquired Benjamin Moore & Co.',
        context: 'We acquired Benjamin Moore & Co., a leader in architectural and industrial coatings since 1883.',
        pageNumber: 19
      }
    ]
  },
  {
    id: 'johns-manville',
    name: 'Johns Manville',
    industry: 'Building Materials',
    acquisitionYear: 2001,
    description: 'Manufacturer of insulation, roofing materials, and engineered products.',
    mentions: [
      {
        reportYear: 2001,
        reportId: '2001',
        text: 'We purchased Johns Manville',
        context: 'We purchased Johns Manville, a leading manufacturer of insulation and roofing products.',
        pageNumber: 17
      }
    ]
  },
  {
    id: 'acme-brick',
    name: 'Acme Brick',
    industry: 'Building Materials',
    acquisitionYear: 2000,
    description: 'Manufacturer of brick and masonry products, dating back to 1891.',
    mentions: [
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'Acme Brick celebrated 114 years',
        context: 'Acme Brick Company, founded in 1891, continues to lead in quality brick manufacturing.',
        pageNumber: 95
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'Acme Brick maintained sales despite housing crisis',
        context: 'Acme Brick\'s focus on commercial construction helped offset residential market weakness.',
        pageNumber: 87
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Acme Brick expanded Texas operations',
        context: 'Acme Brick expanded manufacturing capacity in Texas to serve growing Sun Belt construction.',
        pageNumber: 93
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Acme Brick launched new product lines',
        context: 'Acme Brick introduced new colors and textures to meet evolving architectural trends.',
        pageNumber: 97
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Acme Brick benefited from strong residential construction...',
        context: 'Acme Brick Company sold over 1 billion bricks in 2023, benefiting from robust housing construction. The company\'s 100-year warranty remains unique in the industry.',
        pageNumber: 100
      }
    ]
  },
  {
    id: 'mitek',
    name: 'MiTek',
    industry: 'Building Components',
    acquisitionYear: 2001,
    description: 'Global supplier of engineered connector products, engineering services, and software for the building industry.',
    mentions: [
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'We purchased Benjamin Moore',
        context: 'Berkshire acquired Benjamin Moore, the premium paint manufacturer known for exceptional quality and color selection.',
        pageNumber: 9
      },
      {
        reportYear: 2001,
        reportId: '2001',
        text: 'Benjamin Moore maintains its premium position',
        context: 'Benjamin Moore continues to command premium prices through superior quality and service to professional painters.',
        pageNumber: 31
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
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Benjamin Moore expanded internationally',
        context: 'Benjamin Moore is expanding internationally while maintaining its focus on premium quality.',
        pageNumber: 81
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Benjamin Moore expanded its retail presence...',
        context: 'Benjamin Moore opened 45 new company-owned stores in 2023, bringing the total to over 180 locations. The company\'s focus on premium products and professional contractors continues to drive margin expansion.',
        pageNumber: 103
      }
    ]
  },
  {
    id: 'forest-river',
    name: 'Forest River',
    industry: 'Recreational Vehicles',
    acquisitionYear: 2005,
    description: 'Leading manufacturer of recreational vehicles and manufactured housing.',
    mentions: [
      {
        reportYear: 2001,
        reportId: '2001',
        text: 'We acquired Johns Manville',
        context: 'Berkshire purchased Johns Manville, a leading manufacturer of insulation and roofing materials.',
        pageNumber: 6
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'Johns Manville benefited from strong construction',
        context: 'Johns Manville had an excellent year due to strong residential and commercial construction activity.',
        pageNumber: 44
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'Johns Manville maintained profitability',
        context: 'Despite weak construction markets, Johns Manville maintained profitability through cost controls and new products.',
        pageNumber: 55
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Johns Manville expanded capacity',
        context: 'Johns Manville invested in new manufacturing capacity to meet growing demand for energy-efficient building materials.',
        pageNumber: 61
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Johns Manville expanded capacity for insulation products...',
        context: 'Johns Manville invested $200 million in new manufacturing capacity to meet growing demand for energy-efficient building materials. The company\'s revenues reached $3.5 billion.',
        pageNumber: 99
      }
    ]
  },
  {
    id: 'clayton-homes',
    name: 'Clayton Homes',
    industry: 'Manufactured Housing',
    acquisitionYear: 2003,
    description: 'America\'s largest builder of manufactured, modular, and site-built homes.',
    mentions: [
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
      },
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
    ]
  },

  // Consumer Products
  {
    id: 'sees-candies',
    name: "See's Candies",
    industry: 'Food & Confectionery',
    acquisitionYear: 1972,
    description: 'Premium chocolate and candy manufacturer with over 200 retail locations, Berkshire\'s first major acquisition.',
    mentions: [
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
      },
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
    ]
  },
  {
    id: 'dairy-queen',
    name: 'Dairy Queen',
    industry: 'Food Service',
    acquisitionYear: 1998,
    description: 'International fast-food chain known for soft-serve ice cream and fast food.',
    mentions: [
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
  },
  {
    id: 'duracell',
    name: 'Duracell',
    industry: 'Consumer Products',
    acquisitionYear: 2016,
    description: 'Leading manufacturer of alkaline batteries with dominant market share globally.',
    mentions: [
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
    ]
  },
  {
    id: 'fruit-of-loom',
    name: 'Fruit of the Loom',
    industry: 'Apparel',
    acquisitionYear: 2002,
    description: 'Manufacturer and marketer of underwear, casualwear, and sports apparel.',
    mentions: [
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
    ]
  },
  {
    id: 'brooks-sports',
    name: 'Brooks Sports',
    industry: 'Athletic Footwear',
    acquisitionYear: 2006,
    description: 'Premium performance running footwear and apparel company.',
    mentions: [
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
    ]
  },
  {
    id: 'justin-brands',
    name: 'Justin Brands',
    industry: 'Footwear',
    acquisitionYear: 2000,
    description: 'Manufacturer of western footwear and workboots including Justin, Tony Lama, and Chippewa brands.',
    mentions: [
      {
        reportYear: 1972,
        reportId: '1972',
        text: 'Blue Chip Stamps purchased See\'s Candies',
        context: 'Blue Chip Stamps (controlled by Berkshire) purchased See\'s Candies for $25 million. It had about $8 million in excess cash at the time.',
        pageNumber: 97
      },
      {
        reportYear: 1977,
        reportId: '1977',
        text: 'See\'s Candy Shops had an outstanding year',
        context: 'See\'s Candy Shops, owned by Blue Chip Stamps, had an outstanding year with sales and earnings reaching new records.',
        pageNumber: 12
      },
      {
        reportYear: 1982,
        reportId: '1982',
        text: 'See\'s earned $11.9 million pre-tax',
        context: 'See\'s Candy Shops earned $11.9 million pre-tax. Chuck Huggins continues to manage this outstanding business.',
        pageNumber: 53
      },
      {
        reportYear: 1984,
        reportId: '1984',
        text: 'See\'s earned $13 million after-tax',
        context: 'See\'s Candies earned a record $13 million after taxes, representing a return of over 50% on beginning equity.',
        pageNumber: 52
      },
      {
        reportYear: 1988,
        reportId: '1988',
        text: 'See\'s sales reached $196 million',
        context: 'See\'s Candies achieved sales of $196 million and continues to earn exceptional returns on tangible assets.',
        pageNumber: 14
      },
      {
        reportYear: 1991,
        reportId: '1991',
        text: 'See\'s pre-tax earnings were $25.5 million',
        context: 'See\'s Candies, purchased for $25 million in 1972, earned $25.5 million pre-tax in 1991, demonstrating the power of a great brand.',
        pageNumber: 6
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'See\'s earned $50.2 million pre-tax',
        context: 'See\'s Candies earned $50.2 million pre-tax on sales of $254 million. The company opened new stores in several states.',
        pageNumber: 71
      },
      {
        reportYear: 1999,
        reportId: '1999',
        text: 'See\'s earned $74 million pre-tax',
        context: 'See\'s Candies again had record earnings. Pre-tax profits were $74 million on sales of $287 million.',
        pageNumber: 58
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'See\'s sales grew to $383 million',
        context: 'Chuck Huggins continues to do an outstanding job at See\'s. Sales were $383 million and pre-tax profits were $62 million.',
        pageNumber: 9
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'See\'s earned $82 million pre-tax',
        context: 'See\'s had another outstanding year with pre-tax earnings of $82 million. The company we purchased for $25 million continues to be a jewel.',
        pageNumber: 76
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'Last year See\'s had same-store sales gains of 16%',
        context: 'Despite a tough economy, See\'s Candies achieved remarkable same-store sales growth, demonstrating the strength of the brand and customer loyalty.',
        pageNumber: 7
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'See\'s now has 240 stores',
        context: 'Brad Kinstler runs See\'s, which now operates 240 stores and continues to delight customers with quality and service.',
        pageNumber: 56
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'See\'s produced a record $2.2 billion of revenues since our purchase',
        context: 'The $25 million we paid for See\'s in 1972 has now delivered aggregate pre-tax earnings of $2.2 billion, and it continues to earn exceptional returns on tangible assets.',
        pageNumber: 123
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'See\'s Candies delivered another year of steady profits...',
        context: 'See\'s Candies generated pre-tax earnings of $170 million on revenues of $520 million. The company continues to benefit from strong brand loyalty and pricing power, with same-store sales growing 5% year-over-year.',
        pageNumber: 95
      }
    ]
  },
  {
    id: 'richline-group',
    name: 'Richline Group',
    industry: 'Jewelry',
    acquisitionYear: 2007,
    description: 'Leading jewelry manufacturer and distributor to major retail chains.',
    mentions: [
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'We acquired International Dairy Queen',
        context: 'Berkshire acquired International Dairy Queen, adding this well-known franchise system with over 5,700 locations to our collection of businesses.',
        pageNumber: 11
      },
      {
        reportYear: 1999,
        reportId: '1999',
        text: 'Dairy Queen is expanding internationally',
        context: 'Under John Gainor\'s leadership, International Dairy Queen is expanding rapidly in international markets.',
        pageNumber: 72
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'Dairy Queen opened its 100th store in Thailand',
        context: 'International expansion continues with the opening of the 100th Dairy Queen store in Thailand.',
        pageNumber: 58
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'Dairy Queen opened its 500th store in China',
        context: 'International expansion continues to be a growth driver for Dairy Queen, with China becoming an increasingly important market.',
        pageNumber: 78
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'DQ introduced new menu items',
        context: 'Dairy Queen successfully introduced new food items beyond ice cream, driving same-store sales growth.',
        pageNumber: 51
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'Dairy Queen same-store sales grew 5.7% in the U.S.',
        context: 'John Gainor continues to do an outstanding job at International Dairy Queen. U.S. same-store sales were up 5.7%.',
        pageNumber: 26
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Dairy Queen\'s global expansion continues...',
        context: 'Dairy Queen opened 200 new locations globally in 2023, with particularly strong growth in Asia. Same-store sales increased 7% driven by menu innovation and digital ordering capabilities.',
        pageNumber: 106
      }
    ]
  },
  {
    id: 'garan',
    name: 'Garan',
    industry: 'Apparel',
    acquisitionYear: 2002,
    description: 'Children\'s and women\'s apparel manufacturer and licensor.',
    mentions: [
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'We acquired Clayton Homes',
        context: 'We purchased Clayton Homes, America\'s largest producer of manufactured homes. Kevin Clayton will continue to run the business.',
        pageNumber: 5
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'Clayton is thriving while competitors struggle',
        context: 'Clayton Homes is thriving while most competitors have failed, thanks to conservative lending and efficient operations.',
        pageNumber: 21
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'Clayton was the only major home builder to remain profitable',
        context: 'While competitors struggled or failed during the housing crisis, Clayton Homes remained profitable every quarter, a testament to Kevin Clayton\'s conservative management.',
        pageNumber: 17
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'Clayton is expanding into site-built homes',
        context: 'Clayton Homes is expanding beyond manufactured homes into traditional site-built homes.',
        pageNumber: 35
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Clayton built 34,397 homes',
        context: 'Clayton Homes built 34,397 homes, about 45% of the manufactured homes sold in the U.S. The company also expanded into site-built homes.',
        pageNumber: 25
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Clayton opened new manufacturing facilities',
        context: 'Clayton Homes opened two new manufacturing facilities and expanded its site-built operations, now building homes in multiple price points.',
        pageNumber: 53
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Clayton Homes built 60,000 homes in 2023...',
        context: 'Clayton Homes maintained its leadership in affordable housing, building 60,000 homes across its manufactured, modular, and site-built divisions. The company pioneered new energy-efficient designs.',
        pageNumber: 97
      }
    ]
  },
  {
    id: 'fechheimer',
    name: 'Fechheimer Brothers',
    industry: 'Uniforms',
    acquisitionYear: 1986,
    description: 'Manufacturer and distributor of public safety and corporate uniforms.',
    mentions: [
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
        reportYear: 2018,
        reportId: '2018',
        text: 'PCC is recovering from aerospace downturn',
        context: 'Precision Castparts is recovering as aerospace production ramps up and customers work through inventory.',
        pageNumber: 66
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'PCC was severely impacted by COVID-19',
        context: 'The pandemic\'s impact on air travel devastated PCC\'s aerospace business, requiring significant workforce reductions.',
        pageNumber: 18
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'PCC benefited from the aerospace recovery...',
        context: 'Precision Castparts saw revenues increase 18% in 2023 as commercial aerospace production ramped up. The company\'s order backlog reached record levels, providing visibility for continued growth.',
        pageNumber: 88
      }
    ]
  },
  {
    id: 'hh-brown',
    name: 'H.H. Brown Shoe Company',
    industry: 'Footwear',
    acquisitionYear: 1991,
    description: 'Work shoe and boot manufacturer known for comfort and durability.',
    mentions: [
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'We acquired Duracell from P&G',
        context: 'Berkshire completed the acquisition of Duracell from Procter & Gamble in a cash-and-stock transaction.',
        pageNumber: 8
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Duracell is improving operations',
        context: 'Under Berkshire ownership, Duracell is improving operations and maintaining its position as the leading battery brand.',
        pageNumber: 54
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Duracell maintained its market leadership',
        context: 'Duracell held approximately 40% market share in alkaline batteries through brand strength and innovation.',
        pageNumber: 86
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'H.H. Brown celebrated 135 years',
        context: 'H.H. Brown Shoe Company marked 135 years of American footwear manufacturing excellence.',
        pageNumber: 106
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Duracell maintained its market leadership position...',
        context: 'Duracell captured 45% of the U.S. alkaline battery market in 2023. The company\'s focus on innovation in lithium and rechargeable batteries positions it well for evolving consumer needs.',
        pageNumber: 108
      }
    ]
  },

  // Service & Retailing
  {
    id: 'mclane',
    name: 'McLane Company',
    industry: 'Wholesale Distribution',
    acquisitionYear: 2003,
    description: 'One of the largest supply chain services companies, providing grocery and foodservice distribution.',
    mentions: [
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
    ]
  },
  {
    id: 'pilot-flying-j',
    name: 'Pilot Flying J',
    industry: 'Travel Centers',
    acquisitionYear: 2017,
    description: 'Largest operator of travel centers in North America with 750+ locations.',
    mentions: [
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
    ]
  },
  {
    id: 'netjets',
    name: 'NetJets',
    industry: 'Private Aviation',
    acquisitionYear: 1998,
    description: 'World leader in private aviation with the largest and most diverse private jet fleet.',
    mentions: [
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
    ]
  },
  {
    id: 'flightSafety',
    name: 'FlightSafety International',
    industry: 'Aviation Training',
    acquisitionYear: 1996,
    description: 'World\'s premier professional aviation training company and supplier of flight simulators.',
    mentions: [
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'We purchased Executive Jet, operator of the NetJets program',
        context: 'Berkshire acquired Executive Jet Aviation, which operates the NetJets fractional ownership program, pioneering a new way for corporations and individuals to utilize private aircraft.',
        pageNumber: 13
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'NetJets is growing rapidly',
        context: 'NetJets continues to dominate the fractional ownership market with rapid growth in both aircraft and customers.',
        pageNumber: 41
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'NetJets is losing money despite growth',
        context: 'Despite revenue growth, NetJets is losing money due to high capital costs and operational inefficiencies.',
        pageNumber: 22
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'NetJets navigated through the worst year in aviation history',
        context: 'Under Dave Sokol\'s leadership, NetJets cut costs dramatically while maintaining safety standards during the severe aviation downturn.',
        pageNumber: 15
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'NetJets ordered up to 425 new jets from Cessna and Bombardier',
        context: 'NetJets placed the largest private jet order in history, demonstrating our confidence in the business and commitment to maintaining the youngest, safest fleet in private aviation.',
        pageNumber: 10
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'NetJets operates a fleet of 750 aircraft',
        context: 'NetJets, the world\'s leading private jet company, operates approximately 750 aircraft and flies to more than 170 countries.',
        pageNumber: 11
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'NetJets flew over 500,000 flight hours safely...',
        context: 'NetJets operated over 500,000 flight hours in 2023 with its fleet of 750+ aircraft. The company added 100 new aircraft to meet growing demand for private aviation services.',
        pageNumber: 84
      }
    ]
  },
  {
    id: 'nebraska-furniture',
    name: 'Nebraska Furniture Mart',
    industry: 'Retail - Furniture',
    acquisitionYear: 1983,
    description: 'Largest home furnishing store in North America, known for selection and value.',
    mentions: [
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'Nebraska Furniture Mart opened in Kansas City',
        context: 'Nebraska Furniture Mart opened a massive 450,000 square foot store in Kansas City, the largest home furnishings store in America.',
        pageNumber: 25
      },
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
    ]
  },
  {
    id: 'rc-willey',
    name: 'RC Willey Home Furnishings',
    industry: 'Retail - Furniture',
    acquisitionYear: 1995,
    description: 'Home furnishings retailer in the Western United States.',
    mentions: [
      {
        reportYear: 1983,
        reportId: '1983',
        text: 'We purchased 80% of Nebraska Furniture Mart',
        context: 'We acquired 80% of Nebraska Furniture Mart from Rose Blumkin (\"Mrs. B\"), who started the business with $500 in 1937.',
        pageNumber: 7
      },
      {
        reportYear: 1984,
        reportId: '1984',
        text: 'Nebraska Furniture Mart sales grew 18%',
        context: 'Under the remarkable Mrs. B, now 91, Nebraska Furniture Mart increased sales by 18% to $115 million.',
        pageNumber: 11
      },
      {
        reportYear: 1987,
        reportId: '1987',
        text: 'NFM sales reached $150 million',
        context: 'Nebraska Furniture Mart achieved sales of $150 million. Mrs. B, at 94, still works seven days a week.',
        pageNumber: 13
      },
      {
        reportYear: 1989,
        reportId: '1989',
        text: 'Mrs. B, at 96, opened a competing store',
        context: 'After a disagreement, Mrs. B left NFM and started a competing store across the street. We later bought her new business and merged it back.',
        pageNumber: 12
      },
      {
        reportYear: 1992,
        reportId: '1992',
        text: 'NFM is now run by the Blumkin brothers',
        context: 'Louie and Ron Blumkin now run Nebraska Furniture Mart, which continues to dominate the furniture market in its regions.',
        pageNumber: 24
      },
      {
        reportYear: 1997,
        reportId: '1997',
        text: 'Mrs. B died at age 104',
        context: 'Rose Blumkin, the remarkable founder of Nebraska Furniture Mart, passed away at 104, having built one of America\'s largest furniture stores from a $500 investment.',
        pageNumber: 17
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'NFM opened a 450,000 square foot store in Kansas City',
        context: 'Nebraska Furniture Mart opened its second store outside Omaha, a 450,000 square foot facility in Kansas City.',
        pageNumber: 18
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'NFM opened its Texas store, the largest home furnishings store in America',
        context: 'The new 1.8 million square foot Texas location represents the largest home furnishings store in America, demonstrating NFM\'s continued growth 30 years after we purchased it from Mrs. B.',
        pageNumber: 19
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'NFM\'s Texas store exceeded expectations',
        context: 'The Texas store has exceeded all projections, validating the Blumkin family\'s expansion strategy.',
        pageNumber: 45
      }
    ]
  },
  {
    id: 'star-furniture',
    name: 'Star Furniture',
    industry: 'Retail - Furniture',
    acquisitionYear: 1997,
    description: 'Texas-based furniture retailer known for quality and service.',
    mentions: [
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'We purchased McLane Company from Walmart',
        context: 'We acquired McLane Company, a $23 billion (sales) distributor to convenience stores and quick-service restaurants.',
        pageNumber: 7
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'McLane continues to grow',
        context: 'Under Grady Rosier\'s leadership, McLane Company continues to grow revenues and expand its distribution network.',
        pageNumber: 34
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
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'McLane distributed over 50 billion units to convenience stores...',
        context: 'McLane Company delivered products to over 110,000 locations nationwide, with revenues exceeding $53 billion. The company\'s efficiency improvements reduced delivery times by 15%.',
        pageNumber: 94
      }
    ]
  },
  {
    id: 'jordans-furniture',
    name: 'Jordan\'s Furniture',
    industry: 'Retail - Furniture',
    acquisitionYear: 1999,
    description: 'New England furniture retailer known for unique shopping experiences.',
    mentions: [
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
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Pilot Flying J served 1.3 billion guests...',
        context: 'Pilot Flying J welcomed 1.3 billion guests across its 750+ locations in 2023. The company invested heavily in electric vehicle charging infrastructure at its travel centers.',
        pageNumber: 93
      }
    ]
  },
  {
    id: 'borsheims',
    name: 'Borsheims',
    industry: 'Retail - Jewelry',
    acquisitionYear: 1989,
    description: 'Fine jewelry and gift retailer based in Omaha, Nebraska.',
    mentions: [
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'Borsheims had record sales',
        context: 'Borsheims had record sales, benefiting from Berkshire shareholder weekend and strong luxury demand.',
        pageNumber: 26
      }
    ]
  },
  {
    id: 'helzberg',
    name: 'Helzberg Diamonds',
    industry: 'Retail - Jewelry',
    acquisitionYear: 1995,
    description: 'National jewelry retailer with over 200 stores.',
    mentions: [
      {
        reportYear: 1989,
        reportId: '1989',
        text: 'We purchased 80% of Borsheims',
        context: 'We acquired 80% of Borsheims, one of the country\'s largest jewelry stores, from the Friedman family.',
        pageNumber: 17
      },
      {
        reportYear: 1991,
        reportId: '1991',
        text: 'Borsheims sales grew despite recession',
        context: 'Despite a recession, Borsheims increased sales under Ike Friedman\'s leadership. We purchased the remaining 20%.',
        pageNumber: 19
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'Borsheims had record sales',
        context: 'Ike Friedman continues to run Borsheims brilliantly. Sales reached another record, and the store\'s reputation for value and service continues to spread.',
        pageNumber: 13
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'Borsheims sales exceeded $100 million',
        context: 'Borsheims achieved sales of over $100 million for the first time, with particularly strong growth in engagement rings and watches.',
        pageNumber: 67
      },
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'Susan Jacques now runs Borsheims',
        context: 'Susan Jacques has taken over from Ike Friedman and is doing an outstanding job running Borsheims.',
        pageNumber: 41
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'Borsheims navigated the recession well',
        context: 'Despite the severe recession impacting luxury goods, Susan Jacques led Borsheims through the downturn while maintaining our reputation for exceptional value.',
        pageNumber: 75
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Borsheims expanded its online presence',
        context: 'Karen Goracke has modernized Borsheims\' operations, significantly expanding online sales while maintaining the personal service that distinguishes the store.',
        pageNumber: 26
      }
    ]
  },
  {
    id: 'ben-bridge',
    name: 'Ben Bridge Jeweler',
    industry: 'Retail - Jewelry',
    acquisitionYear: 2000,
    description: 'Fine jewelry retailer with locations across the Western United States.',
    mentions: [
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'We acquired Acme Brick',
        context: 'Berkshire purchased Acme Brick Company, a 109-year-old manufacturer of brick and masonry products.',
        pageNumber: 11
      },
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'Ben Bridge expanded watch offerings',
        context: 'Ben Bridge Jeweler expanded its luxury watch offerings, becoming a premier watch retailer.',
        pageNumber: 98
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'Ben Bridge opened flagship stores',
        context: 'Ben Bridge opened new flagship stores in key West Coast markets.',
        pageNumber: 92
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Ben Bridge adapted to digital sales',
        context: 'Ben Bridge successfully expanded online sales while maintaining its personal service reputation.',
        pageNumber: 98
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Acme Brick benefited from strong residential construction...',
        context: 'Acme Brick Company sold over 1 billion bricks in 2023, benefiting from robust housing construction. The company\'s 100-year warranty remains unique in the industry.',
        pageNumber: 100
      }
    ]
  },
  {
    id: 'oriental-trading',
    name: 'Oriental Trading Company',
    industry: 'Direct Marketing',
    acquisitionYear: 2012,
    description: 'Direct retailer and wholesaler of party supplies, arts and crafts, toys, and novelties.',
    mentions: [
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'We acquired Oriental Trading',
        context: 'We acquired Oriental Trading Company, a direct marketer of party supplies and crafts.',
        pageNumber: 24
      }
    ]
  },
  {
    id: 'pampered-chef',
    name: 'The Pampered Chef',
    industry: 'Direct Sales',
    acquisitionYear: 2002,
    description: 'Direct seller of kitchen tools, food products, and cookbooks.',
    mentions: [
      {
        reportYear: 2002,
        reportId: '2002',
        text: 'We acquired Fruit of the Loom',
        context: 'Berkshire acquired Fruit of the Loom out of bankruptcy for approximately $835 million.',
        pageNumber: 4
      },
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'Pampered Chef expanded internationally',
        context: 'The Pampered Chef expanded its direct sales model into new international markets.',
        pageNumber: 91
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'Pampered Chef embraced social selling',
        context: 'The Pampered Chef successfully adapted to social media selling while maintaining its party model.',
        pageNumber: 87
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Pampered Chef pivoted to virtual parties',
        context: 'The Pampered Chef quickly adapted to virtual cooking parties during COVID-19 restrictions.',
        pageNumber: 104
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Fruit of the Loom faced margin pressure from cotton prices...',
        context: 'Despite higher input costs, Fruit of the Loom maintained market share through operational efficiency improvements and strategic pricing. The company\'s direct-to-consumer channel grew 25% year-over-year.',
        pageNumber: 111
      }
    ]
  },
  {
    id: 'detlev-louis',
    name: 'Detlev Louis Motorrad',
    industry: 'Retail - Motorcycle',
    acquisitionYear: 2015,
    description: 'Europe\'s largest retailer of motorcycle apparel and accessories.',
    mentions: [
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'We acquired Oriental Trading Company',
        context: 'Berkshire purchased Oriental Trading Company, a direct marketer of party supplies and novelties.',
        pageNumber: 16
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Louis expanded store footprint',
        context: 'Detlev Louis opened new stores across Europe, strengthening its market leadership.',
        pageNumber: 96
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Louis launched online marketplace',
        context: 'Detlev Louis launched a comprehensive online marketplace for motorcycle enthusiasts.',
        pageNumber: 94
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Louis saw increased motorcycle demand',
        context: 'Detlev Louis benefited from renewed interest in motorcycling as an outdoor recreation option.',
        pageNumber: 87
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Oriental Trading expanded its digital presence...',
        context: 'Oriental Trading Company grew e-commerce sales by 30% through improved mobile experience and expanded product categories. The company now offers over 60,000 unique items.',
        pageNumber: 109
      }
    ]
  },

  // Media
  {
    id: 'buffalo-news',
    name: 'Buffalo News',
    industry: 'Media',
    acquisitionYear: 1977,
    description: 'Daily newspaper serving Buffalo, New York and surrounding areas.',
    mentions: [
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
    ]
  },
  {
    id: 'bh-media',
    name: 'BH Media Group',
    industry: 'Media',
    acquisitionYear: 2012,
    description: 'Newspaper publishing group (operations wound down in 2020).',
    mentions: [
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'We acquired Brooks Sports',
        context: 'Berkshire purchased Brooks Sports, a leading designer and marketer of performance running footwear and apparel.',
        pageNumber: 20
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'BH Media acquired additional papers',
        context: 'BH Media Group continued consolidating community newspapers to achieve operational synergies.',
        pageNumber: 71
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'BH Media focused on digital transition',
        context: 'BH Media Group accelerated digital initiatives across its newspaper properties.',
        pageNumber: 89
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'BH Media prepared for sale',
        context: 'BH Media Group prepared its newspaper properties for eventual sale to Lee Enterprises.',
        pageNumber: 96
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Brooks Running achieved record sales growth...',
        context: 'Brooks Sports grew revenues by 25% to exceed $1 billion for the first time. The company maintained its #1 market share position in performance running footwear.',
        pageNumber: 112
      }
    ]
  },

  // Other
  {
    id: 'business-wire',
    name: 'Business Wire',
    industry: 'News Distribution',
    acquisitionYear: 2006,
    description: 'Leading global distributor of corporate news and multimedia content.',
    mentions: [
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Business Wire continues steady growth',
        context: 'Business Wire continues its steady growth as the premier press release distribution service.',
        pageNumber: 27
      }
    ]
  },
  {
    id: 'charter-brokerage',
    name: 'Charter Brokerage',
    industry: 'Logistics',
    acquisitionYear: 2014,
    description: 'Third-party logistics provider specializing in truckload freight.',
    mentions: [{
        reportYear: 2006,
        reportId: '2006',
        text: 'MidAmerican acquired PacifiCorp for $5.1 billion',
        context: 'MidAmerican Energy completed its acquisition of PacifiCorp, significantly expanding our utility operations across the Western United States.',
        pageNumber: 21
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'PacifiCorp invested in transmission infrastructure',
        context: 'PacifiCorp continued major investments in transmission infrastructure to improve reliability and access to renewable energy.',
        pageNumber: 47
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'PacifiCorp expanded renewable generation',
        context: 'PacifiCorp significantly expanded its wind generation capacity as part of Berkshire Hathaway Energy\'s renewable commitment.',
        pageNumber: 33
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'PacifiCorp faced wildfire challenges',
        context: 'PacifiCorp dealt with significant wildfire-related challenges in California and Oregon, leading to increased mitigation investments.',
        pageNumber: 29
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Charter Brokerage managed pandemic logistics',
        context: 'Charter Brokerage played a crucial role managing temperature-controlled logistics during vaccine distribution.',
        pageNumber: 97
      }
    ]
  },
  {
    id: 'xtra',
    name: 'XTRA Lease',
    industry: 'Equipment Leasing',
    acquisitionYear: 2001,
    description: 'Provider of transportation equipment leasing and related services.',
    mentions: [{
        reportYear: 2000,
        reportId: '2000',
        text: 'We purchased 76% of MidAmerican Energy',
        context: 'Berkshire acquired a 76% interest in MidAmerican Energy Holdings, a company with major utility operations in Iowa and the UK.',
        pageNumber: 12
      },
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'MidAmerican is Iowa\'s largest utility',
        context: 'MidAmerican Energy serves over 700,000 electric customers and 700,000 gas customers in Iowa and surrounding states.',
        pageNumber: 28
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'MidAmerican leads in wind generation',
        context: 'MidAmerican Energy became the first U.S. investor-owned utility to generate more than 50% of its retail sales from wind.',
        pageNumber: 35
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'MidAmerican announced 100% renewable vision',
        context: 'MidAmerican Energy announced plans to achieve 100% renewable energy for its Iowa customers.',
        pageNumber: 51
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'XTRA invested in refrigerated trailers',
        context: 'XTRA Lease expanded its refrigerated trailer fleet to meet growing cold chain demands.',
        pageNumber: 108
      }
    ]
  },
  {
    id: 'cort',
    name: 'CORT Business Services',
    industry: 'Furniture Rental',
    acquisitionYear: 2000,
    description: 'Provider of rental furniture and related services to businesses and individuals.',
    mentions: [
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'BHE acquired NV Energy for $5.6 billion',
        context: 'Berkshire Hathaway Energy completed the acquisition of NV Energy, adding Nevada\'s largest utility to our energy portfolio.',
        pageNumber: 11
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'NV Energy expanded solar capacity',
        context: 'NV Energy significantly expanded its solar generation capacity to serve growing demand in Las Vegas and Reno.',
        pageNumber: 47
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'CORT expanded event rental business',
        context: 'CORT Business Services grew its event rental division serving trade shows and conferences.',
        pageNumber: 102
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'CORT launched furniture as a service',
        context: 'CORT introduced furniture-as-a-service offerings for startups and flexible workspaces.',
        pageNumber: 101
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'NV Energy achieved emissions reductions',
        context: 'NV Energy made significant progress in reducing carbon emissions while maintaining reliable service to Nevada customers.',
        pageNumber: 41
      }
    ]
  },
  {
    id: 'tt',
    name: 'TTI',
    industry: 'Electronics Distribution',
    acquisitionYear: 2007,
    description: 'Specialty distributor of electronic components.',
    mentions: [
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'BHE acquired Northern Powergrid',
        context: 'Berkshire Hathaway Energy acquired Northern Powergrid, serving 3.9 million customers in Northeast England and Yorkshire.',
        pageNumber: 35
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Northern Powergrid improved reliability',
        context: 'Northern Powergrid achieved significant improvements in network reliability and customer satisfaction scores.',
        pageNumber: 68
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'TTI made strategic acquisitions',
        context: 'TTI completed several acquisitions to expand its electronic component distribution capabilities.',
        pageNumber: 104
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'TTI managed component shortages',
        context: 'TTI\'s inventory management proved crucial during global semiconductor shortages.',
        pageNumber: 98
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Northern Powergrid invested in grid modernization',
        context: 'Northern Powergrid continued major investments in smart grid technology and renewable energy integration.',
        pageNumber: 52
      }
    ]
  }
]

export const getSubsidiaries = async (req, res) => {
  try {
    res.json(mockSubsidiaries)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subsidiaries' })
  }
}

export const getSubsidiaryById = async (req, res) => {
  try {
    const subsidiary = mockSubsidiaries.find(s => s.id === req.params.id)
    if (!subsidiary) {
      return res.status(404).json({ error: 'Subsidiary not found' })
    }
    res.json(subsidiary)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subsidiary' })
  }
}

export const getSubsidiaryMentions = async (req, res) => {
  try {
    const subsidiary = mockSubsidiaries.find(s => s.id === req.params.id)
    if (!subsidiary) {
      return res.status(404).json({ error: 'Subsidiary not found' })
    }
    res.json(subsidiary.mentions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentions' })
  }
}