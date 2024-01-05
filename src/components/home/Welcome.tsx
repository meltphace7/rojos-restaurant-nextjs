import React, {useEffect, useState} from 'react'
import classes from './Welcome.module.css';
import Image from 'next/image';
import taco from '../../../public/imgs/tacos-4.jpg';
import burrito from "../../../public/imgs/burrito-1.jpg";
import nachos from "../../../public/imgs/nachos.jpg";
import { useInView } from "react-intersection-observer";

const Welcome: React.FC = () => {
  // Intersection Observer pop-up / fade animation
  const [animateOne, setAnimateOne] = useState<boolean>(false);
  const [animateTwo, setAnimateTwo] = useState<boolean>(false);
  const [animateThree, setAnimateThree] = useState<boolean>(false);

  const options = { root: null, threshold: 0.2 };

  const { ref: sectionRef, inView: sectionIsVisible } = useInView(options);

  useEffect(() => {
    console.log()
    if (!sectionIsVisible) return;
      const timeoutOne = setTimeout(() => setAnimateOne(true), 0); 
      const timeoutTwo = setTimeout(() => setAnimateTwo(true), 100); 
      const timeoutThree = setTimeout(() => setAnimateThree(true), 200); 
    
    return () => {
      clearTimeout(timeoutOne);
      clearTimeout(timeoutTwo);
      clearTimeout(timeoutThree);
    }
  }, [sectionIsVisible]);
 

  return (
    <div className={classes.welcome}>
      <h2>
        <span className={classes["highlight-2"]}>Welcome</span> to{" "}
        <span className={classes.highlight}>Rojo&apos;s!</span>
      </h2>
      <div className={classes.accent}></div>
      <p>
        Welcome to Rojo&apos;s, where authenticity meets flavor! Indulge in our
        vibrant Mexican cuisine crafted from scratch using the freshest
        ingredients. Experience the essence of tradition in every bite. ¡Buen
        provecho!
      </p>
      <div ref={sectionRef} className={classes["imgs"]}>
        <div
          className={
            animateOne
              ? `${classes["img-container"]}`
              : `${classes["img-container"]} ${classes.hidden} `
          }
        >
          <Image src={taco} alt="tacos" unoptimized />
        </div>
        <div
          className={
            animateTwo
              ? `${classes["img-container"]}`
              : `${classes["img-container"]} ${classes.hidden} `
          }
        >
          <Image src={burrito} alt="burrito" unoptimized />
        </div>
        <div
          className={
            animateThree
              ? `${classes["img-container"]}`
              : `${classes["img-container"]} ${classes.hidden} `
          }
        >
          <Image src={nachos} alt="nachos" unoptimized />
        </div>
      </div>
    </div>
  );
}

export default Welcome
