import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the reports controller file
const controllerPath = path.join(__dirname, '..', 'server', 'controllers', 'reportsController.js');
let content = fs.readFileSync(controllerPath, 'utf8');

// Define the URL mapping
const urlMappings = [
  { year: 2024, old: 'https://www.berkshirehathaway.com/letters/2023ltr.pdf', new: '/pdfs/annual-reports/berkshire-2024.pdf' },
  { year: 2023, old: 'https://www.berkshirehathaway.com/letters/2023ltr.pdf', new: '/pdfs/annual-reports/berkshire-2023.pdf' },
  { year: 2022, old: 'https://www.berkshirehathaway.com/letters/2022ltr.pdf', new: '/pdfs/annual-reports/berkshire-2022.pdf' },
  { year: 2021, old: 'https://www.berkshirehathaway.com/letters/2021ltr.pdf', new: '/pdfs/annual-reports/berkshire-2021.pdf' },
  { year: 2020, old: 'https://www.berkshirehathaway.com/letters/2020ltr.pdf', new: '/pdfs/annual-reports/berkshire-2020.pdf' },
  { year: 2019, old: 'https://www.berkshirehathaway.com/letters/2019ltr.pdf', new: '/pdfs/annual-reports/berkshire-2019.pdf' },
  { year: 2018, old: 'https://www.berkshirehathaway.com/letters/2018ltr.pdf', new: '/pdfs/annual-reports/berkshire-2018.pdf' },
  { year: 2017, old: 'https://www.berkshirehathaway.com/letters/2017ltr.pdf', new: '/pdfs/annual-reports/berkshire-2017.pdf' },
  { year: 2016, old: 'https://www.berkshirehathaway.com/letters/2016ltr.pdf', new: '/pdfs/annual-reports/berkshire-2016.pdf' },
  { year: 2015, old: 'https://www.berkshirehathaway.com/letters/2015ltr.pdf', new: '/pdfs/annual-reports/berkshire-2015.pdf' },
  { year: 2014, old: 'https://www.berkshirehathaway.com/letters/2014ltr.pdf', new: '/pdfs/annual-reports/berkshire-2014.pdf' },
  { year: 2013, old: 'https://www.berkshirehathaway.com/letters/2013ltr.pdf', new: '/pdfs/annual-reports/berkshire-2013.pdf' },
  { year: 2012, old: 'https://www.berkshirehathaway.com/letters/2012ltr.pdf', new: '/pdfs/annual-reports/berkshire-2012.pdf' },
  { year: 2011, old: 'https://www.berkshirehathaway.com/letters/2011ltr.pdf', new: '/pdfs/annual-reports/berkshire-2011.pdf' },
  { year: 2010, old: 'https://www.berkshirehathaway.com/letters/2010ltr.pdf', new: '/pdfs/annual-reports/berkshire-2010.pdf' },
  { year: 2009, old: 'https://www.berkshirehathaway.com/letters/2009ltr.pdf', new: '/pdfs/annual-reports/berkshire-2009.pdf' },
  { year: 2008, old: 'https://www.berkshirehathaway.com/letters/2008ltr.pdf', new: '/pdfs/annual-reports/berkshire-2008.pdf' },
  { year: 2007, old: 'https://www.berkshirehathaway.com/letters/2007ltr.pdf', new: '/pdfs/annual-reports/berkshire-2007.pdf' },
  { year: 2006, old: 'https://www.berkshirehathaway.com/letters/2006ltr.pdf', new: '/pdfs/annual-reports/berkshire-2006.pdf' },
  { year: 2005, old: 'https://www.berkshirehathaway.com/letters/2005ltr.pdf', new: '/pdfs/annual-reports/berkshire-2005.pdf' },
  { year: 2004, old: 'https://www.berkshirehathaway.com/letters/2004ltr.pdf', new: '/pdfs/annual-reports/berkshire-2004.pdf' },
  { year: 2003, old: 'https://www.berkshirehathaway.com/letters/2003ltr.pdf', new: '/pdfs/annual-reports/berkshire-2003.pdf' },
  { year: 2002, old: 'https://www.berkshirehathaway.com/letters/2002pdf.pdf', new: '/pdfs/annual-reports/berkshire-2002.pdf' },
  { year: 2001, old: 'https://www.berkshirehathaway.com/letters/2001pdf.pdf', new: '/pdfs/annual-reports/berkshire-2001.pdf' },
  { year: 2000, old: 'https://www.berkshirehathaway.com/letters/2000pdf.pdf', new: '/pdfs/annual-reports/berkshire-2000.pdf' },
  { year: 1999, old: 'https://www.berkshirehathaway.com/letters/1999pdf.pdf', new: '/pdfs/annual-reports/berkshire-1999.pdf' },
  { year: 1998, old: 'https://www.berkshirehathaway.com/letters/1998pdf.pdf', new: '/pdfs/annual-reports/berkshire-1998.pdf' },
  { year: 1997, old: 'https://www.berkshirehathaway.com/letters/1997.pdf', new: '/pdfs/annual-reports/berkshire-1997.pdf' },
  { year: 1996, old: 'https://www.berkshirehathaway.com/letters/1996.pdf', new: '/pdfs/annual-reports/berkshire-1996.pdf' },
  { year: 1995, old: 'https://www.berkshirehathaway.com/letters/1995.pdf', new: '/pdfs/annual-reports/berkshire-1995.pdf' },
  { year: 1994, old: 'https://www.berkshirehathaway.com/letters/1994.pdf', new: '/pdfs/annual-reports/berkshire-1994.pdf' },
  { year: 1993, old: 'https://www.berkshirehathaway.com/letters/1993.pdf', new: '/pdfs/annual-reports/berkshire-1993.pdf' },
  { year: 1992, old: 'https://www.berkshirehathaway.com/letters/1992.pdf', new: '/pdfs/annual-reports/berkshire-1992.pdf' },
  { year: 1991, old: 'https://www.berkshirehathaway.com/letters/1991.pdf', new: '/pdfs/annual-reports/berkshire-1991.pdf' },
  { year: 1990, old: 'https://www.berkshirehathaway.com/letters/1990.pdf', new: '/pdfs/annual-reports/berkshire-1990.pdf' },
  { year: 1989, old: 'https://www.berkshirehathaway.com/letters/1989.pdf', new: '/pdfs/annual-reports/berkshire-1989.pdf' },
  { year: 1988, old: 'https://www.berkshirehathaway.com/letters/1988.pdf', new: '/pdfs/annual-reports/berkshire-1988.pdf' },
  { year: 1987, old: 'https://www.berkshirehathaway.com/letters/1987.pdf', new: '/pdfs/annual-reports/berkshire-1987.pdf' },
  { year: 1986, old: 'https://www.berkshirehathaway.com/letters/1986.pdf', new: '/pdfs/annual-reports/berkshire-1986.pdf' },
  { year: 1985, old: 'https://www.berkshirehathaway.com/letters/1985.pdf', new: '/pdfs/annual-reports/berkshire-1985.pdf' },
  { year: 1984, old: 'https://www.berkshirehathaway.com/letters/1984.pdf', new: '/pdfs/annual-reports/berkshire-1984.pdf' },
  { year: 1983, old: 'https://www.berkshirehathaway.com/letters/1983.pdf', new: '/pdfs/annual-reports/berkshire-1983.pdf' },
  { year: 1982, old: 'https://www.berkshirehathaway.com/letters/1982.pdf', new: '/pdfs/annual-reports/berkshire-1982.pdf' },
  { year: 1981, old: 'https://www.berkshirehathaway.com/letters/1981.pdf', new: '/pdfs/annual-reports/berkshire-1981.pdf' },
  { year: 1980, old: 'https://www.berkshirehathaway.com/letters/1980.pdf', new: '/pdfs/annual-reports/berkshire-1980.pdf' },
  { year: 1979, old: 'https://www.berkshirehathaway.com/letters/1979.pdf', new: '/pdfs/annual-reports/berkshire-1979.pdf' },
  { year: 1978, old: 'https://www.berkshirehathaway.com/letters/1978.pdf', new: '/pdfs/annual-reports/berkshire-1978.pdf' },
  { year: 1977, old: 'https://www.berkshirehathaway.com/letters/1977.pdf', new: '/pdfs/annual-reports/berkshire-1977.pdf' }
];

// Also need to handle 2024ar
content = content.replace('https://www.berkshirehathaway.com/2024ar/2024ar.pdf', '/pdfs/annual-reports/berkshire-2024.pdf');

// Replace all URLs
urlMappings.forEach(mapping => {
  const regex = new RegExp(mapping.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(regex, mapping.new);
});

// Write the updated content back
fs.writeFileSync(controllerPath, content, 'utf8');

console.log('✓ Updated all report URLs to use local PDFs');