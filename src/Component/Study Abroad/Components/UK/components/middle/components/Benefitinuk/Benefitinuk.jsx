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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in the United Kingdom</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in the UK offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>World-Class Education: </strong> The UK is home to some of the world's oldest and most prestigious universities, including Oxford, Cambridge, and many others ranked globally in the top 100. </li>
        <li ><strong>English Language Advantage:</strong>Study in the birthplace of the English language, providing an immersive environment for mastering academic and professional English.</li>
        <li><strong>Shorter Course Duration:</strong> UK degrees can often be completed faster than in other countries - bachelor's in 3 years, master's in 1 year - saving time and money.</li>
        <li> <strong>Research Excellence: </strong>  The UK is a global leader in research and innovation, offering students access to cutting-edge facilities and groundbreaking research opportunities. </li>
        <li> <strong> Cultural Heritage:</strong> Immerse yourself in rich British culture, history, literature, and traditions while studying in this historically significant country. </li>
        <li> <strong>  Global Recognition: </strong>UK qualifications are recognized and respected worldwide, providing excellent career prospects globally.  </li>
        <li> <strong>  Diverse Student Community: </strong> Experience a multicultural environment with students from around the world, fostering global networks and friendships. </li>
        <li> <strong>  Post-Study Work Opportunities:  </strong>  The UK offers post-study work visas allowing graduates to gain valuable work experience after completing their studies.</li>
        <li> <strong>  Gateway to Europe:  </strong> The UK's location provides easy access to explore other European countries during study breaks. </li>
        <li> <strong>  Innovation Hub:  </strong>  The UK is home to leading companies in finance, technology, creative industries, and scientific research, offering excellent internship and career opportunities.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in the UK combines world-renowned education with cultural richness, research excellence, and global career opportunities in an English-speaking environment.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in the United Kingdom and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
