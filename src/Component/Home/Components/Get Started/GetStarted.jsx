import React , { useEffect } from 'react'
import styles from './getstart.module.css'
const s = styles;
import img from './assets/girl.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
const GetStarted = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div className={s["container"]}>
        <div className={s["left"]} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
            <div className={s["future"]}>
            <h1 >
                The future you imagine is closer than you think.
            </h1>
            <p>
                The future you imagine is closer than you think.The future you imagine is closer than you think.The future you imagine is closer than you think.
            </p>
            <div className={s["get-started-btn"]} >
                <button>
                <NavLink to="/contact" className={s["btn"]}>
                Get started for free
                </NavLink>
                    
                </button>
            </div>
            </div>

        </div>
        <div className={s["right"]} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default GetStarted
