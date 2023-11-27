import React, { useState } from "react";
import Logo from "../logo/Logo";
import classes from "./MobileNavigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation: React.FC = () => {
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  const closeMenuHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <nav className={classes.nav}>
      <Link className={classes.logo} href="/">
        <Logo />
      </Link>

      <div className={classes.navigation}>
        <input
          type="checkbox"
          className={classes["navigation__checkbox"]}
          id="navi-toggle"
          onChange={handleCheck}
          checked={isChecked}
        />
        <label htmlFor="navi-toggle" className={classes["navigation__button"]}>
          <span className={classes["navigation__icon"]}>&nbsp;</span>
        </label>
        <div className={classes["navigation__background"]}>&nbsp;</div>
        <nav className={classes["navigation__nav"]}>
          <ul className={classes["navigation__list"]}>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                href="/"
                className={
                  pathname === "/"
                    ? `${classes.active} ${classes["navigation__link"]}`
                    : classes["navigation__link"]
                }
              >
                Home
              </Link>
            </li>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                href="/menu"
                className={
                  pathname === "/menu"
                    ? `${classes.active} ${classes["navigation__link"]}`
                    : classes["navigation__link"]
                }
              >
                Menu
              </Link>
            </li>

            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                href="/about"
                className={
                  pathname === "/about"
                    ? `${classes.active} ${classes["navigation__link"]}`
                    : classes["navigation__link"]
                }
              >
                About
              </Link>
            </li>

            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                href="/catering"
                className={
                  pathname === "/catering"
                    ? `${classes.active} ${classes["navigation__link"]}`
                    : classes["navigation__link"]
                }
              >
                Catering
              </Link>
            </li>

            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                href="/contact"
                className={
                  pathname === "/contact"
                    ? `${classes.active} ${classes["navigation__link"]}`
                    : classes["navigation__link"]
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNavigation;
