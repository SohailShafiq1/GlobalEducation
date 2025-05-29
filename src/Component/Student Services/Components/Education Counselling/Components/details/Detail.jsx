import React , { useEffect } from 'react'
import detail from './detail.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

function Detail() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);
      
  return (
    <div>
        <div className={detail.goals} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">We've helped thousands of international students reach their study goals</h1>
            <p>Choosing a course of study in abroad can be daunting, with so many quality options available and numerous wonderful locations to live in
                <br />
                If you're not sure where to start, or if you think you know where you're going but want expert advice first, then speak with us before you apply.
                <br />
                Our qualified and experienced education counsellors would love to hear your story and help you develop a comprehensive learning plan to get you where you want to go. With extensive institutional relationships, we can help you confirm if you're looking at the right courses and suggest appropriate alternatives.
            </p>
            <li>Speak one-on-one with our education counsellor </li>
            <li>Most of our counsellors have been an international student at some point of time, so we've got real empathy and first-hand experience to share with you</li>
            <li>Our in-house team of visa documentation experts will organize study visas for you.</li>
        </div>
        <div className={detail.counsellor}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Our Education Counsellors will learn about your career aspirations, lifestyle and study goals so that we can offer tailored advice.
            </h1>
            <div className={detail.subcontainer} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
                <div className={detail.data}>
                    <div className={detail.steps}>
                    <h4>Step 1 - We listen to you</h4>
                    <p>Tell us about your education goals, your interests and skill sets, as well as your preferred lifestyle location and we'll suggest some great options, study locations and advise you on courses, career paths, available scholarships and possible financial assistance for international students.
                    </p>
                    </div>
                    <div className={detail.steps}>
                    <h4>Step 2 - Then we work out the details</h4>
                    <p>Once we've worked out your personal and professional goals, we'll go into detail to find the universities and institutes that can offer you courses aligned with your career path and chosen city. We'll check that you meet the entry requirements and guide about visa requirements.
                    </p>
                    </div>
                    <div className={detail.steps}>
                    <h4>Step 3 - Address any visa issues</h4>
                    <p>Our team of visa documentation experts will make sure you're covered by an appropriate study visa to continue your overseas studies, as well as ensure that you meet all the requirements.                       
                    </p>
                    </div>
                    <div className={detail.steps}>
                    <h4>Step 4 - We'll handle the application process</h4>
                    <p>There's no need to worry about the paperwork, we'll take care of everything for you, liaise with the authorities and your educational provider to make sure everything runs smoothly.</p>
                    </div>
                </div>
                <div className={detail.img2}>
                    <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true" />
                </div>
            </div>
        </div>
        <div className={detail.experts}>
            <div className={detail.img3}>
            <img src={img2} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true" />
            </div>
            <div className={detail.data}> 
                <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Get expert advice to plan your future</h1>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Through a conversation with one of our Education Counsellors, you can be sure you're making an informed decision on your future study. There's nothing worse than signing up for a course that you are not passionate about studying and will set you back thousands of dollars.
                    <br/>
                    Our extensive experience of working with international students puts us in a position to help you make the right choice based on your interest, aspirations, job outcomes and financial considerations and ensure that you stay visa compliant as you transit from your current course to another.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Detail
