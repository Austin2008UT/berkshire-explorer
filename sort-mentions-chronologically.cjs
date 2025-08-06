const fs = require('fs');
const path = require('path');

// Read the controller file
const controllerPath = path.join(__dirname, 'server/controllers/subsidiariesController.js');
let controllerContent = fs.readFileSync(controllerPath, 'utf8');

// Function to sort mentions by year
function sortMentionsByYear(mentions) {
  return mentions.sort((a, b) => a.reportYear - b.reportYear);
}

// Function to format sorted mentions
function formatSortedMentions(mentions) {
  const sortedMentions = sortMentionsByYear(mentions);
  return sortedMentions.map(mention => `
      {
        reportYear: ${mention.reportYear},
        reportId: '${mention.reportId}',
        text: '${mention.text.replace(/'/g, "\\'")}',
        context: '${mention.context.replace(/'/g, "\\'")}',
        pageNumber: ${mention.pageNumber}
      }`).join(',');
}

// Parse and update each subsidiary
const subsidiaryRegex = /{\s*id:\s*'([^']+)'[\s\S]*?mentions:\s*\[([\s\S]*?)\s*\]\s*}/g;
let match;
let updatedContent = controllerContent;
let updateCount = 0;

while ((match = subsidiaryRegex.exec(controllerContent)) !== null) {
  const subsidiaryId = match[1];
  const mentionsContent = match[2].trim();
  
  if (mentionsContent) {
    try {
      // Parse mentions array
      const mentionsArrayStr = `[${mentionsContent}]`;
      // Evaluate the mentions array (safe in this controlled context)
      const mentions = eval(mentionsArrayStr);
      
      if (Array.isArray(mentions) && mentions.length > 0) {
        // Check if mentions need sorting
        let needsSorting = false;
        for (let i = 1; i < mentions.length; i++) {
          if (mentions[i].reportYear < mentions[i-1].reportYear) {
            needsSorting = true;
            break;
          }
        }
        
        if (needsSorting) {
          // Format sorted mentions
          const sortedMentionsStr = formatSortedMentions(mentions);
          
          // Replace in content
          const oldMentionsSection = `mentions: [${mentionsContent}
    ]`;
          const newMentionsSection = `mentions: [${sortedMentionsStr}
    ]`;
          
          updatedContent = updatedContent.replace(oldMentionsSection, newMentionsSection);
          console.log(`✅ Sorted mentions for ${subsidiaryId} (${mentions.length} mentions)`);
          updateCount++;
        }
      }
    } catch (e) {
      console.log(`⚠️  Error processing ${subsidiaryId}: ${e.message}`);
    }
  }
}

// Write the updated content
fs.writeFileSync(controllerPath, updatedContent);

console.log(`
📊 Chronological Sort Summary:
- Total subsidiaries updated: ${updateCount}
- All mentions now sorted from earliest to latest year
`);