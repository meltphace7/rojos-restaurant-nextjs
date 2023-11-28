import React, { useEffect, useState } from "react";
import classes from "./OverlayText.module.css";
import Image from "next/image";
import enchiladas from "../../../public/imgs/enchiladas-1.jpg";

const OverlayTextTwo: React.FC = () => {
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
          Outstanding <span className={classes["highlight-2"]}>Taste</span>
        </h1>
      </div>
      <Image
        src={enchiladas}
        alt="Delicious plate of enchiladas"
        style={{ transform: `translateY(${240 - offsetY * 0.05}px)` }}
        className={classes["image-two"]}
      />
    </section>
  );
};

export default OverlayTextTwo;
