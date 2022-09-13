import styles from './landingpage.module.css'
import React from 'react'
import{Link}from 'react-router-dom'
import video from '../../assets/video.mp4'



export default function LandingPage(){
return(
<div>
    <Link to='/home'>
    <button className={styles.botoncito}>Go</button>
    </Link>
<video loop autoPlay muted>
  <source src={video} type="video/mp4" />
</video>
</div>

)    
}