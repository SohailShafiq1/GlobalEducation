import React, { useState } from 'react';
import styles from './UK.module.css';

const UkStudy = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const quickStats = [
    { label: 'Universities', value: '150+', icon: '🎓' },
    { label: 'International Students', value: '485,000+', icon: '👥' },
    { label: 'Post-Study Work', value: '2 Years', icon: '💼' },
    { label: 'Average Tuition', value: '£25,000/year', icon: '💰' }
  ];

  const benefits = [
    {
      icon: '🏛️',
      title: 'World-Class Universities',
      description: 'Home to Oxford, Cambridge, and other globally prestigious institutions'
    },
    {
      icon: '⏱️',
      title: 'Shorter Duration',
      description: 'Complete your degree faster with 3-year bachelor\'s and 1-year master\'s programs'
    },
    {
      icon: '💼',
      title: 'Graduate Route Visa',
      description: '2-year post-study work visa for all graduates to gain UK work experience'
    },
    {
      icon: '🌍',
      title: 'Cultural Diversity',
      description: 'Multicultural environment with students from over 200 countries'
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Leading research facilities and opportunities for academic collaboration'
    },
    {
      icon: '🇪🇺',
      title: 'Gateway to Europe',
      description: 'Strategic location providing easy access to European countries and cultures'
    }
  ];

  const topUniversities = [
    { name: 'University of Oxford', ranking: '#4 QS World Ranking', specialties: 'Arts, Sciences, Medicine, Law' },
    { name: 'University of Cambridge', ranking: '#6 QS World Ranking', specialties: 'Engineering, Sciences, Arts, Medicine' },
    { name: 'Imperial College London', ranking: '#7 QS World Ranking', specialties: 'Engineering, Medicine, Business, Sciences' },
    { name: 'University College London', ranking: '#9 QS World Ranking', specialties: 'Medicine, Engineering, Arts, Sciences' },
    { name: 'London School of Economics', ranking: '#32 QS World Ranking', specialties: 'Economics, Politics, Law, Sociology' },
    { name: 'University of Edinburgh', ranking: '#34 QS World Ranking', specialties: 'Medicine, Engineering, Arts, Sciences' }
  ];

  const faqs = [
    {
      question: 'What are the English language requirements for UK universities?',
      answer: 'Most universities require IELTS 6.0-7.0+ or TOEFL 80-100+ depending on the program level. Some accept Pearson PTE, Duolingo, or internal English tests.'
    },
    {
      question: 'Can I work while studying in the UK?',
      answer: 'Yes! International students can work up to 20 hours per week during term time and full-time during holidays. No separate work permit required.'
    },
    {
      question: 'What is the Graduate Route visa?',
      answer: 'The Graduate Route allows international students to stay and work in the UK for 2 years after graduation (3 years for PhD graduates) without sponsorship.'
    },
    {
      question: 'How much does it cost to study in the UK?',
      answer: 'Undergraduate: £15,000-35,000/year, Postgraduate: £16,000-40,000/year. Living costs: £12,000-15,000/year (higher in London).'
    },
    {
      question: 'When should I apply for UK universities?',
      answer: 'UCAS applications open in September for the following year. Deadlines: October 15 (Oxford/Cambridge/Medicine), January 31 (most courses), June 30 (clearing).'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'requirements':
        return (
          <div className={styles.tabContent}>
            <h3>📋 Academic Requirements</h3>
            <ul>
              <li><strong>Undergraduate:</strong> A-levels, IB Diploma, or equivalent qualifications with strong grades</li>
              <li><strong>Postgraduate:</strong> Bachelor's degree with 2:1 classification (65%+) or equivalent</li>
              <li><strong>PhD:</strong> Master's degree, research proposal, and supervisor acceptance</li>
              <li><strong>English Proficiency:</strong> IELTS 6.0-7.0+ depending on course and university</li>
            </ul>
            
            <h3>💰 Financial Requirements</h3>
            <ul>
              <li>Proof of funds: £1,334/month for living expenses (£1,023/month outside London)</li>
              <li>Full tuition fee payment or confirmation of funding</li>
              <li>Bank statements showing sufficient funds for at least 28 days</li>
            </ul>
          </div>
        );
      case 'process':
        return (
          <div className={styles.tabContent}>
            <h3>📝 Application Process</h3>
            <ol>
              <li><strong>Research:</strong> Choose universities and courses through UCAS or direct applications</li>
              <li><strong>UCAS Application:</strong> Submit through UCAS system (for most undergraduate courses)</li>
              <li><strong>Direct Application:</strong> Apply directly for postgraduate courses</li>
              <li><strong>Interviews:</strong> Attend interviews for competitive courses (Oxford, Cambridge, Medicine)</li>
              <li><strong>Offers:</strong> Receive conditional or unconditional offers</li>
              <li><strong>Student Visa:</strong> Apply for student visa after accepting firm offer</li>
            </ol>
            
            <h3>⏰ Key Deadlines</h3>
            <ul>
              <li><strong>October 15:</strong> Oxford, Cambridge, Medicine, Dentistry, Veterinary Science</li>
              <li><strong>January 31:</strong> Most undergraduate courses</li>
              <li><strong>March 31:</strong> Some art and design courses</li>
              <li><strong>June 30:</strong> Final deadline for undergraduate applications</li>
            </ul>
          </div>
        );
      case 'documents':
        return (
          <div className={styles.tabContent}>
            <h3>📄 Required Documents</h3>
            
            <h4>Academic Documents:</h4>
            <ul>
              <li>Official transcripts and certificates from all previous institutions</li>
              <li>English language test scores (IELTS/TOEFL/PTE)</li>
              <li>Personal statement (max 4,000 characters for UCAS)</li>
              <li>Academic references (usually 1-2 required)</li>
              <li>Portfolio (for creative courses)</li>
            </ul>
            
            <h4>Visa Documents:</h4>
            <ul>
              <li>Valid passport</li>
              <li>Confirmation of Acceptance for Studies (CAS) from university</li>
              <li>Financial evidence (bank statements, sponsorship letters)</li>
              <li>Tuberculosis test results (from certain countries)</li>
              <li>Academic Technology Approval Scheme (ATAS) certificate (if required)</li>
            </ul>
          </div>
        );
      case 'universities':
        return (
          <div className={styles.tabContent}>
            <h3>🏛️ Top Universities in the UK</h3>
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
          <span className={styles.flag}>🇬🇧</span>
          <h1 className={styles.heading}>Study in United Kingdom</h1>
          <p className={styles.subheading}>
            Experience world-renowned education in the historic home of higher learning
          </p>
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Oxford University" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.src = 'https://picsum.photos/1000/400?random=31';
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
        <h2>Why Choose the UK for Higher Education?</h2>
        <p>
          The United Kingdom has been at the forefront of education for centuries, offering some of the 
          world's most prestigious universities and innovative teaching methods. With shorter degree 
          durations, excellent research opportunities, and the new Graduate Route visa, the UK provides 
          an ideal environment for international students to excel academically and professionally.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Studying in the UK</h2>
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
        <h2>Complete Guide to UK Education</h2>
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
        <h2>Discover the UK</h2>
        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1520637836862-4d197d17c7a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Cambridge University"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=32';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1529655683826-3d9c9c8f5e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="London University"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=33';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="UK Campus Life"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=34';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="British Library"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=35';
            }}
          />
        </div>
        <p className={styles.galleryLink}>
          <a href="https://photos.google.com/search/uk%20universities" target="_blank" rel="noopener noreferrer">
            View more photos of UK universities and campuses →
          </a>
        </p>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <blockquote className={styles.testimonial}>
          <p>"Studying at Oxford was a transformative experience. The academic rigor, combined with the rich history and culture, provided me with skills and connections that have shaped my entire career."</p>
          <cite>- James L., MBA Graduate from Oxford Said Business School</cite>
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
        <h2>Ready to Begin Your UK Journey?</h2>
        <p>Let our expert counselors guide you through the application process and help you secure admission to top UK universities.</p>
        <button className={styles.ctaButton}>Get Free Consultation</button>
      </section>
    </div>
  );
};

export default UkStudy;
