import React from 'react'
import '../css/news.css'
import { IoIosArrowForward } from 'react-icons/io'

export const News = () => {
  const images = ['https://playlostglitches.com/wp-content/uploads/2022/09/Small-News4.jpg',
    'https://playlostglitches.com/wp-content/uploads/2022/08/Small-News3.jpg',
    'https://playlostglitches.com/wp-content/uploads/2021/11/Play2Earn-Game-Modes.png']
  const dates = ['September 6, 2022', 'August 12, 2022', 'December 3, 2021']
  return (
    <section class="newscontainer">
      <div class="container w-85 mt-5">
        <div class="row gallery">

          {images.map((item, index) => (
            <div className="col-lg-6 col-sm-12 mb-5" >
              <div className="news-item">
                <a href="http://playlostglitches.com/?p=1">
                  <div className="image"> <img alt='' src={item} /></div>
                  <div className="content mt-4">
                    <div className="info m-1">
                      <p>• {dates[index]} •</p>
                      <div className="title mb-4"> The Story of Bernadette &amp; Hagbard. </div>
                      <p> Bernadette Gleason was born into an industrious family tribe of salvagers, engineers and mechanics. She grew up in one of the large post-industrial megacities of the world, which like so many others, had fallen into ruin and disrepair after the great cataclysm and the “RE:initialization”.  </p>

                      <div class="animated-arrow mt-3">
                        <p class="text text-uppercase">read article</p>
                        <IoIosArrowForward size={12} className='arrow ms-1' color='#c33d3a' />
                      </div>

                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

