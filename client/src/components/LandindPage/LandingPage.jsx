import styles from './landingpage.module.css'
import React from 'react'
import{Link}from 'react-router-dom'
import video from '../../assets/falcon.mp4'



export default function LandingPage(){
return(
<div className={styles.landingvideo}>
  <div>
    <Link to='/home'>
    <button className={styles.botonLanding}><span>Go to Home</span></button>
    </Link>
    </div>
<video loop autoPlay muted>
  <source src={video} type="video/mp4" />
</video>
<audio src=""></audio>
</div>

)    
}