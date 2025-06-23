import React , { useEffect } from 'react'
import textcss from './text.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Text() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div className={textcss.text} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">
      <h1 >Your dream of studying in Belarus is closer than you think!
      </h1>
      <p>Learn everything you need to know about studying in Belarus and get end to end expert guidance from us.
      </p>
    </div>
  )
}

export default Text
