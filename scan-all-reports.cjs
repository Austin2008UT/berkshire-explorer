const fs = require('fs');
const path = require('path');

// List of all subsidiaries to search for
const subsidiaries = [
  'geico', 'sees-candies', 'bnsf', 'berkshire-energy', 'lubrizol', 
  'precision-castparts', 'duracell', 'dairy-queen', 'fruit-of-loom',
  'national-indemnity', 'general-re', 'berkshire-reinsurance', 'guard-insurance',
  'applied-underwriters', 'medical-protective', 'usli', 'us-liability',
  'berkshire-specialty', 'national-indemnity-primary', 'clayton-homes',
  'mitek', 'forest-river', 'shaw-industries', 'benjamin-moore',
  'johns-manville', 'acme-brick', 'brooks-sports', 'hh-brown',
  'justin-brands', 'marmon', 'mclane', 'nebraska-furniture',
  'borsheims', 'ben-bridge', 'helzberg', 'star-furniture',
  'jordans-furniture', 'rc-willey', 'oriental-trading', 'pampered-chef',
  'business-wire', 'tt', 'detlev-louis', 'flight-safety',
  'netjets', 'pilot-flying-j', 'buffalo-news', 'bh-media',
  'wesco', 'blue-chip-stamps', 'midamerican-energy', 'pacificorp',
  'nv-energy', 'northern-powergrid', 'altalink', 'bhe-pipeline',
  'charter-brokerage', 'xtra', 'cort'
];

// Map of subsidiary IDs to search terms
const searchTerms = {
  'geico': ['GEICO', 'Government Employees Insurance'],
  'sees-candies': ["See's Candies", "See's Candy", "Sees"],
  'bnsf': ['BNSF', 'Burlington Northern Santa Fe', 'Burlington Northern'],
  'berkshire-energy': ['Berkshire Hathaway Energy', 'BHE', 'MidAmerican Energy Holdings'],
  'lubrizol': ['Lubrizol'],
  'precision-castparts': ['Precision Castparts', 'PCC'],
  'duracell': ['Duracell'],
  'dairy-queen': ['Dairy Queen', 'DQ'],
  'fruit-of-loom': ['Fruit of the Loom'],
  'national-indemnity': ['National Indemnity', 'NICO'],
  'general-re': ['General Re', 'Gen Re', 'General Reinsurance'],
  'berkshire-reinsurance': ['Berkshire Hathaway Reinsurance'],
  'guard-insurance': ['Guard Insurance'],
  'applied-underwriters': ['Applied Underwriters'],
  'medical-protective': ['Medical Protective'],
  'usli': ['USLI', 'U.S. Liability'],
  'us-liability': ['U.S. Liability Insurance'],
  'berkshire-specialty': ['Berkshire Hathaway Specialty'],
  'national-indemnity-primary': ['National Indemnity Primary'],
  'clayton-homes': ['Clayton Homes'],
  'mitek': ['MiTek'],
  'forest-river': ['Forest River'],
  'shaw-industries': ['Shaw Industries'],
  'benjamin-moore': ['Benjamin Moore'],
  'johns-manville': ['Johns Manville'],
  'acme-brick': ['Acme Brick'],
  'brooks-sports': ['Brooks Sports', 'Brooks Running'],
  'hh-brown': ['H.H. Brown', 'HH Brown'],
  'justin-brands': ['Justin Brands', 'Justin Boots'],
  'marmon': ['Marmon', 'Marmon Group'],
  'mclane': ['McLane Company', 'McLane'],
  'nebraska-furniture': ['Nebraska Furniture Mart', 'NFM'],
  'borsheims': ['Borsheims', "Borsheim's"],
  'ben-bridge': ['Ben Bridge Jeweler', 'Ben Bridge'],
  'helzberg': ['Helzberg Diamonds', 'Helzberg'],
  'star-furniture': ['Star Furniture'],
  'jordans-furniture': ["Jordan's Furniture", "Jordans"],
  'rc-willey': ['RC Willey', 'R.C. Willey'],
  'oriental-trading': ['Oriental Trading'],
  'pampered-chef': ['Pampered Chef', 'The Pampered Chef'],
  'business-wire': ['Business Wire'],
  'tt': ['TTI', 'TTI, Inc.'],
  'detlev-louis': ['Detlev Louis', 'Louis Motorrad'],
  'flight-safety': ['FlightSafety', 'Flight Safety'],
  'netjets': ['NetJets', 'Executive Jet'],
  'pilot-flying-j': ['Pilot Flying J', 'Pilot Travel Centers'],
  'buffalo-news': ['Buffalo News', 'Buffalo Evening News'],
  'bh-media': ['BH Media'],
  'wesco': ['Wesco Financial', 'Wesco'],
  'blue-chip-stamps': ['Blue Chip Stamps', 'Blue Chip'],
  'midamerican-energy': ['MidAmerican Energy', 'MidAmerican'],
  'pacificorp': ['PacifiCorp'],
  'nv-energy': ['NV Energy', 'Nevada Power'],
  'northern-powergrid': ['Northern Powergrid'],
  'altalink': ['AltaLink'],
  'bhe-pipeline': ['BHE Pipeline', 'Northern Natural Gas', 'Kern River'],
  'charter-brokerage': ['Charter Brokerage'],
  'xtra': ['XTRA Lease', 'XTRA'],
  'cort': ['CORT Business Services', 'CORT']
};

// Years to scan
const years = [];
for (let year = 1977; year <= 2023; year++) {
  years.push(year);
}

// Fetch and scan a report
async function scanReport(year) {
  console.log(`Scanning ${year} annual report...`);
  
  const url = year >= 1998 ? 
    `local:///pdfs/annual-reports/berkshire-${year}.pdf` : 
    `https://www.berkshirehathaway.com/letters/${year}.html`;
  
  const mentions = {};
  
  // For now, we'll return mock data for testing
  // In production, this would fetch and parse the actual reports
  
  return mentions;
}

// Main function
async function scanAllReports() {
  const allMentions = {};
  
  for (const year of years) {
    const yearMentions = await scanReport(year);
    
    // Merge mentions
    Object.keys(yearMentions).forEach(subsidiaryId => {
      if (!allMentions[subsidiaryId]) {
        allMentions[subsidiaryId] = [];
      }
      allMentions[subsidiaryId].push(...yearMentions[subsidiaryId]);
    });
  }
  
  // Write results
  const output = `// Comprehensive subsidiary mentions from annual reports 1977-2023
const subsidiaryMentions = ${JSON.stringify(allMentions, null, 2)};

module.exports = subsidiaryMentions;`;

  fs.writeFileSync(path.join(__dirname, 'all-subsidiary-mentions.cjs'), output);
  console.log('Scan complete! Results saved to all-subsidiary-mentions.cjs');
}

// Run the scan
scanAllReports().catch(console.error);