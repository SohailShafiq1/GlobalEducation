import React from 'react'
import Ukcss from './Ukstudy.module.css'

const Ireland = () => {
  return (
    <div className={Ukcss.top}>
      <h1 style={{textAlign: 'center', color: '#1a3c40', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2.2rem'}}>Study in Ireland</h1>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Benefits of Studying in Ireland</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Renowned universities and research centers</li>
          <li>English-speaking environment</li>
          <li>Welcoming and safe society</li>
          <li>Strong links to global industries</li>
          <li>Post-study work opportunities</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>How to Apply</h2>
        <ol style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Choose your course and institution</li>
          <li>Prepare academic and English language documents</li>
          <li>Apply online through the Central Applications Office (CAO) or directly to the university</li>
          <li>Receive your offer letter and accept it</li>
          <li>Apply for your Irish student visa</li>
        </ol>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Why Apply to Ireland?</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>High quality of education and teaching standards</li>
          <li>Opportunities for scholarships and financial aid</li>
          <li>Access to innovative research and technology</li>
          <li>Pathways to global career opportunities</li>
          <li>Rich culture and vibrant student life</li>
        </ul>
      </div>
      <blockquote style={{margin: '2.5rem auto', maxWidth: 600, background: '#e6f0ee', borderLeft: '5px solid #1a3c40', borderRadius: 8, padding: '1.2rem 1rem', color: '#1a3c40', fontSize: '1.15rem', fontStyle: 'italic', textAlign: 'center'}}>
        "We will guide you every step of the way to make your dream of studying in Ireland a reality."
      </blockquote>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Frequently Asked Questions</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li><strong>Can I work while studying in Ireland?</strong> Yes, international students can work up to 20 hours per week during term and 40 hours per week during holidays.</li>
          <li><strong>Are scholarships available for international students?</strong> Many Irish institutions offer scholarships based on merit and need.</li>
          <li><strong>What is the cost of living in Ireland?</strong> The cost varies by city, but students should budget for accommodation, food, transport, and personal expenses. On average, €7,000–€12,000 per year.</li>
          <li><strong>Is health insurance required?</strong> Yes, health insurance is mandatory for all international students in Ireland.</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Contact Us for Personalized Guidance</h2>
        <p style={{color: '#1a3c40', fontSize: '1.08rem'}}>Our experienced counselors are here to help you with every step of your application, from choosing the right course to preparing your visa documents. <br/>Reach out today and start your journey to Ireland with confidence!</p>
      </div>
    </div>
  )
}

export default Ireland
