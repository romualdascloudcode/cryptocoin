import React from "react";
import styles from "../styles/About.module.css";
import "aos/dist/aos.css";
import { AboutData, PlatformData, ServerData } from "../data/AboutData";
import { AosEffect } from "../helpers/AosEffect";

function AboutUs() {
  AosEffect();
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text} data-aos="fade-up">
          <h1>{AboutData.title}</h1>
          <p>{AboutData.text}</p>
        </div>
        <div data-aos="zoom-in">
          <img src={AboutData.image} alt={AboutData.alt} />
        </div>
      </div>
      <div className={styles.background}>
        <img
          src={PlatformData.image}
          alt={PlatformData.alt}
          data-aos="zoom-in"
        />
        <div>
          <h1 data-aos="fade-up">{PlatformData.title}</h1>
          <li data-aos="fade-up">{PlatformData.text}</li>
          <li data-aos="fade-up">{PlatformData.textTwo}</li>
          <li data-aos="fade-up">{PlatformData.textThree}</li>
        </div>
      </div>
      <div className={styles.servers}>
        <div className={styles.serversContainer}>
          <div data-aos="fade-up">
            <h1>{ServerData.title} </h1>
            <p>{ServerData.text}</p>
          </div>
          <img src={ServerData.image} alt={ServerData.alt} data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
