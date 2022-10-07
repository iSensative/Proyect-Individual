import styles from "./landingpage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/Pixel-Art.mp4";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.botoncito}>
            <Link to="/home">
        <button className={styles.botonLanding}><span>Go to Home</span></button>
      </Link>
      </div>
    </div>
  );
}
