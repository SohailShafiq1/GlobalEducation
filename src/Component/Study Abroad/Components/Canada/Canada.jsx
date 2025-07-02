import React, { useState } from 'react';
import styles from './Canada.module.css';

const Canada = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const quickStats = [
    { label: 'Universities', value: '100+', icon: '🎓' },
    { label: 'International Students', value: '800,000+', icon: '👥' },
    { label: 'Post-Study Work', value: '3 Years', icon: '💼' },
    { label: 'Average Tuition', value: 'CAD 35,000/year', icon: '💰' }
  ];

  const benefits = [
    {
      icon: '🌟',
      title: 'World-Class Education',
      description: 'Home to globally ranked universities with cutting-edge research facilities'
    },
    {
      icon: '🌍',
      title: 'Multicultural Society',
      description: 'Welcoming, diverse environment with students from over 200 countries'
    },
    {
      icon: '💼',
      title: 'Work Opportunities',
      description: 'Post-graduation work permits up to 3 years and pathways to PR'
    },
    {
      icon: '🏔️',
      title: 'Quality of Life',
      description: 'Safe, beautiful country with excellent healthcare and social benefits'
    },
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Competitive tuition fees and numerous scholarship opportunities'
    },
    {
      icon: '🍁',
      title: 'Permanent Residency',
      description: 'Clear pathways to Canadian permanent residency and citizenship'
    }
  ];

  const topUniversities = [
    { name: 'University of Toronto', ranking: '#18 QS World Ranking', specialties: 'Medicine, Business, Engineering' },
    { name: 'McGill University', ranking: '#30 QS World Ranking', specialties: 'Medicine, Law, Arts' },
    { name: 'University of British Columbia', ranking: '#47 QS World Ranking', specialties: 'Engineering, Business, Sciences' },
    { name: 'University of Alberta', ranking: '#110 QS World Ranking', specialties: 'Engineering, Medicine, Business' },
    { name: 'McMaster University', ranking: '#144 QS World Ranking', specialties: 'Health Sciences, Engineering, Business' },
    { name: 'University of Waterloo', ranking: '#154 QS World Ranking', specialties: 'Computer Science, Engineering, Mathematics' }
  ];

  const faqs = [
    {
      question: 'What are the English language requirements for Canada?',
      answer: 'Most universities require IELTS 6.5+ or TOEFL 90+ for undergraduate programs, and IELTS 7.0+ or TOEFL 100+ for graduate programs. Some institutions accept Duolingo English Test.'
    },
    {
      question: 'Can I work while studying in Canada?',
      answer: 'Yes! International students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. No separate work permit required.'
    },
    {
      question: 'What is the cost of living in Canada?',
      answer: 'Living costs vary by city: Toronto/Vancouver (CAD 15,000-20,000/year), Montreal/Ottawa (CAD 12,000-15,000/year), smaller cities (CAD 10,000-12,000/year).'
    },
    {
      question: 'How long does the study permit process take?',
      answer: 'Study permit processing typically takes 4-12 weeks, depending on your country of residence. Apply early to avoid delays.'
    },
    {
      question: 'What are the post-graduation work opportunities?',
      answer: 'Graduates can apply for Post-Graduation Work Permit (PGWP) for up to 3 years, depending on program length. This provides valuable Canadian work experience.'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'requirements':
        return (
          <div className={styles.tabContent}>
            <h3>📋 Academic Requirements</h3>
            <ul>
              <li><strong>Undergraduate:</strong> High school diploma with 70%+ average, English proficiency (IELTS 6.5+/TOEFL 90+)</li>
              <li><strong>Graduate:</strong> Bachelor's degree with 3.0+ GPA, English proficiency (IELTS 7.0+/TOEFL 100+)</li>
              <li><strong>PhD:</strong> Master's degree, research proposal, supervisor agreement</li>
            </ul>
            
            <h3>💰 Financial Requirements</h3>
            <ul>
              <li>Proof of funds: CAD 10,000+ for living expenses (first year)</li>
              <li>Tuition fee payment or proof of payment ability</li>
              <li>Bank statements from last 6 months</li>
            </ul>
          </div>
        );
      case 'process':
        return (
          <div className={styles.tabContent}>
            <h3>📝 Step-by-Step Application Process</h3>
            <ol>
              <li><strong>Research & Choose:</strong> Select universities and programs that match your goals</li>
              <li><strong>Prepare Documents:</strong> Academic transcripts, English test scores, essays, references</li>
              <li><strong>Apply to Universities:</strong> Submit applications through university portals or OUAC</li>
              <li><strong>Receive Offers:</strong> Review and accept your preferred offer</li>
              <li><strong>Study Permit:</strong> Apply for Canadian study permit with letter of acceptance</li>
              <li><strong>Prepare for Departure:</strong> Accommodation, health insurance, travel arrangements</li>
            </ol>
            
            <h3>⏰ Timeline</h3>
            <p><strong>Fall Intake (September):</strong> Apply by January-March</p>
            <p><strong>Winter Intake (January):</strong> Apply by September-October</p>
            <p><strong>Summer Intake (May):</strong> Apply by January-February</p>
          </div>
        );
      case 'documents':
        return (
          <div className={styles.tabContent}>
            <h3>📄 Required Documents</h3>
            
            <h4>Academic Documents:</h4>
            <ul>
              <li>Official transcripts from all previous institutions</li>
              <li>Degree certificates/diplomas</li>
              <li>English proficiency test scores (IELTS/TOEFL/Duolingo)</li>
              <li>Statement of Purpose/Personal Statement</li>
              <li>Letters of Recommendation (2-3)</li>
            </ul>
            
            <h4>Visa Documents:</h4>
            <ul>
              <li>Valid passport</li>
              <li>Letter of Acceptance from Canadian institution</li>
              <li>Proof of financial support</li>
              <li>Medical examination (if required)</li>
              <li>Police clearance certificate</li>
              <li>Study permit application form</li>
            </ul>
          </div>
        );
      case 'universities':
        return (
          <div className={styles.tabContent}>
            <h3>🏛️ Top Universities in Canada</h3>
            <div className={styles.universitiesList}>
              {topUniversities.map((uni, index) => (
                <div key={index} className={styles.universityCard}>
                  <h4>{uni.name}</h4>
                  <p className={styles.ranking}>{uni.ranking}</p>
                  <p className={styles.specialties}><strong>Top Programs:</strong> {uni.specialties}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <span className={styles.flag}>🇨🇦</span>
          <h1 className={styles.heading}>Study in Canada</h1>
          <p className={styles.subheading}>
            Experience world-class education in one of the most welcoming and beautiful countries
          </p>
          <img 
            src="https://images.unsplash.com/photo-1503614472-8c93d56cd638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Canadian Campus" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.src = 'https://picsum.photos/1000/400?random=21';
            }}
          />
        </div>
      </section>

      {/* Quick Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {quickStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overviewSection}>
        <h2>Why Choose Canada for Higher Education?</h2>
        <p>
          Canada stands as a global leader in education, offering internationally recognized degrees, 
          cutting-edge research opportunities, and a multicultural environment that welcomes students 
          from around the world. With its high quality of life, safety, and clear pathways to 
          permanent residency, Canada is the ideal destination for your academic journey.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Studying in Canada</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'requirements' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            Requirements
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'process' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Application Process
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'documents' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'universities' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('universities')}
          >
            Top Universities
          </button>
        </div>
        {renderTabContent()}
      </section>

      {/* Image Gallery */}
      <section className={styles.gallerySection}>
        <h2>Discover Canada</h2>
        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="University of Toronto"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=22';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="McGill University"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=23';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Vancouver Campus"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=24';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Canadian Landscape"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=25';
            }}
          />
        </div>
        <p className={styles.galleryLink}>
          <a href="https://photos.google.com/search/canada%20universities" target="_blank" rel="noopener noreferrer">
            View more photos of Canadian universities and campuses →
          </a>
        </p>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <blockquote className={styles.testimonial}>
          <p>"Studying in Canada was the best decision I ever made. The education quality is exceptional, and the multicultural environment helped me grow personally and professionally. The pathway to permanent residency made it even more attractive!"</p>
          <cite>- Sarah M., Business Graduate from University of Toronto</cite>
        </blockquote>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                {faq.question}
                <span className={styles.faqToggle}>{activeFAQ === index ? '−' : '+'}</span>
              </button>
              {activeFAQ === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Your Canadian Journey?</h2>
        <p>Let our expert counselors guide you through every step of your application process.</p>
        <button className={styles.ctaButton}>Get Free Consultation</button>
      </section>
    </div>
  );
};

export default Canada;
