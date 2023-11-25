import React from "react";
import Link from "next/link";
import classes from "./Navigation.module.css";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import downIcon from "../../../public/icons/chevron-down-outline.svg";

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
            Home
          </Link>
        </li>
        <li className={classes.dropdown}>
          <Link
            href="/menu"
            className={pathname === "/menu" ? classes.active : ""}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? classes.active : ""}
          >
            About
          </Link>
        </li>
    
        <li>
          <Link
            href="/catering"
            className={pathname === "/catering" ? classes.active : ""}
          >
            Catering
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? classes.active : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
