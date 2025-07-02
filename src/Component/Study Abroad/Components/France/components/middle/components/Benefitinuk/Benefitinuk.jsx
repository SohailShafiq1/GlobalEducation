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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in France</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in France offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>World-Class Education: </strong> French universities and grandes écoles are renowned globally for their academic excellence and innovative research programs. </li>
        <li ><strong>Affordable Education:</strong>France offers high-quality education at very reasonable costs, with many public universities charging minimal tuition fees even for international students.</li>
        <li><strong>Rich Cultural Heritage:</strong> Students can immerse themselves in French culture, art, literature, and cuisine while studying in the country that gave birth to modern democracy and human rights.</li>
        <li> <strong>Language Opportunities: </strong>  Learning French opens doors to opportunities in French-speaking countries across Africa, Europe, and the Americas, enhancing global career prospects. </li>
        <li> <strong> Innovation Hub:</strong> France is a leader in technology, engineering, fashion, and luxury goods, providing excellent internship and career opportunities. </li>
        <li> <strong>  Central European Location: </strong>France's location makes it easy to travel and explore other European countries, enriching the study abroad experience.  </li>
        <li> <strong>  Student-Friendly Environment: </strong> France offers numerous student discounts, housing assistance, and support services specifically designed for international students. </li>
        <li> <strong>  Post-Study Work Opportunities:  </strong>  Graduates can apply for work permits to gain professional experience in France's diverse economy.</li>
        <li> <strong>  Research Excellence:  </strong> France is home to world-leading research institutions and offers excellent opportunities for students interested in research and development. </li>
        <li> <strong>  Culinary Excellence:  </strong>  Experience authentic French cuisine and culinary traditions while studying in the gastronomic capital of the world.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in France combines academic excellence with cultural richness, affordability, and excellent career prospects, making it an ideal destination for international students.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in France and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
