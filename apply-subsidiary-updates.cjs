const fs = require('fs');
const path = require('path');

// Import all the mentions
const allMentions = require('./update-all-subsidiary-mentions.cjs');
const comprehensiveMentions = require('./comprehensive-subsidiary-mentions.cjs').default;
const expandedMentions = require('./expand-major-subsidiary-mentions.cjs');
const completeMentions = require('./complete-subsidiary-mentions.cjs');

// Read the controller file
const controllerPath = path.join(__dirname, 'server/controllers/subsidiariesController.js');
let controllerContent = fs.readFileSync(controllerPath, 'utf8');

// Function to safely escape quotes in text
function escapeQuotes(text) {
  return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Function to format mentions array
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

// Update function that handles the specific format of the controller
function updateSubsidiary(content, subsidiaryId, mentions) {
  // Find the subsidiary block
  const idPattern = new RegExp(`id: '${subsidiaryId}'`, 'g');
  const match = idPattern.exec(content);
  
  if (!match) {
    console.log(`⚠️  Subsidiary ${subsidiaryId} not found`);
    return content;
  }
  
  // Find the mentions array for this subsidiary
  let startIndex = match.index;
  let searchFrom = startIndex;
  
  // Find the mentions: [] line after this ID
  const mentionsPattern = /mentions: \[\]/;
  const mentionsMatch = mentionsPattern.exec(content.substring(searchFrom));
  
  if (!mentionsMatch) {
    console.log(`⚠️  No empty mentions array found for ${subsidiaryId}`);
    return content;
  }
  
  const mentionsIndex = searchFrom + mentionsMatch.index;
  
  // Replace the empty array with formatted mentions
  const beforeMentions = content.substring(0, mentionsIndex);
  const afterMentions = content.substring(mentionsIndex + 'mentions: []'.length);
  
  const formattedMentions = formatMentions(mentions);
  const newMentionsString = `mentions: [${formattedMentions}
    ]`;
  
  return beforeMentions + newMentionsString + afterMentions;
}

// Function to add mentions to existing ones
function addMentions(content, subsidiaryId, newMentions) {
  // Find the subsidiary
  const idRegex = new RegExp(`id: '${subsidiaryId}'`);
  const idMatch = idRegex.exec(content);
  
  if (!idMatch) {
    console.log(`⚠️  Subsidiary ${subsidiaryId} not found`);
    return content;
  }
  
  // Find the mentions array for this subsidiary
  let searchFrom = idMatch.index;
  const mentionsRegex = /mentions: \[([\s\S]*?)\]/;
  const mentionsMatch = content.substring(searchFrom).match(mentionsRegex);
  
  if (!mentionsMatch) {
    console.log(`⚠️  No mentions array found for ${subsidiaryId}`);
    return content;
  }
  
  const mentionsStart = searchFrom + mentionsMatch.index;
  const mentionsEnd = mentionsStart + mentionsMatch[0].length;
  
  // Extract existing mentions
  const existingMentionsStr = mentionsMatch[1].trim();
  const hasExistingMentions = existingMentionsStr.length > 0;
  
  // Format new mentions
  const formattedNewMentions = formatMentions(newMentions);
  
  // Combine mentions
  let combinedMentions;
  if (hasExistingMentions) {
    combinedMentions = existingMentionsStr + ',' + formattedNewMentions;
  } else {
    combinedMentions = formattedNewMentions;
  }
  
  // Replace mentions array
  const newMentionsArray = `mentions: [${combinedMentions}
    ]`;
  
  return content.substring(0, mentionsStart) + newMentionsArray + content.substring(mentionsEnd);
}

// Apply all updates
let updatedContent = controllerContent;
let updateCount = 0;

// Apply all mention sources
const mentionSources = [
  { name: 'expanded', data: expandedMentions },
  { name: 'complete', data: completeMentions }
];

mentionSources.forEach(source => {
  Object.keys(source.data).forEach(subsidiaryId => {
    const mentions = source.data[subsidiaryId];
    if (mentions && mentions.length > 0) {
      const originalLength = updatedContent.length;
      updatedContent = addMentions(updatedContent, subsidiaryId, mentions);
      if (updatedContent.length !== originalLength) {
        console.log(`✅ Added ${mentions.length} ${source.name} mentions to ${subsidiaryId}`);
        updateCount++;
      }
    }
  });
});

// Write the updated content
fs.writeFileSync(controllerPath, updatedContent);

console.log(`
📊 Update Summary:
- Total subsidiaries updated: ${updateCount}
- Controller file updated successfully
`);