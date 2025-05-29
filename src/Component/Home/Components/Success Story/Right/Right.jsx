import React , { useEffect } from 'react'
import styles from './right.module.css'
import img from '../assets/pic.webp'
const s = styles;
import AOS from 'aos';
import 'aos/dist/aos.css';

const Right = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);

  return (
    <div className={s["container"]}>
      <img src={img} alt="" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
    </div>
  )
}

export default Right
