import React, {useState} from 'react'
import classes from './Slider.module.css';
import Image from 'next/image';

import prevIcon from "../../../public/icons/chevron-back-outline.svg";
import nextIcon from "../../../public/icons/chevron-forward-outline.svg";

import tacoOne from "../../../public/imgs/tacos-1.jpg";
import tacoTwo from "../../../public/imgs/tacos-2.jpg";
import tacoThree from "../../../public/imgs/tacos-1.jpg";
import tacoFour from "../../../public/imgs/tacos-2.jpg";

import nachos from "../../../public/imgs/nachos.jpg";
import platter from "../../../public/imgs/platter.jpg";
import fajitas from "../../../public/imgs/fajitas-1.jpg";
import enchiladas from "../../../public/imgs/enchiladas-1.jpg";


  interface sliderProps {
    images: any[];
  }

const Slider: React.FC<sliderProps> = (props) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  console.log('imageIndex', imageIndex)

    const prevSlideHandler = function () {
      setImageIndex((prevIndex) => {
        if (prevIndex === 0) {
          return props.images.length - 1;
        } else {
          return prevIndex - 1;
        }
      });
    };
  
  const nextSlideHandler = function () {
    setImageIndex(prevIndex => {
      if (prevIndex === props.images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    })
  }

  console.log(props.images)

        
    return (
      <section className={classes["slider-component"]} aria-label="Image Slider">
        <div className={classes.slider}>
          {props.images.map((img: any, i: number) => {
            return (
              <Image
                key={i}
                src={img}
                alt="photo"
                style={{ transform: `translateX(${-100 * imageIndex}%)` }}
                aria-hidden={imageIndex !== i}
              />
            );
          })}
        </div>
        <div className={classes["slider-controls"]}>
          <button onClick={prevSlideHandler} aria-label="View previous slide">
            <Image src={prevIcon} alt="previous slide button" aria-hidden/>
          </button>
          <button onClick={nextSlideHandler} aria-label="View previous slide">
            <Image src={nextIcon} alt="next slide button" aria-hidden/>
          </button>
        </div>
        <div className={classes.dots}>
          {props.images.map((_: any, index: number) => {
            return (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className={
                  index === imageIndex
                    ? `${classes.dot} ${classes["dot--active"]}`
                    : classes.dot
                }
                aria-label={`View image ${index + 1}`}
              ></button>
            );
          })}
        </div>
      </section>
    );
}

export default Slider;
