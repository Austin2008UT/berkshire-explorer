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
    title: 'Warren Buffett - HBO Documentary Trailer',
    description: 'Becoming Warren Buffett - An intimate look at Buffett\'s life and philosophy',
    youtubeId: 'Fvpl-OzJpYg',
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
    id: 'buffett-2023-meeting',
    title: '2023 Berkshire Hathaway Annual Meeting Highlights',
    description: 'Key moments from the annual shareholders meeting',
    youtubeId: 'Ygfuu_gOHZE',
    speaker: 'Both',
    year: 2023,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-advice',
    title: 'Warren Buffett\'s Best Investment Advice',
    description: 'Essential investment principles from the Oracle of Omaha',
    youtubeId: 'Ep35V7ejLGI',
    speaker: 'Buffett',
    year: 2022,
    category: 'interview'
  },
  {
    id: 'munger-wisdom',
    title: 'Charlie Munger - Timeless Wisdom Compilation',
    description: 'Best of Charlie Munger\'s investment and life advice',
    youtubeId: 'i0buHRSCiuA',
    speaker: 'Munger',
    year: 2021,
    category: 'interview'
  },
  {
    id: 'buffett-value',
    title: 'Warren Buffett on Value Investing',
    description: 'Buffett explains his approach to finding undervalued companies',
    youtubeId: 'GFj2SMa27fI',
    speaker: 'Buffett',
    year: 2019,
    category: 'interview'
  },
  {
    id: 'munger-interview',
    title: 'Charlie Munger on Investing and Decision Making',
    description: 'Munger discusses mental models and rational thinking',
    youtubeId: 'DpLCvlB0ebw',
    speaker: 'Munger',
    year: 2019,
    category: 'interview'
  },
  {
    id: 'buffett-florida',
    title: 'Warren Buffett MBA Talk - University of Florida',
    description: 'Classic Buffett speech on investing and business principles',
    youtubeId: '2MHIcabnjrA',
    speaker: 'Buffett',
    year: 1998,
    category: 'speech'
  },
  {
    id: 'buffett-2022-meeting',
    title: '2022 Berkshire Hathaway Annual Meeting Highlights',
    description: 'Important moments from the 2022 shareholders meeting',
    youtubeId: '9H0F4BS2dYE',
    speaker: 'Both',
    year: 2022,
    category: 'annual-meeting'
  },
  {
    id: 'munger-daily-journal',
    title: 'Charlie Munger at Daily Journal Annual Meeting',
    description: 'Munger\'s insights on investing and current events',
    youtubeId: 'XkN8NlMQUEQ',
    speaker: 'Munger',
    year: 2020,
    category: 'annual-meeting'
  },
  {
    id: 'buffett-principles',
    title: 'Warren Buffett\'s 10 Rules for Success',
    description: 'Key principles that guided Buffett\'s investment career',
    youtubeId: 'iZTGvOmBJ0E',
    speaker: 'Buffett',
    year: 2018,
    category: 'interview'
  },
  {
    id: 'buffett-economy',
    title: 'Warren Buffett on the American Economy',
    description: 'Buffett\'s optimistic view on America\'s economic future',
    youtubeId: 'OcmMsGGQ_eg',
    speaker: 'Buffett',
    year: 2021,
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