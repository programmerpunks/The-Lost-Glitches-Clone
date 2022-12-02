import React from 'react'
import '../css/screenshots.css'
import { CardImg } from '../../../layouts/card-img'

export const Screenshots = () => {
  const images = ['https://playlostglitches.com/wp-content/uploads/2022/06/Arena2_fix3.png', 'https://playlostglitches.com/wp-content/uploads/2022/11/spirit-forager-wallpaper-1920.jpg', 'https://playlostglitches.com/wp-content/uploads/2022/06/BGTLG_Trailler_Frame01_separated.png']
  return (
    <section class="darkbox">
      <div className='row'>
        <div className='col-12'>
          <div class="container p-4">
            <h2 className='pt-3 pb-3'> Screenshots </h2>

            <div class="row darkbox-content">
              {images.map((item) => (
                <CardImg image={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
