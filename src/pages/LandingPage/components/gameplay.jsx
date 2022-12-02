import React, { useRef } from 'react'
import '../css/stories.css'
import { gameplay } from '../../../dummyText/data'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const GamePlay = () => {
  const ref = useRef()

  const bg_img = 'https://playlostglitches.com/wp-content/uploads/2022/05/char.png'
  const layer_img = 'https://playlostglitches.com/wp-content/uploads/2022/05/3_3.png'

  return (
    <>
      <section className='section-content'>
        <div className="container w-85">
          <div className='glitched-text'>
            <h2 className="glitchtitle col-12 text-uppercase">Game Play</h2>
          </div>
          <h2 className="title outline marquee">
            <div className="outlined-text text-uppercase" id="outline-text">RPG meets deck building</div></h2>
          <div className="row">

            <div className="description col-lg-6 col-sm-12">
              <div>
                <p>{gameplay.text1}</p>
                <p>{gameplay.text2}</p>
                <p>{gameplay.text3}</p>
                <p><strong>{gameplay.text4}</strong></p>
                <p>{gameplay.text5}</p>
                <p>{gameplay.text5}</p>

              </div>
            </div>
            <div className="d-flex image col-md-6 col-sm-12">

              <Parallax pages={1.4} ref={ref} style={{ height: 720 }}>
                <ParallaxLayer offset={0} speed={0.1} className='parallax-img-1' style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover', width: 500, height: 500 }}>
                </ParallaxLayer>

                <ParallaxLayer offset={0.4} speed={0.3} className='parallax-img-2' style={{ backgroundImage: `url(${layer_img})`, backgroundSize: 'cover', width: 500, height: 500 }} />
                <ParallaxLayer offset={0.8} speed={0.1} >
                  <button className='btn dark-btn text-uppercase fs-3 mt-5'>Join the battle</button>
                </ParallaxLayer>
              </Parallax>

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