import React from "react";
import styles from "./bottom.module.css";
import img from "./../../assets/3.webp";
const s = styles;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Bottom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <div>
          <h1
            className={s["bottom-heading"]}
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Join us to fulfill your overseas journey
          </h1>
        </div>
        <p
          className={s["bottom-para"]}
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          We are the leaders in overseas education guidance and represent
          leading universities in Australia, USA, UK Canada and New Zealand.
          With more than a decade experience in counselling students looking to
          study abroad and having helped over thousands of students gain
          admission in universities overseas, we assure you of professional and
          comprehensive services. Allow us the opportunity to foster a
          harmonious transition from school to international university with
          exceptional academic support and a personalized learning environment.
          Our certified and experienced counsellors will give you a detailed
          overview of the courses and universities overseas along with the
          career prospects. They will not only guide you on the exams that needs
          to be taken for abroad education but will also assist you in getting
          your visa including verification of visa documents and following up on
          your visa application with embassies.
        </p>
      </div>
      <div className={s["right"]}>
        <img
          src={img}
          alt=""
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        />
      </div>
    </div>
  );
};

export default Bottom;
