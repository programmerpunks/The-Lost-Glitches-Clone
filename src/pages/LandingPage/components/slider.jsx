import React from 'react'
import '../css/slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { slidesData } from '../../../dummyText/slidesdata';

function SampleNextArrow({ currentSlide, slideCount, ...props }) {

  return (
    <IoIosArrowForward size={30} color='#c33d3a' className='slider-button' {...props} style={{ backgroundColor: '#F5EFE7', width: 30, height: 30, borderRadius: 2 }} />

  );
}

function SamplePrevArrow(props) {
  return (
    <IoIosArrowBack size={30} color='#c33d3a' className='slider-button' {...props} style={{ backgroundColor: '#F5EFE7', width: 30, height: 30, borderRadius: 2 }} />

  );
}



export const GallerySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    autoplay: false,
    cssEase: 'linear',
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "-15px",
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "-8px",
          leftPadding: "40px",
          slidesToScroll: 1
        }
      },

    ],
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="slider-conatiner">
      <div className='container p-4'>
        <h2 className="glitchtitle col-md-5 col-sm-12 text-uppercase text-left mb-3" style={{ color: '#F5EFE7' }}>The Syndicated</h2>
        <div className="title outline marquee ms-4 mb-5">
          <div className="outlined-text text-uppercase" id="outline-text">Choose your play style</div>
        </div>
        <Slider {...settings} className='px-5'>

          {slidesData.map((item, index) => (
            <>
              <div className='col-md-8 col-sm-6 container'>
                <img src={item.img} alt='' className='img-fluid w-65 slider-img' />

                <div class="d-flex slider-animated-arrow mt-3">
                  <h4 className='fs-5'>{item.title}</h4>
                  <div className='d-flex animated-content'>
                    <p class="text">more info</p>
                    <IoIosArrowForward size={12} className='ms-1 mt-1' color='#c33d3a' />
                  </div>

                </div>
              </div>
            </>
          ))}

        </Slider>
      </div>
      <div className="d-flex after-container">
        <div className="after"></div>
      </div>
    </section>
  );
}
