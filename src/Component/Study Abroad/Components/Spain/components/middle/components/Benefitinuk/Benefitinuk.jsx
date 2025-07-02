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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Spain</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Spain offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>High-Quality Education: </strong> Spanish universities offer excellent academic standards and are increasingly recognized globally, with several institutions ranked among Europe's top universities. </li>
        <li ><strong>Affordable Tuition and Living:</strong>Compared to other Western European countries, Spain offers competitive tuition fees and reasonable living costs.</li>
        <li><strong>Learn Spanish:</strong> Gain fluency in Spanish, the world's second-most spoken language, opening doors to opportunities across Latin America and beyond.</li>
        <li> <strong>Vibrant Culture: </strong>  Immerse yourself in Spain's rich culture, from flamenco and festivals to world-renowned art and architecture. </li>
        <li> <strong> Mediterranean Lifestyle:</strong> Enjoy Spain's famous lifestyle with beautiful weather, excellent cuisine, and a healthy work-life balance. </li>
        <li> <strong>  EU Membership Benefits: </strong>As an EU member, Spain provides access to European opportunities and the right to work in any EU country after graduation.  </li>
        <li> <strong>  Historic and Modern Cities: </strong> Study in cities that perfectly blend historic charm with modern amenities, from Barcelona to Madrid to Seville. </li>
        <li> <strong>  Research and Innovation:  </strong>  Spain is increasingly recognized for its research contributions, particularly in renewable energy, biotechnology, and engineering.</li>
        <li> <strong>  Beautiful Geography:  </strong> From Mediterranean beaches to Pyrenees mountains, Spain offers diverse and stunning landscapes for exploration. </li>
        <li> <strong>  Gateway to Latin America:  </strong>  Spain's cultural and linguistic connections make it an ideal stepping stone for careers in Latin American markets.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Spain combines quality education with cultural richness, language learning opportunities, and the famous Spanish lifestyle in a beautiful Mediterranean setting.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Spain and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
