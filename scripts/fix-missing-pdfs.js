import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the reports controller file
const controllerPath = path.join(__dirname, '..', 'server', 'controllers', 'reportsController.js');
let content = fs.readFileSync(controllerPath, 'utf8');

// For years 1977-1999, point back to berkshirehathaway.com HTML pages
const htmlYears = [
  1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986,
  1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1999
];

htmlYears.forEach(year => {
  // Find the line with this year's PDF URL and replace it with HTML URL
  const pdfPattern = new RegExp(`(year: ${year},\\s*[\\s\\S]*?fileUrl: )'\/pdfs\/annual-reports\/berkshire-${year}\.pdf'`, 'g');
  const htmlUrl = `'https://www.berkshirehathaway.com/letters/${year}.html'`;
  content = content.replace(pdfPattern, `$1${htmlUrl}`);
});

// Special case for 1999 which uses 1999pdf.html
content = content.replace(
  "fileUrl: 'https://www.berkshirehathaway.com/letters/1999.html'",
  "fileUrl: 'https://www.berkshirehathaway.com/letters/1999pdf.html'"
);

// Write the updated content back
fs.writeFileSync(controllerPath, content, 'utf8');

console.log('✓ Updated controller to use HTML URLs for years 1977-1999');

// Verify the changes
const updatedContent = fs.readFileSync(controllerPath, 'utf8');
const localPdfCount = (updatedContent.match(/\/pdfs\/annual-reports\//g) || []).length;
const htmlCount = (updatedContent.match(/berkshirehathaway\.com\/letters.*\.html/g) || []).length;
console.log(`Local PDFs: ${localPdfCount}, HTML pages: ${htmlCount}`);