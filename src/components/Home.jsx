import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id="home">
<main>
<h1>MetaMan</h1>
<p>Solution to all your probelms</p>
</main>
</div>
<div className='home2'>
    <img src={vg} alt="Graphics"/>
    <div>
        <p>
            we are the one in this world who can provide all the solution to the tech related probelm which you are faced or going to face.
        </p>
    </div>

</div>
<div className='home3' id="About">
  <div>
  <h1>Who we are</h1>
  <p>Hello I am Mantosh Pattanayak I am the owner of this company. To be honest I worked on lot of the projects but actually I dont know  this start up will grow fast or not.</p>
  </div>
  </div>
  <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
       animationDelay:"0.5s",
        }}>
          {/* here the animation delay is given in order to implement the animation with that given delay */}
     <AiFillGoogleCircle/>
     <p>Google</p></div>

     <div style={{
       animationDelay:"0.3s",
        }}>
     <AiFillAmazonCircle/>
     <p>Amazon</p></div>

     <div style={{
       animationDelay:"0.7s",
        }}>
     <AiFillInstagram/>
     <p>Instagram</p></div>
     </article>
     
    </div>
  </div>
</>

  )
}

export default Home