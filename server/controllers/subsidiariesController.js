// Comprehensive list of Berkshire Hathaway's 65 main subsidiaries
const mockSubsidiaries = [
  // Insurance Group
  {
    id: 'geico',
    name: 'GEICO',
    industry: 'Insurance',
    acquisitionYear: 1996,
    description: 'One of the largest auto insurance companies in the United States, known for direct-to-consumer sales and advertising.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'wonderful experience with GEICO that began early in 1951 and will never end',
        context: 'Warren Buffett references his long relationship with GEICO, calling it an "almost unbelievably wonderful experience" that helped build Berkshire\'s insurance operations.',
        pageNumber: 15
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'GEICO faced challenges in 2022 due to inflation in auto parts and labor costs...',
        context: 'Despite headwinds from inflation affecting repair costs, GEICO implemented rate increases and tightened underwriting standards. The company remains focused on improving profitability while maintaining competitive pricing.',
        pageNumber: 8
      },
      {
        reportYear: 1976,
        reportId: '1976',
        text: 'We invested $45.7 million in GEICO common stock',
        context: 'Berkshire made its initial investment in GEICO when the company was near bankruptcy, recognizing its fundamental strengths.',
        pageNumber: 3
      },
      {
        reportYear: 1977,
        reportId: '1977',
        text: 'Our holdings in GEICO Corporation represent 33% of the company',
        context: 'We continue to hold a significant stake in GEICO Corporation, which represents one of our major equity investments.',
        pageNumber: 4
      },
      {
        reportYear: 1980,
        reportId: '1980',
        text: 'GEICO investment now worth $105.3 million',
        context: 'Our investment in GEICO Corporation common stock has a cost basis of $47.1 million and a market value of $105.3 million.',
        pageNumber: 8
      },
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'GEICO continues to prosper under Jack Byrne',
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
        text: 'We will acquire the rest of GEICO for $2.3 billion',
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
        reportYear: 1998,
        reportId: '1998',
        text: 'GEICO gained 707,000 policyholders',
        context: 'GEICO added 707,000 policyholders, increasing its market share significantly through direct marketing and the gecko campaign.',
        pageNumber: 9
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'GEICO passed State Farm in new business',
        context: 'GEICO wrote more voluntary auto business than State Farm, becoming the #1 company in new business production.',
        pageNumber: 12
      },
      {
        reportYear: 2002,
        reportId: '2002',
        text: 'GEICO insured 4.7 million vehicles',
        context: 'GEICO now insures 4.7 million vehicles, nearly double the 2.5 million when we acquired full control in 1996.',
        pageNumber: 7
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'GEICO insured 6.3 million vehicles',
        context: 'GEICO now insures 6.3 million vehicles, up from 2.5 million when we acquired full control in 1996.',
        pageNumber: 8
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'GEICO spent $800 million on advertising',
        context: 'GEICO spent about $800 million on advertising, making it one of the country\'s largest advertisers.',
        pageNumber: 12
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'GEICO became the third-largest auto insurer',
        context: 'GEICO passed Allstate to become the third-largest private passenger auto insurer in the United States.',
        pageNumber: 14
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'GEICO reached 11 million policyholders',
        context: 'GEICO now serves over 11 million policyholders, continuing its remarkable growth trajectory under Tony Nicely.',
        pageNumber: 10
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'GEICO hit 14% market share',
        context: 'GEICO\'s market share reached 14%, insuring over 20 million vehicles. The gecko continues to be America\'s favorite advertising icon.',
        pageNumber: 9
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'GEICO earned $2.4 billion pre-tax',
        context: 'GEICO earned $2.4 billion pre-tax, demonstrating the power of its low-cost direct distribution model.',
        pageNumber: 8
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'GEICO served 28 million motorists',
        context: 'GEICO now serves 28 million motorists with over 17 million auto policies in force.',
        pageNumber: 11
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'GEICO gave back $2.8 billion to customers',
        context: 'During COVID-19, GEICO returned $2.8 billion to customers through credits and rate reductions as driving decreased.',
        pageNumber: 17
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Todd Combs became GEICO CEO',
        context: 'Todd Combs took over as GEICO CEO, succeeding Bill Roberts, bringing fresh perspective to address competitive challenges.',
        pageNumber: 13
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'GEICO faced challenges in 2022 due to inflation',
        context: 'Despite headwinds from inflation affecting repair costs, GEICO implemented rate increases and tightened underwriting standards.',
        pageNumber: 8
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'wonderful experience with GEICO that began early in 1951',
        context: 'Warren Buffett references his long relationship with GEICO, calling it an \"almost unbelievably wonderful experience\".',
        pageNumber: 15
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
        text: 'We merged with General Re Corporation',
        context: 'In December 1998, we completed our largest acquisition ever, merging with General Re, one of the world\'s leading reinsurers.',
        pageNumber: 3
      },
      {
        reportYear: 2001,
        reportId: '2001',
        text: 'General Re\'s underwriting results were unsatisfactory',
        context: 'Following September 11th, General Re faced significant losses, but we remain confident in its long-term prospects and exceptional management.',
        pageNumber: 7
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
    mentions: [{
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
        reportYear: 2020,
        reportId: '2020',
        text: 'Primary insurers navigated pandemic challenges',
        context: 'Our primary insurance operations successfully navigated COVID-19 related claims while maintaining profitability.',
        pageNumber: 26
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'U.S. Liability continues to excel in specialty lines',
        context: 'U.S. Liability Insurance Group maintains its leadership in hard-to-place specialty insurance lines.',
        pageNumber: 82
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
    mentions: [{
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
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'BNSF\'s performance was impacted by supply chain disruptions...',
        context: 'Despite operational challenges from weather events and labor negotiations, BNSF maintained service levels and continued its multi-billion dollar capital investment program to improve infrastructure and capacity.',
        pageNumber: 71
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'We agreed to acquire BNSF for $44 billion',
        context: 'Berkshire announced the acquisition of Burlington Northern Santa Fe Corporation for $100 per share, our largest deal ever.',
        pageNumber: 3
      },
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
        reportYear: 2012,
        reportId: '2012',
        text: 'BNSF invested $3.8 billion in capital expenditures',
        context: 'BNSF invested a record $3.8 billion in capital expenditures to expand capacity and improve service.',
        pageNumber: 15
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
        context: 'BNSF will spend $6 billion in 2015 on capital expenditures, more than any railroad has spent in a single year.',
        pageNumber: 23
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'BNSF earned $4.2 billion',
        context: 'BNSF earned $4.2 billion despite volume declines in coal and crude oil shipments.',
        pageNumber: 21
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'BNSF earned $3.6 billion despite volume declines',
        context: 'Despite a 7% decline in freight volumes due to weak coal and oil shipments, BNSF earned $3.6 billion.',
        pageNumber: 29
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Carl Ice became BNSF CEO',
        context: 'Carl Ice succeeded Matt Rose as CEO of BNSF, continuing the railroad\'s focus on safety and service.',
        pageNumber: 34
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'BNSF carried 5.4 million carloads',
        context: 'BNSF carried 5.4 million carloads and containers in 2018, maintaining its position as America\'s largest freight railroad.',
        pageNumber: 37
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'BNSF invested $3.3 billion in infrastructure',
        context: 'BNSF continued heavy infrastructure investments, spending $3.3 billion on capital improvements.',
        pageNumber: 31
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'BNSF proved resilient during the pandemic',
        context: 'Despite COVID-19 disruptions, BNSF maintained essential freight service and earned $5.3 billion.',
        pageNumber: 22
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'BNSF faced supply chain challenges',
        context: 'BNSF dealt with supply chain congestion but maintained service levels through operational improvements.',
        pageNumber: 28
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'BNSF\'s performance was impacted by supply chain disruptions',
        context: 'Despite operational challenges from weather events and labor negotiations, BNSF maintained service levels.',
        pageNumber: 71
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BNSF is the largest of six major rail systems',
        context: 'BNSF carries 23,759 miles of main track, 99 tunnels, 13,495 bridges, 7,521 locomotives.',
        pageNumber: 12
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Last year BNSF\'s earnings declined more than I expected',
        context: 'Though fuel costs fell, wage increases promulgated in Washington were far beyond inflation goals.',
        pageNumber: 13
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
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Our second and even more severe earnings disappointment last year occurred at BHE...',
        context: 'Most of BHE\'s large electric-utility businesses and gas pipelines performed as expected, but regulatory climate in a few states has raised the specter of zero profitability or bankruptcy. Climate change and forest fires have created significant losses.',
        pageNumber: 13
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BHE\'s extensive multi-state transmission project in the West was initiated in 2006...',
        context: 'The project remains years from completion but will eventually serve 10 states comprising 30% of continental U.S. acreage. The regulatory environment has changed, breaking the traditional fixed-return model.',
        pageNumber: 13
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'We purchased 76% of MidAmerican Energy',
        context: 'Berkshire acquired a 76% interest in MidAmerican Energy Holdings, a company with major utility operations.',
        pageNumber: 12
      },
      {
        reportYear: 2002,
        reportId: '2002',
        text: 'MidAmerican earned $613 million',
        context: 'MidAmerican Energy, under Dave Sokol\'s leadership, contributed $613 million to Berkshire\'s earnings.',
        pageNumber: 15
      },
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'MidAmerican acquired Kern River pipelines',
        context: 'MidAmerican Energy acquired Kern River Gas Transmission, expanding our natural gas pipeline operations.',
        pageNumber: 31
      },
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'MidAmerican acquired PacifiCorp for $5.1 billion',
        context: 'MidAmerican Energy completed its acquisition of PacifiCorp, significantly expanding our utility operations.',
        pageNumber: 21
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'MidAmerican earned $1.7 billion',
        context: 'Under Dave Sokol\'s leadership, MidAmerican Energy (now Berkshire Hathaway Energy) contributed $1.7 billion.',
        pageNumber: 19
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'MidAmerican invested in renewable energy',
        context: 'MidAmerican Energy continued massive investments in wind generation, becoming a renewable energy leader.',
        pageNumber: 25
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'Greg Abel succeeded Dave Sokol',
        context: 'Greg Abel became CEO of MidAmerican Energy following Dave Sokol\'s departure, continuing the growth trajectory.',
        pageNumber: 16
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'BHE acquired NV Energy for $5.6 billion',
        context: 'Berkshire Hathaway Energy completed the acquisition of NV Energy, adding Nevada\'s largest utility.',
        pageNumber: 11
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'BHE will have invested $15 billion in renewable generation',
        context: 'By the end of 2015, Berkshire Hathaway Energy will have invested $15 billion in renewable generation.',
        pageNumber: 8
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'BHE earned $2.7 billion',
        context: 'Berkshire Hathaway Energy earned $2.7 billion while continuing massive renewable energy investments.',
        pageNumber: 18
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'BHE transmission project progresses',
        context: 'BHE\'s multi-state transmission project continues, eventually serving 30% of the continental U.S.',
        pageNumber: 44
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'BHE earned $2.9 billion',
        context: 'Berkshire Hathaway Energy earned $2.9 billion while maintaining its leadership in renewable generation.',
        pageNumber: 33
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'BHE announced 100% renewable goals',
        context: 'Berkshire Hathaway Energy announced plans to achieve 100% renewable energy in multiple service territories.',
        pageNumber: 29
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'BHE earned $3.4 billion',
        context: 'Greg Abel\'s Berkshire Hathaway Energy earned $3.4 billion in 2020, with significant renewable investments.',
        pageNumber: 14
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'BHE faced wildfire liabilities',
        context: 'Berkshire Hathaway Energy faced increasing wildfire-related liabilities in Western states.',
        pageNumber: 31
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'BHE regulatory challenges emerged',
        context: 'Berkshire Hathaway Energy faced regulatory challenges in some states affecting allowed returns.',
        pageNumber: 42
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Our second and even more severe earnings disappointment occurred at BHE',
        context: 'Most of BHE\'s businesses performed as expected, but regulatory climate in a few states raised concerns.',
        pageNumber: 13
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BHE\'s extensive multi-state transmission project was initiated in 2006',
        context: 'The project remains years from completion but will eventually serve 10 states comprising 30% of continental U.S.',
        pageNumber: 13
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
        reportYear: 2000,
        reportId: '2000',
        text: 'We purchased 76% of MidAmerican Energy',
        context: 'Berkshire acquired a 76% interest in MidAmerican Energy Holdings, a company with major utility operations in Iowa and the UK.',
        pageNumber: 12
      },
      {
        reportYear: 2002,
        reportId: '2002',
        text: 'MidAmerican earned $613 million',
        context: 'MidAmerican Energy, under Dave Sokol\'s leadership, contributed $613 million to Berkshire\'s earnings.',
        pageNumber: 15
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
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Our second and even more severe earnings disappointment last year occurred at BHE...',
        context: 'Most of BHE\'s large electric-utility businesses and gas pipelines performed as expected, but regulatory climate in a few states has raised the specter of zero profitability or bankruptcy. Climate change and forest fires have created significant losses.',
        pageNumber: 13
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BHE\'s extensive multi-state transmission project in the West was initiated in 2006...',
        context: 'The project remains years from completion but will eventually serve 10 states comprising 30% of continental U.S. acreage. The regulatory environment has changed, breaking the traditional fixed-return model.',
        pageNumber: 13
      }
    ]
  },
  {
    id: 'nv-energy',
    name: 'NV Energy',
    industry: 'Utilities',
    acquisitionYear: 2013,
    description: 'Electric utility serving Nevada, including Las Vegas and Reno.',
    mentions: [{
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
        reportYear: 2020,
        reportId: '2020',
        text: 'GUARD adapted to workplace changes',
        context: 'GUARD Insurance successfully adapted its workers\' compensation coverage to address pandemic-related workplace changes.',
        pageNumber: 57
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'NV Energy invested in renewable transmission',
        context: 'NV Energy continued major investments in transmission infrastructure to connect renewable generation.',
        pageNumber: 56
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
    mentions: [{
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
        reportYear: 2022,
        reportId: '2022',
        text: 'Applied Underwriters maintained strong growth',
        context: 'Applied Underwriters achieved strong premium growth while maintaining excellent underwriting results.',
        pageNumber: 44
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
      }
    ]
  },
  {
    id: 'altalink',
    name: 'AltaLink',
    industry: 'Utilities',
    acquisitionYear: 2014,
    description: 'Alberta\'s largest regulated electricity transmission company.',
    mentions: [{
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
        reportYear: 2021,
        reportId: '2021',
        text: 'Medical Protective navigated COVID liability issues',
        context: 'Medical Protective successfully navigated COVID-19 related liability issues for healthcare providers.',
        pageNumber: 38
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'AltaLink completed Fort McMurray transmission',
        context: 'AltaLink completed the Fort McMurray West 500-kV Transmission Project, enhancing Alberta\'s grid reliability.',
        pageNumber: 84
      }
    ]
  },
  {
    id: 'bhe-pipeline',
    name: 'BHE Pipeline Group',
    industry: 'Energy',
    acquisitionYear: null,
    description: 'Natural gas pipeline operations including Northern Natural Gas and Kern River Gas.',
    mentions: [{
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
        reportYear: 2019,
        reportId: '2019',
        text: 'U.S. Liability grew specialty lines',
        context: 'U.S. Liability continued to grow its specialty lines business in niche markets where expertise matters.',
        pageNumber: 85
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Pipeline group expanded capacity',
        context: 'BHE Pipeline Group completed expansion projects on both Northern Natural Gas and Kern River systems.',
        pageNumber: 91
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
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'PCC benefited from the aerospace recovery...',
        context: 'Precision Castparts saw revenues increase 18% in 2023 as commercial aerospace production ramped up. The company\'s order backlog reached record levels, providing visibility for continued growth.',
        pageNumber: 88
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'We agreed to acquire Precision Castparts for $37.2 billion',
        context: 'Berkshire announced its largest acquisition ever, agreeing to purchase Precision Castparts Corp for $235 per share.',
        pageNumber: 3
      },
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
        reportYear: 2019,
        reportId: '2019',
        text: 'PCC revenues reached $10 billion',
        context: 'Precision Castparts generated approximately $10 billion in revenues as commercial aerospace demand strengthened.',
        pageNumber: 48
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'PCC was severely impacted by COVID-19',
        context: 'The pandemic\'s impact on air travel devastated PCC\'s aerospace business, requiring significant workforce reductions.',
        pageNumber: 18
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'PCC began recovery from pandemic lows',
        context: 'Precision Castparts started recovering as commercial aviation began its slow recovery from pandemic lows.',
        pageNumber: 56
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'PCC accelerated aerospace recovery',
        context: 'Precision Castparts benefited from accelerating commercial aerospace production and strong defense demand.',
        pageNumber: 73
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'PCC benefited from the aerospace recovery',
        context: 'Precision Castparts saw revenues increase 18% in 2023 as commercial aerospace production ramped up.',
        pageNumber: 88
      }
    ]
  },
  {
    id: 'lubrizol',
    name: 'Lubrizol',
    industry: 'Specialty Chemicals',
    acquisitionYear: 2011,
    description: 'Global leader in specialty chemicals for transportation and industrial applications.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Lubrizol\'s specialty additives business performed well...',
        context: 'Lubrizol generated $7.2 billion in revenues with strong performance in additives for electric vehicle fluids and sustainable solutions. The company invested $300 million in R&D for next-generation products.',
        pageNumber: 92
      },
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
        reportYear: 2014,
        reportId: '2014',
        text: 'Lubrizol expanded through acquisitions',
        context: 'Lubrizol completed several strategic acquisitions to expand its specialty chemicals portfolio.',
        pageNumber: 41
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Lubrizol revenues exceeded $7 billion',
        context: 'Lubrizol generated revenues of over $7 billion despite headwinds from lower oil prices affecting customers.',
        pageNumber: 52
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'Lubrizol invested in new facilities',
        context: 'Lubrizol continues to invest in new facilities and R&D to maintain its technological edge in specialty chemicals.',
        pageNumber: 51
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Eric Schnur became Lubrizol CEO',
        context: 'Eric Schnur succeeded James Hambrick as CEO of Lubrizol, continuing the company\'s focus on innovation.',
        pageNumber: 67
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Lubrizol expanded in emerging markets',
        context: 'Lubrizol opened new facilities in Asia and expanded its product portfolio for electric vehicle applications.',
        pageNumber: 72
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Lubrizol invested in sustainable solutions',
        context: 'Lubrizol increased investments in sustainable chemistry and bio-based products to meet evolving customer needs.',
        pageNumber: 81
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Lubrizol maintained operations during pandemic',
        context: 'As an essential business, Lubrizol maintained operations throughout COVID-19, supporting critical industries.',
        pageNumber: 76
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Lubrizol expanded EV fluid capabilities',
        context: 'Lubrizol significantly expanded its electric vehicle fluid capabilities as automakers accelerated EV development.',
        pageNumber: 88
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'Rebecca Liebert became Lubrizol CEO',
        context: 'Rebecca Liebert was appointed CEO of Lubrizol, bringing extensive chemical industry experience.',
        pageNumber: 69
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Lubrizol\'s specialty additives business performed well',
        context: 'Lubrizol generated $7.2 billion in revenues with strong performance in additives for electric vehicle fluids.',
        pageNumber: 92
      }
    ]
  },
  {
    id: 'marmon',
    name: 'Marmon Holdings',
    industry: 'Industrial Conglomerate',
    acquisitionYear: 2008,
    description: 'Diversified industrial organization with over 100 autonomous manufacturing and service businesses.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Marmon continues to excel in its diverse industrial markets...',
        context: 'Marmon\'s 11 business sectors generated combined revenues of $10.9 billion in 2023. The crane and foodservice equipment divisions showed particularly strong growth.',
        pageNumber: 89
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'We agreed to acquire 60% of Marmon',
        context: 'Berkshire agreed to acquire 60% of Marmon Holdings from the Pritzker family for approximately $4.5 billion.',
        pageNumber: 4
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'We acquired 60% of Marmon Holdings',
        context: 'Berkshire acquired 60% of Marmon Holdings from the Pritzker family, with an agreement to purchase the remainder.',
        pageNumber: 4
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'Marmon performed well despite recession',
        context: 'Despite the severe recession, Frank Ptak led Marmon\'s diverse businesses through the downturn successfully.',
        pageNumber: 43
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'We increased our Marmon stake to 80%',
        context: 'As scheduled, we increased our ownership of Marmon to approximately 80%. Frank Ptak runs this superbly.',
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
        reportYear: 2017,
        reportId: '2017',
        text: 'Marmon revenues exceeded $8 billion',
        context: 'Marmon\'s 175 business units generated combined revenues exceeding $8 billion.',
        pageNumber: 76
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Marmon made strategic acquisitions',
        context: 'Marmon continued its strategy of bolt-on acquisitions to strengthen existing business units.',
        pageNumber: 88
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Pete Kadens became Marmon CEO',
        context: 'Pete Kadens succeeded Frank Ptak as CEO of Marmon, continuing the decentralized management approach.',
        pageNumber: 71
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Marmon continues to excel in its diverse industrial markets',
        context: 'Marmon\'s 11 business sectors generated combined revenues of $10.9 billion in 2023.',
        pageNumber: 89
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
        reportYear: 2001,
        reportId: '2001',
        text: 'We acquired Shaw Industries for $2.1 billion',
        context: 'Berkshire purchased Shaw Industries, the world\'s largest carpet manufacturer, with Bob Shaw and Julian Saul continuing to run the business.',
        pageNumber: 5
      },
      {
        reportYear: 2002,
        reportId: '2002',
        text: 'Shaw had a difficult year due to weak demand',
        context: 'Shaw Industries faced weak demand due to the recession but maintained its market leadership position.',
        pageNumber: 26
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
        reportYear: 2012,
        reportId: '2012',
        text: 'Shaw is investing in hard surface flooring',
        context: 'Shaw Industries is investing heavily in hard surface flooring to meet changing consumer preferences.',
        pageNumber: 43
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
    ]
  },
  {
    id: 'benjamin-moore',
    name: 'Benjamin Moore',
    industry: 'Paint & Coatings',
    acquisitionYear: 2000,
    description: 'Premium paint manufacturer known for quality products and color expertise.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Benjamin Moore expanded its retail presence...',
        context: 'Benjamin Moore opened 45 new company-owned stores in 2023, bringing the total to over 180 locations. The company\'s focus on premium products and professional contractors continues to drive margin expansion.',
        pageNumber: 103
      },
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'Benjamin Moore expanded color offerings',
        context: 'Benjamin Moore introduced new color collections, strengthening its position as the designer\'s choice.',
        pageNumber: 89
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'Benjamin Moore launched Aura paint line',
        context: 'Benjamin Moore\'s Aura paint line gained significant market share in the premium paint segment.',
        pageNumber: 82
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'Benjamin Moore opened flagship stores',
        context: 'Benjamin Moore opened flagship retail stores in major markets to showcase its premium products.',
        pageNumber: 77
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Benjamin Moore saw DIY surge during COVID',
        context: 'Benjamin Moore benefited from increased DIY painting projects during pandemic stay-at-home periods.',
        pageNumber: 89
      }
    ]
  },
  {
    id: 'johns-manville',
    name: 'Johns Manville',
    industry: 'Building Materials',
    acquisitionYear: 2001,
    description: 'Manufacturer of insulation, roofing materials, and engineered products.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Johns Manville expanded capacity for insulation products...',
        context: 'Johns Manville invested $200 million in new manufacturing capacity to meet growing demand for energy-efficient building materials. The company\'s revenues reached $3.5 billion.',
        pageNumber: 99
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'Johns Manville expanded insulation production',
        context: 'Johns Manville increased insulation manufacturing capacity to meet growing energy efficiency demand.',
        pageNumber: 71
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'Johns Manville navigated construction downturn',
        context: 'Despite the housing crisis, Johns Manville maintained profitability through commercial market focus.',
        pageNumber: 88
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Johns Manville invested in glass fiber technology',
        context: 'Johns Manville made major investments in advanced glass fiber technology for aerospace applications.',
        pageNumber: 92
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Johns Manville benefited from infrastructure spending',
        context: 'Johns Manville saw increased demand from infrastructure projects requiring advanced building materials.',
        pageNumber: 79
      }
    ]
  },
  {
    id: 'acme-brick',
    name: 'Acme Brick',
    industry: 'Building Materials',
    acquisitionYear: 2000,
    description: 'Manufacturer of brick and masonry products, dating back to 1891.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Acme Brick benefited from strong residential construction...',
        context: 'Acme Brick Company sold over 1 billion bricks in 2023, benefiting from robust housing construction. The company\'s 100-year warranty remains unique in the industry.',
        pageNumber: 100
      },
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
        text: 'We acquired Clayton Homes',
        context: 'We purchased Clayton Homes, America\'s largest producer of manufactured homes. Kevin Clayton will continue to run the business.',
        pageNumber: 5
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'Clayton was the only major home builder to remain profitable',
        context: 'While competitors struggled or failed during the housing crisis, Clayton Homes remained profitable every quarter, a testament to Kevin Clayton\'s conservative management.',
        pageNumber: 17
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

  // Consumer Products
  {
    id: 'sees-candies',
    name: "See's Candies",
    industry: 'Food & Confectionery',
    acquisitionYear: 1972,
    description: 'Premium chocolate and candy manufacturer with over 200 retail locations, Berkshire\'s first major acquisition.',
    mentions: [
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'See\'s Candies delivered another year of steady profits...',
        context: 'See\'s Candies generated pre-tax earnings of $170 million on revenues of $520 million. The company continues to benefit from strong brand loyalty and pricing power, with same-store sales growing 5% year-over-year.',
        pageNumber: 95
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'See\'s produced a record $2.2 billion of revenues since our purchase',
        context: 'The $25 million we paid for See\'s in 1972 has now delivered aggregate pre-tax earnings of $2.2 billion, and it continues to earn exceptional returns on tangible assets.',
        pageNumber: 123
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'Last year See\'s had same-store sales gains of 16%',
        context: 'Despite a tough economy, See\'s Candies achieved remarkable same-store sales growth, demonstrating the strength of the brand and customer loyalty.',
        pageNumber: 7
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'See\'s earned $82 million pre-tax',
        context: 'See\'s had another outstanding year with pre-tax earnings of $82 million. The company we purchased for $25 million continues to be a jewel.',
        pageNumber: 76
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'See\'s sales grew to $383 million',
        context: 'Chuck Huggins continues to do an outstanding job at See\'s. Sales were $383 million and pre-tax profits were $62 million.',
        pageNumber: 9
      },
      {
        reportYear: 1999,
        reportId: '1999',
        text: 'See\'s earned $74 million pre-tax',
        context: 'See\'s Candies again had record earnings. Pre-tax profits were $74 million on sales of $287 million.',
        pageNumber: 58
      },
      {
        reportYear: 1991,
        reportId: '1991',
        text: 'See\'s pre-tax earnings were $25.5 million',
        context: 'See\'s Candies, purchased for $25 million in 1972, earned $25.5 million pre-tax in 1991, demonstrating the power of a great brand.',
        pageNumber: 6
      },
      {
        reportYear: 1984,
        reportId: '1984',
        text: 'See\'s earned $13 million after-tax',
        context: 'See\'s Candies earned a record $13 million after taxes, representing a return of over 50% on beginning equity.',
        pageNumber: 52
      },
      {
        reportYear: 1972,
        reportId: '1972',
        text: 'Blue Chip Stamps purchased See\'s Candies',
        context: 'Blue Chip Stamps (controlled by Berkshire) purchased See\'s Candies for $25 million. It had about $8 million in excess cash at the time.',
        pageNumber: 97
      }
    ]
  },
  {
    id: 'dairy-queen',
    name: 'Dairy Queen',
    industry: 'Food Service',
    acquisitionYear: 1998,
    description: 'International fast-food chain known for soft-serve ice cream and fast food.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Dairy Queen\'s global expansion continues...',
        context: 'Dairy Queen opened 200 new locations globally in 2023, with particularly strong growth in Asia. Same-store sales increased 7% driven by menu innovation and digital ordering capabilities.',
        pageNumber: 106
      },
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'We acquired International Dairy Queen',
        context: 'Berkshire acquired International Dairy Queen, adding this well-known franchise system with over 5,700 locations to our collection of businesses.',
        pageNumber: 11
      },
      {
        reportYear: 2007,
        reportId: '2007',
        text: 'Dairy Queen opened its 500th store in China',
        context: 'International expansion continues to be a growth driver for Dairy Queen, with China becoming an increasingly important market.',
        pageNumber: 78
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'Dairy Queen same-store sales grew 5.7% in the U.S.',
        context: 'John Gainor continues to do an outstanding job at International Dairy Queen. U.S. same-store sales were up 5.7%.',
        pageNumber: 26
      },
      {
        reportYear: 2011,
        reportId: '2011',
        text: 'Dairy Queen expanded Orange Julius integration',
        context: 'Dairy Queen successfully integrated Orange Julius products into many locations, driving same-store sales.',
        pageNumber: 84
      }
    ]
  },
  {
    id: 'duracell',
    name: 'Duracell',
    industry: 'Consumer Products',
    acquisitionYear: 2016,
    description: 'Leading manufacturer of alkaline batteries with dominant market share globally.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Duracell maintained its market leadership position...',
        context: 'Duracell captured 45% of the U.S. alkaline battery market in 2023. The company\'s focus on innovation in lithium and rechargeable batteries positions it well for evolving consumer needs.',
        pageNumber: 108
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'We agreed to acquire Duracell from P&G',
        context: 'Berkshire agreed to acquire Duracell from Procter & Gamble in a tax-efficient exchange using our P&G shares.',
        pageNumber: 6
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'We completed the acquisition of Duracell',
        context: 'Berkshire completed the acquisition of Duracell from Procter & Gamble in a cash-and-stock transaction valued at approximately $4.7 billion.',
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
        reportYear: 2019,
        reportId: '2019',
        text: 'Duracell expanded internationally',
        context: 'Duracell continued international expansion, particularly in emerging markets where battery usage is growing rapidly.',
        pageNumber: 73
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Duracell benefited from stay-at-home trends',
        context: 'Duracell saw increased demand during COVID-19 as consumers stocked up on batteries for home devices and electronics.',
        pageNumber: 61
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Duracell invested in lithium technology',
        context: 'Duracell increased investments in lithium battery technology to meet growing demand for high-performance batteries.',
        pageNumber: 82
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'Duracell launched optimum line',
        context: 'Duracell successfully launched its Optimum line of premium alkaline batteries, capturing higher margins.',
        pageNumber: 94
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Duracell maintained its market leadership position',
        context: 'Duracell captured 45% of the U.S. alkaline battery market in 2023. The company\'s focus on innovation positions it well.',
        pageNumber: 108
      }
    ]
  },
  {
    id: 'fruit-of-loom',
    name: 'Fruit of the Loom',
    industry: 'Apparel',
    acquisitionYear: 2002,
    description: 'Manufacturer and marketer of underwear, casualwear, and sports apparel.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Fruit of the Loom faced margin pressure from cotton prices...',
        context: 'Despite higher input costs, Fruit of the Loom maintained market share through operational efficiency improvements and strategic pricing. The company\'s direct-to-consumer channel grew 25% year-over-year.',
        pageNumber: 111
      },
      {
        reportYear: 2004,
        reportId: '2004',
        text: 'Fruit of the Loom returned to profitability',
        context: 'Under Berkshire ownership, Fruit of the Loom returned to solid profitability through operational improvements.',
        pageNumber: 61
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'Fruit of the Loom expanded Walmart partnership',
        context: 'Fruit of the Loom strengthened its position as a key apparel supplier to Walmart.',
        pageNumber: 79
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Fruit of the Loom acquired Russell Brands',
        context: 'Fruit of the Loom\'s acquisition of Russell Brands expanded its athletic apparel offerings.',
        pageNumber: 86
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Fruit of the Loom invested in automation',
        context: 'Fruit of the Loom invested heavily in manufacturing automation to improve efficiency and margins.',
        pageNumber: 91
      }
    ]
  },
  {
    id: 'brooks-sports',
    name: 'Brooks Sports',
    industry: 'Athletic Footwear',
    acquisitionYear: 2006,
    description: 'Premium performance running footwear and apparel company.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Brooks Running achieved record sales growth...',
        context: 'Brooks Sports grew revenues by 25% to exceed $1 billion for the first time. The company maintained its #1 market share position in performance running footwear.',
        pageNumber: 112
      },
      {
        reportYear: 2008,
        reportId: '2008',
        text: 'Brooks gained running market share',
        context: 'Brooks Sports continued gaining market share in performance running shoes through innovation.',
        pageNumber: 96
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'Brooks became #1 in specialty running',
        context: 'Brooks achieved the #1 position in specialty running store sales, surpassing major competitors.',
        pageNumber: 91
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Brooks expanded internationally',
        context: 'Brooks Sports accelerated international expansion, particularly in Europe and Asia.',
        pageNumber: 88
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Brooks benefited from running boom',
        context: 'Brooks saw record sales as COVID-19 drove increased interest in outdoor running.',
        pageNumber: 95
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
    mentions: [{
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
        reportYear: 2023,
        reportId: '2023',
        text: 'Duracell maintained its market leadership position...',
        context: 'Duracell captured 45% of the U.S. alkaline battery market in 2023. The company\'s focus on innovation in lithium and rechargeable batteries positions it well for evolving consumer needs.',
        pageNumber: 108
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'H.H. Brown celebrated 135 years',
        context: 'H.H. Brown Shoe Company marked 135 years of American footwear manufacturing excellence.',
        pageNumber: 106
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
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'McLane distributed over 50 billion units to convenience stores...',
        context: 'McLane Company delivered products to over 110,000 locations nationwide, with revenues exceeding $53 billion. The company\'s efficiency improvements reduced delivery times by 15%.',
        pageNumber: 94
      },
      {
        reportYear: 2005,
        reportId: '2005',
        text: 'McLane continued growth trajectory',
        context: 'Under Grady Rosier\'s leadership, McLane Company expanded its distribution network and customer base.',
        pageNumber: 34
      },
      {
        reportYear: 2010,
        reportId: '2010',
        text: 'McLane revenues exceeded $33 billion',
        context: 'McLane achieved record revenues of $33 billion while maintaining operational excellence.',
        pageNumber: 71
      },
      {
        reportYear: 2016,
        reportId: '2016',
        text: 'McLane invested in technology',
        context: 'McLane made significant technology investments to improve supply chain efficiency.',
        pageNumber: 81
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'McLane navigated supply chain disruptions',
        context: 'McLane successfully managed through pandemic supply chain challenges, maintaining service levels.',
        pageNumber: 73
      }
    ]
  },
  {
    id: 'pilot-flying-j',
    name: 'Pilot Flying J',
    industry: 'Travel Centers',
    acquisitionYear: 2017,
    description: 'Largest operator of travel centers in North America with 750+ locations.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Pilot Flying J served 1.3 billion guests...',
        context: 'Pilot Flying J welcomed 1.3 billion guests across its 750+ locations in 2023. The company invested heavily in electric vehicle charging infrastructure at its travel centers.',
        pageNumber: 93
      },
      {
        reportYear: 2013,
        reportId: '2013',
        text: 'We agreed to acquire 50% of Pilot Flying J',
        context: 'Berkshire agreed to gradually acquire up to 80% of Pilot Flying J, the largest travel center operator in North America.',
        pageNumber: 6
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'We increased our interest in Pilot Flying J to 38.6%',
        context: 'Berkshire increased its ownership stake in Pilot Flying J, with an agreement to become majority owner in 2023.',
        pageNumber: 11
      },
      {
        reportYear: 2018,
        reportId: '2018',
        text: 'Pilot Flying J opened 7 new travel centers',
        context: 'Pilot Flying J continued its expansion, opening 7 new travel centers and upgrading 25 existing locations.',
        pageNumber: 84
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Pilot Flying J served over 1 billion guests',
        context: 'Pilot Flying J served over 1 billion guests across its 750+ locations, maintaining its market leadership.',
        pageNumber: 72
      },
      {
        reportYear: 2020,
        reportId: '2020',
        text: 'Pilot Flying J remained essential during the pandemic',
        context: 'As an essential service provider, Pilot Flying J kept all locations open throughout the pandemic.',
        pageNumber: 19
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Pilot Flying J expanded EV charging',
        context: 'Pilot Flying J began significant expansion of electric vehicle charging infrastructure at its locations.',
        pageNumber: 61
      },
      {
        reportYear: 2022,
        reportId: '2022',
        text: 'Pilot Flying J prepared for ownership transition',
        context: 'Pilot Flying J prepared for Berkshire\'s scheduled increase to majority ownership in 2023.',
        pageNumber: 86
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'We became majority owner of Pilot Flying J',
        context: 'Berkshire completed its purchase of a majority stake in Pilot Flying J as scheduled.',
        pageNumber: 14
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Pilot Flying J served 1.3 billion guests',
        context: 'Pilot Flying J welcomed 1.3 billion guests across its 750+ locations in 2023.',
        pageNumber: 93
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
        reportYear: 2023,
        reportId: '2023',
        text: 'NetJets flew over 500,000 flight hours safely...',
        context: 'NetJets operated over 500,000 flight hours in 2023 with its fleet of 750+ aircraft. The company added 100 new aircraft to meet growing demand for private aviation services.',
        pageNumber: 84
      },
      {
        reportYear: 1998,
        reportId: '1998',
        text: 'We purchased Executive Jet, operator of the NetJets program',
        context: 'Berkshire acquired Executive Jet Aviation, which operates the NetJets fractional ownership program, pioneering a new way for corporations and individuals to utilize private aircraft.',
        pageNumber: 13
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'NetJets ordered up to 425 new jets from Cessna and Bombardier',
        context: 'NetJets placed the largest private jet order in history, demonstrating our confidence in the business and commitment to maintaining the youngest, safest fleet in private aviation.',
        pageNumber: 10
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'NetJets navigated through the worst year in aviation history',
        context: 'Under Dave Sokol\'s leadership, NetJets cut costs dramatically while maintaining safety standards during the severe aviation downturn.',
        pageNumber: 15
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'NetJets operates a fleet of 750 aircraft',
        context: 'NetJets, the world\'s leading private jet company, operates approximately 750 aircraft and flies to more than 170 countries.',
        pageNumber: 11
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
        reportYear: 2013,
        reportId: '2013',
        text: 'NFM opened its Texas store, the largest home furnishings store in America',
        context: 'The new 1.8 million square foot Texas location represents the largest home furnishings store in America, demonstrating NFM\'s continued growth 30 years after we purchased it from Mrs. B.',
        pageNumber: 19
      },
      {
        reportYear: 1997,
        reportId: '1997',
        text: 'Mrs. B died at age 104',
        context: 'Rose Blumkin, the remarkable founder of Nebraska Furniture Mart, passed away at 104, having built one of America\'s largest furniture stores from a $500 investment.',
        pageNumber: 17
      },
      {
        reportYear: 1983,
        reportId: '1983',
        text: 'We purchased 80% of Nebraska Furniture Mart',
        context: 'We acquired 80% of Nebraska Furniture Mart from Rose Blumkin ("Mrs. B"), who started the business with $500 in 1937.',
        pageNumber: 7
      },
      {
        reportYear: 2003,
        reportId: '2003',
        text: 'NFM opened a 450,000 square foot store in Kansas City',
        context: 'Nebraska Furniture Mart opened its second store outside Omaha, a 450,000 square foot facility in Kansas City.',
        pageNumber: 18
      },
      {
        reportYear: 1989,
        reportId: '1989',
        text: 'Mrs. B, at 96, opened a competing store',
        context: 'After a disagreement, Mrs. B left NFM and started a competing store across the street. We later bought her new business and merged it back.',
        pageNumber: 12
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
        reportYear: 1989,
        reportId: '1989',
        text: 'We purchased 80% of Borsheims',
        context: 'We acquired 80% of Borsheims, one of the country\'s largest jewelry stores, from the Friedman family.',
        pageNumber: 17
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
    mentions: [{
        reportYear: 2000,
        reportId: '2000',
        text: 'We acquired Acme Brick',
        context: 'Berkshire purchased Acme Brick Company, a 109-year-old manufacturer of brick and masonry products.',
        pageNumber: 11
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Acme Brick benefited from strong residential construction...',
        context: 'Acme Brick Company sold over 1 billion bricks in 2023, benefiting from robust housing construction. The company\'s 100-year warranty remains unique in the industry.',
        pageNumber: 100
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
      }
    ]
  },
  {
    id: 'oriental-trading',
    name: 'Oriental Trading Company',
    industry: 'Direct Marketing',
    acquisitionYear: 2012,
    description: 'Direct retailer and wholesaler of party supplies, arts and crafts, toys, and novelties.',
    mentions: [{
        reportYear: 2023,
        reportId: '2023',
        text: 'Oriental Trading expanded its digital presence...',
        context: 'Oriental Trading Company grew e-commerce sales by 30% through improved mobile experience and expanded product categories. The company now offers over 60,000 unique items.',
        pageNumber: 109
      },
      {
        reportYear: 2014,
        reportId: '2014',
        text: 'Oriental Trading expanded product categories',
        context: 'Oriental Trading Company added thousands of new products across party, craft, and educational categories.',
        pageNumber: 84
      },
      {
        reportYear: 2017,
        reportId: '2017',
        text: 'Oriental Trading improved digital platform',
        context: 'Oriental Trading launched an enhanced e-commerce platform improving customer experience.',
        pageNumber: 93
      },
      {
        reportYear: 2019,
        reportId: '2019',
        text: 'Oriental Trading grew teacher market',
        context: 'Oriental Trading expanded its education market presence, becoming a go-to supplier for teachers.',
        pageNumber: 102
      },
      {
        reportYear: 2021,
        reportId: '2021',
        text: 'Oriental Trading saw craft surge',
        context: 'Oriental Trading benefited from increased crafting activity during pandemic stay-at-home periods.',
        pageNumber: 91
      }
    ]
  },
  {
    id: 'pampered-chef',
    name: 'The Pampered Chef',
    industry: 'Direct Sales',
    acquisitionYear: 2002,
    description: 'Direct seller of kitchen tools, food products, and cookbooks.',
    mentions: [{
        reportYear: 2002,
        reportId: '2002',
        text: 'We acquired Fruit of the Loom',
        context: 'Berkshire acquired Fruit of the Loom out of bankruptcy for approximately $835 million.',
        pageNumber: 4
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Fruit of the Loom faced margin pressure from cotton prices...',
        context: 'Despite higher input costs, Fruit of the Loom maintained market share through operational efficiency improvements and strategic pricing. The company\'s direct-to-consumer channel grew 25% year-over-year.',
        pageNumber: 111
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
      }
    ]
  },
  {
    id: 'detlev-louis',
    name: 'Detlev Louis Motorrad',
    industry: 'Retail - Motorcycle',
    acquisitionYear: 2015,
    description: 'Europe\'s largest retailer of motorcycle apparel and accessories.',
    mentions: [{
        reportYear: 2012,
        reportId: '2012',
        text: 'We acquired Oriental Trading Company',
        context: 'Berkshire purchased Oriental Trading Company, a direct marketer of party supplies and novelties.',
        pageNumber: 16
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Oriental Trading expanded its digital presence...',
        context: 'Oriental Trading Company grew e-commerce sales by 30% through improved mobile experience and expanded product categories. The company now offers over 60,000 unique items.',
        pageNumber: 109
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
        reportYear: 1977,
        reportId: '1977',
        text: 'We purchased the Buffalo Evening News',
        context: 'Berkshire acquired the Buffalo Evening News for $32.5 million, entering the newspaper business for the first time.',
        pageNumber: 5
      },
      {
        reportYear: 1978,
        reportId: '1978',
        text: 'The Buffalo News faces intense competition',
        context: 'The Buffalo News is engaged in a difficult competitive battle with the morning Courier-Express, resulting in operating losses.',
        pageNumber: 7
      },
      {
        reportYear: 1982,
        reportId: '1982',
        text: 'The Buffalo News earned $19 million pre-tax',
        context: 'After years of losses fighting for market dominance, the Buffalo News became highly profitable after its competitor closed.',
        pageNumber: 8
      },
      {
        reportYear: 1985,
        reportId: '1985',
        text: 'Buffalo News earnings hit new records',
        context: 'The Buffalo News, under Stan Lipsey\'s excellent management, achieved record earnings and circulation.',
        pageNumber: 15
      },
      {
        reportYear: 1990,
        reportId: '1990',
        text: 'Stan Lipsey continues to run an outstanding operation',
        context: 'The Buffalo News, under Stan Lipsey\'s leadership, maintained excellent profit margins and journalistic quality.',
        pageNumber: 12
      },
      {
        reportYear: 1995,
        reportId: '1995',
        text: 'The News earned over $45 million',
        context: 'The Buffalo News earned over $45 million pre-tax, maintaining its position as one of the most profitable newspapers in America.',
        pageNumber: 82
      },
      {
        reportYear: 2000,
        reportId: '2000',
        text: 'The News earned $40 million despite circulation pressures',
        context: 'Despite industry-wide circulation declines, the Buffalo News earned over $40 million through cost management and strong local advertising.',
        pageNumber: 54
      },
      {
        reportYear: 2006,
        reportId: '2006',
        text: 'Buffalo News faces digital challenges',
        context: 'The Buffalo News, like all newspapers, faces challenges from digital media but continues to be profitable under Stan Lipsey.',
        pageNumber: 73
      },
      {
        reportYear: 2012,
        reportId: '2012',
        text: 'The Buffalo News adapted to digital challenges',
        context: 'Under Stan Lipsey, the Buffalo News successfully developed digital revenue streams while maintaining print profitability.',
        pageNumber: 29
      }
    ]
  },
  {
    id: 'bh-media',
    name: 'BH Media Group',
    industry: 'Media',
    acquisitionYear: 2012,
    description: 'Newspaper publishing group (operations wound down in 2020).',
    mentions: [{
        reportYear: 2006,
        reportId: '2006',
        text: 'We acquired Brooks Sports',
        context: 'Berkshire purchased Brooks Sports, a leading designer and marketer of performance running footwear and apparel.',
        pageNumber: 20
      },
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Brooks Running achieved record sales growth...',
        context: 'Brooks Sports grew revenues by 25% to exceed $1 billion for the first time. The company maintained its #1 market share position in performance running footwear.',
        pageNumber: 112
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
    mentions: [{
        reportYear: 2006,
        reportId: '2006',
        text: 'We acquired Business Wire',
        context: 'Berkshire purchased Business Wire, the leading global distributor of corporate news. Cathy Baron Tamraz will continue as CEO.',
        pageNumber: 19
      },
      {
        reportYear: 2009,
        reportId: '2009',
        text: 'Business Wire maintained leadership despite recession',
        context: 'Despite the recession impacting corporate communications budgets, Business Wire maintained its leadership position.',
        pageNumber: 89
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
      },
      {
        reportYear: 2015,
        reportId: '2015',
        text: 'Business Wire expanded Asia presence',
        context: 'Business Wire significantly expanded its presence in Asian markets to serve global clients.',
        pageNumber: 98
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
    mentions: [{
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
        reportYear: 2020,
        reportId: '2020',
        text: 'NV Energy achieved emissions reductions',
        context: 'NV Energy made significant progress in reducing carbon emissions while maintaining reliable service to Nevada customers.',
        pageNumber: 41
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
      }
    ]
  },
  {
    id: 'tt',
    name: 'TTI',
    industry: 'Electronics Distribution',
    acquisitionYear: 2007,
    description: 'Specialty distributor of electronic components.',
    mentions: [{
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
        reportYear: 2021,
        reportId: '2021',
        text: 'Northern Powergrid invested in grid modernization',
        context: 'Northern Powergrid continued major investments in smart grid technology and renewable energy integration.',
        pageNumber: 52
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