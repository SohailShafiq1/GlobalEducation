import React from "react";
import styles from "./middle.module.css";
import canda from "../../assets/canada.webp";
const s = styles;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Middle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <div className={s["middle-image-box"]}>
          <img
            className={s["middle-image"]}
            src={canda}
            alt=""
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          />{" "}
        </div>
      </div>
      <div className={s["right"]}>
        <h2
          className={s["middle-heading"]}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Canda ranks as one of the best places to live around the globe
        </h2>
        <p
          className={s["middle-para-one"]}
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          With quality infrastructure, relatively less crime rates, high life
          expectancy and lower costs of living than other big developed nations,
          their commitment to culture, diversity and innovation has created a
          fantastic place to live.
        </p>
        <p
          className={s["middle-para-two"]}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Explore incredible mountains, get close to wildlife and experience a
          real Canadian <br /> winter Canada’s multicultural and bilingual
          society is friendly and welcomes all nationalities Living costs in
          Canada is approximately C$10,000 – C$12,000 per annum which is lower
          than US, UK and Australia. Outstanding universities having global
          recognition will lead to a highly-regarded qualification
        </p>
      </div>
    </div>
  );
};

export default Middle;
