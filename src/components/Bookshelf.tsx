import React from 'react'
import './Bookshelf.css'

interface Book {
  id: string
  title: string
  author: string
  year: number
  description: string
  amazonUrl: string
  coverImage: string
  category: 'biography' | 'investing' | 'history' | 'letters'
}

const books: Book[] = [
  {
    id: 'snowball',
    title: 'The Snowball: Warren Buffett and the Business of Life',
    author: 'Alice Schroeder',
    year: 2008,
    description: 'The most comprehensive biography of Warren Buffett, written with his cooperation.',
    amazonUrl: 'https://www.amazon.com/Snowball-Warren-Buffett-Business-Life/dp/0553384611',
    coverImage: 'https://covers.openlibrary.org/b/isbn/9780553384611-L.jpg',
    category: 'biography'
  },
  {
    id: 'tap-dancing',
    title: 'Tap Dancing to Work: Warren Buffett on Practically Everything',
    author: 'Carol Loomis',
    year: 2012,
    description: 'A collection of Fortune articles about Warren Buffett spanning over 40 years.',
    amazonUrl: 'https://www.amazon.com/Tap-Dancing-Work-Warren-Practically/dp/1591845734',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1591845734-L.jpg',
    category: 'biography'
  },
  {
    id: 'poor-charlie',
    title: "Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger",
    author: 'Charles T. Munger',
    year: 2005,
    description: 'A collection of Charlie Munger\'s speeches and writings on life, business, and investing.',
    amazonUrl: 'https://www.amazon.com/Poor-Charlies-Almanack-Charles-Expanded/dp/1578645018',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1578645018-L.jpg',
    category: 'investing'
  },
  {
    id: 'buffett-essays',
    title: 'The Essays of Warren Buffett: Lessons for Corporate America',
    author: 'Warren Buffett & Lawrence Cunningham',
    year: 1997,
    description: 'Selected letters to shareholders organized by topic, providing insight into Buffett\'s investment philosophy.',
    amazonUrl: 'https://www.amazon.com/Essays-Warren-Buffett-Lessons-Corporate/dp/1611637589',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1611637589-L.jpg',
    category: 'letters'
  },
  {
    id: 'intelligent-investor',
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    year: 1949,
    description: 'The definitive book on value investing by Warren Buffett\'s mentor.',
    amazonUrl: 'https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661',
    coverImage: 'https://covers.openlibrary.org/b/isbn/0060555661-L.jpg',
    category: 'investing'
  },
  {
    id: 'buffett-way',
    title: 'The Warren Buffett Way',
    author: 'Robert G. Hagstrom',
    year: 1994,
    description: 'An in-depth look at Warren Buffett\'s investment strategies and philosophy.',
    amazonUrl: 'https://www.amazon.com/Warren-Buffett-Way-Robert-Hagstrom/dp/1118503252',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1118503252-L.jpg',
    category: 'investing'
  },
  {
    id: 'poor-charlie-stripe',
    title: "Poor Charlie's Almanack: The Essential Wit and Wisdom of Charles T. Munger",
    author: 'Charles T. Munger (Edited by Peter D. Kaufman)',
    year: 2023,
    description: 'The definitive collection of Charlie Munger\'s wisdom, newly revised and expanded by Stripe Press.',
    amazonUrl: 'https://www.amazon.com/Poor-Charlies-Almanack-Essential-Charles/dp/1953953239',
    coverImage: 'https://covers.openlibrary.org/b/isbn/9781953953230-L.jpg',
    category: 'investing'
  },
  {
    id: 'security-analysis-7th',
    title: 'Security Analysis: Seventh Edition',
    author: 'Benjamin Graham & David Dodd',
    year: 2023,
    description: 'The latest edition of the timeless value investing classic with updated commentary by Seth Klarman and others.',
    amazonUrl: 'https://www.amazon.com/Security-Analysis-Seventh-Principles-Techniques/dp/1264932405',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1264932405-L.jpg',
    category: 'investing'
  },
  {
    id: 'expectations-investing',
    title: 'Expectations Investing: Reading Stock Prices for Better Returns',
    author: 'Michael J. Mauboussin & Alfred Rappaport',
    year: 2021,
    description: 'How to read the expectations embedded in stock prices and make better investment decisions.',
    amazonUrl: 'https://www.amazon.com/Expectations-Investing-Reading-Prices-Returns/dp/0231544685',
    coverImage: 'https://covers.openlibrary.org/b/isbn/0231544685-L.jpg',
    category: 'investing'
  },
  {
    id: 'warren-buffett-ceo',
    title: 'Warren Buffett and the Interpretation of Financial Statements',
    author: 'Mary Buffett & David Clark',
    year: 2008,
    description: 'Learn how to read financial statements the Warren Buffett way.',
    amazonUrl: 'https://www.amazon.com/Warren-Buffett-Interpretation-Financial-Statements/dp/1849833192',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1849833192-L.jpg',
    category: 'investing'
  },
  {
    id: 'damn-right',
    title: 'Damn Right: Behind the Scenes with Berkshire Hathaway Billionaire Charlie Munger',
    author: 'Janet Lowe',
    year: 2000,
    description: 'The definitive biography of Charlie Munger, Warren Buffett\'s partner.',
    amazonUrl: 'https://www.amazon.com/Damn-Right-Berkshire-Hathaway-Billionaire/dp/0471446912',
    coverImage: 'https://covers.openlibrary.org/b/isbn/0471446912-L.jpg',
    category: 'biography'
  },
  {
    id: 'tao-munger',
    title: 'Tao of Charlie Munger',
    author: 'David Clark',
    year: 2017,
    description: 'A compilation of quotes from Charlie Munger on life and business.',
    amazonUrl: 'https://www.amazon.com/Tao-Charlie-Munger-Compilation-Statements/dp/1501153331',
    coverImage: 'https://covers.openlibrary.org/b/isbn/1501153331-L.jpg',
    category: 'biography'
  },
  {
    id: 'university-berkshire',
    title: 'The University of Berkshire Hathaway',
    author: 'Daniel Pecaut & Corey Wrenn',
    year: 2017,
    description: '30 years of lessons learned from Warren Buffett & Charlie Munger at the annual shareholders meeting.',
    amazonUrl: 'https://www.amazon.com/University-Berkshire-Hathaway-Lessons-Shareholders/dp/0998406279',
    coverImage: 'https://covers.openlibrary.org/b/isbn/0998406279-L.jpg',
    category: 'history'
  }
]

const Bookshelf: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'biography' | 'investing' | 'history' | 'letters'>('all')

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'All Books' },
    { id: 'biography', label: 'Biographies' },
    { id: 'investing', label: 'Investing' },
    { id: 'history', label: 'Berkshire History' },
    { id: 'letters', label: 'Letters & Essays' }
  ]

  return (
    <div className="bookshelf">
      <div className="bookshelf-header">
        <h2>The Berkshire Bookshelf</h2>
        <p className="bookshelf-subtitle">Essential reading for understanding Warren Buffett, Charlie Munger, and Berkshire Hathaway</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id as any)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-cover" data-title={book.title}>
              <img 
                src={book.coverImage} 
                alt={book.title} 
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-year">{book.year}</p>
              <p className="book-description">{book.description}</p>
              <a 
                href={book.amazonUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="amazon-link"
              >
                View on Amazon →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bookshelf-note">
        <p>
          <strong>Note:</strong> These are book recommendations for those interested in learning more about 
          Warren Buffett, Charlie Munger, and Berkshire Hathaway. Links are provided for convenience only - 
          no affiliate commissions are earned from purchases.
        </p>
      </div>
    </div>
  )
}

export default Bookshelf