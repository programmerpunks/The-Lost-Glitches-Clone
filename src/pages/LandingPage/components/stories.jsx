import React, { useRef } from 'react'
import '../css/stories.css'
import '../css/glitches.css'
import { stories } from '../../../dummyText/data'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const Stories = () => {
  const ref = useRef()

  const bg_img = 'https://playlostglitches.com/wp-content/uploads/2022/06/background_cm.png'
  const layer_img = 'https://playlostglitches.com/wp-content/uploads/2022/05/35.png'

  return (
    <>
      <section className='section-content'>
        <div className="container w-85">
          <div className='glitched-text mb-5'>
            <h1>Story</h1>
            <h1>Story</h1>
            <h1>Story</h1>
          </div>
          <div className="title outline marquee">
            <div className="outlined-text text-uppercase" id="outline-text">fight for your memories</div></div>

          <div className="row">
            <div className="image col-md-6 col-lg-6 col-sm-12">

              <Parallax pages={1.4} ref={ref}>
                <ParallaxLayer offset={0} speed={0.1} className='parallax-img-1' style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover' }} />

                <ParallaxLayer offset={0.2} speed={0.3} className='parallax-img-2' style={{ backgroundImage: `url(${layer_img})`, backgroundSize: 'cover' }} />
                <ParallaxLayer offset={0.9} speed={0.1} >
                  <button className='btn dark-btn text-uppercase fs-3 mt-5'>Join the battle</button>
                </ParallaxLayer>

              </Parallax>

            </div>
            <div className="description col-lg-6 col-sm-12">
              <div>
                <p>{stories.text1}</p>
                <p>{stories.text2}</p>
                <p>{stories.text3}</p>
                <p><strong>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <div className="d-flex after-container mt-5">
        <div className="after"></div>
      </div>
    </>
  )
}