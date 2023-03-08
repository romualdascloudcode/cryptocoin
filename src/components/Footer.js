import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { footerData } from "../data/Footer";
function Footer() {
  const {
    title,
    contactTitle,
    faq,
    support,
    questions,
    about,
    blog,
    markets,
    marketOne,
    marketTwo,
    marketThree,
    marketFour,
    company,
    privacy,
    investors,
    affiliates,
    policy,
    chat,
  } = footerData;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.socialMediaIcons}>
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaYoutube />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.secondTittleWrapper}>
            <p className={styles.bold}>{contactTitle}</p>
            <p>{faq}</p>
            <Link to="/contact">
              <p>{support}</p>
            </Link>
            <Link to="/contact">
              <p>{questions}</p>
            </Link>
            <p>{about}</p>
            <p>{blog}</p>
          </div>
          <div className={styles.secondTittleWrapper}>
            <p className={styles.bold}>{markets}</p>
            <p>{marketOne}</p>
            <p>{marketTwo}</p>
            <p>{marketThree}</p>
            <p>{marketFour}</p>
          </div>
          <div className={styles.secondTittleWrapper}>
            <p className={styles.bold}>{company}</p>
            <p>{privacy}</p>
            <p>{investors}</p>
            <p>{affiliates}</p>
            <p>{policy}</p>
            <div className={styles.btn}>
              <Link to="/contact">{chat}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
