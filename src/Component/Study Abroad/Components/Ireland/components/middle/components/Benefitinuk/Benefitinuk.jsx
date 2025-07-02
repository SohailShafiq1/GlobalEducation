import React , { useEffect } from 'react'
import Benefit from './Benefitinuk.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Benefitinuk() {
      useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);
  return (
    <div className={Benefit.container}>
    <div className={Benefit.text}>
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Ireland</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Ireland offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>World-Class Education: </strong> Irish universities are globally renowned for their academic excellence and research contributions, with several institutions ranked among the world's top universities. </li>
        <li ><strong>English-Speaking Country:</strong>As a native English-speaking country, Ireland eliminates language barriers and provides an immersive English environment for international students.</li>
        <li><strong>EU Membership Benefits:</strong> As an EU member, Ireland offers students access to European opportunities and the right to work in any EU country after graduation.</li>
        <li> <strong>Tech Hub of Europe: </strong>  Ireland is home to major tech companies like Google, Facebook, and Apple, providing excellent internship and career opportunities in technology. </li>
        <li> <strong> Safe and Welcoming Culture:</strong> Ireland is known for its friendly people, safe environment, and welcoming attitude toward international students. </li>
        <li> <strong>  Rich Cultural Heritage: </strong>Experience Ireland's rich history, literature, music, and traditions while studying in this culturally vibrant country.  </li>
        <li> <strong>  Post-Study Work Rights: </strong> Ireland offers excellent post-study work opportunities, allowing graduates to remain and work in the country after completing their studies. </li>
        <li> <strong>  Research Opportunities:  </strong>  Irish universities are leaders in research and innovation, particularly in technology, pharmaceuticals, and agriculture.</li>
        <li> <strong>  Beautiful Natural Environment:  </strong> From rolling green hills to dramatic coastlines, Ireland offers stunning natural beauty and outdoor activities. </li>
        <li> <strong>  Gateway to Europe:  </strong>  Ireland's location makes it easy to travel and explore other European countries during studies.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Ireland combines world-class education with excellent career opportunities, English-language advantage, and rich cultural experiences in a safe and welcoming environment.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Ireland and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
