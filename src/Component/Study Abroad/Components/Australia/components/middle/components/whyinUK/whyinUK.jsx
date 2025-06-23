import React , { useEffect } from 'react'
import whyinUKcss from './whyinUK.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyinUK() {
   useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);
  return (
    <div className={whyinUKcss.container}>
        <div className={whyinUKcss.text}>
            <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Why Study in Cyprus?</h1>
            <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Cyprus is an excellent choice for international students for several reasons. First, the country offers high-quality education at affordable prices, making it accessible to a wide range of students. Many universities in Cyprus are internationally recognized, and most courses are taught in English, which helps eliminate language barriers. The multicultural environment allows students to meet peers from various backgrounds, enhancing their educational experience through diverse perspectives. Additionally, Cyprus boasts a beautiful Mediterranean climate, with plenty of sunshine and stunning landscapes, creating an inviting atmosphere for studying and living. The island is known for its safety, ranking as one of the safest countries in Europe, which is reassuring for students living away from home. With a rich history and vibrant culture, studying in Cyprus not only provides academic growth but also the opportunity to explore a unique blend of ancient traditions and modern life. Overall, Cyprus is a welcoming destination that combines quality education with an enriching lifestyle. </p>
        </div>
        <div className={whyinUKcss.vid}>
        <iframe src="https://www.youtube.com/embed/MzCmcR-Bbzw?si=pfm_W2_strvV3YbX?autoplay=1&mute=1" data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-once="true">
        </iframe>
    </div>
      
    </div>
  )
}

export default WhyinUK
