import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";
import Logo from "../logo/Logo";
import Image from "next/image";
import hoursIcon from "../../../public/icons/time-outline-white.svg";
import phoneIcon from "../../../public/icons/call-outline-white.svg";
import addressIcon from "../../../public/icons/location-outline-white.svg";
import facebookLogo from "../../../public/icons/logo-facebook.svg";
import instagramLogo from "../../../public/icons/logo-instagram.svg";
import googleLogo from "../../../public/icons/logo-google.svg";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-top-row"]}>
        <div className={classes["contact"]}>
          <Image src={phoneIcon} alt="Phone icon" />
          <p>(509)-555-5672</p>
        </div>

        <div className={classes["contact"]}>
          <Image src={addressIcon} alt="Phone icon" />
          <p>3498 Toro Drive</p>
          <p> Wenatchee WA, 98504</p>
        </div>
        <div className={classes["contact"]}>
          <Image src={hoursIcon} alt="Phone icon" />
          <p>Monday - Saturday</p>
          <p> 10:00AM - 10:30PM</p>
        </div>
      </div>
      <div className={classes["footer-bottom-row"]}>
        <div className={classes["footer-text"]}>
          <p>&copy; 2023 Rojo&apos;s Mexican Restaurant All Right Reserved</p>
          <p>Website by Brock Dallman</p>
        </div>

        <div className={classes["logo-container"]}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={classes["link-list"]}>
          <a href="#">
            <Image
              src={facebookLogo}
              alt="facebook logo"
              className={classes["link-logo"]}
            />
          </a>
          <a href="#">
            <Image
              src={instagramLogo}
              alt="Instagram logo"
              className={classes["link-logo"]}
            />
          </a>
          <a href="#">
            <Image
              src={googleLogo}
              alt="Google logo"
              className={classes["link-logo"]}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
