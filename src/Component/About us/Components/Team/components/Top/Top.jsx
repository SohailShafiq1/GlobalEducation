import React from "react";
import styles from "./top.module.css";
const s = styles;
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Top = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={s["container"]}>
      <h1 className={s["top-heading"]} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
        We know what it's like to be an international student
      </h1>
      <div  data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"></div>
      <h3 className={s["para"]} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
        We understand how important this journey is, and we're here to help make
        sure your experience as an international student is everything you you
        want it to be
      </h3>
    </div>
  );
};

export default Top;
