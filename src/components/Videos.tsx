import React from 'react'
import './Videos.css'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  speaker: 'Buffett' | 'Munger' | 'Both'
  year: number
  category: 'annual-meeting' | 'interview' | 'speech' | 'documentary'
}

const videos: Video[] = [
  {
    id: 'hbo-buffett',
    title: 'Becoming Warren Buffett - HBO Documentary',
    description: 'An intimate look at Buffett\'s life, career, and philosophy',
    youtubeId: 'Lr_fvdHMPaM',
    speaker: 'Buffett',
    year: 2017,
    category: 'documentary'
  },
  {
    id: 'munger-psychology',
    title: 'Charlie Munger - The Psychology of Human Misjudgment',
    description: 'Munger\'s famous speech on 25 cognitive biases',
    youtubeId: 'pqzcCfUglws',
    speaker: 'Munger',
    year: 1995,
    category: 'speech'
  },
  {
    id: 'buffett-2024-meeting',
    title: '2024 Berkshire Hathaway Annual Meeting',
    description: 'Full recording of the most recent shareholders meeting',
    youtubeId: 'Aj89vGUqVLo',
    speaker: 'Buffett',
    year: 2024,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-cnbc-interview',
    title: 'Warren Buffett Interview with Becky Quick',
    description: 'Wide-ranging interview on markets, investing, and life',
    youtubeId: 'fE1O8xgsKlU',
    speaker: 'Buffett',
    year: 2023,
    category: 'interview'
  },
  {
    id: 'munger-usc',
    title: 'Charlie Munger USC Business School Speech',
    description: 'Munger on the art of stock picking and worldly wisdom',
    youtubeId: '8OgxDW9Tn7E',
    speaker: 'Munger',
    year: 1994,
    category: 'speech'
  },
  {
    id: 'buffett-investing-basics',
    title: 'Warren Buffett on Value Investing',
    description: 'Buffett explains his investment philosophy and approach',
    youtubeId: 'VpX6XwwmIVg',
    speaker: 'Buffett',
    year: 2020,
    category: 'interview'
  },
  {
    id: 'munger-djco-2023',
    title: 'Charlie Munger - Daily Journal Annual Meeting 2023',
    description: 'Munger\'s final Daily Journal meeting with Q&A',
    youtubeId: 'qMwDuzGhRbk',
    speaker: 'Munger',
    year: 2023,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-florida',
    title: 'Warren Buffett MBA Talk - University of Florida',
    description: 'Classic Buffett speech on investing and business principles',
    youtubeId: '2a9Lx9J8uSs',
    speaker: 'Buffett',
    year: 1998,
    category: 'speech'
  },
  {
    id: 'buffett-2023-meeting',
    title: '2023 Berkshire Hathaway Annual Meeting',
    description: 'Full recording of the 2023 shareholders meeting',
    youtubeId: 'qvEcWJaE-6g',
    speaker: 'Both',
    year: 2023,
    category: 'annual-meeting'
  },
  {
    id: 'munger-caltech',
    title: 'Charlie Munger - Caltech Distinguished Lecture',
    description: 'Munger on mental models and decision making',
    youtubeId: '7dO6XuCJdNM',
    speaker: 'Munger',
    year: 2008,
    category: 'speech'
  },
  {
    id: 'buffett-advice-young',
    title: 'Warren Buffett\'s Advice to Young People',
    description: 'Life and career advice for the next generation',
    youtubeId: 'S8A0w_Ol4oU',
    speaker: 'Buffett',
    year: 2019,
    category: 'interview'
  },
  {
    id: 'buffett-gates',
    title: 'Warren Buffett and Bill Gates - Columbia Business School',
    description: 'Two billionaires discuss business, philanthropy, and friendship',
    youtubeId: 'WaKBqAZbCxw',
    speaker: 'Buffett',
    year: 2017,
    category: 'interview'
  }
]

const Videos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | Video['category']>('all')
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<'all' | Video['speaker']>('all')

  const filteredVideos = videos.filter(video => {
    const categoryMatch = selectedCategory === 'all' || video.category === selectedCategory
    const speakerMatch = selectedSpeaker === 'all' || video.speaker === selectedSpeaker
    return categoryMatch && speakerMatch
  })

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'annual-meeting', label: 'Annual Meetings' },
    { id: 'interview', label: 'Interviews' },
    { id: 'speech', label: 'Speeches' },
    { id: 'documentary', label: 'Documentaries' }
  ]

  const speakers = [
    { id: 'all', label: 'All Speakers' },
    { id: 'Buffett', label: 'Warren Buffett' },
    { id: 'Munger', label: 'Charlie Munger' },
    { id: 'Both', label: 'Both' }
  ]

  return (
    <div className="videos">
      <div className="videos-header">
        <h2>Video Library</h2>
        <p className="videos-subtitle">
          Essential videos featuring Warren Buffett and Charlie Munger's wisdom on investing, business, and life
        </p>
      </div>

      <div className="videos-filters">
        <div className="filter-group">
          <label>Category:</label>
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
          <label>Speaker:</label>
          <div className="filter-buttons">
            {speakers.map(speaker => (
              <button
                key={speaker.id}
                className={`filter-btn ${selectedSpeaker === speaker.id ? 'active' : ''}`}
                onClick={() => setSelectedSpeaker(speaker.id as any)}
              >
                {speaker.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="videos-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <div className="video-meta">
                <span className={`speaker-tag ${video.speaker.toLowerCase()}`}>
                  {video.speaker === 'Both' ? 'Buffett & Munger' : video.speaker}
                </span>
                <span className="video-year">{video.year}</span>
              </div>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="videos-note">
        <p>
          <strong>Note:</strong> These videos are embedded from YouTube and remain the property of their respective owners. 
          This collection is curated for educational purposes only.
        </p>
      </div>
    </div>
  )
}

export default Videos