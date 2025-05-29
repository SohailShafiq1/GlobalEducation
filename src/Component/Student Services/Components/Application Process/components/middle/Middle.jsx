import React , { useEffect } from 'react'
import middle from './middle.module.css'
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
    <div className={middle.maincontainer}>
         <div className={middle.container1}> 
            <div className={middle.text}>
                <h2 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">We'll review your application and assist you in it's submission 
                <br />
                </h2>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Our focus is student's priority and preferences. Based on your academic records and other entry requisites, our counsellor will assist you in shortlisting the institutions and courses in which you are eligible to apply. The list of documents and other requisites can be obtained from our counsellor for applying to the universities you have shortlisted.
                    <br />
                    Once a complete application along with required documents is submitted to your counsellor at AECC Global, you can be assured of its submission within 24-48 hours.
                    <br />
                    Student applications are usually assessed based on the different parameters like academic excellence, English language ability etc. Application processing time varies from institution to institution and ranges between 2-8 weeks upon submission of an application.
                </p>
            </div>
            <div className={middle.imgs}>
                <img src={img1} alt="" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>        
        </div>

        <div className={middle.container2}>
            <div className={middle.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Receive admission offer from the overseas university
                </h2>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Student application once successful, will be reverted with either of the following:
                </p>
                <ul className={middle.textul}>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Provisional Offer</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Conditional Offer</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Unconditional Offer</li>
                </ul>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Our counsellor will guide you on what should be done next from this stage. So, get in touch with our experts today for detailed information on the overseas admission procedure.
                </p>
            </div>
            <div className={middle.imgs}>
                <img src={img1} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>
    </div>
  )
}

export default Front
