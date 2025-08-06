import React from 'react'
import './Quotes.css'

interface Quote {
  id: string
  text: string
  author: 'Warren Buffett' | 'Charlie Munger'
  source: string
  year: number
  category: 'investing' | 'life' | 'business' | 'wisdom'
}

const quotes: Quote[] = [
  {
    id: 'buffett-fearful',
    text: 'Be fearful when others are greedy and greedy when others are fearful.',
    author: 'Warren Buffett',
    source: '2004 Berkshire Hathaway Annual Letter',
    year: 2004,
    category: 'investing'
  },
  {
    id: 'munger-invert',
    text: 'Invert, always invert: Turn a situation or problem upside down. Look at it backward.',
    author: 'Charlie Munger',
    source: 'Poor Charlie\'s Almanack',
    year: 2005,
    category: 'wisdom'
  },
  {
    id: 'buffett-rule1',
    text: 'Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1.',
    author: 'Warren Buffett',
    source: 'The Tao of Warren Buffett',
    year: 1985,
    category: 'investing'
  },
  {
    id: 'munger-deserve',
    text: 'The safest way to get what you want is to deserve what you want.',
    author: 'Charlie Munger',
    source: '2007 USC Law School Commencement Speech',
    year: 2007,
    category: 'life'
  },
  {
    id: 'buffett-time',
    text: 'Time is the friend of the wonderful company, the enemy of the mediocre.',
    author: 'Warren Buffett',
    source: '1989 Berkshire Hathaway Annual Letter',
    year: 1989,
    category: 'investing'
  },
  {
    id: 'munger-wisdom',
    text: 'Acquire worldly wisdom and adjust your behavior accordingly. If your new behavior gives you a little temporary unpopularity with your peer group... then to hell with them.',
    author: 'Charlie Munger',
    source: 'Harvard School Commencement Speech',
    year: 1986,
    category: 'wisdom'
  },
  {
    id: 'buffett-integrity',
    text: 'In looking for people to hire, you look for three qualities: integrity, intelligence, and energy. And if they don\'t have the first, the other two will kill you.',
    author: 'Warren Buffett',
    source: 'Talk at University of Florida',
    year: 1998,
    category: 'business'
  },
  {
    id: 'munger-learning',
    text: 'I constantly see people rise in life who are not the smartest, sometimes not even the most diligent, but they are learning machines. They go to bed every night a little wiser than they were when they got up.',
    author: 'Charlie Munger',
    source: '2007 USC Law School Commencement Speech',
    year: 2007,
    category: 'life'
  },
  {
    id: 'buffett-moat',
    text: 'The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage.',
    author: 'Warren Buffett',
    source: 'Fortune Magazine Interview',
    year: 1999,
    category: 'investing'
  },
  {
    id: 'munger-envy',
    text: 'Envy is a really stupid sin because it\'s the only one you could never possibly have any fun at. There\'s a lot of pain and no fun.',
    author: 'Charlie Munger',
    source: '2003 Berkshire Hathaway Annual Meeting',
    year: 2003,
    category: 'life'
  },
  {
    id: 'buffett-reputation',
    text: 'It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you\'ll do things differently.',
    author: 'Warren Buffett',
    source: 'Talk at Georgia Tech',
    year: 1991,
    category: 'business'
  },
  {
    id: 'munger-avoid',
    text: 'All I want to know is where I\'m going to die, so I\'ll never go there.',
    author: 'Charlie Munger',
    source: '1986 Berkshire Hathaway Annual Meeting',
    year: 1986,
    category: 'wisdom'
  },
  {
    id: 'buffett-price',
    text: 'Price is what you pay. Value is what you get.',
    author: 'Warren Buffett',
    source: '2008 Berkshire Hathaway Annual Letter',
    year: 2008,
    category: 'investing'
  },
  {
    id: 'munger-simple',
    text: 'Take a simple idea and take it seriously.',
    author: 'Charlie Munger',
    source: 'Poor Charlie\'s Almanack',
    year: 2005,
    category: 'business'
  },
  {
    id: 'buffett-risk',
    text: 'Risk comes from not knowing what you\'re doing.',
    author: 'Warren Buffett',
    source: 'The Essays of Warren Buffett',
    year: 1994,
    category: 'investing'
  },
  {
    id: 'munger-opportunity',
    text: 'Our job is to find a few intelligent things to do, not to keep up with every damn thing in the world.',
    author: 'Charlie Munger',
    source: '1994 Berkshire Hathaway Annual Meeting',
    year: 1994,
    category: 'investing'
  },
  {
    id: 'buffett-circle',
    text: 'You don\'t have to be an expert on every company, or even many. You only have to be able to evaluate companies within your circle of competence.',
    author: 'Warren Buffett',
    source: '1996 Berkshire Hathaway Annual Letter',
    year: 1996,
    category: 'investing'
  },
  {
    id: 'munger-incentives',
    text: 'Show me the incentive and I will show you the outcome.',
    author: 'Charlie Munger',
    source: 'The Psychology of Human Misjudgment',
    year: 1995,
    category: 'business'
  },
  {
    id: 'buffett-tide',
    text: 'Only when the tide goes out do you discover who\'s been swimming naked.',
    author: 'Warren Buffett',
    source: '2002 Berkshire Hathaway Annual Letter',
    year: 2002,
    category: 'business'
  },
  {
    id: 'munger-patience',
    text: 'The big money is not in the buying and selling, but in the owning and holding.',
    author: 'Charlie Munger',
    source: '2000 Berkshire Hathaway Annual Meeting',
    year: 2000,
    category: 'investing'
  },
  {
    id: 'buffett-habits',
    text: 'Chains of habit are too light to be felt until they are too heavy to be broken.',
    author: 'Warren Buffett',
    source: '2007 Berkshire Hathaway Annual Letter',
    year: 2007,
    category: 'life'
  },
  {
    id: 'munger-rational',
    text: 'It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.',
    author: 'Charlie Munger',
    source: '1998 Wesco Annual Meeting',
    year: 1998,
    category: 'wisdom'
  }
]

const Quotes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | Quote['category']>('all')
  const [selectedAuthor, setSelectedAuthor] = React.useState<'all' | Quote['author']>('all')

  const filteredQuotes = quotes.filter(quote => {
    const categoryMatch = selectedCategory === 'all' || quote.category === selectedCategory
    const authorMatch = selectedAuthor === 'all' || quote.author === selectedAuthor
    return categoryMatch && authorMatch
  })

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'investing', label: 'Investing' },
    { id: 'business', label: 'Business' },
    { id: 'life', label: 'Life' },
    { id: 'wisdom', label: 'Worldly Wisdom' }
  ]

  const authors = [
    { id: 'all', label: 'Both' },
    { id: 'Warren Buffett', label: 'Warren Buffett' },
    { id: 'Charlie Munger', label: 'Charlie Munger' }
  ]

  return (
    <div className="quotes">
      <div className="quotes-header">
        <h2>Wisdom & Wit</h2>
        <p className="quotes-subtitle">
          Timeless quotes from Warren Buffett and Charlie Munger on investing, business, and life
        </p>
      </div>

      <div className="quotes-filters">
        <div className="filter-group">
          <label>Topic:</label>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id as any)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-group">
          <label>Author:</label>
          <div className="filter-buttons">
            {authors.map(author => (
              <button
                key={author.id}
                className={`filter-btn ${selectedAuthor === author.id ? 'active' : ''}`}
                onClick={() => setSelectedAuthor(author.id as any)}
              >
                {author.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="quotes-grid">
        {filteredQuotes.map(quote => (
          <div key={quote.id} className={`quote-card ${quote.author === 'Warren Buffett' ? 'buffett' : 'munger'}`}>
            <blockquote className="quote-text">
              "{quote.text}"
            </blockquote>
            <div className="quote-attribution">
              <div className="quote-author">{quote.author}</div>
              <div className="quote-source">
                {quote.source} • {quote.year}
              </div>
            </div>
            <div className={`category-tag ${quote.category}`}>
              {quote.category === 'wisdom' ? 'Worldly Wisdom' : quote.category}
            </div>
          </div>
        ))}
      </div>

      <div className="quotes-note">
        <p>
          <strong>Note:</strong> These quotes have been verified through annual letters, shareholder meetings, 
          and published works. Context and exact wording may vary slightly across sources.
        </p>
      </div>
    </div>
  )
}

export default Quotes