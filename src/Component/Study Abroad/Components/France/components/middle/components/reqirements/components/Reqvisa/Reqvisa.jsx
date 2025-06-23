import React , { useEffect } from 'react'
import ReqVisa from './Reqvisa.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Reqvisa() {
  useEffect(() => {
            AOS.init({
                duration: 1200,
            });
          }, []);
  return (
    <div className={ReqVisa.maincontainer}>
        <div className={ReqVisa.container}>
              <div className={ReqVisa.text}>
                  <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Requirements for the Cyprus Study Visa</h1>
                  <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">It involves fulfilling crucial prerequisites for obtaining a Cyprus student visa. These prerequisites ensure asmooth transition to life as an international student. From validating your acceptance with a
                     Confirmation of Acceptance for Studies (CAS) to proving your English proficiency through IELTS andshowcasing your financial capability, these requirements underscore your readiness for the endeavour. As
                     you prepare to step onto Cyprus shores, understanding and fulfilling these prerequisites becomes pivotal tomaking your study experience a success.</p>
              </div>
              <div className={ReqVisa.sublist}>
                  <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">English Language Proficiency Tests: (Undergraduate and Graduate) </h2>
                  <ul data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                      <li>Valid passport </li>
                      <li>	Completed Visa Application Form:</li>
                      <li>	Passport-Sized Photographs: </li>
                      <li>	Acceptance Letter </li>
                      <li>	Proof of English Language Proficiency  </li>
                      <li>Medical Certificate: </li>
                     
                  </ul>
              </div>
              <div className={ReqVisa.text} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <h2>Intakes to Study in Cyprus</h2>
                  <p>The Cyprus has multiple intake periods for students, making it flexible for international students to start their studies. Being familiar with the intake schedule and their respective deadlines can be beneficial for
                    planning and preparing for your academic journey in the Cyprus.</p>
              </div>
        </div>
            
    </div>
  )
}

export default Reqvisa
