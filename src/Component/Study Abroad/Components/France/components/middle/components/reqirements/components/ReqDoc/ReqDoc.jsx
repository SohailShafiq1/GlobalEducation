import React , { useEffect } from 'react'
import ReqDocs from './ReqDoc.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ReqDoc() {
      useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);
  return (
    <div className={ReqDocs.container}>
        <div  className={ReqDocs.subcontainer1} data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-once="true">
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Documents Required fo Study in the Cyprus for International Students</h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">For many international students, the Cyprus's bureaucratic process can initially seem overwhelming. However, a methodical approach, starting with collecting the necessary documents, can pave the way for a smooth transition. <br/></p>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">For many international students, the Cyprus's bureaucratic process can initially seem overwhelming. However, a methodical approach, starting with collecting the necessary documents, can pave the way for a smooth transition.
        </p>
        <ul>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Completed Application Form</strong></li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>Educational Qualifications</strong>•	Original and certified copies of previous academic records (e.g., high school diploma for undergraduate programs, bachelor’s degree for master’s programs).</li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>Language Proficiency</strong> •	Proof of English language proficiency (e.g., IELTS, TOEFL scores).</li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Passport Copy</strong></li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Photographs:</strong></li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Curriculum Vitae (CV)</strong></li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Letters of Recommendation (CV)</strong></li>
            <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>	Statement of Purpose</strong></li>
        </ul>
        </div>
        <div className={ReqDocs.subcontainer2} data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-once="true">
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true"><strong>Need help with your application process for the Cyprus University?</strong>Get in touch with SunRay and get FREE assistance from application to visa processing and lots more! <br /><br /> Feel the need for more details? Contact us today!</p>
        </div>
    </div>
  )
}

export default ReqDoc
