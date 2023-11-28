import React, { useEffect, useState } from "react";
import classes from "./OverlayText.module.css";
import Image from "next/image";
import nachos from '../../../public/imgs/nachos.jpg';

const OverlayTextOne: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${classes["feature-overlay"]}`}>
      <div className={classes["feature-box__text-container"]}>
        <h1>
          Made <span className={classes['highlight-1']}>Fresh</span>
        </h1>
      </div>
      <Image
        src={nachos}
        alt="Delicious plate of nachos"
        style={{ transform: `translateY(${240 - offsetY * 0.05}px)` }}
        className={classes["image-one"]}
      />
    </section>
  );
};

export default OverlayTextOne;
