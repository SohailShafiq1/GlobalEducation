import React , { useEffect } from 'react'
import Requirement from './requirement.module.css'
import ReqDoc from './components/ReqDoc/ReqDoc'
import Reqvisa from './components/Reqvisa/Reqvisa'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Requirements() {
    useEffect(() => {
            AOS.init({
                duration: 1200,
            });
          }, []);
  return (
    <div className={Requirement.maincontainer}>
    <div className={Requirement.container}>
        <div className={Requirement.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Requirements for Studying in the Cyprus for International Students</h1>
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Here are the requirements for studying in Cyprus, separated by undergraduate, master's, and doctoral programs for international students:</p>
        </div>
        <div className={Requirement.sublist}>
            <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">Under Graduate Diploma</h2>
            <ul>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">High school diploma or equivalent (e.g., O/A Levels).</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">English proficiency (IELTS 5.5 or TOEFL 65 IBT).</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Application form,transcripts.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Certificates, passport/birth certificate</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Personal statement, and recommendation letters (if required).</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Financial proof for tuition and living expenses.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Health insurance.</li>
            </ul>
        </div>
        <div className={Requirement.sublist}>
            <h2  data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">Master’s Degree</h2>
            <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Recognized bachelor's degree.</li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">English proficiency (IELTS 6.0–6.5 or TOEFL 80 IBT).</li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Statement of Purpose.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Application form,transcripts.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Certificates, passport/birth certificate</li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Research proposal (for research-oriented programs).</li>
            </ul>
        </div>
        <div className={Requirement.sublist}>
            <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">Doctorate</h2>
            <ul>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Recognized master's degree.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">English proficiency (IELTS 6.5 or TOEFL 80 IBT).</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Application form, transcripts, degree certificates, passport/birth certificate, CV, PhD research proposal, and financial proof.</li>
                <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Interview (if required).</li>
            </ul>
        </div>
      
    </div>
    <div className={Requirement.container}>
        <div className={Requirement.text}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Exams Required to Study in Cyprus Universities for International Students</h1>
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">The path to studying in UK universities as an international student is paved with academic benchmarks that attest to your readiness for higher education. Beyond submitting applications and essays, these exams stand as gateways to the world-class education the UK offers. 
                From proving your English language proficiency through IELTS, TOEFL, and PTE to displaying your academic prowess with SAT, ACT, GRE, and GMAT, these exams shape your journey. Each test is a measure of your potential, ensuring that you not
                only meet the admission requirements but thrive in the enriching educational landscape that UK universities provide.</p>
        </div>
        <div className={Requirement.sublist}>
            <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">English Language Proficiency Tests: (Undergraduate and Graduate) </h2>
            <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">IELTS </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">TOEFL </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Cambridge English Exam(CAE/CPE) </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">University's English Placement Test(EPT) </li>
            </ul>
        </div>
        <div className={Requirement.sublist}>
            <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">Undergraduate Admission Requirements:</h2>
            <ul>
            <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">IELTS </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">TOEFL </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Cambridge English Exam(CAE/CPE) </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">University's English Placement Test(EPT) </li>
            </ul>
        </div>
        <div className={Requirement.sublist}>
            <h2 data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">Graduate Admission Requirements:</h2>
            <ul>
            <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">IELTS </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">TOEFL </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Cambridge English Exam(CAE/CPE) </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">University's English Placement Test(EPT) </li>
            </ul>
        </div>
      
    </div>
    <ReqDoc/>
    <Reqvisa/>
    </div>
  )
}

export default Requirements
