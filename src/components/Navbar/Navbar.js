import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import styles from "../../styles/Navbar.module.css";
import MobileMenuBtn from "../../assets/bar.svg";
import Dropdown from "./Dropdown";
import Logo from "../../assets/logo.png";

function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setIsopen(!isopen);
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <div
      className={
        navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }
    >
      <Link to="/">
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.menu}>
        {menuData.map((item, index) => {
          return (
            <div className={styles.links} key={index}>
              <Link to={item.link}> {item.title} </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.mobileMenuBtn} onClick={toggle}>
        <img src={MobileMenuBtn} alt="mobile" />
      </div>
      <div className={styles.button}>
        <Link to="/contact"> Contact Us </Link>
      </div>
      <Dropdown isopen={isopen} toggle={toggle} />
    </div>
  );
}

export default Navbar;
