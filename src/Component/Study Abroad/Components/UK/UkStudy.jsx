import React from 'react'
import Ukcss from './Ukstudy.module.css'

const UkStudy = () => {
  return (
    <div className={Ukcss.top}>
      <h1 style={{textAlign: 'center', color: '#1a3c40', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2.2rem'}}>Study in United Kingdom</h1>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Benefits of Studying in the UK</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>World-renowned universities and research facilities</li>
          <li>Multicultural environment and vibrant student life</li>
          <li>Wide range of courses and flexible study options</li>
          <li>Post-study work opportunities for graduates</li>
          <li>Rich history, culture, and travel opportunities</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>How to Apply</h2>
        <ol style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Choose your course and university</li>
          <li>Prepare academic and English language documents</li>
          <li>Apply through UCAS or directly to the university</li>
          <li>Receive your offer letter and accept it</li>
          <li>Apply for your UK student visa</li>
        </ol>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Why Apply to the UK?</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>High quality of education and teaching standards</li>
          <li>Strong support for international students</li>
          <li>Opportunities for scholarships and financial aid</li>
          <li>Access to innovative research and technology</li>
          <li>Pathways to global career opportunities</li>
        </ul>
      </div>
      <blockquote style={{margin: '2.5rem auto', maxWidth: 600, background: '#e6f0ee', borderLeft: '5px solid #1a3c40', borderRadius: 8, padding: '1.2rem 1rem', color: '#1a3c40', fontSize: '1.15rem', fontStyle: 'italic', textAlign: 'center'}}>
        "We will guide you every step of the way to make your dream of studying in the UK a reality."
      </blockquote>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Frequently Asked Questions</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li><strong>Can I work while studying in the UK?</strong> Yes, international students can work up to 20 hours per week during term time and full-time during holidays.</li>
          <li><strong>Are scholarships available for international students?</strong> Many UK universities offer scholarships based on merit, need, or specific fields of study.</li>
          <li><strong>What is the cost of living in the UK?</strong> The cost varies by city, but students should budget for accommodation, food, transport, and personal expenses. On average, £12,000–£15,000 per year.</li>
          <li><strong>Is health insurance required?</strong> Yes, you must pay the Immigration Health Surcharge (IHS) as part of your visa application.</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Contact Us for Personalized Guidance</h2>
        <p style={{color: '#1a3c40', fontSize: '1.08rem'}}>Our experienced counselors are here to help you with every step of your application, from choosing the right course to preparing your visa documents. <br/>Reach out today and start your journey to the UK with confidence!</p>
      </div>
    </div>
  )
}

export default UkStudy
