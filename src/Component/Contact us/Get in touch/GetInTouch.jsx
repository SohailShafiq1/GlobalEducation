import React from "react";
import styles from "./getintouch.module.css";
import img from "./boy.png";
const s = styles;
const GetInTouch = () => {
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <h1 className={s["touch-heading"]}>Get the help you need.</h1>
        <h2 className={s["touch-para"]}>
          Give us the few details & we'll offer the best solution Connect by
          phone, chat, email and more
        </h2>
        <div></div>
      </div>
      <div className={s["right"]}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default GetInTouch;
