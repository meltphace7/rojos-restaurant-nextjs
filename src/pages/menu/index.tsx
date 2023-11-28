import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "../../components/menu/MenuItem";
import nachos from "../../../public/imgs/nachos.jpg";
import guac from "../../../public/imgs/guac-1.jpg";
import salsa from "../../../public/imgs/salsa.jpg";

import tacoOne from "../../../public/imgs/tacos-2.jpg";
import tacoTwo from "../../../public/imgs/tacos-3.jpg";
import tacoThree from "../../../public/imgs/tacos-4.jpg";

import burritoOne from "../../../public/imgs/burrito-1.jpg";
import burritoTwo from "../../../public/imgs/burrito-2.jpg";
import burritoThree from "../../../public/imgs/burrito-3.jpg";

import enchOne from "../../../public/imgs/enchiladas-1.jpg";
import enchTwo from "../../../public/imgs/enchiladas-2.jpg";

import fajitas from "../../../public/imgs/fajitas-2.jpg";




const ServicesPage: React.FC = () => {
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
        <title>Menu | Rojo&apos;s Mexican Restaurant</title>
        <meta
          name="description"
          content="Menu page for Rojo's Mexican Restaurant"
        />
      </Head>
      <div className={classes["menu-page"]}>
        <header
          className={classes["menu-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["menu-hero-overlay"]}>
            <div className={classes["hero-text"]}>
              <h1>Menu</h1>
              <h2>Quality Comes First</h2>
            </div>
          </div>
        </header>

        <section className={classes["menu-section"]}>
          <div className={classes.menu}>
            <h2>Appetizers</h2>

            <div className={classes["menu-grid"]}>
              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Chips and Salsa"
                  description="House made chips and fresh pico de gallo."
                  price={5}
                  image={salsa}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Chips and Guac"
                  description="House made tortilla chips and fresh made guacamole"
                  price={8}
                  image={guac}
                />
              </div>
              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Nachos"
                  description="Delicous Nachos with cheese, seasoned beef, jalapenos guac and sour cream."
                  price={12}
                  image={nachos}
                />
              </div>
            </div>

            <h2>Entrées</h2>

            <div className={classes["menu-grid"]}>
              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Street Tacos"
                  description="Street tacos with your choice of meat."
                  price={11}
                  image={tacoOne}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Tacos Rojo"
                  description="Marinated pork, cotija, quac and our signature Rojo sauce"
                  price={13}
                  image={tacoTwo}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Shrimp Tacos"
                  description="Fresh shrimp, cotija and ceviche on a house made tortilla"
                  price={13}
                  image={tacoThree}
                />
              </div>
              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Burrito Rojo"
                  description="Steak, chicken or carnitas with beans, rice, onions, cheese, sour cream, guac and our signature Rojo sauce."
                  price={13}
                  image={burritoOne}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Burrito Gigantico"
                  description="This monster is the size of your head!  Feeds two people or one really fat one."
                  price={14}
                  image={burritoTwo}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Burrito Loco"
                  description="Crazy flavorful burrito loaded with your choice of meat, sour cream, salsa, guac and french fries drenched in nacho cheese."
                  price={16}
                  image={burritoThree}
                />
              </div>
              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Mondo Enchiladas"
                  description="Steak, chicken or carnitas with beans, rice, onions, cheese, sour cream, guac and our signature Rojo sauce."
                  price={14}
                  image={enchOne}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Enchiladas Rojo"
                  description="Specialy enchiladas with marinated pork, rice, beans, salsa and house made sauce."
                  price={17}
                  image={enchTwo}
                />
              </div>

              <div className={classes["menu-item"]}>
                <MenuItem
                  title="Fajitas"
                  description="Your choice of carne asada, chicken or pork, with bell peppers, onions and mushrooms, served on a sizzling platter."
                  price={18}
                  image={fajitas}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ServicesPage;
