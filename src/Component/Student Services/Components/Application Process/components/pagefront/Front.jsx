import React , { useEffect } from 'react'
import Pagefront from './front.module.css'
import img1 from "../../assets/pic1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Front() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={Pagefront.container}>
        <div className={Pagefront.subcontainer1}>
          <div className={Pagefront.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Build the perfect applications for your target universities
            </h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
              Global Education Consultancy provides end-to-end guidance and consultation services for overseas admissions.
              <br />
              We have a tremendous track record of successfully sending the students abroad.
              </p>
          </div>
            <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"/>
        </div>
        <div className={Pagefront.subcontainer2}>
            <h2 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Enhance your chances of application acceptance with us
            </h2>
            <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
              With thousands of candidates applying to top overseas universities every year, how do you ensure that your application stands out? The key lies in choosing the right course and institution and then building a strong profile and compelling application. Our overseas experts prevent you from getting lost in a sea of applications by helping you guide through each step of the overseas admission process.
              <br />
              After evaluating your academic background, reviewing your extra-curricular activities, and your English proficiency, we work out strategies to ensure that the applications you submit provide you the maximum chance of success.
              <br />
              We know that leaving your home country to study overseas is an exciting decision in your life and we'll be with you in your whole journey, whenever you need advice or assistance throughout your stay in abroad.
            </p>    
        </div>  
    </div>
  )
}

export default Front
