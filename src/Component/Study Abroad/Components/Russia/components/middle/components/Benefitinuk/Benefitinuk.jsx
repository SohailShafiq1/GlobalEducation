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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Russia</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Russia offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>World-Class Education: </strong> Russian universities are globally recognized for their academic excellence, particularly in sciences, engineering, and medicine. </li>
        <li ><strong>Affordable Education:</strong>Russia offers high-quality education at very competitive tuition fees and living costs compared to Western countries.</li>
        <li><strong>English-Taught Programs:</strong> Many universities offer programs taught in English, making education accessible for international students.</li>
        <li> <strong>Rich Academic Tradition: </strong>  Russia has a long history of academic excellence and has produced numerous Nobel Prize winners and renowned scientists. </li>
        <li> <strong> Strong in STEM Fields:</strong> Russian universities are particularly strong in science, technology, engineering, mathematics, and medical fields. </li>
        <li> <strong>  Cultural Richness: </strong>Experience Russia's rich cultural heritage, literature, arts, and traditions while studying.  </li>
        <li> <strong>  Research Opportunities: </strong> Access to world-class research facilities and opportunities to work with leading researchers in various fields. </li>
        <li> <strong>  Language Learning:  </strong>  Opportunity to learn Russian, one of the world's major languages, opening doors to careers across Eastern Europe and Central Asia.</li>
        <li> <strong>  Diverse Landscapes:  </strong> From Moscow's urban sophistication to Siberia's natural beauty, Russia offers diverse experiences for students. </li>
        <li> <strong>  Global Recognition:  </strong>  Russian degrees are recognized worldwide, and many Russian universities have strong international partnerships.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Russia combines world-class education with affordability, rich culture, and excellent opportunities in science and technology fields.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Russia and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
