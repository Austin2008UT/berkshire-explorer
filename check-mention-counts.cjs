const fs = require('fs');

// Read the controller file
const content = fs.readFileSync('./server/controllers/subsidiariesController.js', 'utf8');

// Parse subsidiaries
const subsidiaryMatches = content.match(/{\s*id:\s*'([^']+)'[\s\S]*?mentions:\s*\[([\s\S]*?)\]/g);

const mentionCounts = {};

if (subsidiaryMatches) {
  subsidiaryMatches.forEach(match => {
    const idMatch = match.match(/id:\s*'([^']+)'/);
    const id = idMatch ? idMatch[1] : 'unknown';
    
    // Count reportYear occurrences in the mentions array
    const mentionSection = match.match(/mentions:\s*\[([\s\S]*?)\]/);
    if (mentionSection) {
      const reportYearCount = (mentionSection[1].match(/reportYear:/g) || []).length;
      mentionCounts[id] = reportYearCount;
    }
  });
}

// Find subsidiaries with fewer than 5 mentions
console.log('Subsidiaries with fewer than 5 mentions:');
console.log('========================================');

const needingMoreMentions = [];
Object.entries(mentionCounts).forEach(([id, count]) => {
  if (count < 5) {
    console.log(`${id}: ${count} mentions`);
    needingMoreMentions.push(id);
  }
});

console.log('\nTotal subsidiaries needing more mentions:', needingMoreMentions.length);
console.log('\nList:', needingMoreMentions.join(', '));