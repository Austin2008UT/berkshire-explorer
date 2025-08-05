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
    title: 'Warren Buffett - HBO Documentary',
    description: 'Becoming Warren Buffett - An intimate look at Buffett\'s life, career, and philosophy',
    youtubeId: 'PB5krSvFAPg',
    speaker: 'Buffett',
    year: 2017,
    category: 'documentary'
  },
  {
    id: 'munger-psychology',
    title: 'Charlie Munger - The Psychology of Human Misjudgment',
    description: 'Munger\'s famous Harvard speech on 25 cognitive biases',
    youtubeId: 'pqzcCfUglws',
    speaker: 'Munger',
    year: 1995,
    category: 'speech'
  },
  {
    id: 'buffett-2024-meeting',
    title: '2024 Berkshire Hathaway Annual Meeting',
    description: 'Full annual shareholders meeting with Q&A session',
    youtubeId: '8wBHdmJYpZs',
    speaker: 'Both',
    year: 2024,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-cnbc-2023',
    title: 'Warren Buffett Interview - CNBC 2023',
    description: 'Discussing markets, investing philosophy, and the economy',
    youtubeId: 'qRSeU7TfJGA',
    speaker: 'Buffett',
    year: 2023,
    category: 'interview'
  },
  {
    id: 'munger-2021-daily-journal',
    title: 'Charlie Munger - 2021 Daily Journal Meeting',
    description: 'Munger\'s insights on investing, life, and rational thinking',
    youtubeId: 'MYDDwBGfJzg',
    speaker: 'Munger',
    year: 2021,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-gates-columbia',
    title: 'Warren Buffett & Bill Gates at Columbia Business School',
    description: 'Discussion on business, philanthropy, and life lessons',
    youtubeId: 'CfiKLnt7cRk',
    speaker: 'Buffett',
    year: 2009,
    category: 'speech'
  },
  {
    id: 'munger-usc-speech',
    title: 'Charlie Munger USC Law School Commencement Speech',
    description: 'Munger\'s prescription for guaranteed misery and how to avoid it',
    youtubeId: '0xuqtzglcBs',
    speaker: 'Munger',
    year: 2007,
    category: 'speech'
  },
  {
    id: 'buffett-florida-1998',
    title: 'Warren Buffett MBA Talk - University of Florida',
    description: 'Classic Buffett talk on investing and business principles',
    youtubeId: '2MHIcabnjrA',
    speaker: 'Buffett',
    year: 1998,
    category: 'speech'
  },
  {
    id: 'buffett-2009-crisis',
    title: 'Warren Buffett on the 2008 Financial Crisis',
    description: 'Reflections on the crisis and lessons learned',
    youtubeId: 'EKG_cXp4XNI',
    speaker: 'Buffett',
    year: 2009,
    category: 'interview'
  },
  {
    id: 'munger-lattice',
    title: 'Charlie Munger - Latticework of Mental Models',
    description: 'Explaining the importance of multidisciplinary thinking',
    youtubeId: 'T8hbO8cp-sM',
    speaker: 'Munger',
    year: 2019,
    category: 'interview'
  },
  {
    id: 'buffett-2019-meeting',
    title: '2019 Berkshire Hathaway Annual Meeting - Full Q&A',
    description: 'Six hours of wisdom from Buffett and Munger',
    youtubeId: 'xp-WESg5MgI',
    speaker: 'Both',
    year: 2019,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-quick-wit',
    title: 'Warren Buffett - Best Moments of Wit & Wisdom',
    description: 'Compilation of Buffett\'s most memorable quotes and jokes',
    youtubeId: '1E5JMk-HMXY',
    speaker: 'Buffett',
    year: 2020,
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