import React, { useEffect } from "react";
import Pagefrontcss from "./Pagefront.module.css";
import img1 from "../../assets/1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Pagefront() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={Pagefrontcss.container}>
      <div className={Pagefrontcss.subcontainer1}>
        <h1
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Overseas Student Health Cover <span style={{color:"#3f698d"}}>(OSHC)</span> for internatinal
          students{" "}
        </h1>
        <img
          src={img1}
          alt=""
          data-aos="flip-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        />
      </div>
      <div className={Pagefrontcss.subcontainer2}>
        <h2
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Health Insurance for Students in Australia
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          With its strong economy and excellent healthcare system, Australia
          offers numerous opportunities for students to get scholarships and
          financial aid. The country is always mindful of the wants and needs of
          international students and has one of the best healthcare systems in
          the world. The health care system is safe and affordable, so there is
          no doubt why Australia is a popular study destination among many
          international students.
        </p>
      </div>
    </div>
  );
}

export default Pagefront;
