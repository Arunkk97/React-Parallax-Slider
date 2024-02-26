import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';





function SliderImage() {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>

<div  className="slider-container ">
      <Slider {...settings}>
        <div>
          <img  className='w-100 sImg' src="https://www.vandi4u.com/wp-content/uploads/2022/02/www.vandi4u.com_Skoda-Slavia-1.0-TSI-launched-in-India-at-Rs-10.69-lakh-scaled.jpg" alt="" />
        </div>
        <div>
        <img className='w-100 sImg' src="https://pilotonwheels.in/wp-content/uploads/2023/11/Skoda-Kushaq-Elegance-Edition-launched-in-India.jpeg" alt="" />
        </div>
        <div>
        <img className='w-100 sImg' src="https://cdn.motor1.com/images/mgl/W8GYMg/s3/2024-skoda-kodiaq-final-rendering.jpg" alt="" />
        </div>
        <div>
        <img className='w-100 sImg' src="https://images.news18.com/ibnlive/uploads/2021/11/skoda-slavia-feature-163739235216x9.jpg" alt="" />
        </div>
        <div>
        <img className='w-100 sImg' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Image_3_1200x768.jpeg?size=690:388" alt="" />
        </div>
        <div>
        <img className='w-100 sImg' src="https://imgd.aeplcdn.com/1056x594/n/76neh4a_1520267.jpg?q=80" alt="" />
        </div>
      </Slider>
    </div>
    
    </>
  )
}

export default SliderImage