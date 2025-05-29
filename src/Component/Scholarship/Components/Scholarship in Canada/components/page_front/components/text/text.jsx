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
    <div className={textcss.text}>
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Scholarships in Canada
      </h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Learn everything you need to know about Scholarships in Canada and get end to end expert guidance from us.
      </p>
    </div>
  )
}

export default Text
