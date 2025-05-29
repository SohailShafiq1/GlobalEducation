import React , { useEffect } from 'react'
import styles from './top.module.css'
const s = styles;
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={s["container"]} >
      <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
        Hear from those who got there!
      </h1>
    </div>
  )
}

export default Top
