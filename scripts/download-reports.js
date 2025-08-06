const https = require('https');
const fs = require('fs');
const path = require('path');

const reports = [
  { year: 2024, url: 'https://www.berkshirehathaway.com/2024ar/2024ar.pdf' },
  { year: 2023, url: 'https://www.berkshirehathaway.com/letters/2023ltr.pdf' },
  { year: 2022, url: 'https://www.berkshirehathaway.com/letters/2022ltr.pdf' },
  { year: 2021, url: 'https://www.berkshirehathaway.com/letters/2021ltr.pdf' },
  { year: 2020, url: 'https://www.berkshirehathaway.com/letters/2020ltr.pdf' },
  { year: 2019, url: 'https://www.berkshirehathaway.com/letters/2019ltr.pdf' },
  { year: 2018, url: 'https://www.berkshirehathaway.com/letters/2018ltr.pdf' },
  { year: 2017, url: 'https://www.berkshirehathaway.com/letters/2017ltr.pdf' },
  { year: 2016, url: 'https://www.berkshirehathaway.com/letters/2016ltr.pdf' },
  { year: 2015, url: 'https://www.berkshirehathaway.com/letters/2015ltr.pdf' },
  { year: 2014, url: 'https://www.berkshirehathaway.com/letters/2014ltr.pdf' },
  { year: 2013, url: 'https://www.berkshirehathaway.com/letters/2013ltr.pdf' },
  { year: 2012, url: 'https://www.berkshirehathaway.com/letters/2012ltr.pdf' },
  { year: 2011, url: 'https://www.berkshirehathaway.com/letters/2011ltr.pdf' },
  { year: 2010, url: 'https://www.berkshirehathaway.com/letters/2010ltr.pdf' },
  { year: 2009, url: 'https://www.berkshirehathaway.com/letters/2009ltr.pdf' },
  { year: 2008, url: 'https://www.berkshirehathaway.com/letters/2008ltr.pdf' },
  { year: 2007, url: 'https://www.berkshirehathaway.com/letters/2007ltr.pdf' },
  { year: 2006, url: 'https://www.berkshirehathaway.com/letters/2006ltr.pdf' },
  { year: 2005, url: 'https://www.berkshirehathaway.com/letters/2005ltr.pdf' },
  { year: 2004, url: 'https://www.berkshirehathaway.com/letters/2004ltr.pdf' },
  { year: 2003, url: 'https://www.berkshirehathaway.com/letters/2003ltr.pdf' },
  { year: 2002, url: 'https://www.berkshirehathaway.com/letters/2002pdf.pdf' },
  { year: 2001, url: 'https://www.berkshirehathaway.com/letters/2001pdf.pdf' },
  { year: 2000, url: 'https://www.berkshirehathaway.com/letters/2000pdf.pdf' },
  { year: 1999, url: 'https://www.berkshirehathaway.com/letters/1999pdf.pdf' },
  { year: 1998, url: 'https://www.berkshirehathaway.com/letters/1998pdf.pdf' },
  { year: 1997, url: 'https://www.berkshirehathaway.com/letters/1997.pdf' },
  { year: 1996, url: 'https://www.berkshirehathaway.com/letters/1996.pdf' },
  { year: 1995, url: 'https://www.berkshirehathaway.com/letters/1995.pdf' },
  { year: 1994, url: 'https://www.berkshirehathaway.com/letters/1994.pdf' },
  { year: 1993, url: 'https://www.berkshirehathaway.com/letters/1993.pdf' },
  { year: 1992, url: 'https://www.berkshirehathaway.com/letters/1992.pdf' },
  { year: 1991, url: 'https://www.berkshirehathaway.com/letters/1991.pdf' },
  { year: 1990, url: 'https://www.berkshirehathaway.com/letters/1990.pdf' },
  { year: 1989, url: 'https://www.berkshirehathaway.com/letters/1989.pdf' },
  { year: 1988, url: 'https://www.berkshirehathaway.com/letters/1988.pdf' },
  { year: 1987, url: 'https://www.berkshirehathaway.com/letters/1987.pdf' },
  { year: 1986, url: 'https://www.berkshirehathaway.com/letters/1986.pdf' },
  { year: 1985, url: 'https://www.berkshirehathaway.com/letters/1985.pdf' },
  { year: 1984, url: 'https://www.berkshirehathaway.com/letters/1984.pdf' },
  { year: 1983, url: 'https://www.berkshirehathaway.com/letters/1983.pdf' },
  { year: 1982, url: 'https://www.berkshirehathaway.com/letters/1982.pdf' },
  { year: 1981, url: 'https://www.berkshirehathaway.com/letters/1981.pdf' },
  { year: 1980, url: 'https://www.berkshirehathaway.com/letters/1980.pdf' },
  { year: 1979, url: 'https://www.berkshirehathaway.com/letters/1979.pdf' },
  { year: 1978, url: 'https://www.berkshirehathaway.com/letters/1978.pdf' },
  { year: 1977, url: 'https://www.berkshirehathaway.com/letters/1977.pdf' }
];

const downloadFile = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(destPath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAllReports = async () => {
  const outputDir = path.join(__dirname, '..', 'public', 'pdfs', 'annual-reports');
  
  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`Downloading ${reports.length} annual reports...`);
  
  for (const report of reports) {
    const filename = `berkshire-${report.year}.pdf`;
    const destPath = path.join(outputDir, filename);
    
    // Skip if already downloaded
    if (fs.existsSync(destPath)) {
      console.log(`✓ ${report.year} - Already downloaded`);
      continue;
    }
    
    try {
      console.log(`⌛ ${report.year} - Downloading...`);
      await downloadFile(report.url, destPath);
      console.log(`✓ ${report.year} - Downloaded successfully`);
      
      // Add a small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ ${report.year} - Failed: ${error.message}`);
    }
  }
  
  console.log('\nDownload complete!');
};

// Run the download
downloadAllReports().catch(console.error);