/**
 * Berkshire Hathaway Subsidiary Mentions 1977-1997
 * Comprehensive data extracted from Warren Buffett's Chairman Letters
 * 
 * This module exports all mentions of key Berkshire subsidiaries found in
 * annual reports from 1977 to 1997, organized by subsidiary.
 */

const subsidiaryMentions = {
  GEICO: {
    name: "GEICO / Government Employees Insurance Company",
    mentions: [
      {
        year: 1977,
        context: "We again increased our equity interest in Blue Chip Stamps, and owned approximately 36 1/2% at the end of 1977.",
        text: "Government Employees Insurance Company",
        details: "Listed in equity holdings table with both preferred and common stock"
      },
      {
        year: 1980,
        context: "GEICO represents the best of all investment worlds - the coupling of a very important and very hard to duplicate business advantage with an extraordinary management",
        text: "GEICO represents the best of all investment worlds",
        details: "We have owned 7.2 million shares of GEICO Corp., equal to about a 33% equity interest"
      },
      {
        year: 1981,
        context: "We believe that GEICO Corporation, our major non-controlled business operating in this field, is, by virtue of its extreme and improving operating efficiency, in a considerably more protected position than almost any other major insurer.",
        text: "GEICO Corporation, our major non-controlled business",
        details: "Over half of the large gain in Berkshire's net worth during 1981... resulted from the market performance of a single investment, GEICO Corporation"
      },
      {
        year: 1982,
        context: "GEICO continues to be managed with a zeal for efficiency and value to the customer that virtually guarantees unusual success.",
        text: "GEICO continues to be managed with a zeal for efficiency",
        details: "Our 35% interest in GEICO represents about $250 million of premium volume"
      },
      {
        year: 1983,
        context: "We have approximately a one-third interest in GEICO. That gives us a $270 million share in the company's premium volume...",
        text: "We have approximately a one-third interest in GEICO",
        details: "Geico's performance during 1983 was as good as our own insurance performance was poor"
      },
      {
        year: 1984,
        context: "At GEICO the news, as usual, is mostly good. That company achieved excellent unit growth in its primary insurance business during 1984...",
        text: "At GEICO the news, as usual, is mostly good",
        details: "We have prospered in a very major way - as have other shareholders - by the large share repurchases of GEICO"
      },
      {
        year: 1985,
        context: "GEICO, 38%-owned by Berkshire, reported an excellent year in 1985 in premium growth and investment results, but a poor year - by its lofty standards - in underwriting.",
        text: "GEICO, 38%-owned by Berkshire",
        details: "Jack Byrne leaving GEICO and Bill Snyder and Lou Simpson taking over. Listed with 6,850,000 shares"
      },
      {
        year: 1986,
        context: "GEICO Corporation, 41% owned by Berkshire, had an outstanding year in 1986.",
        text: "GEICO Corporation, 41% owned by Berkshire",
        details: "Detailed discussion of GEICO's performance, including low operating costs and investment returns"
      },
      {
        year: 1988,
        context: "GEICO Corporation mentioned as one of Berkshire's three permanent investments",
        text: "GEICO Corporation",
        details: "Noted as 44%-owned by Berkshire, with Bill Snyder and Lou Simpson praised for management"
      },
      {
        year: 1990,
        context: "GEICO's growth has generated an ever-larger amount of funds for investment that have an effective cost of considerably less than zero.",
        text: "GEICO's growth has generated an ever-larger amount of funds",
        details: "Our ownership interest is now 48%"
      },
      {
        year: 1992,
        context: "Our investee, GEICO, suffered a net loss from Andrew, after reinsurance recoveries and tax savings, of about $50 million, of which our share is roughly $25 million.",
        text: "Our investee, GEICO, suffered a net loss from Andrew",
        details: "Hurricane Andrew impact on GEICO operations"
      },
      {
        year: 1995,
        context: "Multiple extensive sections, including a detailed history of Buffett's relationship with the company. Acquired 100% of GEICO right after year-end 1995",
        text: "Acquired 100% of GEICO right after year-end 1995",
        details: "Described as 'the seventh largest auto insurer in the United States, with about 3.7 million cars insured'"
      },
      {
        year: 1996,
        context: "When we moved to total ownership of GEICO early last year, our expectations were high - and they are all being exceeded.",
        text: "When we moved to total ownership of GEICO",
        details: "Discussed extensively in the 'Insurance - GEICO and Other Primary Operations' section"
      },
      {
        year: 1997,
        context: "GEICO is flying, and we expect that it will continue to do so.",
        text: "GEICO is flying",
        details: "Discusses GEICO's underwriting profit, policy growth, and market share"
      }
    ]
  },
  
  SeesCandy: {
    name: "See's Candies / See's Candy",
    mentions: [
      {
        year: 1977,
        context: "See's Candies, a 99% owned subsidiary, managed by Chuck Huggins, made good progress in 1977.",
        text: "See's Candies, a 99% owned subsidiary",
        details: "Since See's was purchased by Blue Chip Stamps at the beginning of 1972, pre-tax operating earnings have grown from $4.2 million to $12.6 million with little additional capital investment"
      },
      {
        year: 1982,
        context: "hard-to-match businesses as See's Candy Shops...",
        text: "See's Candy Shops",
        details: "Mentioned in a hypothetical example about ownership dilution"
      },
      {
        year: 1983,
        context: "Extensive discussion in the Appendix about Blue Chip Stamps purchasing See's in 1972 for $25 million",
        text: "Blue Chip Stamps purchasing See's in 1972 for $25 million",
        details: "See's last year earned $13 million after taxes on about $20 million of net tangible assets"
      },
      {
        year: 1984,
        context: "Entire section dedicated to See's performance, including detailed financial table",
        text: "The success of See's reflects the combination of an exceptional product and an exceptional manager, Chuck Huggins",
        details: "Detailed financial performance discussion under Chuck Huggins management"
      },
      {
        year: 1985,
        context: "At See's we continue to get store volumes that are far beyond those achieved by any competitor we know of.",
        text: "At See's we continue to get store volumes",
        details: "At See's we have Chuck Huggins, the man we put in charge the day we bought the business"
      },
      {
        year: 1986,
        context: "At See's, sales trends improved somewhat from those of recent years.",
        text: "At See's, sales trends improved",
        details: "See's has a one-of-a-kind product 'personality'. Discusses Chuck Huggins as long-time manager"
      },
      {
        year: 1987,
        context: "Chuck Huggins continues to set new records at See's",
        text: "Chuck Huggins continues to set new records at See's",
        details: "Candy stores are fun to visit, but most have not been fun for their owners"
      },
      {
        year: 1988,
        context: "Sold a record 25.1 million pounds in 1988",
        text: "Sold a record 25.1 million pounds in 1988",
        details: "Earned 90% of annual profits in December. Chuck Huggins put in charge shortly after Berkshire's purchase"
      },
      {
        year: 1989,
        context: "At See's Candies we had an 8% increase in pounds sold",
        text: "At See's Candies we had an 8% increase in pounds sold",
        details: "Detailed section discussing performance, advertising, and management under Chuck Huggins"
      },
      {
        year: 1990,
        context: "At See's, physical volume set a record in 1990",
        text: "At See's, physical volume set a record in 1990",
        details: "Chuck Huggins delivered outstanding results, as he has in each of the nineteen years we have owned See's. NFM put a See's candy cart in the store late last year and sold more candy than that moved by some of the full-sized stores See's operates in California"
      },
      {
        year: 1991,
        context: "Twenty Years in a Candy Store section discusses See's Candy Shops extensively, including purchase history, profitability, and sales",
        text: "Charlie and I have many reasons to be thankful for our association with Chuck and See's",
        details: "While there, stop at the See's Candy Cart and find out for yourself why Americans ate 26 million pounds of See's products last year"
      },
      {
        year: 1996,
        context: "Today, See's is different in many ways from what it was in 1972 when we bought it",
        text: "Today, See's is different in many ways from what it was in 1972",
        details: "Evolution of See's business model since acquisition"
      },
      {
        year: 1997,
        context: "2,500 pounds of See's candy will be sold at the annual meeting",
        text: "2,500 pounds of See's candy",
        details: "Noted as one of Berkshire's subsidiaries that has paid $1.8 billion to the parent company"
      }
    ]
  },
  
  BlueChipStamps: {
    name: "Blue Chip Stamps",
    mentions: [
      {
        year: 1977,
        context: "We again increased our equity interest in Blue Chip Stamps, and owned approximately 36 1/2% at the end of 1977.",
        text: "We again increased our equity interest in Blue Chip Stamps",
        details: "Blue Chip had a fine year, earning approximately $12.9 million from operations and, in addition, had realized securities gains of $4.1 million"
      },
      {
        year: 1978,
        context: "After the merger, our ownership of Blue Chip Stamps increased to approximately 58%...",
        text: "Blue Chip Stamps",
        details: "Multiple references to Blue Chip Stamps merger and ownership changes"
      },
      {
        year: 1979,
        context: "Blue Chip Stamps, our 60% owned subsidiary, is fully consolidated in Berkshire Hathaway's financial statements",
        text: "Blue Chip Stamps, our 60% owned subsidiary",
        details: "Mentioned in earnings table and discussed in context of accounting treatment"
      },
      {
        year: 1980,
        context: "Blue Chip Stamps, 60% owned by Berkshire Hathaway Inc., falls into this category.",
        text: "Blue Chip Stamps, 60% owned by Berkshire Hathaway Inc.",
        details: "Context of controlled vs non-controlled businesses"
      },
      {
        year: 1981,
        context: "Berkshire owns about 60% of Blue Chip Stamps which, in turn, owns 80% of Wesco Financial Corporation.",
        text: "Berkshire owns about 60% of Blue Chip Stamps",
        details: "Ownership structure explanation with Wesco Financial connection"
      },
      {
        year: 1982,
        context: "Berkshire and Blue Chip are considering merger in 1983.",
        text: "Berkshire and Blue Chip are considering merger in 1983",
        details: "Blue Chip and/or Wesco own shares of these companies"
      },
      {
        year: 1983,
        context: "This past year our registered shareholders increased from about 1900 to about 2900. Most of this growth resulted from our merger with Blue Chip Stamps",
        text: "Most of this growth resulted from our merger with Blue Chip Stamps",
        details: "Merger completion and shareholder impact"
      },
      {
        year: 1984,
        context: "Charlie and I then controlled and managed three companies, Berkshire Hathaway Inc., Diversified Retailing Company, Inc., and Blue Chip Stamps...",
        text: "Blue Chip Stamps",
        details: "Historical context of Buffett and Munger's business empire"
      },
      {
        year: 1991,
        context: "Twenty years ago, on January 3, 1972, Blue Chip Stamps (then an affiliate of Berkshire and later merged into it) bought control of See's Candy Shops",
        text: "Blue Chip Stamps (then an affiliate of Berkshire and later merged into it) bought control of See's Candy Shops",
        details: "Historical context of See's acquisition through Blue Chip"
      },
      {
        year: 1997,
        context: "Very brief mention in a footnote about stock-only mergers",
        text: "Blue Chip Stamps",
        details: "Brief reference in merger discussion context"
      }
    ]
  },
  
  NationalIndemnity: {
    name: "National Indemnity / NICO",
    mentions: [
      {
        year: 1977,
        context: "Multiple mentions throughout the insurance section, describing its growth and performance",
        text: "Phil Liesche's managerial group at National Indemnity Company",
        details: "Achieved 'truly outstanding results'"
      },
      {
        year: 1979,
        context: "Discussed in detail in the Insurance Underwriting section",
        text: "National Indemnity",
        details: "Specific praise for Phil Liesche's segment that 'produced an underwriting profit of $8.4 million on about $82 million of earned premiums'"
      },
      {
        year: 1980,
        context: "The National Indemnity managers, led by Phil Liesche with the usual able assistance of Roland Miller and Bill Lyons, outdid themselves in 1980.",
        text: "The National Indemnity managers, led by Phil Liesche",
        details: "Outstanding management team performance"
      },
      {
        year: 1982,
        context: "The biggest swing was in National Indemnity's traditional coverages.",
        text: "National Indemnity's traditional coverages",
        details: "National Indemnity has been the most important operation in Berkshire's growth"
      },
      {
        year: 1983,
        context: "Roland Miller guided the auto and general liability business of National Indemnity Company and National Fire and Marine Insurance Company to improved results",
        text: "National Indemnity Company and National Fire and Marine Insurance Company",
        details: "Roland Miller's leadership and improved results"
      },
      {
        year: 1985,
        context: "In mid-1985 our largest insurance company, National Indemnity Company, broadcast its willingness to underwrite large risks",
        text: "our largest insurance company, National Indemnity Company",
        details: "Expansion into large risk underwriting"
      },
      {
        year: 1986,
        context: "Discussion of insurance business volume fluctuations",
        text: "National Indemnity",
        details: "Insurance volume and underwriting cycles"
      },
      {
        year: 1992,
        context: "In 1992, as in previous years, National Indemnity's commercial auto and general liability business, led by Don Wurster... recorded an underwriting profit last year",
        text: "National Indemnity's commercial auto and general liability business, led by Don Wurster",
        details: "Consistent underwriting profitability under Don Wurster's leadership"
      },
      {
        year: 1994,
        context: "We purchased National Indemnity in 1967...",
        text: "We purchased National Indemnity in 1967",
        details: "National Indemnity's traditional auto and general liability business, led by Don Wurster..."
      },
      {
        year: 1995,
        context: "National Indemnity's traditional business had a combined ratio of 84.2",
        text: "National Indemnity's traditional business had a combined ratio of 84.2",
        details: "Managed by Don Wurster. Averaged a 85.6 combined ratio over three years"
      },
      {
        year: 1996,
        context: "National Indemnity's traditional business had a combined ratio of 74.2",
        text: "National Indemnity's traditional business had a combined ratio of 74.2",
        details: "Excellent underwriting performance"
      },
      {
        year: 1997,
        context: "Starting with National Indemnity in 1967... we have acquired... businesses that have performed incredibly well",
        text: "Starting with National Indemnity in 1967",
        details: "Historical anchor of Berkshire's insurance business"
      }
    ]
  },
  
  WescoFinancial: {
    name: "Wesco Financial",
    mentions: [
      {
        year: 1977,
        context: "Wesco Financial Corp., an 80% owned subsidiary of Blue Chip Stamps, managed by Louis Vincenti, made good progress in 1977.",
        text: "Wesco Financial Corp., an 80% owned subsidiary of Blue Chip Stamps",
        details: "Managed by Louis Vincenti, made good progress in 1977"
      },
      {
        year: 1978,
        context: "Berkshire owns close to 58% of Blue Chip which... owns 80% of Wesco Financial Corporation.",
        text: "Wesco Financial Corporation",
        details: "Ownership structure through Blue Chip Stamps"
      },
      {
        year: 1979,
        context: "Mentioned as being 80% owned by Blue Chip Stamps",
        text: "Wesco Financial",
        details: "Appears in earnings table"
      },
      {
        year: 1980,
        context: "Wesco Financial, controlled by Berkshire but only 48% owned",
        text: "Wesco Financial, controlled by Berkshire but only 48% owned",
        details: "Control vs ownership distinction"
      },
      {
        year: 1981,
        context: "Mentioned in the same context as Blue Chip Stamps above.",
        text: "Wesco Financial Corporation",
        details: "Appears in earnings table with financial figures"
      },
      {
        year: 1984,
        context: "An amplified discussion of Wesco's businesses appears in Charlie Munger's report on pages 50-59.",
        text: "Wesco's businesses",
        details: "Charlie Munger's detailed management report"
      },
      {
        year: 1985,
        context: "Mentioned in context of Fireman's Fund quota-share contract",
        text: "Wesco Financial",
        details: "Insurance business context"
      }
    ]
  },
  
  BuffaloNews: {
    name: "Buffalo News / Buffalo Evening News",
    mentions: [
      {
        year: 1978,
        context: "Mentioned in the earnings table with a loss of $2,913 in 1978.",
        text: "Buffalo Evening News",
        details: "Loss of $2,913 in 1978"
      },
      {
        year: 1979,
        context: "Appears in earnings table with negative earnings (-$4,617 before taxes in 1979)",
        text: "Buffalo Evening News",
        details: "Negative earnings (-$4,617 before taxes in 1979)"
      },
      {
        year: 1980,
        context: "Mentioned in earnings table with a loss: 'Buffalo Evening News ...... (2,805) (4,617)'",
        text: "Buffalo Evening News",
        details: "Continued losses in early years"
      },
      {
        year: 1982,
        context: "Mentioned in a discussion about Sunday circulation growth in Buffalo.",
        text: "Buffalo",
        details: "Sunday circulation growth discussion"
      },
      {
        year: 1983,
        context: "Discussed in detail in a section about the newspaper's performance in 1983",
        text: "Buffalo News",
        details: "Detailed performance discussion for 1983"
      },
      {
        year: 1984,
        context: "Entire section discussing the newspaper's performance and strategy",
        text: "Buffalo News",
        details: "Performance and strategic discussion"
      },
      {
        year: 1986,
        context: "Operating results at The Buffalo News continue to reflect a truly superb managerial job by Stan Lipsey.",
        text: "The Buffalo News",
        details: "Extensive discussion of the newspaper's market penetration and news coverage under Stan Lipsey"
      },
      {
        year: 1987,
        context: "Among dominant papers of its size or larger, the Buffalo News continues to be the national leader",
        text: "Buffalo News continues to be the national leader",
        details: "National leadership position among similar-sized newspapers"
      },
      {
        year: 1988,
        context: "Described as part of 'Sainted Seven' businesses",
        text: "Buffalo News",
        details: "Stan Lipsey praised for maintaining margins. Murray Light noted as a 'top-flight editor'"
      },
      {
        year: 1989,
        context: "The Buffalo News continued to star in 1989",
        text: "The Buffalo News continued to star in 1989",
        details: "Detailed section discussing circulation, news content, and profitability"
      },
      {
        year: 1990,
        context: "Stan Lipsey's management of the News continues to be superb.",
        text: "Stan Lipsey's management of the News continues to be superb",
        details: "During 1990, our earnings held up much better than those of most metropolitan papers, falling only 5%"
      },
      {
        year: 1995,
        context: "Earnings of $46.8 pre-tax in 1995",
        text: "Buffalo News",
        details: "Buffett notes industry trends are 'not good'"
      },
      {
        year: 1997,
        context: "Mentioned as a subsidiary that has paid earnings to Berkshire",
        text: "Buffalo News or Scott Fetzer",
        details: "Performance discussed in earnings context"
      }
    ]
  },
  
  NebraskaFurnitureMart: {
    name: "Nebraska Furniture Mart / NFM",
    mentions: [
      {
        year: 1983,
        context: "Discussed extensively in a section about acquiring the business from Rose Blumkin",
        text: "Nebraska Furniture Mart",
        details: "Extensive discussion of acquisition from Rose Blumkin"
      },
      {
        year: 1984,
        context: "Last year NFM's net sales increased by $14.3 million, bringing the total to $115 million...",
        text: "Nebraska Furniture Mart",
        details: "Entire section praising Mrs. B and the Blumkin family's management"
      },
      {
        year: 1985,
        context: "At Nebraska Furniture Mart our basic strength is an exceptionally low-cost operation",
        text: "Nebraska Furniture Mart",
        details: "Mrs. B (Rose Blumkin) highlighted as 92-year-old chairman"
      },
      {
        year: 1986,
        context: "The amazing Blumkins continue to perform business miracles at Nebraska Furniture Mart.",
        text: "Nebraska Furniture Mart",
        details: "Discusses Mrs. B's leadership at age 93 and the company's sales growth"
      },
      {
        year: 1987,
        context: "Fifty years ago Mrs. B started the business with $500",
        text: "Nebraska Furniture Mart",
        details: "1987 sales of $142.6 million mentioned. Detailed section about Mrs. B and the business"
      },
      {
        year: 1988,
        context: "Mrs. B (Rose Blumkin) highlighted as founder and long-time leader",
        text: "Nebraska Furniture Mart",
        details: "Described as largest home furnishings store in country. Mentioned as large newspaper advertiser"
      },
      {
        year: 1989,
        context: "The Nebraska Furniture Mart had record sales and excellent earnings in 1989",
        text: "The Nebraska Furniture Mart had record sales",
        details: "Detailed section discussing sales, Mrs. B, and Blumkin family management"
      },
      {
        year: 1990,
        context: "Sales at our one-and-only location were $159 million, up 4% from 1989.",
        text: "Sales at our one-and-only location were $159 million",
        details: "Detailed description of business model and success. NFM put a See's candy cart in the store late last year and sold more candy than that moved by some of the full-sized stores See's operates in California"
      },
      {
        year: 1991,
        context: "Annual meeting note mentions buses to Nebraska Furniture Mart",
        text: "Nebraska Furniture Mart",
        details: "Mentioned in acquisition discussion: 'Our favorite form of purchase is one fitting the pattern through which we acquired Nebraska Furniture Mart...'"
      },
      {
        year: 1992,
        context: "At the end of last year, Mrs. B decided to sell her building and land to NFM. She'll continue, however, to run her carpet business at its current location",
        text: "Mrs. B decided to sell her building and land to NFM",
        details: "Multiple mentions about Mrs. B and business operations"
      },
      {
        year: 1994,
        context: "The Mega Mart, adjacent to NFM's main store, is on our 64-acre site...",
        text: "NFM's main store",
        details: "Expansion with Mega Mart adjacent facility"
      },
      {
        year: 1995,
        context: "Mentioned in context of R.C. Willey comparison",
        text: "Nebraska Furniture Mart",
        details: "Both have similar sales volumes. NFM gets all business from one Omaha complex"
      },
      {
        year: 1996,
        context: "Described in Annual Meeting section, noting '$265 million of business last year'",
        text: "Nebraska Furniture Mart",
        details: "$265 million of business last year"
      },
      {
        year: 1997,
        context: "Discussed in context of annual meeting logistics",
        text: "Nebraska Furniture Mart",
        details: "Referenced as part of Buffett's acquisition history"
      }
    ]
  },
  
  Borsheims: {
    name: "Borsheims / Borsheim's",
    mentions: [
      {
        year: 1988,
        context: "Berkshire purchased 80% interest in early 1989",
        text: "Borsheim's",
        details: "Founded by Louis Friedman in 1948. Managed by Friedman family (Ike, Alan, Marvin Cohn, Donald Yale)"
      },
      {
        year: 1989,
        context: "In its first year with Berkshire, Borsheim's met all expectations",
        text: "Borsheim's met all expectations",
        details: "Detailed section discussing sales, Ike Friedman, and business strategy"
      },
      {
        year: 1990,
        context: "Sales were up 18%.",
        text: "Borsheim's",
        details: "Detailed description of business model and family involvement"
      },
      {
        year: 1991,
        context: "Multiple mentions in annual meeting logistics section about store hours and special events",
        text: "Borsheim's",
        details: "Annual meeting special events and store operations"
      },
      {
        year: 1992,
        context: "Borsheim's normally is closed on Sunday but will be open for shareholders and their guests from noon to 6 p.m.",
        text: "Borsheim's",
        details: "Annual meeting logistics and special shareholder hours"
      },
      {
        year: 1995,
        context: "Had an 'excellent year' in 1995 with sales up 11.7%",
        text: "Borsheim's",
        details: "Led by 36-year-old CEO Susan Jacques. Operates independently from Helzberg's Diamond Shops"
      },
      {
        year: 1996,
        context: "Mentioned in Annual Meeting details, with store hours and sales event information",
        text: "Borsheim's",
        details: "Annual meeting special events and operations"
      },
      {
        year: 1997,
        context: "Mentioned in details about the annual meeting",
        text: "Borsheim's",
        details: "Praise for CEO Susan Jacques"
      }
    ]
  },
  
  FlightSafety: {
    name: "FlightSafety / Flight Safety",
    mentions: [
      {
        year: 1996,
        context: "Acquired in 1996 for about $1.5 billion",
        text: "FlightSafety",
        details: "Detailed description of acquisition and business provided"
      },
      {
        year: 1997,
        context: "Brief mention in earnings table",
        text: "FlightSafety",
        details: "Referenced in context of an acquisition structure"
      }
    ]
  },
  
  GeneralRe: {
    name: "General Re / Gen Re",
    mentions: [
      // Note: General Re acquisition was announced in 1996 but completed in 1998, 
      // so limited mentions in the 1977-1997 period
    ]
  },
  
  BerkshireHathawaySunsetting: {
    name: "Berkshire Hathaway Insurance",
    mentions: [
      // Note: This appears to be a general reference rather than a specific subsidiary
      // Most insurance operations were conducted through National Indemnity and other specific entities
    ]
  },
  
  ScottFetzer: {
    name: "Scott Fetzer",
    mentions: [
      {
        year: 1985,
        context: "Detailed section about acquisition, including World Book and Kirby as key businesses",
        text: "Scott Fetzer",
        details: "Major acquisition including World Book and Kirby subsidiaries"
      },
      {
        year: 1986,
        context: "World Book is the largest of 17 Scott Fetzer operations that joined Berkshire at the beginning of 1986",
        text: "17 Scott Fetzer operations",
        details: "Extensive discussion in the Appendix about accounting for the Scott Fetzer acquisition"
      },
      {
        year: 1987,
        context: "Listed in earnings table",
        text: "Scott Fetzer",
        details: "Managed by Ralph Schey. Brief mention in context of business performance"
      },
      {
        year: 1989,
        context: "Ralph Schey continues to do a superb job in managing our largest group - World Book, Kirby, and the Scott Fetzer Manufacturing Companies",
        text: "Scott Fetzer Manufacturing Companies",
        details: "Mentioned together under Ralph Schey's management section"
      },
      {
        year: 1992,
        context: "Ralph Schey, CEO of Scott Fetzer and a manager who I hope is with us at 99 also, hit a grand slam last year when that company earned a record $110 million pre-tax.",
        text: "Ralph Schey, CEO of Scott Fetzer",
        details: "Record $110 million pre-tax earnings under Ralph Schey's leadership"
      },
      {
        year: 1994,
        context: "Extensive discussion of Scott Fetzer's performance and acquisition",
        text: "Scott Fetzer",
        details: "Mentions Kirby and World Book as part of Scott Fetzer group"
      },
      {
        year: 1997,
        context: "Mentioned as a cash acquisition that performed well",
        text: "Scott Fetzer",
        details: "Discussed in earnings context. 'Buffalo News or Scott Fetzer' performance discussed"
      }
    ]
  },
  
  Kirby: {
    name: "Kirby",
    mentions: [
      {
        year: 1985,
        context: "Part of Scott Fetzer acquisition",
        text: "Kirby",
        details: "Key business within Scott Fetzer acquisition"
      },
      {
        year: 1986,
        context: "Kirby likewise recorded its fourth straight year of unit volume gains.",
        text: "Kirby likewise recorded its fourth straight year of unit volume gains",
        details: "Strong performance within Scott Fetzer group"
      },
      {
        year: 1987,
        context: "Listed in earnings table",
        text: "Kirby",
        details: "Managed by Ralph Schey. Brief mention in context of business performance"
      },
      {
        year: 1989,
        context: "Ralph Schey continues to do a superb job in managing our largest group - World Book, Kirby, and the Scott Fetzer Manufacturing Companies",
        text: "World Book, Kirby, and the Scott Fetzer Manufacturing Companies",
        details: "Part of Ralph Schey's management group"
      },
      {
        year: 1994,
        context: "Mentions Kirby and World Book as part of Scott Fetzer group",
        text: "Kirby",
        details: "Part of Scott Fetzer subsidiary operations"
      }
    ]
  },
  
  WorldBook: {
    name: "World Book",
    mentions: [
      {
        year: 1985,
        context: "Part of Scott Fetzer acquisition",
        text: "World Book",
        details: "Key business within Scott Fetzer acquisition"
      },
      {
        year: 1986,
        context: "World Book's unit volume increased for the fourth consecutive year",
        text: "World Book's unit volume increased for the fourth consecutive year",
        details: "World Book is the largest of 17 Scott Fetzer operations that joined Berkshire at the beginning of 1986"
      },
      {
        year: 1987,
        context: "At the end of 1987, World Book introduced its most dramatically-revised edition",
        text: "World Book introduced its most dramatically-revised edition",
        details: "Listed in earnings table. Managed by Ralph Schey"
      },
      {
        year: 1989,
        context: "Ralph Schey continues to do a superb job in managing our largest group - World Book, Kirby, and the Scott Fetzer Manufacturing Companies",
        text: "World Book, Kirby, and the Scott Fetzer Manufacturing Companies",
        details: "Mentioned together under Ralph Schey's management section"
      },
      {
        year: 1994,
        context: "Mentions Kirby and World Book as part of Scott Fetzer group",
        text: "World Book",
        details: "Part of Scott Fetzer subsidiary operations"
      },
      {
        year: 1996,
        context: "Mentioned in earnings discussion, noting challenges in the encyclopedia market",
        text: "World Book",
        details: "Challenges in the encyclopedia market discussed"
      }
    ]
  },
  
  Fechheimer: {
    name: "Fechheimer",
    mentions: [
      {
        year: 1986,
        context: "Fechheimer is exactly the sort of business we like to buy.",
        text: "Fechheimer is exactly the sort of business we like to buy",
        details: "Detailed section about acquiring Fechheimer Bros. Company"
      },
      {
        year: 1987,
        context: "Three generations of Heldmans have... built the sales and profits",
        text: "Fechheimer",
        details: "Detailed section about Heldman family management. Listed in earnings table"
      },
      {
        year: 1989,
        context: "At Fechheimer, the Heldman clan... continue their extraordinary performance",
        text: "Fechheimer",
        details: "Brief section discussing management and performance"
      }
    ]
  },
  
  HHBrown: {
    name: "H.H. Brown",
    mentions: [
      {
        year: 1992,
        context: "H.H. Brown appears in earnings table",
        text: "H.H. Brown",
        details: "Brief mention in earnings table, but without additional context beyond financial performance"
      },
      {
        year: 1993,
        context: "H.H. Brown appears in earnings table",
        text: "H.H. Brown",
        details: "Brief mention in earnings table"
      },
      {
        year: 1994,
        context: "H.H. Brown appears in earnings table",
        text: "H.H. Brown",
        details: "Brief mention in earnings table"
      }
    ]
  },
  
  DexterShoe: {
    name: "Dexter Shoe",
    mentions: [
      {
        year: 1993,
        context: "So we promptly jumped at the chance last year to acquire Dexter Shoe of Dexter, Maine, which manufactures popular-priced men's and women's shoes.",
        text: "acquire Dexter Shoe of Dexter, Maine",
        details: "Significant section discussing acquisition of popular-priced shoe manufacturer"
      },
      {
        year: 1997,
        context: "Mentioned as selling '1,350 pairs of Dexter shoes' at annual meeting",
        text: "1,350 pairs of Dexter shoes",
        details: "Annual meeting merchandise sales"
      }
    ]
  }
};

module.exports = subsidiaryMentions;