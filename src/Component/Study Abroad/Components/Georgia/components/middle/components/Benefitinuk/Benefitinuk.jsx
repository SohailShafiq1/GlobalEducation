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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Georgia</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Georgia offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>High-Quality Education: </strong> Georgian universities provide excellent academic standards with modern facilities and internationally recognized degrees. </li>
        <li ><strong>Very Affordable Costs:</strong>Georgia offers some of the most affordable tuition fees and living costs in Europe, making quality education accessible to students from all backgrounds.</li>
        <li><strong>English-Taught Programs:</strong> Many universities offer programs taught entirely in English, making it accessible for international students without language barriers.</li>
        <li> <strong>Safe and Welcoming Environment: </strong>  Georgia is known for its hospitality and safety, providing a comfortable environment for international students to live and study. </li>
        <li> <strong> Strategic Location:</strong> Located at the crossroads of Europe and Asia, Georgia offers unique cultural experiences and easy access to both continents. </li>
        <li> <strong>  Rich Cultural Heritage: </strong>Students can explore Georgia's ancient history, traditional cuisine, and stunning landscapes while studying.  </li>
        <li> <strong>  EU Recognition: </strong> Georgian degrees are recognized by the EU and many international organizations, ensuring global career opportunities. </li>
        <li> <strong>  Growing Economy:  </strong>  Georgia's developing economy offers emerging opportunities for graduates, especially in technology and business sectors.</li>
        <li> <strong>  Beautiful Natural Environment:  </strong> From the Caucasus Mountains to the Black Sea coast, Georgia offers breathtaking natural beauty and outdoor activities. </li>
        <li> <strong>  Simple Visa Process:  </strong>  Georgia offers relatively straightforward visa procedures for international students, making the application process smooth and efficient.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Georgia combines quality education with affordability, safety, and rich cultural experiences, making it an attractive and accessible destination for international students.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Georgia and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
