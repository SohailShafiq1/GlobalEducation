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
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Benefits of Studying in Canada</h1>
      <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Studying in Canada offers numerous benefits for international students. Here are some key advantages:</p>
      <ul className={Benefit.ultext} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
        <li ><strong>High-Quality Education: </strong> Canadian universities provide world-class academic standards and are recognized internationally. Many institutions are ranked among the top globally, ensuring highly respected degrees. </li>
        <li ><strong>Affordable Tuition Fees:</strong>Compared to other Western countries like the US and UK, tuition fees in Canada are relatively competitive, making it an economical choice for quality education.</li>
        <li><strong>English and French Programs:</strong> Universities offer programs in both English and French, providing international students with excellent language learning opportunities.</li>
        <li> <strong>Cultural Diversity: </strong>  Canada is one of the most multicultural countries in the world, welcoming students from various backgrounds and fostering an inclusive educational environment. </li>
        <li> <strong> Safe Environment:</strong> Canada is consistently ranked as one of the safest countries globally, providing a secure environment for students to live and study. </li>
        <li> <strong>  Beautiful Natural Environment: </strong>From stunning mountains to pristine lakes, Canada offers breathtaking natural beauty that provides an inspiring backdrop for student life.  </li>
        <li> <strong>  Post-Graduation Work Opportunities: </strong> Canada offers excellent post-graduation work permits, allowing international students to gain valuable Canadian work experience. </li>
        <li> <strong>  Pathway to Permanent Residence:  </strong>  Canada provides clear pathways for international students to obtain permanent residence and eventually citizenship.</li>
        <li> <strong>  High Quality of Life:  </strong> Canadian cities consistently rank among the world's most livable, offering excellent healthcare, infrastructure, and quality of life. </li>
        <li> <strong>  Research Opportunities:  </strong>  Canadian universities are leaders in research and innovation, providing students with excellent opportunities to participate in cutting-edge research projects.</li>
         </ul>
      <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">In summary, studying in Canada combines world-class education with excellent post-study opportunities, safety, and an exceptional quality of life, making it one of the top destinations for international students.</p>
    </div>
    <p className={Benefit.imp} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Looking to gather more information about Applying to Study in Canada and the array of advantages it can offer? Reach out to Global Education Consultancy and schedule a FREE consultation today to delve deeper into the details</p>
    </div>
  )
}

export default Benefitinuk
