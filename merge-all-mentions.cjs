const fs = require('fs');
const path = require('path');

// Import mentions from all year ranges
const mentions1977_1997 = require('./berkshire-subsidiaries-1977-1997.cjs');
const mentions1998_2009 = require('./berkshire-subsidiaries-1998-2009.cjs');
const mentions2010_2023 = require('./berkshire-subsidiaries-2010-2023.cjs');

// Read the current controller
const controllerPath = path.join(__dirname, 'server/controllers/subsidiariesController.js');
let controllerContent = fs.readFileSync(controllerPath, 'utf8');

// Map old names to current subsidiary IDs
const subsidiaryIdMap = {
  'GEICO': 'geico',
  'SeesCandy': 'sees-candies',
  'BlueChipStamps': 'blue-chip-stamps',
  'NationalIndemnity': 'national-indemnity',
  'WescoFinancial': 'wesco',
  'BuffaloNews': 'buffalo-news',
  'NebraskaFurnitureMart': 'nebraska-furniture',
  'Borsheims': 'borsheims',
  'FlightSafety': 'flight-safety',
  'GeneralRe': 'general-re',
  'ScottFetzer': 'scott-fetzer',
  'Kirby': 'kirby',
  'WorldBook': 'world-book',
  'Fechheimer': 'fechheimer',
  'HHBrown': 'hh-brown',
  'DexterShoe': 'dexter-shoe',
  'netjets': 'netjets',
  'clayton-homes': 'clayton-homes',
  'marmon': 'marmon',
  'bnsf': 'bnsf',
  'midamerican-energy': 'berkshire-energy',
  'mclane': 'mclane',
  'benjamin-moore': 'benjamin-moore',
  'johns-manville': 'johns-manville',
  'fruit-of-loom': 'fruit-of-loom',
  'shaw-industries': 'shaw-industries',
  'dairy-queen': 'dairy-queen',
  'buffalo-news': 'buffalo-news',
  'flight-safety': 'flight-safety',
  'lubrizol': 'lubrizol',
  'precision-castparts': 'precision-castparts',
  'duracell': 'duracell',
  'brooks-sports': 'brooks-sports',
  'oriental-trading': 'oriental-trading',
  'business-wire': 'business-wire',
  'berkshire-specialty': 'berkshire-specialty',
  'pilot-flying-j': 'pilot-flying-j',
  'berkshire-energy': 'berkshire-energy',
  'general-re': 'general-re'
};

// Merge all mentions
const allMentions = {};

// Process 1977-1997 mentions
if (mentions1977_1997.subsidiaryMentions) {
  Object.keys(mentions1977_1997.subsidiaryMentions).forEach(oldId => {
    const newId = subsidiaryIdMap[oldId] || oldId.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase();
    const mentions = mentions1977_1997.subsidiaryMentions[oldId].mentions || [];
    
    if (!allMentions[newId]) {
      allMentions[newId] = [];
    }
    
    mentions.forEach(mention => {
      allMentions[newId].push({
        reportYear: mention.year,
        reportId: String(mention.year),
        text: mention.text || mention.context.substring(0, 100),
        context: mention.context,
        pageNumber: mention.pageNumber || 1
      });
    });
  });
}

// Process 1998-2009 mentions
Object.keys(mentions1998_2009).forEach(subsidiaryId => {
  if (!allMentions[subsidiaryId]) {
    allMentions[subsidiaryId] = [];
  }
  allMentions[subsidiaryId].push(...mentions1998_2009[subsidiaryId]);
});

// Process 2010-2023 mentions
Object.keys(mentions2010_2023).forEach(subsidiaryId => {
  if (!allMentions[subsidiaryId]) {
    allMentions[subsidiaryId] = [];
  }
  allMentions[subsidiaryId].push(...mentions2010_2023[subsidiaryId]);
});

// Sort mentions by year for each subsidiary
Object.keys(allMentions).forEach(subsidiaryId => {
  allMentions[subsidiaryId].sort((a, b) => a.reportYear - b.reportYear);
});

// Function to escape quotes
function escapeQuotes(text) {
  return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Function to format mentions
function formatMentions(mentions) {
  return mentions.map(mention => `
      {
        reportYear: ${mention.reportYear},
        reportId: '${mention.reportId}',
        text: '${escapeQuotes(mention.text)}',
        context: '${escapeQuotes(mention.context)}',
        pageNumber: ${mention.pageNumber}
      }`).join(',');
}

// Update the controller for each subsidiary
Object.keys(allMentions).forEach(subsidiaryId => {
  const mentions = allMentions[subsidiaryId];
  if (mentions.length > 0) {
    // Find the subsidiary in the controller
    const idRegex = new RegExp(`id: '${subsidiaryId}'`);
    const idMatch = idRegex.exec(controllerContent);
    
    if (idMatch) {
      // Find the mentions array for this subsidiary
      let searchFrom = idMatch.index;
      const mentionsRegex = /mentions: \[([^\]]*)\]/;
      const mentionsMatch = controllerContent.substring(searchFrom).match(mentionsRegex);
      
      if (mentionsMatch) {
        const mentionsStart = searchFrom + mentionsMatch.index;
        const mentionsEnd = mentionsStart + mentionsMatch[0].length;
        
        // Format new mentions
        const formattedMentions = formatMentions(mentions);
        const newMentionsArray = `mentions: [${formattedMentions}
    ]`;
        
        // Replace in content
        controllerContent = controllerContent.substring(0, mentionsStart) + 
                           newMentionsArray + 
                           controllerContent.substring(mentionsEnd);
        
        console.log(`✅ Updated ${subsidiaryId} with ${mentions.length} mentions`);
      }
    } else {
      console.log(`⚠️  Subsidiary ${subsidiaryId} not found in controller`);
    }
  }
});

// Write the updated controller
fs.writeFileSync(controllerPath, controllerContent);

console.log(`
📊 Update Complete:
- Merged mentions from 1977-2023
- Updated subsidiariesController.js
- All mentions sorted chronologically
`);