import React from "react";
import styles from "../styles/Header.module.css";
import { headerData } from "../data/Header";
import { Link } from "react-router-dom";

function Header() {
  const { titleImg, subtitle, title, text, image, alt, btnText, btnImg } =
    headerData;
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <div>
          <img src={titleImg} alt="crypto" />
          <p>{subtitle}</p>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <Link to="/contact" className={styles.btn}>
            <p>{btnText}</p>
            <p>{btnImg}</p>
          </Link>
        </div>
      </div>
      <div className={styles.headerImg}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

export default Header;
