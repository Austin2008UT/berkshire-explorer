// Script to update subsidiariesController.js with comprehensive mentions
// This script should be run to merge the comprehensive mentions into the controller

const fs = require('fs');
const path = require('path');

// Import the comprehensive mentions
const comprehensiveMentions = require('./comprehensive-subsidiary-mentions.js').default;

// Read the current controller file
const controllerPath = path.join(__dirname, 'server/controllers/subsidiariesController.js');
let controllerContent = fs.readFileSync(controllerPath, 'utf8');

// Function to update mentions for a subsidiary
function updateSubsidiaryMentions(content, subsidiaryId, newMentions) {
  // Create a regex pattern to find the subsidiary by ID
  const pattern = new RegExp(
    `(id: '${subsidiaryId}',[\\s\\S]*?mentions: \\[)[\\s\\S]*?(\\][\\s]*\\})`,
    'g'
  );
  
  // Format the mentions array
  const mentionsString = newMentions.map(mention => `
      {
        reportYear: ${mention.reportYear},
        reportId: '${mention.reportId}',
        text: '${mention.text.replace(/'/g, "\\'")}',
        context: '${mention.context.replace(/'/g, "\\'")}',
        pageNumber: ${mention.pageNumber}
      }`).join(',');
  
  // Replace the mentions array
  return content.replace(pattern, `$1${mentionsString}
    $2`);
}

// Update each subsidiary with comprehensive mentions
Object.keys(comprehensiveMentions).forEach(subsidiaryId => {
  const mentions = comprehensiveMentions[subsidiaryId];
  if (mentions && mentions.length > 0) {
    console.log(`Updating ${subsidiaryId} with ${mentions.length} mentions...`);
    controllerContent = updateSubsidiaryMentions(controllerContent, subsidiaryId, mentions);
  }
});

// Write the updated content back to the file
fs.writeFileSync(controllerPath, controllerContent);

console.log('✅ Successfully updated subsidiariesController.js with comprehensive mentions!');
console.log('📊 Total subsidiaries updated:', Object.keys(comprehensiveMentions).length);
console.log('📝 Total mentions added:', Object.values(comprehensiveMentions).reduce((sum, mentions) => sum + mentions.length, 0));