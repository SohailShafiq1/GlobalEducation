import React , { useEffect } from 'react'
import heading from './heading.module.css'
import img1 from '../../assets/girl.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Heading() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);

  return (
    <div className={heading.container}>
        <div className={heading.imgs}>
            <img src={img1  } alt="" data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-once="true"/>
        </div>
        <div className={heading.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true"> Providing you the pathway to excellence</h1>
            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><strong>Allow us the opportunity to foster a harmonious transition from school to university with exceptional personalized overseas education counselling.<br/> Our Education Counsellors can get you on the right track towards an amazing career.</strong></p>
        </div>
      
    </div>
  )
}

export default Heading
