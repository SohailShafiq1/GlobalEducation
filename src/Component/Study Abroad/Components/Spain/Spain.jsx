import React from 'react'
import Ukcss from './Ukstudy.module.css'

const Spain = () => {
  return (
    <div className={Ukcss.top}>
      <h1 style={{textAlign: 'center', color: '#1a3c40', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2.2rem'}}>Study in Spain</h1>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Benefits of Studying in Spain</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Renowned universities and diverse programs</li>
          <li>Affordable tuition fees and living costs</li>
          <li>Rich culture, history, and Mediterranean lifestyle</li>
          <li>Opportunities for scholarships and internships</li>
          <li>Central location in Europe for travel</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>How to Apply</h2>
        <ol style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>Choose your course and institution</li>
          <li>Prepare academic and language documents</li>
          <li>Apply online through the university or via the Spanish National University for Distance Education (UNED)</li>
          <li>Receive your admission letter and accept it</li>
          <li>Apply for your Spanish student visa</li>
        </ol>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Why Apply to Spain?</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li>High quality of education and research</li>
          <li>Vibrant student life and international community</li>
          <li>Opportunities for internships and work experience</li>
          <li>Access to Spanish language and culture</li>
          <li>Pathways to careers in Europe</li>
        </ul>
      </div>
      <blockquote style={{margin: '2.5rem auto', maxWidth: 600, background: '#e6f0ee', borderLeft: '5px solid #1a3c40', borderRadius: 8, padding: '1.2rem 1rem', color: '#1a3c40', fontSize: '1.15rem', fontStyle: 'italic', textAlign: 'center'}}>
        "We will guide you every step of the way to make your dream of studying in Spain a reality."
      </blockquote>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Frequently Asked Questions</h2>
        <ul style={{marginLeft: '1.5rem', color: '#1a3c40'}}>
          <li><strong>Can I work while studying in Spain?</strong> Yes, international students can work up to 20 hours per week during their studies.</li>
          <li><strong>Are scholarships available for international students?</strong> Many Spanish institutions and the government offer scholarships for international students.</li>
          <li><strong>What is the cost of living in Spain?</strong> The cost varies by city, but students should budget for accommodation, food, transport, and personal expenses. On average, €7,000–€12,000 per year.</li>
          <li><strong>Is health insurance required?</strong> Yes, health insurance is mandatory for all international students in Spain.</li>
        </ul>
      </div>
      <div className={Ukcss.section}>
        <h2 style={{color: '#2d4a53'}}>Contact Us for Personalized Guidance</h2>
        <p style={{color: '#1a3c40', fontSize: '1.08rem'}}>Our experienced counselors are here to help you with every step of your application, from choosing the right course to preparing your visa documents. <br/>Reach out today and start your journey to Spain with confidence!</p>
      </div>
    </div>
  )
}

export default Spain;
