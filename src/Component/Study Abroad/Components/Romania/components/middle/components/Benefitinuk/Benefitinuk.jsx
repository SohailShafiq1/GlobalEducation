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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Romania</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Romania offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>EU Education Standards: </strong> As an EU member, Romania offers high-quality education that meets European standards with internationally recognized degrees. </li>
        <li ><strong>Very Affordable Costs:</strong>Romania offers some of the most affordable tuition fees and living costs in the EU, making quality European education accessible.</li>
        <li><strong>English-Taught Programs:</strong> Many universities offer programs taught entirely in English, especially in medicine, engineering, and business.</li>
        <li> <strong>Strong Medical Education: </strong>  Romania is particularly renowned for its medical and dental programs, attracting students from around the world. </li>
        <li> <strong> Safe Environment:</strong> Romania maintains low crime rates and provides a safe, welcoming environment for international students. </li>
        <li> <strong>  Rich Cultural Heritage: </strong>Explore Romania's fascinating history, from medieval castles to vibrant folk traditions, while studying.  </li>
        <li> <strong>  EU Membership Benefits: </strong> Access to European opportunities and the right to work in any EU country after graduation. </li>
        <li> <strong>  Modern Facilities:  </strong>  Romanian universities have invested heavily in modern facilities and technology to enhance the learning experience.</li>
        <li> <strong>  Beautiful Landscapes:  </strong> From the Carpathian Mountains to the Black Sea coast, Romania offers diverse and stunning natural beauty. </li>
        <li> <strong>  Central European Location:  </strong>  Easy access to explore other European countries during studies, with Romania serving as a gateway to both Eastern and Western Europe.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Romania combines EU-standard education with exceptional affordability, rich culture, and excellent opportunities, particularly in medical fields.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Romania and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
