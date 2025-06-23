import React , { useEffect } from 'react'
import picCss from './pic.module.css'
import img1 from '../assets/img1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Pic() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div className={picCss.imgs}>
        <img src={img1} alt="ss" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"/>
    </div>
  )
}

export default Pic
