import React from "react";
import styles from "./experience.module.css";
const s = styles;
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../assets/img2.png";
const Experience = () => {
    useEffect(() => {
      AOS.init({
          duration: 1200,
      });
    }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <img src={img} alt=""   data-aos="zoom-out-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
      </div>
      <div className={s["right"]}>
        <h1 className={s["exp-heading"]} data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-once="true">
          Our experience and partnerships will shape your career
        </h1>
        <p className={s["exp-para"]} data-aos="zoom-out-left" data-aos-easing="ease-in-out" data-aos-once="true">
          We have a vast portfolio of partners that provide diverse
          opportunities for global education. Our relationships span the globe
          and our team of professional counsellors help thousands of aspiring
          students like you choose their career and education path by placing
          them in reputable universities and colleges across the world.Since
          2008, we’ve provided students with our comprehensive package of
          application guidance and visa assistance tailored to their interests
          and requirements.
        </p>
      </div>
    </div>
  );
};

export default Experience;
