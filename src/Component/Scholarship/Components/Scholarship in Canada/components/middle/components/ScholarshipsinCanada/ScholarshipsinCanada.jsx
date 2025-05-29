import React , { useEffect } from 'react'
import ScholarshipsinCanadacss from './ScholarshipsinCanada.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScholarshipsinCanada() {
   useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);
  return (
    <div className={ScholarshipsinCanadacss.container}>
        <div className={ScholarshipsinCanadacss.text}>
            <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Scholarships in Canada for International Students</h1>
            <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Ambitious individuals who wish to study in Canada and potentially receive a scholarship hold this ambition deeply in their hearts. This nation is globally praised for its world-class universities and its inclusive culture. To assist these international students wishing to pursue their dreams of academic success, there are many scholarships for International students in  Canada. This page will shed light on different types of scholarships for International students in Canada, along with their eligibility criteria, will be discussed. Furthermore, insight into each specific application process will also be offered. These scholarships provide a source of hope and encouragement for deserving students to achieve their goals in Canada
            </p>
        </div>
        <div className={ScholarshipsinCanadacss.type}>
          <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Types of Scholarships in Canada</h1>
          <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Exploring the realm of scholarship for International students in Canada not only illuminates the vast landscape of educational support but also underscores Canada's commitment to global academic enrichment. Within this tapestry of opportunities, various scholarship types emerge, each intricately designed to cater to specific student aspirations:</p>
          <ul data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
            <li ><strong>Government-Funded Scholarships:</strong> These prestigious awards, such as the <strong>Canada Scholarship for International Students</strong>, stem directly from the benevolence of the Canadian government. Serving as beacons of educational diplomacy, these initiatives exemplify the nation's dedication to fostering international exchange and nurturing future leaders.</li>
            <li ><strong>Non-Government Funded Scholarships:</strong> A vibrant landscape unfolds, with a myriad of Non-Governmental Organizations (NGOs) and private institutions extending their support through the <strong>Study in Canada Scholarship</strong>. These scholarships, linked to diverse criteria, mirror the multifaceted avenues of excellence that students can explore.</li>
            <li ><strong>University Funded Scholarships:</strong>  Renowned academic institutions across Canada proudly unfurl their distinct scholarship programs, enticing exceptional talent from every corner of the globe. With scholarships tailored to international students, these universities embody their commitment to fostering a globally diverse and intellectually vibrant learning community.</li>
          </ul>
          <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Each of these distinct scholarship categories weaves its thread into the fabric of educational advancement, addressing unique facets of student needs and aspirations. As a result, a constellation of opportunities gleams for those seeking the enriching and transformative experience of Studying in Canada.</p>
        </div>

    </div>
  )
}

export default ScholarshipsinCanada
