import React , { useEffect } from 'react'
import middlecss from './middle.module.css'
import img1 from "../../assets/4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Middle() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

  return (
    <div>
        <div className={middlecss.container4}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Cost of Health Insurance in Australia</h2>
                <p data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">The cost of OSHC will depend on the duration of your study in Australia, your visa and the number of people included in your policy. The Department of Health in Australia has approved the following health funds to offer OSHC:
                </p>
                <ul className={middlecss.textul}>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Australia</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Canada</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Irland</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">New Zealand</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">UK</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">USA</li>
                </ul>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">When you speak with our Education Counsellors, be sure to ask them which scholarships might apply to your situation - you'd be surprised at the difference some extra funds or discounted tuition could make
                </p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img1} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>

        <div className={middlecss.container5}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Scholarships & financial aid for the international students
                </h2>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Various scholarships & financial aid offered by universities in Canada for international students are as follows:
                </p>
                <ul className={middlecss.textul}>
                    <h3 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">For Undergraduate Students</h3>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Merit-based scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Provincial Government scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Need-based grants and bursaries by college</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Tuition Fee waiver</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Commonwealth scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Private or Organizational scholarship</li>
                </ul>
                <ul className={middlecss.textul}>
                    <h3 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">For Postgraduate Students</h3>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Teaching assistantship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Provincial Government scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Research associate-ship </li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Professional Development award</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Fellowship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Merit-based scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Commonwealth scholarship</li>
                    <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Private or Organizational scholarship</li>
                </ul>
            </div>
            <div className={middlecss.imgs}>
                <img src={img1} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>
      
    </div>
  )
}

export default Middle
