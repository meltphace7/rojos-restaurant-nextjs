import React from 'react'
import classes from './Welcome.module.css';

import Image from 'next/image';

import taco from '../../../public/imgs/tacos-4.jpg';

import burrito from "../../../public/imgs/burrito-1.jpg";

import nachos from "../../../public/imgs/nachos.jpg";

const Welcome:React.FC = () => {
    return (
      <div className={classes.welcome}>
        <h2>
          <span className={classes["highlight-2"]}>Welcome</span> to{" "}
          <span className={classes.highlight}>Rojo's!</span>
        </h2>
        <div className={classes.accent}></div>
        <p>
          Welcome to Rojo's, where authenticity meets flavor! Indulge in our
          vibrant Mexican cuisine crafted from scratch using the freshest
          ingredients. Experience the essence of tradition in every bite. ¡Buen
          provecho!
        </p>
        <div className={classes["imgs"]}>
          <div className={classes["img-container"]}>
            <Image src={taco} alt="tacos" />
          </div>
          <div className={classes["img-container"]}>
            <Image src={burrito} alt="burrito" />
          </div>
          <div className={classes["img-container"]}>
            <Image src={nachos} alt="nachos" />
          </div>
        </div>
      </div>
    );
}

export default Welcome
