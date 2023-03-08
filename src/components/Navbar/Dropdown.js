import React from "react";
import styles from "../../styles/Dropdown.module.css";
import { menuData } from "../../data/MenuData";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Dropdown = ({ isopen, toggle }) => {
 
  return (
    <div
      className={styles.container}
     
      onClick={toggle}
      style={{ opacity: isopen ? "1" : "0", top: isopen ? "0" : "-100%" }}
    >
      <div className={styles.icon}>
        <FaTimes onClick={toggle} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          {menuData.map((item, index) => {
            return (
              <div className={styles.link} key={index}>
                <Link to={item.link}> {item.title} </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.btn}>
            <Link to="/contact">
              <div> Contact Us </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
