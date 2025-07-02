import React from "react";
import styles from "./solution.module.css";
import img from "../assets/img1.png";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const s = styles;
const Solution = () => {
    useEffect(() => {
      AOS.init({
          duration: 1200,
      });
    }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <h1 className={s["solution-heading"]} data-aos="zoom-out-up" data-aos-easing="ease-in-out" data-aos-once="true">
          We create one-step solution for all your <br /> doubts and queries
        </h1>
        <p className={s["solution-para"]} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">
          As your overseas education partner, we take care of everything, right
          from advising you on course selection and applications to helping you
          secure the correct visa. Our experts will help you make the most
          critical decision you will ever make in your life. We’ve developed
          strong working relationships with our university partners and offer
          scholarships to deserving students to help offset their costs of
          studying overseas. Choosing Global Education Consultancy as your international study
          partner means you can focus on planning your overseas education and
          career while we take care of all the paperwork.
        </p>
      </div>
      <div className={s["right"]}>
        <img src={img} alt=""  data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true" />
      </div>
    </div>
  );
};

export default Solution;
