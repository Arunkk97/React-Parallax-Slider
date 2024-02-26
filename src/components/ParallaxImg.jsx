import React from 'react'
import { Parallax } from 'react-parallax'
import SliderImage from './SliderImage'
import CardImg from './CardImg'
 




function ParallaxImg() {
    return (
        <>

            <Parallax
                className="image"
                blur={0}
                bgImage="https://wallpapers.com/images/hd/skoda-wallpaper-odqh7133mj2aefuu.jpg"
                strength={800}
                bgImageStyle={{ height:"100%",width:'100%' }}
            >
                <div className="content mt-5">
                    {/* <span className="img-text">Request a Test Drive</span> */}
                    <p className='btn p-3  text-light'><i className="fa-solid fa-phone "> &nbsp; Request a Test Drive</i></p>
                </div>
            </Parallax>

            <div  className="text-box">
                <h1 className='fw-bolder mb-5 text-center'>Explore Our Range</h1>
                <SliderImage/>
                
            </div>

            <Parallax
                className="image"
                blur={0}
                bgImage="https://cdn.skoda-storyboard.com/2021/11/H2-1920x744.jpg"
                strength={800}
                bgImageStyle={{ height:"100%",width:'100%' }}
            >
               
            </Parallax>

            <div className="text-box">
                <h1 className='fw-bolder mb-5 text-center'>Latest Awards</h1>
                <CardImg/>
            </div>

            <Parallax
                className="image"
                blur={0}
                bgImage="https://imgd.aeplcdn.com/1280x720/n/cw/ec/146789/skoda-kushaq-right-front-three-quarter0.jpeg?isig=0"
                strength={800}
                bgImageStyle={{height:"100%",width:'100%' }}
            >
               
            </Parallax>
        </>
    )
}

export default ParallaxImg