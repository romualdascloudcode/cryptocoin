import React from "react";
import styles from "../styles/CardBaner.module.css";
import { cardBaner } from "../data/CardBaner";
import { motion } from "framer-motion";
import { textAnimation } from "../helpers/Animations";
import { useScroll } from "../helpers/useScroll";

function CardBaner() {
  const [element, controls] = useScroll();
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.wrapper} ref={element}>
          <motion.div
            variants={textAnimation}
            animate={controls}
            viewport={{ once: true }}
          >
            <p className={styles.title}>{cardBaner.title}</p>
          </motion.div>
          <p className={styles.text}>{cardBaner.text}</p>
        </div>
        <motion.div variants={textAnimation} animate={controls}>
          <img src={cardBaner.image} alt={cardBaner.alt}></img>
        </motion.div>
      </div>
    </div>
  );
}

export default CardBaner;
