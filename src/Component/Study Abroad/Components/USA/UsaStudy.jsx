import React, { useState } from 'react';
import styles from './USA.module.css';

const UsaStudy = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const quickStats = [
    { label: 'Universities', value: '4,000+', icon: '🎓' },
    { label: 'International Students', value: '1.1M+', icon: '👥' },
    { label: 'Post-Study Work', value: '3 Years', icon: '💼' },
    { label: 'Average Tuition', value: '$35,000/year', icon: '💰' }
  ];

  const benefits = [
    {
      icon: '🏆',
      title: 'World\'s Best Universities',
      description: 'Home to Harvard, MIT, Stanford and other globally top-ranked institutions'
    },
    {
      icon: '🔬',
      title: 'Research & Innovation',
      description: 'Leading research facilities and opportunities in cutting-edge technologies'
    },
    {
      icon: '💼',
      title: 'Career Opportunities',
      description: 'STEM OPT extension and access to top global companies and startups'
    },
    {
      icon: '🌟',
      title: 'Academic Flexibility',
      description: 'Liberal arts system allowing major changes and interdisciplinary studies'
    },
    {
      icon: '🌍',
      title: 'Diverse Environment',
      description: 'Multicultural campuses with students from every corner of the world'
    },
    {
      icon: '💡',
      title: 'Entrepreneurship Hub',
      description: 'Access to Silicon Valley, startup ecosystem, and venture capital networks'
    }
  ];

  const topUniversities = [
    { name: 'Harvard University', ranking: '#1 US News Ranking', specialties: 'Business, Law, Medicine, Liberal Arts' },
    { name: 'Massachusetts Institute of Technology', ranking: '#2 US News Ranking', specialties: 'Engineering, Computer Science, Sciences' },
    { name: 'Stanford University', ranking: '#3 US News Ranking', specialties: 'Engineering, Business, Computer Science' },
    { name: 'University of California, Berkeley', ranking: '#4 US News Ranking', specialties: 'Engineering, Business, Sciences, Arts' },
    { name: 'Yale University', ranking: '#5 US News Ranking', specialties: 'Law, Medicine, Arts, Sciences' },
    { name: 'Columbia University', ranking: '#6 US News Ranking', specialties: 'Business, Journalism, Medicine, Arts' }
  ];

  const faqs = [
    {
      question: 'What are the English language requirements for US universities?',
      answer: 'Most universities require TOEFL 80-100+ or IELTS 6.5-7.5+ for undergraduate programs, and TOEFL 90-110+ or IELTS 7.0-8.0+ for graduate programs. Some accept Duolingo English Test.'
    },
    {
      question: 'What is the difference between F-1 and J-1 visas?',
      answer: 'F-1 is for academic studies with OPT work authorization, while J-1 is for exchange programs. F-1 offers more flexibility for work and potential immigration pathways.'
    },
    {
      question: 'How much does it cost to study in the USA?',
      answer: 'Public universities: $25,000-35,000/year, Private universities: $35,000-70,000/year for tuition. Living expenses: $15,000-25,000/year depending on location.'
    },
    {
      question: 'What is OPT and STEM OPT extension?',
      answer: 'OPT allows 12 months of work authorization after graduation. STEM graduates can extend for additional 24 months, totaling 36 months of work experience in the US.'
    },
    {
      question: 'When should I apply for US universities?',
      answer: 'Fall applications typically due December-February. Spring applications due September-October. Some schools have rolling admissions. Apply 8-12 months in advance.'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'requirements':
        return (
          <div className={styles.tabContent}>
            <h3>📋 Academic Requirements</h3>
            <ul>
              <li><strong>Undergraduate:</strong> High school diploma, SAT/ACT scores, strong GPA (3.0+ for most schools)</li>
              <li><strong>Graduate:</strong> Bachelor's degree, GRE/GMAT scores, strong GPA (3.0+ for most programs)</li>
              <li><strong>PhD:</strong> Master's degree (preferred), research experience, publications, strong recommendations</li>
              <li><strong>English Proficiency:</strong> TOEFL 80-110+ or IELTS 6.5-8.0+ depending on program level</li>
            </ul>
            
            <h3>💰 Financial Requirements</h3>
            <ul>
              <li>Proof of funds for full program duration (tuition + living expenses)</li>
              <li>Bank statements or sponsor affidavit of support (Form I-134)</li>
              <li>Financial documentation for F-1 visa interview</li>
              <li>Scholarship or assistantship documentation (if applicable)</li>
            </ul>
          </div>
        );
      case 'process':
        return (
          <div className={styles.tabContent}>
            <h3>📝 Application Process</h3>
            <ol>
              <li><strong>Research:</strong> Choose universities and programs based on rankings, location, and specializations</li>
              <li><strong>Standardized Tests:</strong> Take required tests (SAT/ACT, GRE/GMAT, TOEFL/IELTS)</li>
              <li><strong>Applications:</strong> Submit applications through Common App, university portals, or Apply Yourself</li>
              <li><strong>Essays & Recommendations:</strong> Write compelling personal statements and secure strong recommendations</li>
              <li><strong>Interviews:</strong> Participate in admission interviews (for select programs)</li>
              <li><strong>F-1 Visa:</strong> Apply for student visa after receiving I-20 from university</li>
            </ol>
            
            <h3>⏰ Application Timeline</h3>
            <ul>
              <li><strong>Fall Semester (August):</strong> Applications due December-February</li>
              <li><strong>Spring Semester (January):</strong> Applications due September-October</li>
              <li><strong>Summer Sessions:</strong> Limited availability, apply by March-April</li>
            </ul>
          </div>
        );
      case 'documents':
        return (
          <div className={styles.tabContent}>
            <h3>📄 Required Documents</h3>
            
            <h4>Academic Documents:</h4>
            <ul>
              <li>Official transcripts from all attended institutions</li>
              <li>Standardized test scores (SAT/ACT, GRE/GMAT, TOEFL/IELTS)</li>
              <li>Letters of recommendation (2-3 from academic/professional references)</li>
              <li>Statement of purpose/Personal statement</li>
              <li>Resume/CV highlighting academic and professional achievements</li>
            </ul>
            
            <h4>Visa Documents:</h4>
            <ul>
              <li>Valid passport (valid for at least 6 months)</li>
              <li>Form I-20 (Certificate of Eligibility for Nonimmigrant Student Status)</li>
              <li>SEVIS fee payment receipt ($350)</li>
              <li>Financial support documents (bank statements, sponsorship)</li>
              <li>DS-160 form (Online Nonimmigrant Visa Application)</li>
            </ul>
          </div>
        );
      case 'universities':
        return (
          <div className={styles.tabContent}>
            <h3>🏛️ Top Universities in the USA</h3>
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
          <span className={styles.flag}>🇺🇸</span>
          <h1 className={styles.heading}>Study in United States</h1>
          <p className={styles.subheading}>
            Experience world-class education at the most prestigious universities globally
          </p>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Harvard University" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.src = 'https://picsum.photos/1000/400?random=41';
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
        <h2>Why Choose the USA for Higher Education?</h2>
        <p>
          The United States offers the world's most diverse and comprehensive higher education system, 
          with unparalleled research opportunities, cutting-edge facilities, and pathways to global careers. 
          Home to the majority of the world's top-ranked universities, the US provides an environment where 
          innovation, creativity, and academic excellence converge to shape future leaders.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Studying in the USA</h2>
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
        <h2>Complete Guide to US Education</h2>
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
        <h2>Discover America</h2>
        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="MIT Campus"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=42';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Stanford University"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=43';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="University Campus"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=44';
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
            alt="Campus Library"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/500/300?random=45';
            }}
          />
        </div>
        <p className={styles.galleryLink}>
          <a href="https://photos.google.com/search/usa%20universities" target="_blank" rel="noopener noreferrer">
            View more photos of American universities and campuses →
          </a>
        </p>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <blockquote className={styles.testimonial}>
          <p>"Studying at Stanford opened doors I never imagined possible. The entrepreneurial environment, world-class faculty, and diverse student body provided me with the skills and network to launch my own tech startup."</p>
          <cite>- Priya S., Computer Science Graduate from Stanford University</cite>
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
        <h2>Ready to Start Your American Dream?</h2>
        <p>Let our experienced counselors help you navigate the complex US application process and secure admission to your dream university.</p>
        <button className={styles.ctaButton}>Get Free Consultation</button>
      </section>
    </div>
  );
};

export default UsaStudy;
