import React, { useEffect } from "react";
import styles from "./bottom.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./Service";

import img1 from "../../assets/boy1.webp";
import img2 from "../../assets/girl1.webp";
import img3 from "../../assets/boy2.webp";
import img4 from "../../assets/girl2.webp";
import img5 from "../../assets/boy3.png";
import img6 from "../../assets/girl3.webp";

const s = styles;

const serviceData = [
  {
    image: img1,
    ServiceName: "Education Counselling",
    para: "Our Education Counsellors will learn about your career aspirations, lifestyle, and study goals so that we can offer tailored advice.",
    link: "/education-counselling",
  },
  {
    image: img2,
    ServiceName: "Application Process",
    para: "Our Counsellors will assist you in shortlisting and applying to the institutions and courses in which you are eligible to apply.",
    link: "/application-process",
  },
  {
    image: img3,
    ServiceName: "Scholarship Guidance",
    para: "There are a wide variety of Scholarships available across many of our partner institutions.",
    link: "/scholarship-guidance",
  },
  {
    image: img4,
    ServiceName: "Visa Application",
    para: "We've got years of experience handling every type of visa. Our visa experts will guide and support you throughout the entire visa application process.",
    link: "/visa-guidance",
  },
  {
    image: img5,
    ServiceName: "Student Health Insurance",
    para: "From finding the best health cover policies to ensuring the insurance benefits for you, we have got you covered.",
    link: "/health-insurance",
  },
  {
    image: img6,
    ServiceName: "Visit Visa",
    para: "Explore one of the world's largest student accommodation portals to plan your study abroad accommodation cost-effectively.",
    quote: "Travel is the only thing you buy that makes you richer. – Anonymous",
    link: "/visitvisa",
  },
];

const Bottom = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={s["container"]}>
      <div className={s["box"]}>
        {serviceData.map((service, index) => (
          <Service
            key={index}
            image={service.image}
            ServiceName={service.ServiceName}
            para={service.para}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottom;
