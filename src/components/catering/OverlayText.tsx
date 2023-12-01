import React, { useEffect, useState } from "react";
import classes from "./OverlayText.module.css";
import Image from "next/image";
import burrito from "../../../public/imgs/burrito-1.jpg";

const OverlayText: React.FC = () => {
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
          <span className={classes["highlight-2"]}>Perfect&nbsp;</span>
          For Your <span className={classes["highlight-1"]}>Fiesta!</span>
        </h1>
      </div>
      <Image
        src={burrito}
        alt="Delicious Burrito!"
        style={{ transform: `translateY(${240 - offsetY * 0.05}px)` }}
      />
    </section>
  );
};

export default OverlayText;
