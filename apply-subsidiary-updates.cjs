const fs = require('fs');
const path = require('path');

// Import all the mentions
const allMentions = require('./update-all-subsidiary-mentions.cjs');
const comprehensiveMentions = require('./comprehensive-subsidiary-mentions.cjs').default;

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

// Apply all updates
let updatedContent = controllerContent;
let updateCount = 0;

// First apply comprehensive mentions (from the first file)
Object.keys(comprehensiveMentions).forEach(subsidiaryId => {
  const mentions = comprehensiveMentions[subsidiaryId];
  if (mentions && mentions.length > 0) {
    const originalLength = updatedContent.length;
    updatedContent = updateSubsidiary(updatedContent, subsidiaryId, mentions);
    if (updatedContent.length !== originalLength) {
      console.log(`✅ Updated ${subsidiaryId} with ${mentions.length} mentions from comprehensive scan`);
      updateCount++;
    }
  }
});

// Then apply all subsidiary mentions (from the second file)
Object.keys(allMentions).forEach(subsidiaryId => {
  const mentions = allMentions[subsidiaryId];
  if (mentions && mentions.length > 0) {
    const originalLength = updatedContent.length;
    updatedContent = updateSubsidiary(updatedContent, subsidiaryId, mentions);
    if (updatedContent.length !== originalLength) {
      console.log(`✅ Updated ${subsidiaryId} with ${mentions.length} mentions`);
      updateCount++;
    }
  }
});

// Write the updated content
fs.writeFileSync(controllerPath, updatedContent);

console.log(`
📊 Update Summary:
- Total subsidiaries updated: ${updateCount}
- Controller file updated successfully
`);