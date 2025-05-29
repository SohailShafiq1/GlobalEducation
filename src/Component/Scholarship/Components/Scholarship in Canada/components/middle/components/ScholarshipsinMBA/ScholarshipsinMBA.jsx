import React , { useEffect } from 'react'
import Scholarship from './ScholarshipsinMBA.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScholarshipsinMBA() {
 useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);

  return (
    <div>
        <div className={Scholarship.container}>


            <div className={Scholarship.text}>
              <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">MBA Scholarships to Study in Canada</h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Embarking on an MBA journey in Canada holds immense promise, and the path can be made even more attainable through a spectrum of scholarships that resonate with the essence of <strong>scholarship for International students in Canada</strong>. As you contemplate pursuing this transformative educational endeavour, a plethora of scholarships emerges as beacons of financial support and recognition. In this pursuit of excellence, these scholarships not only alleviate the financial strain but also embody Canada's commitment to nurturing global business leaders through the <strong>Canada Scholarship for International Students</strong>.</p>
              
              <ul className={Scholarship.ultext}>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Forté Fellows Program:</strong> 
                  The Forté Fellows Program stands as a testament to Canada's dedication to empowering women in business. This initiative not only extends financial support but also fosters a community of like-minded individuals, creating an ecosystem of inspiration, innovation, and leadership.                
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Rotman Entrance Scholarship:</strong> A gateway to excellence in business education, the Rotman Entrance Scholarship resonates with the spirit of nurturing future business leaders. By providing financial assistance to talented students, it reinforces Canada's reputation as a hub for global business                
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Schulich Leader Scholarships:</strong> The Schulich Leader Scholarships epitomise Canada's commitment to cultivating innovative thinkers and problem solvers. As you seek to become a part of Canada's vibrant academic landscape through these <strong>Scholarships to study in Canada</strong>, you are stepping into a world of possibilities where your potential is recognised and supported.                
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Sauder School of Business Scholarships:</strong> The Sauder School of Business Scholarships exemplify Canada's dedication to fostering business acumen and global perspectives. These scholarships stand as pathways to excellence, offering financial assistance to those who aspire to make a meaningful impact on the world of business.                
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Ivey Business School Entrance Funding:</strong> As you embark on your journey at the Ivey Business School, the Entrance Funding serves as a beacon of support and encouragement. Reflecting the ethos of a <strong>full scholarship for international students in Canada</strong>, it paves the way for talented individuals to excel in their MBA pursuits.                
                </li>

              </ul>
            </div>



            <div className={Scholarship.text}>
              <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Ph.D Scholarship to Study in Canada</h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">For those driven by a passion for research and the pursuit of academic excellence, the realm of <strong>scholarship for International students in Canada</strong> opens doors to a spectrum of Ph.D. scholarships that can profoundly alter the trajectory of your scholarly journey. In the pursuit of your advanced studies, these scholarships stand as beacons of opportunity, embodying the essence of a <strong>Study in Canada Scholarship</strong> and fostering a dynamic environment where innovation thrives.</p>
              
              <ul className={Scholarship.ultext}>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Vanier Canada Graduate Scholarships: </strong> 
                  As you delve into the world of Ph.D. studies, the Vanier Canada Graduate Scholarships symbolise the nation's commitment to nurturing exceptional doctoral candidates. These scholarships extend beyond financial assistance, creating a supportive framework where your research-driven aspirations can flourish.                
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Trudeau Foundation Scholarships:</strong> 
                  The Trudeau Foundation Scholarships not only encompass financial support but also stand as a tribute to visionary leadership and social engagement. Embracing the spirit of a <strong>Canada Scholarship for International Students</strong>, these scholarships recognise and empower scholars dedicated to shaping a better future through their research.                           
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Ontario Graduate Scholarship:</strong> 
                  Positioned at the forefront of Ph.D. opportunities, the Ontario Graduate Scholarship resonates with academic brilliance. It serves as a beacon within the landscape of Study in Canada Scholarships, fostering a community of scholars committed to advancing knowledge and making a substantial impact on their fields.                
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>University of Manitoba Graduate Fellowships:</strong> 
                  Encompassing international students in the realm of advanced research, the University of Manitoba Graduate Fellowships epitomise Canada's dedication to nurturing global academic talents. As a testament to the nation's ethos of inclusivity, these fellowships pave the way for impactful research endeavours.                
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>University of Waterloo Doctoral Awards:</strong> 
                  The University of Waterloo Doctoral Awards shine brightly as pillars of support for Ph.D. aspirants. In the pursuit of a Ph.D. in Canada, these awards showcase the nation's enthusiasm for fostering innovative thinkers and groundbreaking research across diverse disciplines.                
                </li>

              </ul>
            </div>



        </div>         
    </div>
  )
}


export default ScholarshipsinMBA
