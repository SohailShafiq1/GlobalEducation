import React from 'react'
import Ukcss from './Ukstudy.module.css'

const Belarus = () => {
  return (
    <div className={Ukcss.top}>
      <h1 style={{textAlign: 'center', color: '#1a3c40', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2.2rem'}}>Study in Belarus</h1>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Benefits of Studying in Belarus</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Affordable tuition fees and cost of living</li>
          <li>Internationally recognized degrees</li>
          <li>Modern facilities and quality education</li>
          <li>Safe and welcoming environment for students</li>
          <li>Opportunities for scholarships and research</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>How to Apply</h2>
        <ol style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Choose your course and university in Belarus</li>
          <li>Prepare academic and language documents</li>
          <li>Submit your application online or through an agent</li>
          <li>Receive your admission letter and accept it</li>
          <li>Apply for your Belarus student visa</li>
        </ol>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Why Apply to Belarus?</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>High standard of education in medicine, engineering, and IT</li>
          <li>English-taught programs available</li>
          <li>Rich cultural heritage and diverse student community</li>
          <li>Pathways to further education and career opportunities in Europe</li>
          <li>Supportive environment for international students</li>
        </ul>
      </div>
      <blockquote style={{margin: '2.5rem auto', maxWidth: 600, background: '#e6f0ee', borderLeft: '5px solid #1a3c40', borderRadius: 8, padding: '1.2rem 1rem', color: '#1a3c40', fontSize: '1.15rem', fontStyle: 'italic', textAlign: 'center'}}>
        "We will guide you every step of the way to make your dream of studying in Belarus a reality."
      </blockquote>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Frequently Asked Questions</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li><strong>Can I work while studying in Belarus?</strong> Yes, international students can work part-time during their studies, subject to local regulations.</li>
          <li><strong>Are scholarships available for international students?</strong> Many universities in Belarus offer scholarships based on academic merit and need.</li>
          <li><strong>What is the cost of living in Belarus?</strong> Belarus is known for its affordable living costs, with students typically spending less than in Western Europe.</li>
          <li><strong>Is health insurance required?</strong> Yes, all international students must have valid health insurance during their stay in Belarus.</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Contact Us for Personalized Guidance</h2>
        <p style={{color: '#1a3c40', fontSize: '1.08rem'}}>Our experienced counselors are here to help you with every step of your application, from choosing the right course to preparing your visa documents. <br/>Reach out today and start your journey to Belarus with confidence!</p>
      </div>
    </div>
  )
}

export default Belarus
