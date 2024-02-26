import React from 'react'

function Footer() {
  return (
    <>
      <div className=' row mt-5  bgimg'>

        <div className="col-lg-2">
          <img className='w-75' src="https://cdn.skoda-storyboard.com/2016/11/09-SKODA_Logo_sRGB_300mm_L.jpg" alt="" />
        </div>

        <div className="col-lg-8"></div>



        <div className="col-lg-2 d-flex justify-content-around align-items-center   ">
          <a href=""><i className="fa-brands fa-facebook text-dark  i"></i></a>
          <a href=""><i className="fa-brands fa-instagram text-dark i"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter text-dark i"></i></a>
          <a href=""><i className="fa-brands fa-youtube text-dark i"></i></a>
        </div>

      </div>
      <p className='text-center mt-3 text-dark'>© ŠKODA AUTO  2018 - 2023</p>
    </>
  )
}

export default Footer