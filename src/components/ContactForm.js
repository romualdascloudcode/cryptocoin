import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faPaperPlane,
  faGlobeAfrica,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [mail, setMail] = useState();

  const mailStatusMessage = () => {
    if (mail === true) {
      return (
        <p className={styles.successMsg}>
          Email sent <FontAwesomeIcon icon={faCheck} size="1x" />
        </p>
      );
    } else if (mail === false) {
      return <p className={styles.errMsg}>Error, please call: 718-333-6318</p>;
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jt4flv",
        "gmail",
        e.target,
        "user_rhO57bhyb8f20Y3Zwp8gm"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setMail(true);
            setTimeout(() => setMail(""), 3000);
          } else {
            setMail(false);
          }
          console.log(result.status);
        },
        (error) => {
          setMail(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Connect with us</h1>
          <p className={styles.infoTitle}>
            Our door is always open for a good cup of tea.
          </p>
          <div className={styles.icon}>
            <div className={styles.border}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            </div>
            <p>Bērze 21 Street, Dobele</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.border}>
              <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
            </div>
            <p>718-333-6318</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.border}>
              <FontAwesomeIcon icon={faPaperPlane} size="1x" />
            </div>
            <p> info@cryptocoin.com</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.border}>
              <FontAwesomeIcon icon={faGlobeAfrica} size="1x" />
            </div>
            <p>cryptocoin.com</p>
          </div>
        </div>

        <div className={styles.contactContainer}>
          <form onSubmit={sendEmail}>
            <div className={styles.contactColumn}>
              <div className={styles.rows}>
                <h1>
                  Please fill out quick form and we will be in touch with
                  lightening speed.
                </h1>
                <input
                  type="text"
                  className=""
                  required
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className={styles.rows}>
                <input
                  type="email"
                  className=""
                  required
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className={styles.rows}>
                <input
                  type="text"
                  className=""
                  required
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className={styles.contactTextarea}>
                <textarea
                  className=""
                  placeholder="Message"
                  required
                  name="message"
                ></textarea>
              </div>
              {mailStatusMessage()}
              <div className="">
                <input
                  type="submit"
                  className={styles.btn}
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
