import React from "react";
import styles from "./address.module.css";
import img from "./GlobalLogo.png";
const s = styles;
const Address = () => {
  return (
    <div className={s["container"]}>
      <div className={s["left"]}>
        <div className={s["contact-us-box"]}>
          <p className={s["contact-us-line"]}>
            Contact us on followings or submit your query through form.
          </p>
          <div className={s["contact-info-box"]}>
            <h3 className={s["info-heading"]}>Email Address:</h3>
            <p className={s["info-line"]}>info@Global.com </p>
          </div>
          <div className={s["contact-info-box"]}>
            <h3 className={s["info-heading"]}>Phone Number:</h3>
            <p className={s["info-line"]}>+92 3***********</p>
          </div>
          <div className={s["contact-info-box"]}>
            <h3 className={s["info-heading"]}>Office Address:</h3>
            <p className={s["info-line"]}>
              Global Education Consultancy <br /> House #113, Street #688,
              <br />
              Sector G13/3, Islamabad, Pakistan
            </p>
          </div>
        </div>
      </div>
      <div className={s["right"]}>
        {" "}
        <img src={img} alt="" />{" "}
      </div>
    </div>
  );
};

export default Address;
