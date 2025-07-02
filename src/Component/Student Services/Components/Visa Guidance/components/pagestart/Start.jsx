import React , { useEffect } from 'react'
import startcss from './start.module.css'
import img1 from "../../assets/4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Start() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={startcss.container}>
        <div className={startcss.subcontainer1}>
            <div className={startcss.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">We'll guide you through the visa process in international destinations</h1>
            <h4 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Our experts will guide you and even apply for the right visa for your study in abroad destination giving you the best chance of success.</h4>
            </div>
            <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"/>
        </div>
        <div className={startcss.subcontainer2}>
            <h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">We're here to support you
            </h2>
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">When it comes to visas, the process and outcomes can be very daunting for a lot of people. All you need is a team you can trust which can give you an unbiased and correct advice.
                <br />
                At Global Education Consultancy, we've got years of experience in handling every type and class of visa. Our visa experts will guide and support you throughout the entire visa application process.
            </p>    
            <ul className={startcss.subul} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
                <li>Our team of visa documentation experts can help with every type of visa including student visas, partner visas and skilled independent visas.</li>
                <li>We're committed to providing you with ethical counselling and comprehensive support</li>
            </ul>
        </div>  
    </div>
  )
}

export default Start
