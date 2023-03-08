import React from "react";
import styles from "../styles/Wallet.module.css";
import { wallet } from "../data/Wallet";
import { motion } from "framer-motion";
import { textAnimation, fromUp } from "../helpers/Animations";
import { useScroll } from "../helpers/useScroll";

function Wallet() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container}>
      <div className={styles.wallet}>
        <div className={styles.titleWrapper} ref={element}>
          <motion.div variants={textAnimation} animate={controls}>
            <h1>{wallet.title}</h1>
          </motion.div>
          <p>{wallet.text}</p>
          <p className={styles.btn}>{wallet.btn}</p>
        </div>
        <motion.div
          className="title-container"
          variants={fromUp}
          animate={controls}
        >
          <img src={wallet.image} alt={wallet.alt}></img>
        </motion.div>
      </div>
    </div>
  );
}

export default Wallet;
