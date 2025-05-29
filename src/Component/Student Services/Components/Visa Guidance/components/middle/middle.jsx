import React , { useEffect } from 'react'
import middle from './middle.module.css'
import img1 from "../../assets/4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Middle() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div>
        <div className={middle.counsellor}>
            <div className={middle.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Here's how it works </h1>
            <p>Our visa documentation experts will learn about your career goals and lifestyle aspirations so that we can offer tailored advice.       </p>
            </div>
            
            <div className={middle.subcontainer} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                <div className={middle.data}>
                    <div className={middle.steps}>
                    <h4>Step 1 - We learn about your situation</h4>
                    <p>Tell us about your education, skills, and goals in our consultation, and we'll ask some questions to establish your best chance of eligibility.
                    </p>
                    <br />
                    </div>
                    <div className={middle.steps}>
                    <h4>Step 2 - Begin the application process</h4>
                    <p>Once we've worked out your situation, we'll go through the entire application process with you from start to finish. We'll carefully check your application before submitting it and follow up with the authorities to ensure it's still moving forward.
                    </p>
                    <br />
                    </div>
                    <div className={middle.steps}>
                    <h4>Step 3 - Strengthen your case</h4>
                    <p>Border protection laws change all the time and vary depending on your nationality. So, we'll use our extensive experience to guide you so that you stay well positioned for visa compliance.                       
                    </p>
                    <br />

                    </div>
                </div>
                <div className={middle.img2}>
                    <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true" />
                </div>
            </div>
        </div>
        <div className={middle.experts}>
            <div className={middle.img3}>
            <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true" />
            </div>
            <div className={middle.data}> 
                <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">We'll handle everything for you</h1>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Our team thoroughly understands the latest international visa laws and manages hundreds of visa cases every year with exceptionally high success rate of visa grants. So, no matter what your background or position is, we'll work with you for achieving the highest chance of success.
                    <br />
                    Your course selection and visa application is important, but it's also vital that you take care of the other things like health cover, insurance, any English language requirements and financial aid. We'll cover everything in your initial consultation
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Middle
