import React from "react";
import styles from "./ceo.module.css";
import img from "./Name.png";
const s = styles;
const Ceo = () => {
  return (
    <div className={s["container"]}>
      <div className={s["box"]}>
        <div className={s["img-box"]}>
          <img src={img} alt="" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true"/>
        </div>
        <div className={s["message"]}>
          <h1 className={s["ceo-heading"]} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
            A message from our founder ad <br /> <span> Managing Director</span>
            <div className={s["underline"]}  data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true"></div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
