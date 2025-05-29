import React from "react";
import styles from "./bottom.module.css";
const s = styles;
import img from "../assets/img2.png";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Bottom = () => {
  useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <img src={img} alt=""  data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
      </div>
      <div className={s["right"]}>
        <div>
          <h1 className={s["bottom-heading"]} data-aos="fade-up-right" data-aos-easing="ease-in-out" data-aos-once="true" > 
            Widening education opportunities to help develop your career
          </h1>
        </div>
        <p className={s["bottom-para"]} data-aos="fade-up-left" data-aos-easing="ease-in-out" data-aos-once="true">
          Established in 2008 with the purpose of providing quality guidance to
          students who intend to study abroad, our top focus has always been on
          helping international education aspirant get their dream institution
          and destination. Our motto is to offer ethical and independent
          guidance to help you through the entire application process, abroad
          studies and beyond. We have successfully placed thousands of students
          in globally recognized universities from Australia, Canada, Ireland,
          New Zealand, UK and USA at the undergraduate and postgraduate level.
          Each year, our students receive acceptances and scholarship awards{" "}
          which turn their overseas education dream into a reality.
        </p>
      </div>
    </div>
  );
};

export default Bottom;
