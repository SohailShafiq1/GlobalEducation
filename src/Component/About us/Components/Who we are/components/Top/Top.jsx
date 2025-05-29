import React from 'react'
import styles from './top.module.css'
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
      <h1 className={s["top-heading"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
        We have been pioneers in overseas <br />
        education consultations since 2020{" "}
      </h1>
      <p className={s["para"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
        Our extensive expereince in the internation education industry makes
        following your dream of international education a simpler and easier
        process
      </p>
    </div>
  );
};

export default Top;
