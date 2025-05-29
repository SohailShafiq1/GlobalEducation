import React , { useEffect } from 'react'
import Needhelpcss from './Needhelp.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Needhelp() {
      useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);
  return (
    <div className={Needhelpcss.container} style={{color:"white"}}>
        <div className={Needhelpcss.subcontainer2} data-aos="zoom-out-down" data-aos-easing="ease-in-out" data-aos-once="true">
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true"><strong>Contact Global Education</strong> so that our counsellors can help you apply for the scholarships that best suites you based on your academic scores, among other things!</p>
        </div>
    </div>
  )
}

export default Needhelp
