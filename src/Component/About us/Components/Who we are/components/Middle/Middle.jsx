import React from "react";
import styles from "./middle.module.css";
const s = styles;
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Middle = () => {
    useEffect(() => {
      AOS.init({
          duration: 1200,
      });
    }, []);
  return (
    <div className={s["container"]}>
      <h1 className={s["middle-heading"]} data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">
        We are one of the world’s fastest growing overseas education
        consultancies
      </h1>
      <p className={s["middle-para"]} data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">
        A large number of international students are increasingly becoming aware
        of the brilliant opportunities to study abroad. To pursue higher
        education overseas, the young and aspiring students of our country must
        possess clarity of the global universities and educational institutions
        that offer courses and post-study opportunities that best match their
        requirements and areas of interest.
      </p>
      <p className={s["middle-para"]} data-aos="fade-up-right" data-aos-easing="ease-in-out" data-aos-once="true">
        We have been on a mission to make overseas education accessible since
        our inception in 2008. Our global footprint spans 15 countries and as
        you will discover, we are truly different.
      </p>
      <p className={s["middle-para"]} data-aos="fade-up-left" data-aos-easing="ease-in-out" data-aos-once="true">
        We have dedicated teams of richly experienced professionals to help
        students like you across the globe in choosing the best courses that are
        available in international universities suitable to not only your
        interests but also your aptitude.
      </p>
      <div className={s["list"]}>
        <p className={s["list-heading"]} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
          We first understand your education and career goals and then provide
          you with the proper guidance. Here’s why you need to speak with us:
        </p>
        <div className={s["middleList"]} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
          <p className={s["listItem"]}>
            We’ve got first-hand experience in international education and have
            helped hundreds of students
          </p>
          <p className={s["listItem"]}>
            Our qualified team of experts will guide you through each step of
            the admission process, right from identifying your goals to applying
            for a course and institution of your choice
          </p>
          <p className={s["listItem"]}>
            We can offset education costs by finding the right scholarships and
            a lot of universities will waive off application fees when you apply
            through us
          </p>
          <p className={s["listItem"]}>
            We represent 500+ Top universities and institutes globally, offering
            courses in vast subject areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
