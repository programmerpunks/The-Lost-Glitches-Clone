import React from 'react'
import { Card } from '../../../layouts/card'
import '../css/gallery.css'

export const Gallery = () => {
  const img1 = 'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_3_v2.png'
  const images = [
    'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_3_v2.png',
    'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_1_v2.png',
    'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_2_v2.png',
    'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_4_v2.png'
  ]
  const title = 'Atvero accusamus'
  const text = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
  return (
    <>
      <section className='section-container'>
        <div class="container w-85">
          <div class="outline marquee" >
            <div class="outlined-text text-uppercase">play with friends</div>
          </div>

          <div class="cards row text-center">
            <Card image={images[0]} heading={title} context={text} />
            <Card image={images[1]} heading={title} context={text} />
            <Card image={images[2]} heading={title} context={text} />
            <Card image={images[3]} heading={title} context={text} />
          </div>
        </div>
      </section>
      <div className="d-flex after-container mt-5">
        <div className="after"></div>
      </div></>
  )
}
