import React from "react";
import styles from "./top.module.css";
const s = styles;
import img from "../../assets/students.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Top = () => {
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <h1 className={s["top-heading"]}>
          Find the best Student Accomodation option for you
        </h1>
        <h3 className={s["top-para"]}>
          Find the ideal student accomodation through our exclusive partnerships
          and make your academic journey truly worry-free{" "}
        </h3>
      </div>
      <div className={s["right"]}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Top;
