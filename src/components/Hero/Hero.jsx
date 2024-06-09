import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arpit Srivastava</h1>
        <p className={styles.description}>
         I am currently an undergraduate student who has a passion for Web Development,Problem Solving,Data Science,ML and Quant Finance.
        </p>
        <a href="srivastavaarpit1909@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={'public/MyImage.png'}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
