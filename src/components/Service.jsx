import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Service = () => {
  return (
    <div className="service">
        <Carousel infiniteLoop autoPlay showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}>
            {/* this is carousel it is used to bind up the picture in a  proper manner so that view will be good here, show arrows  is false because we want to set the interval in 
            which the page will automatically move on without depend upon anyone to move it manually, showthumb is false in order to hide the small photos present in the bottom*/}
        {/* // showIndicators={false} */}
            <div>
                <img src={img1} alt="Item1"/>
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2"/>
                <p className="legend">peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Service