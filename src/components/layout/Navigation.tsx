import React from "react";
import Link from "next/link";
import classes from "./Navigation.module.css";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
// import downIcon from "../../../public/icons/chevron-down-outline.svg";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={classes.navigation}>
      <Link href="/">
        <Logo />
      </Link>
      <ul className={classes["nav-menu"]}>
        <li>
          <Link href="/" className={pathname === "/" ? classes.active : ""}>
            HOME
          </Link>
        </li>
        <li className={classes.dropdown}>
          <Link
            href="/menu"
            className={pathname === "/menu" ? classes.active : ""}
          >
            MENU
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? classes.active : ""}
          >
            ABOUT US
          </Link>
        </li>
    
        <li>
          <Link
            href="/catering"
            className={pathname === "/catering" ? classes.active : ""}
          >
            CATERING
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? classes.active : ""}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
