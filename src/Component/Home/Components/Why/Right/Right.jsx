import React , { useEffect } from 'react'
import styles from "./right.module.css";
import location from "../assets/1.png";
import partner from "../assets/3.png";
import visa from "../assets/4.png";
import end from "../assets/2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const s = styles;
const Right = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={s["main"]} data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-once="true">
      <div className={s["top"]} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
        <h3 >
          Like You, a remarkable number of international students from across
          the world,from diverse backgrounds, have achieved their international education
          goals successfully through us.<br />
          Our ethical, accurate & friendly guidance in
          the last 15 years has been the recipe. Now it's your turn. Tell us your dreams, we will
          get  you there
        </h3>
      </div>
      <div className={s["bottom"]}>
        <div className={s["box"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className={s["pic"]}>
            <img src={location} alt="" />
          </div>
          <div className={s["text"]}>
            <p>
                Located in <br />
                Pakistan
            </p>
          </div>
        </div>
        <div className={s["box"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className={s["pic"]}>
            <img src={end} alt="" />
          </div>
          <div className={s["text"]}>
            <p>
                End to End <br />
                Services
            </p>
          </div>
        </div>
        <div className={s["box"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className={s["pic"]}>
            <img src={partner} alt="" />
          </div>
          <div className={s["text"]}>
            <p>
                750+ Partners <br />
                Institutions
            </p>
          </div>
        </div>
        <div className={s["box"]} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className={s["pic"]}>
            <img src={visa} alt="" />
          </div>
          <div className={s["text"]}>
            <p>
                High Visa <br />
                Success Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
