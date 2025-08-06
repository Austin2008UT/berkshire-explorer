import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the reports controller file
const controllerPath = path.join(__dirname, '..', 'server', 'controllers', 'reportsController.js');
let content = fs.readFileSync(controllerPath, 'utf8');

// Replace all berkshirehathaway.com URLs with local paths
// First, let's handle all the different URL patterns
const patterns = [
  // PDF letters
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/letters\/(\d{4})ltr\.pdf/g, replace: '/pdfs/annual-reports/berkshire-$1.pdf' },
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/letters\/(\d{4})pdf\.pdf/g, replace: '/pdfs/annual-reports/berkshire-$1.pdf' },
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/letters\/(\d{4})\.pdf/g, replace: '/pdfs/annual-reports/berkshire-$1.pdf' },
  
  // HTML letters (convert to PDF paths)
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/letters\/(\d{4})\.html/g, replace: '/pdfs/annual-reports/berkshire-$1.pdf' },
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/letters\/(\d{4})ltr\.html/g, replace: '/pdfs/annual-reports/berkshire-$1.pdf' },
  
  // Special case for 2024ar
  { pattern: /https:\/\/www\.berkshirehathaway\.com\/2024ar\/2024ar\.pdf/g, replace: '/pdfs/annual-reports/berkshire-2024.pdf' }
];

// Apply all patterns
patterns.forEach(({ pattern, replace }) => {
  content = content.replace(pattern, replace);
});

// Handle any remaining berkshirehathaway.com URLs we might have missed
if (content.includes('berkshirehathaway.com')) {
  console.warn('Warning: Some berkshirehathaway.com URLs may still remain in the file');
  
  // Let's find and log them
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('berkshirehathaway.com')) {
      console.log(`Line ${index + 1}: ${line.trim()}`);
    }
  });
}

// Write the updated content back
fs.writeFileSync(controllerPath, content, 'utf8');

console.log('✓ Fixed all report URLs to use local PDFs');

// Verify the changes
const updatedContent = fs.readFileSync(controllerPath, 'utf8');
const remainingUrls = (updatedContent.match(/berkshirehathaway\.com/g) || []).length;
console.log(`Remaining berkshirehathaway.com URLs: ${remainingUrls}`);