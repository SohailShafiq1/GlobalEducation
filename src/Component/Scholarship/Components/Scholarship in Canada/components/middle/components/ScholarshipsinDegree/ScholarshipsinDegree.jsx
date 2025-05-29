import React , { useEffect } from 'react'
import Scholarships from './ScholarshipsinDegree.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScholarshipsinDegree() {
      useEffect(() => {
              AOS.init({
                  duration: 1200,
              });
            }, []);

  return (
    <div>
        <div className={Scholarships.container}>
          <div className={Scholarships.text}>
              <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Undergraduate Scholarships to Study in Canada</h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">I Renowned as a premier destination for pursuing undergraduate studies, Canada stands as a beacon of educational excellence and cultural diversity, making it an alluring choice for students seeking <strong>scholarships to study in Canada</strong>. Within this expansive landscape of academic opportunity, a rich tapestry of scholarships has been meticulously woven to empower and uplift international undergraduates in their relentless pursuit of knowledge and personal growth. Tailored to cater to diverse talents and aspirations, these scholarships not only alleviate the financial burden but also foster a global network of scholars who are poised to contribute meaningfully to our intricately interconnected world.</p>
              
              <ul className={Scholarships.ultext}>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Lester B. Pearson Scholarship (University of Toronto):</strong> This esteemed scholarship stands as a testament to the University of Toronto's unwavering commitment to nurturing future leaders and fostering academic excellence within the global community. Beyond being a <strong>full scholarship for international students in Canada</strong>, it extends its support to cover living expenses and incidental costs. This scholarship celebrates exceptional students who not only exhibit remarkable academic achievements but also demonstrate an inspiring dedication to community engagement.
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>UBC International Leader of Tomorrow Award:</strong> The University of British Columbia's dedication to cultivating global perspectives is eloquently encapsulated by the International Leader of Tomorrow Award. This scholarship is thoughtfully crafted for outstanding students who embody both academic prowess and a resolute drive for positive change in the world. By covering a significant portion of tuition fees, it facilitates seamless access to UBC's vibrant academic environment.
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Calgary International Entrance Scholarship (University of Calgary):</strong> At the University of Calgary, the Calgary International Entrance Scholarship takes centre stage as a celebration of diverse talents. This scholarship transcends mere academic merit, embracing qualities such as leadership, community commitment, and a relentless pursuit of excellence. It paves the way for exceptional international students to thrive within the university's dynamic academic ecosystem.
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>International Student Excellence Program (University of Saskatchewan):</strong> In the spirit of embracing global diversity, the University of Saskatchewan introduces the International Student Excellence Program. Through a range of scholarships based on academic achievements, the university wholeheartedly welcomes international students into an inclusive platform where they can flourish academically and culturally.
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Richard Murray Design Award (Dalhousie University):</strong> The Richard Murray Design Award, offered by Dalhousie University, resonates with the university's dedication to nurturing creativity and innovation. Specifically tailored for students in the field of design, this scholarship recognises and supports their potential to make transformative contributions in this dynamic domain.
                </li>

              </ul>
            </div>



            <div className={Scholarships.text}>
              <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Master’s Scholarships to Study in Canada</h1>
              <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">A <strong>Canada scholarship for Masters</strong> is akin to a golden key, unlocking an array of academic doors for passionate scholars seeking to expand their horizons in one of the world's premier educational destinations. The allure of a <strong>Study in Canada Scholarship</strong>Study in Canada Scholarship beckons with promising opportunities, and within this realm of excellence, Master's scholarships stand as beacons of support and encouragement. As international students aspire to reach new heights in their academic journey, these scholarships stand ready to assist in transforming dreams into reality.</p>
              
              <ul className={Scholarships.ultext}>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Ontario Graduate Scholarship:</strong> An epitome of the <strong>Canada Scholarship for International Students</strong>, the Ontario Graduate Scholarship provides invaluable support to those pursuing Master's studies. As an embodiment of Ontario's commitment to fostering academic brilliance, this scholarship nurtures outstanding students by alleviating financial barriers and enabling them to fully immerse themselves in their chosen fields.                
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Master’s and PhD Entrance Scholarships (McGill University):</strong> McGill University's dedication to global academic enrichment shines through its Master’s and PhD Entrance Scholarships. These scholarships extend a warm invitation to international students, offering not only financial assistance but also the opportunity to become part of McGill's vibrant academic community.                
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>University of Manitoba Graduate Fellowships</strong> A cornerstone of the Study in <strong>Canada Scholarship landscape</strong>, the University of Manitoba Graduate Fellowships champion academic excellence at the Master's level. With a focus on attracting exceptional international scholars, these fellowships open doors to world-class education and research opportunities.                
                </li>

                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Queen's University International Scholarships</strong> The Queen's University International Scholarships symbolise Canada's commitment to fostering a diverse and inclusive academic environment. Tailored to cater to Master's aspirants, these scholarships are more than financial aids; they embody the spirit of global collaboration and innovation.
                </li>

                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                  <strong>Waterloo International Master’s Award of Excellence:</strong> The Waterloo International Master’s Award of Excellence exemplifies Canada's reputation as a melting pot of cultures and ideas. As international students embark on their journey of study in Canada, this award stands as a symbol of recognition, support, and encouragement, epitomising the nation's dedication to nurturing global academic talent.                
                </li>

              </ul>
            </div>



        </div>         
    </div>
  )
}

export default ScholarshipsinDegree
