import React from "react";
import styles from "./guidance.module.css";
import img from '../assets/img1.png';
const s = styles;
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Guidance = () => {
    useEffect(() => {
      AOS.init({
          duration: 1200,
      });
    }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <div>
          <h1 className={s["guide-heading"]} data-aos="zoom-out-up" data-aos-easing="ease-in-out" data-aos-once="true">
            Guiding you every step in international education
          </h1>
        </div>
        <p className={s["guide-para"]} data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-once="true">
          At AECC Global, all our professionals are highly experienced in
          overseas education and hold appropriate qualifications for effective
          education counselling. We work on your behalf as an independent
          representative of over 500+ Top universities and educational
          institutions across the globe, giving you a wide range of choices
          backed by an intimate knowledge of each institution.Contact us today
          for a simplified international university admission process and study{" "}
          abroad application tips!
        </p>
      </div>
      <div className={s["right"]}>
        <img src={img} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true" />
      </div>
    </div>
  );
};

export default Guidance;
