import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./bottom.module.css";

const s = styles;

const Service = ({ image, ServiceName, para, link }) => {
  return (
    <div
      className={s["service"]}
      data-aos="flip-down"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div className={s["pic"]}>
        <img src={image} alt={ServiceName} />
      </div>
      <div className={s["text"]}>
        <h2>{ServiceName}</h2>
        <p>{para}</p>
        <button>
          <NavLink to={link} className={s["btn"]}>
            Learn More
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Service;
