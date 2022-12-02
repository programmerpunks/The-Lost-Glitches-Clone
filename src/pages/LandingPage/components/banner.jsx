import React, { useState } from 'react'
import '../css/banner.css'

export const Banner = () => {
  const [play, setPlay] = useState(false)
  return (
    <div className='video-container'>
      <div className='content'>
        <div className='bg-video'>
          <video autoPlay loop controls={play} onloadstart="this.volume=0.5" src="https://playlostglitches.com/wp-content/uploads/2022/05/teaser.mp4 " type="video/mp4">         
          </video>

        </div>
        <div class="trailer-button">
          <button class="btn btn-primary text-uppercase" onClick={() => setPlay(!play)}>
            watch trailer
          </button>
        </div>

      </div>
    </div>
  )
}
