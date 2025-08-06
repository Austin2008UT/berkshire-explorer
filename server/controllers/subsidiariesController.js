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
      }
    ]
  },
  {
    id: 'berkshire-reinsurance',
    name: 'Berkshire Hathaway Reinsurance Group',
    industry: 'Reinsurance',
    acquisitionYear: null,
    description: 'Global reinsurance operations including property/casualty and life/health reinsurance.',
    mentions: []
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
    mentions: []
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
    mentions: []
  },
  {
    id: 'applied-underwriters',
    name: 'Applied Underwriters',
    industry: 'Insurance',
    acquisitionYear: 2016,
    description: 'Workers\' compensation insurance and services for small and medium-sized businesses.',
    mentions: []
  },
  {
    id: 'medical-protective',
    name: 'Medical Protective',
    industry: 'Insurance',
    acquisitionYear: 2005,
    description: 'Leading provider of medical professional liability insurance.',
    mentions: []
  },
  {
    id: 'us-liability',
    name: 'U.S. Liability Insurance Group',
    industry: 'Insurance',
    acquisitionYear: 2007,
    description: 'Specialty lines insurance for unique and hard-to-place risks.',
    mentions: []
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
    id: 'pacificorp',
    name: 'PacifiCorp',
    industry: 'Utilities',
    acquisitionYear: 2006,
    description: 'Electric utility serving 2 million customers across six Western states.',
    mentions: []
  },
  {
    id: 'midamerican-energy',
    name: 'MidAmerican Energy',
    industry: 'Utilities',
    acquisitionYear: 2000,
    description: 'Iowa\'s largest energy company, leader in renewable energy generation.',
    mentions: []
  },
  {
    id: 'nv-energy',
    name: 'NV Energy',
    industry: 'Utilities',
    acquisitionYear: 2013,
    description: 'Electric utility serving Nevada, including Las Vegas and Reno.',
    mentions: []
  },
  {
    id: 'northern-powergrid',
    name: 'Northern Powergrid',
    industry: 'Utilities',
    acquisitionYear: 2010,
    description: 'Electricity distribution company serving Northeast England and Yorkshire.',
    mentions: []
  },
  {
    id: 'altalink',
    name: 'AltaLink',
    industry: 'Utilities',
    acquisitionYear: 2014,
    description: 'Alberta\'s largest regulated electricity transmission company.',
    mentions: []
  },
  {
    id: 'bhe-pipeline',
    name: 'BHE Pipeline Group',
    industry: 'Energy',
    acquisitionYear: null,
    description: 'Natural gas pipeline operations including Northern Natural Gas and Kern River Gas.',
    mentions: []
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
        reportYear: 2023,
        reportId: '2023',
        text: 'PCC benefited from the aerospace recovery...',
        context: 'Precision Castparts saw revenues increase 18% in 2023 as commercial aerospace production ramped up. The company\'s order backlog reached record levels, providing visibility for continued growth.',
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
    mentions: [
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
    id: 'marmon',
    name: 'Marmon Holdings',
    industry: 'Industrial Conglomerate',
    acquisitionYear: 2008,
    description: 'Diversified industrial organization with over 100 autonomous manufacturing and service businesses.',
    mentions: [
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
    id: 'imc',
    name: 'IMC International Metalworking Companies',
    industry: 'Metalworking Tools',
    acquisitionYear: 2006,
    description: 'One of the world\'s largest metalworking companies, including Iscar cutting tools.',
    mentions: []
  },
  {
    id: 'cti',
    name: 'CTB International',
    industry: 'Agricultural Equipment',
    acquisitionYear: 2002,
    description: 'Designer and manufacturer of systems for poultry, pig, egg production, and grain storage.',
    mentions: []
  },
  {
    id: 'shaw-industries',
    name: 'Shaw Industries',
    industry: 'Flooring',
    acquisitionYear: 2001,
    description: 'World\'s largest carpet manufacturer and leading flooring provider.',
    mentions: []
  },
  {
    id: 'benjamin-moore',
    name: 'Benjamin Moore',
    industry: 'Paint & Coatings',
    acquisitionYear: 2000,
    description: 'Premium paint manufacturer known for quality products and color expertise.',
    mentions: [
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
    id: 'johns-manville',
    name: 'Johns Manville',
    industry: 'Building Materials',
    acquisitionYear: 2001,
    description: 'Manufacturer of insulation, roofing materials, and engineered products.',
    mentions: [
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
    id: 'acme-brick',
    name: 'Acme Brick',
    industry: 'Building Materials',
    acquisitionYear: 2000,
    description: 'Manufacturer of brick and masonry products, dating back to 1891.',
    mentions: [
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
    mentions: []
  },
  {
    id: 'forest-river',
    name: 'Forest River',
    industry: 'Recreational Vehicles',
    acquisitionYear: 2005,
    description: 'Leading manufacturer of recreational vehicles and manufactured housing.',
    mentions: []
  },
  {
    id: 'clayton-homes',
    name: 'Clayton Homes',
    industry: 'Manufactured Housing',
    acquisitionYear: 2003,
    description: 'America\'s largest builder of manufactured, modular, and site-built homes.',
    mentions: [
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
    mentions: [
      {
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
        reportYear: 2023,
        reportId: '2023',
        text: 'Duracell maintained its market leadership position...',
        context: 'Duracell captured 45% of the U.S. alkaline battery market in 2023. The company\'s focus on innovation in lithium and rechargeable batteries positions it well for evolving consumer needs.',
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
    mentions: [
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
    id: 'brooks-sports',
    name: 'Brooks Sports',
    industry: 'Athletic Footwear',
    acquisitionYear: 2006,
    description: 'Premium performance running footwear and apparel company.',
    mentions: [
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Brooks Running achieved record sales growth...',
        context: 'Brooks Sports grew revenues by 25% to exceed $1 billion for the first time. The company maintained its #1 market share position in performance running footwear.',
        pageNumber: 112
      }
    ]
  },
  {
    id: 'justin-brands',
    name: 'Justin Brands',
    industry: 'Footwear',
    acquisitionYear: 2000,
    description: 'Manufacturer of western footwear and workboots including Justin, Tony Lama, and Chippewa brands.',
    mentions: []
  },
  {
    id: 'richline-group',
    name: 'Richline Group',
    industry: 'Jewelry',
    acquisitionYear: 2007,
    description: 'Leading jewelry manufacturer and distributor to major retail chains.',
    mentions: []
  },
  {
    id: 'garan',
    name: 'Garan',
    industry: 'Apparel',
    acquisitionYear: 2002,
    description: 'Children\'s and women\'s apparel manufacturer and licensor.',
    mentions: []
  },
  {
    id: 'fechheimer',
    name: 'Fechheimer Brothers',
    industry: 'Uniforms',
    acquisitionYear: 1986,
    description: 'Manufacturer and distributor of public safety and corporate uniforms.',
    mentions: []
  },
  {
    id: 'hh-brown',
    name: 'H.H. Brown Shoe Company',
    industry: 'Footwear',
    acquisitionYear: 1991,
    description: 'Work shoe and boot manufacturer known for comfort and durability.',
    mentions: []
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
        reportYear: 2023,
        reportId: '2023',
        text: 'McLane distributed over 50 billion units to convenience stores...',
        context: 'McLane Company delivered products to over 110,000 locations nationwide, with revenues exceeding $53 billion. The company\'s efficiency improvements reduced delivery times by 15%.',
        pageNumber: 94
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
        reportYear: 2023,
        reportId: '2023',
        text: 'Pilot Flying J served 1.3 billion guests...',
        context: 'Pilot Flying J welcomed 1.3 billion guests across its 750+ locations in 2023. The company invested heavily in electric vehicle charging infrastructure at its travel centers.',
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
    mentions: []
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
    mentions: []
  },
  {
    id: 'star-furniture',
    name: 'Star Furniture',
    industry: 'Retail - Furniture',
    acquisitionYear: 1997,
    description: 'Texas-based furniture retailer known for quality and service.',
    mentions: []
  },
  {
    id: 'jordans-furniture',
    name: 'Jordan\'s Furniture',
    industry: 'Retail - Furniture',
    acquisitionYear: 1999,
    description: 'New England furniture retailer known for unique shopping experiences.',
    mentions: []
  },
  {
    id: 'borsheims',
    name: 'Borsheims',
    industry: 'Retail - Jewelry',
    acquisitionYear: 1989,
    description: 'Fine jewelry and gift retailer based in Omaha, Nebraska.',
    mentions: []
  },
  {
    id: 'helzberg',
    name: 'Helzberg Diamonds',
    industry: 'Retail - Jewelry',
    acquisitionYear: 1995,
    description: 'National jewelry retailer with over 200 stores.',
    mentions: []
  },
  {
    id: 'ben-bridge',
    name: 'Ben Bridge Jeweler',
    industry: 'Retail - Jewelry',
    acquisitionYear: 2000,
    description: 'Fine jewelry retailer with locations across the Western United States.',
    mentions: []
  },
  {
    id: 'oriental-trading',
    name: 'Oriental Trading Company',
    industry: 'Direct Marketing',
    acquisitionYear: 2012,
    description: 'Direct retailer and wholesaler of party supplies, arts and crafts, toys, and novelties.',
    mentions: [
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Oriental Trading expanded its digital presence...',
        context: 'Oriental Trading Company grew e-commerce sales by 30% through improved mobile experience and expanded product categories. The company now offers over 60,000 unique items.',
        pageNumber: 109
      }
    ]
  },
  {
    id: 'pampered-chef',
    name: 'The Pampered Chef',
    industry: 'Direct Sales',
    acquisitionYear: 2002,
    description: 'Direct seller of kitchen tools, food products, and cookbooks.',
    mentions: []
  },
  {
    id: 'detlev-louis',
    name: 'Detlev Louis Motorrad',
    industry: 'Retail - Motorcycle',
    acquisitionYear: 2015,
    description: 'Europe\'s largest retailer of motorcycle apparel and accessories.',
    mentions: []
  },

  // Media
  {
    id: 'buffalo-news',
    name: 'Buffalo News',
    industry: 'Media',
    acquisitionYear: 1977,
    description: 'Daily newspaper serving Buffalo, New York and surrounding areas.',
    mentions: []
  },
  {
    id: 'bh-media',
    name: 'BH Media Group',
    industry: 'Media',
    acquisitionYear: 2012,
    description: 'Newspaper publishing group (operations wound down in 2020).',
    mentions: []
  },

  // Other
  {
    id: 'business-wire',
    name: 'Business Wire',
    industry: 'News Distribution',
    acquisitionYear: 2006,
    description: 'Leading global distributor of corporate news and multimedia content.',
    mentions: []
  },
  {
    id: 'charter-brokerage',
    name: 'Charter Brokerage',
    industry: 'Logistics',
    acquisitionYear: 2014,
    description: 'Third-party logistics provider specializing in truckload freight.',
    mentions: []
  },
  {
    id: 'xtra',
    name: 'XTRA Lease',
    industry: 'Equipment Leasing',
    acquisitionYear: 2001,
    description: 'Provider of transportation equipment leasing and related services.',
    mentions: []
  },
  {
    id: 'cort',
    name: 'CORT Business Services',
    industry: 'Furniture Rental',
    acquisitionYear: 2000,
    description: 'Provider of rental furniture and related services to businesses and individuals.',
    mentions: []
  },
  {
    id: 'tt',
    name: 'TTI',
    industry: 'Electronics Distribution',
    acquisitionYear: 2007,
    description: 'Specialty distributor of electronic components.',
    mentions: []
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