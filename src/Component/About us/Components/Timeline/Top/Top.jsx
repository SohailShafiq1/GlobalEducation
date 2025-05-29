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
      <h1 className={s["top-heading"]} data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-once="true">
        We are committed towards expanding <br />
        horizons for students{" "}
      </h1>
      <p className={s["para"]} data-aos="zoom-in-right" data-aos-easing="ease-in-out" data-aos-once="true">
        We’ve been assisting students access global education with our
        experienced team of experts who help them with the daunting task of
        choosing the right university and destination.
      </p>
    </div>
  );
};

export default Top;
