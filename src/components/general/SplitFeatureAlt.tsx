import React from "react";
import classes from "./SplitFeature.module.css";
import Link from "next/link";
import Image from "next/image";

interface SplitFeatureProps {
  title: string;
  text: string;
  path: string;
  button: string;
  image: any;
  bgImage: any;
}

const SplitFeatureAlt: React.FC<SplitFeatureProps> = (props) => {
  return (
    <section className={classes["split-feature-alt"]}>
      <div className={classes["split-feature__img-container"]}>
        <Image src={props.image} alt="" unoptimized />
      </div>
      <div className={classes["split-feature__text-container"]}>
        <Image
          className={classes.background}
          src={props.bgImage}
          alt=""
          unoptimized
        />
        <div className={classes["split-feature__text-container-overlay"]}>
          <h2>{props.title}</h2>
          <div className={classes.accent}></div>
          <p>{props.text}</p>
          <Link className="button" href={props.path}>
            {props.button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureAlt;
