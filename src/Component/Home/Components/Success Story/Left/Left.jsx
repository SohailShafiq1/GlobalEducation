import React, { useState, useEffect } from "react";
import styles from "./left.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const comments = [
  {
    text: `SunRays Consultancy Islamabad has definitely been helping a lot with my children's application process to study abroad. The counselor, Ms Yenny is very friendly and helpful in aiding my kids throughout all the necessary steps for their journey to study in Australia. I really recommended other people to get support from SunRays Consultancy Indonesia since it is more effective than doing everything on your own.`,
    author: "Muhammad Ahmed",
  },
  {
    text: `I was looking for someone to help me with my visa situation and luckily a friend recommended me to AECC and its one recommendation I can’t thank enough. AECC Global assisted me from getting a letter of offer for my education, acquiring a student insurance coverage for my stay, and finally arranging my visa.`,
    author: "Muhammad Mubashar",
  },
  {
    text: `I have been a client of SunRays Consultancy since 2010. From that time, they have been helping me for all visa and education related matters. I am very happy with their professional advice and friendly behaviour. So, I would like to recommend all to visit them for your migration pathway.`,
    author: "Atif Ali",
  },
];

const s = styles;
const Left = () => {

  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);


  const [currentCommentIndex, setComment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComment((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000); // Switch comments every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentComment = comments[currentCommentIndex];

  return (
    <div className={s["container"]}>
      <div className={s["slider"]}>
      <h3 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">{currentComment.text}</h3>
      <h1 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">{currentComment.author}</h1>
      </div>
    </div>
  );
};

export default Left;
