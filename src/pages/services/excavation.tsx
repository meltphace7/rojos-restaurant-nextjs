import React, { useState, useEffect } from "react";
import classes from "@/styles/Service.module.css";
import Image from "next/image";
import excavationOne from "../../../public/imgs/excavation-2.jpg";
import excavationTwo from "../../../public/imgs/excavation-3.jpg";
import excavationThree from "../../../public/imgs/excavation-4.jpg";

const excavation: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={classes["service-page"]}>
      <header
        className={`${classes["service-hero"]} ${classes["excavation-hero"]}`}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={classes["service-hero-overlay"]}>
          <div className={classes["hero-text"]}>
            <h1>Excavation</h1>
            <h2>Level Playing Field</h2>
          </div>
        </div>
      </header>
      <section className={classes["service-section"]}>
        <h1>Working the Soil</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          pariatur nihil recusandae voluptates soluta rem, id mollitia quisquam,
          quam cum dolores assumenda ullam a itaque autem dolore fugiat
          temporibus ipsam ipsa suscipit laudantium laborum nisi! Iure
          repudiandae, quas, suscipit itaque optio nihil eaque ipsum possimus,
          sunt dolor voluptates tenetur quisquam explicabo magni vel veniam.
          Aliquam delectus fuga voluptas dolorum asperiores. Repudiandae,
          praesentium maiores! Quidem quis fugit ipsam beatae assumenda sequi a,
          voluptatum veniam dignissimos repellendus non alias laboriosam ad
          sint.
        </p>
        <div className={classes["service-section__imgs"]}>
          <div className={classes["service-section__img-container"]}>
            <Image src={excavationOne} alt="Nice remodeled kitchen" />
          </div>
          <div className={classes["service-section__img-container"]}>
            <Image src={excavationTwo} alt="Nice remodeled bathroom" />
          </div>
          <div className={classes["service-section__img-container"]}>
            <Image src={excavationThree} alt="Nice remodeled kitchen" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default excavation;
