import React , { useEffect } from 'react'
import styles from './top.module.css'
const s =styles;
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
  }, []);
  return (
    <div className={s["box"]}>
      <div> 
        <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
            With you at every step from one point to another
        </h1>
      </div>
    </div>
  )
}

export default Top
