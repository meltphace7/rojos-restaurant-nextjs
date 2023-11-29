import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import classes from "@/styles/Contact.module.css";
import Image from 'next/image';
import hoursIcon from '../../../public/icons/time-outline.svg';
import phoneIcon from "../../../public/icons/call-outline.svg";
import emailIcon from "../../../public/icons/mail-outline.svg";
import addressIcon from "../../../public/icons/location-outline.svg";

const ContactPage: React.FC = () => {
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
        <title>Contact | Rojo's Mexican Cuisine</title>
        <meta
          name="description"
          content="Contact page Rojo's Mexican Cuisine"
        />
      </Head>
      <div className={classes["contact-page"]}>
        <header
          className={classes["contact-hero"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className={classes["hero-overlay"]}>
            <h1>Let&apos;s Get In Touch</h1>
          </div>
        </header>
        <section className={classes["contact-main"]}>
          <div className={classes["contact-row"]}>
            <div className={classes["contact-container"]}>
              <Image src={hoursIcon} alt="hours icon" />
              <h1>Hours</h1>
              <div className={classes.accent}></div>
              <h2>Monday - Saturday</h2>
              <h2>10:00AM - 10:30PM</h2>
            </div>
            <div className={classes["contact-container"]}>
              <Image src={phoneIcon} alt="phone icon" />
              <h1>Phone</h1>
              <div className={classes.accent}></div>
              <h2>(509)-555-5672</h2>
            </div>
          </div>

          <div className={classes["contact-row"]}>
            <div className={classes["contact-container"]}>
              <Image src={addressIcon} alt="address icon" />
              <h1>Address</h1>
              <div className={classes.accent}></div>
              <h2>3498 Toro Drive</h2>
              <h2>Wenatchee WA, 98504</h2>
            </div>
            <div className={classes["contact-container"]}>
              <Image src={emailIcon} alt="email icon" />
              <h1>Email</h1>
              <div className={classes.accent}></div>
              <h2>rojosmexicanrestaurant@gmail.com</h2>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ContactPage;
