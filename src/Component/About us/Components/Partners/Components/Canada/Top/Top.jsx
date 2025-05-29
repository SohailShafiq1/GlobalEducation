import React from "react";
import styles from "./top.module.css";
import mountains from "../../assets/mountains.png";
import { useEffect } from "react";
const s = styles;
import AOS from "aos";
import "aos/dist/aos.css";
const Top = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <div className={s["colr"]}>
          <div className={s["img-box"]}>
            <img
              className={s["top-image"]}
              src={mountains}
              alt=""
              data-aos="fade-up-right"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
      <div className={s["right"]}>
        <h4
          className={s["upper-line"]}
          data-aos="fade-up-left"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          CANDA IS ONE OF THE TOP 10 PLACES TO LIVE IN THE WORLD
        </h4>
        <h1
          className={s["top-heading"]}
          data-aos="fade-down-left"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          INSTITUTIONS IN CANADA
        </h1>
        <p
          data-aos="fade-down-right"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className={s["top-para"]}
        >
          {" "}
          Benefit from the world-class education in Canada which has more than
          2,60,000 international students. 5 Countires Universities feature in
          world's top 100 Universities
        </p>
      </div>
    </div>
  );
};

export default Top;
