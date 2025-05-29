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
            <h1 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">Get to know about International scholarships</h1>
            <h4 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Get assistance on extra funds and professional guidance on various scholarships offered by international universities that can change your experience of studying abroad</h4>
            </div>
            <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"/>
        </div>
        <div className={startcss.subcontainer2}>
            <h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Financial aid can make a lot of difference
            </h2>
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">We know that tertiary study in international destinations can be expensive, but many institutions recognize this and provide scholarships to honour your commitment to studies
                <br />
                These scholarships are specifically designed to ease the burden for aspiring students, so that you can concentrate on achieving the best possible results without being concerned about money.
            </p>    
            <ul className={startcss.subul} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
                <li>Aid is available in some form for many study areas and institutions</li>
                <li>We'll help you easily find and apply for scholarships</li>
                <li>You could save thousands of dollars off your course fees</li>
            </ul>
        </div>  
    </div>
  )
}

export default Start
