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
    mentions: []
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
    mentions: []
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
    mentions: []
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