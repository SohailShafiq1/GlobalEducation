import React from "react";
import styles from "./ourteam.module.css";
import img from "./Name.png";
const s = styles;
const OurTeam = () => {
  return (
    <div className={s["container"]}>
      <div className={s["text"]}>
        <h1 className={s["team-heading"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">Our Leadership Team</h1>
        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true"></div>
      </div>
      <div className={s["team-box"]}>
        <div className={s["img-container"]}>
          {" "}
          <img src={img} alt="" className={s["member"]} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" data-aos-once="true" />{" "}
        </div>
        <div className={s["img-container"]}>
          {" "}
          <img src={img} alt="" className={s["member"]}  data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true" />{" "}
        </div>
        <div className={s["img-container"]}>
          {" "}
          <img src={img} alt="" className={s["member"]}  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-once="true"/>{" "}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
