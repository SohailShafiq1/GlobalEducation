import React from "react";
import styles from "./university.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const s = styles;
const Universties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className={s["container"]}>
      <div className={s["upper-box"]}>
        <h1
          className={s["upper-heading"]}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Find out where you can study in Canada
        </h1>
        <p
          className={s["upper-para-one"]}
          data-aos="zoom-out-up["
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          We represent some of the Canada’s best universities. You can choose
          from a range of locations and specialty areas.
        </p>
        <p
          className={s["upper-para-two"]}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Our partner institutions in Canada
        </p>
        <p
          className={s["upper-para-three"]}
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          (Please note that some institutions may not be represented in your
          region or may offer select programs only. Please connect with our
          regional counselors for more information.)
        </p>
      </div>
      <div className={s["bottom"]}>
        <h1
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Universities
        </h1>
        <div className={s["uni-List"]}>
          <div
            className={s["List"]}
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <p>Acadia University</p>
            <p>Brock University</p>
            <p>Cape Breton University</p>
            <p>lano University</p>
            <p>Crandall University</p>
            <p>Fairleigh Dickinson University Canada</p>
            <p>Kwantlen Polytechnic University</p>
            <p>Lakehead University</p>
            <p>Mount Allison University</p>
            <p>York University | School of Continuing Studies</p>
          </div>
          <div
            className={s["List"]}
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <p>University of Guelph</p>
            <p>Mount Saint Vincent University</p>
            <p>Nipissing University</p>
            <p>Ontario Tech University </p>
            <p>Royal Roads University</p>
            <p>St. Francis Xavier University</p>
            <p>St. Thomas University</p>
            <p>Thompson Rivers University</p>
            <p>Trent University</p>
            <p>Trinity Western University</p>
          </div>
          <div
            className={s["List"]}
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <p>University of Lethbridge</p>
            <p>University of Northern British Columbia</p>
            <p>University of Regina</p>
            <p>University of Saskatchewan</p>
            <p>University of the Fraser Valley</p>
            <p>University of Windsor</p>
            <p>Vancouver Island University</p>
            <p>Western University</p>
            <p>Wilfrid Laurier University</p>
            <p>Yorkville University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universties;
