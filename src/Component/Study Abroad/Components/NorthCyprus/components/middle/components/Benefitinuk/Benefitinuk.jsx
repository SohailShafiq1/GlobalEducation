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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in North Cyprus</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in North Cyprus offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>Affordable Education: </strong> North Cyprus offers high-quality education at very competitive tuition fees and living costs, making it accessible for students from all economic backgrounds. </li>
        <li ><strong>English-Taught Programs:</strong>Most universities offer programs taught in English, eliminating language barriers for international students.</li>
        <li><strong>European-Standard Education:</strong> Universities follow European credit transfer systems and maintain high academic standards with international recognition.</li>
        <li> <strong>Beautiful Mediterranean Setting: </strong>  Study in a stunning island environment with beautiful beaches, historic sites, and pleasant Mediterranean climate year-round. </li>
        <li> <strong> Safe Environment:</strong> North Cyprus maintains very low crime rates and offers a safe, peaceful environment for students. </li>
        <li> <strong>  Cultural Diversity: </strong>The region welcomes students from around the world, creating a multicultural educational environment.  </li>
        <li> <strong>  Rich History: </strong> Explore thousands of years of history, from ancient ruins to medieval castles, while studying. </li>
        <li> <strong>  Modern Facilities:  </strong>  Universities offer state-of-the-art facilities, modern campuses, and excellent student services.</li>
        <li> <strong>  Easy Admission Process:  </strong> Simplified admission procedures and flexible entry requirements make it easier for international students to apply. </li>
        <li> <strong>  Gateway to Europe and Middle East:  </strong>  Strategic location provides easy access to explore both European and Middle Eastern cultures.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in North Cyprus combines affordable, quality education with beautiful Mediterranean lifestyle, safety, and cultural richness, making it an excellent choice for international students.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in North Cyprus and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
