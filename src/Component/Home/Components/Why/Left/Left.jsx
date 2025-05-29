import React , { useEffect } from 'react'
import styles from './left.module.css'
import img from '../assets/why.png'
const s = styles;
import AOS from 'aos';
import 'aos/dist/aos.css';

const Left = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={s["main"]}>
        <img src={img} alt="" data-aos="zoom-in-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
      
    </div>
  )
}

export default Left
