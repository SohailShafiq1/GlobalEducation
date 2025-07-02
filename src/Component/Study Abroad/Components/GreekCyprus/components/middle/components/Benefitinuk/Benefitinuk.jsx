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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Greek Cyprus</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Greek Cyprus offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>EU Education Standards: </strong> As an EU member, Cyprus offers high-quality education that meets European standards with internationally recognized degrees. </li>
        <li ><strong>Affordable Living Costs:</strong>Cyprus offers reasonable tuition fees and living costs compared to other EU countries, making it an economical choice for quality European education.</li>
        <li><strong>English-Speaking Environment:</strong> English is widely spoken and many programs are taught in English, making it comfortable for international students.</li>
        <li> <strong>Mediterranean Climate: </strong>  Enjoy year-round sunshine and beautiful weather, creating an ideal environment for studying and living. </li>
        <li> <strong> Safe and Peaceful:</strong> Cyprus is one of the safest countries in Europe with very low crime rates and a peaceful atmosphere. </li>
        <li> <strong>  Beautiful Island Life: </strong>Study surrounded by stunning beaches, historic sites, and Mediterranean culture.  </li>
        <li> <strong>  EU Citizenship Benefits: </strong> Studying in Cyprus provides access to EU educational and career opportunities after graduation. </li>
        <li> <strong>  Rich History and Culture:  </strong>  Explore thousands of years of history, from ancient Greek ruins to medieval castles, while studying.</li>
        <li> <strong>  Strategic Location:  </strong> Cyprus's location at the crossroads of Europe, Asia, and Africa offers unique cultural exposure and travel opportunities. </li>
        <li> <strong>  Growing Economy:  </strong>  Cyprus has a developing economy with opportunities in tourism, finance, and shipping industries.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Greek Cyprus combines EU-standard education with Mediterranean lifestyle, safety, and affordability, making it an attractive destination for international students.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Greek Cyprus and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
