import React from 'react'
import { Banner } from './banner'
import { Stories } from './stories'
import { Gallery } from './gallery'
import { GamePlay } from './gameplay'
import { GallerySlider } from './slider'
import { Community } from './community'
import { Screenshots } from './screenshots'
import { News } from './news'
import { Footer } from '../../../layouts/Footer/footer'

export const Home = () => {
  return (
    <main className='main'>
      <Banner />
      <Stories />
      <Gallery />
      <GamePlay />
      <GallerySlider />
      <Community />
      <Screenshots />
      <News />
      <Footer />
    </main>
  )
}
