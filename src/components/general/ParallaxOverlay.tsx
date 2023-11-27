import React, { useEffect, useState } from "react";
import classes from "./ParallaxOverlay.module.css";
import Image from "next/image";

interface FeatureOverlayProps {
    title: string;
    word: string;
    image: any;
}

const FeatureOverlay: React.FC<FeatureOverlayProps> = (props) => {

  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // const parts = props.title.split(props.word);
    
  return (
    <section className={`${classes["feature-overlay"]}`}>
      <div className={classes["feature-box__text-container"]}>
        <h1>
          {/* {parts.map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && ( // Apply styles to the target word
                <span className={classes.highlight}>
                  {props.word}
                </span>
              )}
              {part}
            </React.Fragment>
          ))} */}
          {props.title}
        </h1>
      </div>
      <Image
        src={props.image}
        alt="city scape"
        style={{ transform: `translateY(${240 - offsetY * 0.05}px)` }}
      />
    </section>
  );
};

export default FeatureOverlay;
