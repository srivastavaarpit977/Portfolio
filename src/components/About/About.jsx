import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       <p>My name is Arpit Srivastava and I am currently an undergraduate student at Scaler School of Technology.I have interest in variouss fields like Web Development,Problem Solving,ML,Data Science and Quant Finance.I have created many projects like Web Scrapper,Image Editor,Employee Management System,Hand Detection Model etc </p>
        
      </div>
    </section>
  );
};
