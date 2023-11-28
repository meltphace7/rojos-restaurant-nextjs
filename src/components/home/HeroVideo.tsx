import React from 'react'
import classes from './HeroVideo.module.css'

const HeroVideo:React.FC = () => {
    return (
      <header className={classes["video-header"]}>
        <video
          src={require("../../../public/videos/tacos.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className={classes["bg-video"]}
        />
        <div className={classes["bg-video__overlay"]}>
          <div className={classes["hero-text"]}>
            <h1>ROJO&apos;S MEXICAN CUISINE</h1>
            <h2>Es Tiempo para Fiesta!</h2>
          </div>
        </div>
      </header>
    );
}

export default HeroVideo
