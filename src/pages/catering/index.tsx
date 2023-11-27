import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import classes from "@/styles/Catering.module.css";
import Image from 'next/image';

import table from '../../../public/imgs/meal.jpg';
import platter from "../../../public/imgs/platter.jpg";
import tacos from "../../../public/imgs/tacos-1.jpg";

import enchildas from '../../../public/imgs/enchiladas-1.jpg'
import fajitas from "../../../public/imgs/burrito-1.jpg";

import FeatureOverlay from '../../components/general/ParallaxOverlay';

const FaqPage: React.FC = () => {
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
    <Fragment>
      <Head>
        <title>Catering | Rojo's</title>
        <meta name="description" content="Catering page for Rojo's" />
      </Head>
      <div className={classes["catering-page"]}>
        <header
          className={classes["catering-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Catering!</h1>
            </div>
          </div>
        </header>
        <section className={classes["catering-feature-section"]}>
          <div className={classes["table-backdrop"]}>
            <div className={classes["section-content"]}>
              <h2>Let Us Do The Cooking!</h2>
              <div className={classes.accent}></div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let
                us spice up your event with the vibrant flavors of Mexico! Our
                catering services bring the fiesta to you, handling all the
                details so you can savor the moment. Immerse your guests in the
                rich tapestry of traditional Mexican cuisine, from savory tacos
                to zesty guacamole. Elevate your gathering with our expertly
                crafted dishes, making your celebration an unforgettable taste
                adventure!
              </p>
              <div className={classes["catering-imgs"]}>
                <div className={classes["catering-img__container"]}>
                  <Image src={tacos} alt="tacos" />
                </div>
                <div className={classes["catering-img__container"]}>
                  <Image src={platter} alt="tacos" />
                </div>
                <div className={classes["catering-img__container"]}>
                  <Image src={table} alt="tacos" />
                </div>
              </div>
            </div>
          </div>

          <FeatureOverlay
            title="Perfect For Your Fiesta!"
            image={fajitas}
            word="Fiesta!"
          />

          <div className={classes["table-backdrop"]}>
            <div className={classes["section-content"]}>
              <h2>CATERING MENU</h2>
              <div className={classes.accent}></div>
              <p>
                Served Buffet Style (20 person min). Please call Rojo's for
                pricing and availability.
              </p>
              <div className={classes["cater-service-container"]}>
                <div className={classes["cater-service"]}>
                  <div className={classes["cater-service__text-container"]}>
                    <h3>Enchilada Bar</h3>
                    <p>
                      INCLUDES: CHOICE OF CHEESE, CHICKEN OR SEASONED GROUND
                      BEEF. SERVED WITH RICE, BEANS, CHIPS AND HOMEMADE SALSA. 2
                      ENCHILADAS PER PERSON.
                    </p>
                  </div>
                  <div className={classes["cater-service__img-container"]}>
                    <Image src={enchildas} alt="" />
                  </div>
                </div>

                <div className={classes["cater-service"]}>
                  <div className={classes["cater-service__text-container"]}>
                    <h3>Fajita Bar</h3>
                    <p>
                      INCLUDES: CHOICE OF FAJITAS, BEANS, RICE, TORTILLAS,
                      LETTUCE, CHEESE, PICO DE GALLO, SOUR CREAM, GUACAMOLE,
                      CHIPS AND HOMEMADE SALSA
                    </p>
                  </div>
                  <div className={classes["cater-service__img-container"]}>
                    <Image src={fajitas} alt="" />
                  </div>
                </div>

                <div className={classes["cater-service"]}>
                  <div className={classes["cater-service__text-container"]}>
                    <h3>Taco Bar</h3>
                    <p>
                      INCLUDES: CHICKEN OR SEASONED GROUND BEEF, TORTILLAS,
                      RICE, BEANS, LETTUCE, CHEESE, TOMATOES, CHIPS AND HOMEMADE
                      SALSA. 2 TACOS PER PERSON.
                    </p>
                  </div>
                  <div className={classes["cater-service__img-container"]}>
                    <Image src={tacos} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default FaqPage;
