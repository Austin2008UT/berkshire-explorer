// Mock data for subsidiaries
const mockSubsidiaries = [
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
        text: 'GEICO continues to be a cornerstone of our insurance operations...',
        context: 'GEICO added 1.2 million policies in 2023, maintaining its position as the second-largest auto insurer in the United States. The company\'s combined ratio improved to 96.5%, reflecting better underwriting discipline and reduced claims frequency.',
        pageNumber: 7
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
    id: 'bnsf',
    name: 'BNSF Railway',
    industry: 'Transportation',
    acquisitionYear: 2010,
    description: 'One of North America\'s leading freight railroad networks, operating 32,500 route miles in 28 states.',
    mentions: [
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'BNSF carried record volumes of intermodal freight...',
        context: 'BNSF Railway generated $25.2 billion in revenues in 2023, with strong performance in consumer products and agricultural products offsetting weakness in coal transport. The company invested $3.9 billion in capital improvements.',
        pageNumber: 69
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
  {
    id: 'berkshire-energy',
    name: 'Berkshire Hathaway Energy',
    industry: 'Utilities & Energy',
    acquisitionYear: 2000,
    description: 'A global leader in producing and delivering energy, serving 12 million customers worldwide.',
    mentions: [
      {
        reportYear: 2023,
        reportId: '2023',
        text: 'Berkshire Hathaway Energy continues to lead in renewable energy development...',
        context: 'BHE invested $8.2 billion in renewable energy projects in 2023, adding 2,500 MW of wind and solar capacity. The company now generates over 50% of its electricity from renewable sources.',
        pageNumber: 77
      }
    ]
  },
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
    id: 'johnsmanville',
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