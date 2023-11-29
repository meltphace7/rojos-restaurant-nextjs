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
          <div className={classes.logo}>
            <h1 className={classes["logo-top"]}>Rojo&apos;s</h1>
            <h1 className={classes["logo-bottom"]}>Mexican Cuisine</h1>
          </div>
        </div>
      </header>
    );
}

export default HeroVideo
