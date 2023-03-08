import React, { useState } from "react";
import { Faq, title } from "../data/Faq";
import styles from "../styles/Questions.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

function Questions() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{title.title}</h1>
          {Faq.map((item, index) => {
            return (
              <>
                <div
                  className={styles.wrap}
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index  && (
                  <div className={styles.dropdown}>
                    <p>{item.answer}</p>
                  </div>
                ) }
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Questions;
