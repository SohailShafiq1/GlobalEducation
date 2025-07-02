import React, { useState } from 'react';
import styles from './Georgia.module.css';

const Georgia = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const quickStats = [
    { label: 'Universities', value: '25+', icon: '🎓' },
    { label: 'International Students', value: '15,000+', icon: '👥' },
    { label: 'Average Tuition', value: '$3,000/year', icon: '💰' },
    { label: 'Programs in English', value: '150+', icon: '🌍' }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'One of the most cost-effective education destinations with low tuition and living costs'
    },
    {
      icon: '🌍',
      title: 'English-Taught Programs',
      description: 'Wide range of programs taught in English across various disciplines'
    },
    {
      icon: '🛡️',
      title: 'Safe Environment',
      description: 'Safe and welcoming country with low crime rates and friendly locals'
    },
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'Internationally recognized degrees with European standards of education'
    },
    {
      icon: '🌍',
      title: 'Strategic Location',
      description: 'Gateway between Europe and Asia with rich cultural heritage'
    },
    {
      icon: '📜',
      title: 'Easy Admission',
      description: 'Straightforward admission process with minimal bureaucracy'
    }
  ];

  const topUniversities = [
    { name: 'Tbilisi State University', ranking: 'Top University in Georgia', specialties: 'Medicine, Business, Sciences, Arts' },
    { name: 'Georgian Technical University', ranking: 'Leading Technical Institute', specialties: 'Engineering, Computer Science, Architecture' },
    { name: 'Caucasus University', ranking: 'Private Research University', specialties: 'Business, Medicine, IT, Law' },
    { name: 'University of Georgia', ranking: 'International Programs', specialties: 'Medicine, Business, Social Sciences' },
    { name: 'Batumi Shota Rustaveli State University', ranking: 'Coastal University', specialties: 'Tourism, Business, Arts' },
    { name: 'Georgian American University', ranking: 'American-Style Education', specialties: 'Business, Computer Science, Liberal Arts' }
  ];

  const faqs = [
    {
      question: 'What are the language requirements for studying in Georgia?',
      answer: 'Many programs are offered in English and don\'t require Georgian language skills. For English programs, basic English proficiency is sufficient, though some universities may require IELTS/TOEFL.'
    },
    {
      question: 'How much does it cost to study and live in Georgia?',
      answer: 'Tuition ranges from $2,000-5,000/year. Living costs are very affordable: accommodation $200-400/month, food $150-250/month, total living expenses around $3,000-5,000/year.'
    },
    {
      question: 'Can international students work while studying?',
      answer: 'Yes, international students can work part-time during studies. Georgia offers work opportunities especially in tourism, education, and IT sectors.'
    },
    {
      question: 'Is Georgia safe for international students?',
      answer: 'Yes, Georgia is considered one of the safest countries in the region with low crime rates, friendly people, and stable political environment.'
    },
    {
      question: 'What is the visa process for Georgia?',
      answer: 'Many countries have visa-free access to Georgia. For longer studies, a student visa is required, which is relatively straightforward to obtain with university admission.'
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'requirements':
        return (
          <div className={styles.tabContent}>
            <h3>📋 Academic Requirements</h3>
            <ul>
              <li><strong>Undergraduate:</strong> High school diploma or equivalent with good grades</li>
              <li><strong>Graduate:</strong> Bachelor's degree in relevant field</li>
              <li><strong>PhD:</strong> Master's degree with research experience</li>
              <li><strong>Language:</strong> English proficiency for English-taught programs</li>
            </ul>
            
            <h3>💰 Financial Requirements</h3>
            <ul>
              <li>Proof of funds for tuition and living expenses</li>
              <li>Bank statements or sponsor documentation</li>
              <li>Very affordable compared to Western countries</li>
              <li>Scholarship opportunities available</li>
            </ul>
          </div>
        );
      case 'process':
        return (
          <div className={styles.tabContent}>
            <h3>📝 Application Process</h3>
            <ol>
              <li><strong>Choose University:</strong> Select from accredited Georgian universities</li>
              <li><strong>Prepare Documents:</strong> Academic transcripts, certificates, passport copy</li>
              <li><strong>Submit Application:</strong> Apply directly to university or through agents</li>
              <li><strong>Receive Admission:</strong> Get acceptance letter from university</li>
              <li><strong>Visa Application:</strong> Apply for student visa (if required)</li>
              <li><strong>Prepare for Departure:</strong> Arrange accommodation and travel</li>
            </ol>
            
            <h3>⏰ Academic Calendar</h3>
            <ul>
              <li><strong>Fall Semester:</strong> September - January</li>
              <li><strong>Spring Semester:</strong> February - June</li>
              <li><strong>Application Deadlines:</strong> Usually flexible, apply 2-3 months in advance</li>
            </ul>
          </div>
        );
      case 'documents':
        return (
          <div className={styles.tabContent}>
            <h3>📄 Required Documents</h3>
            
            <h4>Academic Documents:</h4>
            <ul>
              <li>High school diploma or bachelor's degree (certified translation)</li>
              <li>Academic transcripts with grades</li>
              <li>English proficiency certificate (if required)</li>
              <li>Passport copy and photos</li>
              <li>Medical certificate and health insurance</li>
            </ul>
            
            <h4>Visa Documents (if required):</h4>
            <ul>
              <li>Valid passport</li>
              <li>University acceptance letter</li>
              <li>Proof of financial resources</li>
              <li>Health insurance coverage</li>
              <li>Background check (for some countries)</li>
            </ul>
          </div>
        );
      case 'universities':
        return (
          <div className={styles.tabContent}>
            <h3>🏛️ Top Universities in Georgia</h3>
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
          <span className={styles.flag}>🇬🇪</span>
          <h1 className={styles.heading}>Study in Georgia</h1>
          <p className={styles.subheading}>
            Discover affordable, quality education in the crossroads of Europe and Asia
          </p>
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop&auto=format" 
            alt="Tbilisi University" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.src = "https://picsum.photos/1200/400?random=1";
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
        <h2>Why Choose Georgia for Higher Education?</h2>
        <p>
          Georgia offers an exceptional combination of quality education and affordability, making it an 
          ideal destination for international students. With its rich history, stunning landscapes, 
          and strategic location between Europe and Asia, Georgia provides a unique cultural experience 
          alongside internationally recognized academic programs at a fraction of the cost of Western universities.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Studying in Georgia</h2>
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
        <h2>Complete Guide to Georgian Education</h2>
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
        <h2>Discover Georgia</h2>
        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1561542320-9a18cd340469?w=500&h=300&fit=crop&auto=format" 
            alt="Tbilisi Cityscape" 
            onError={(e) => {
              e.target.src = "https://picsum.photos/500/300?random=2";
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&auto=format" 
            alt="Georgian University" 
            onError={(e) => {
              e.target.src = "https://picsum.photos/500/300?random=3";
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop&auto=format" 
            alt="Georgian Mountains" 
            onError={(e) => {
              e.target.src = "https://picsum.photos/500/300?random=4";
            }}
          />
          <img 
            src="https://images.unsplash.com/photo-1571708266696-882ba7ca7b41?w=500&h=300&fit=crop&auto=format" 
            alt="Campus Life" 
            onError={(e) => {
              e.target.src = "https://picsum.photos/500/300?random=5";
            }}
          />
        </div>
        <p className={styles.galleryLink}>
          <a href="https://photos.google.com/search/georgia%20universities" target="_blank" rel="noopener noreferrer">
            View more photos of Georgian universities and landscapes →
          </a>
        </p>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <blockquote className={styles.testimonial}>
          <p>"Studying in Georgia was the best decision for my budget and career. The education quality surprised me, and the cost of living allowed me to focus on studies without financial stress. Plus, the cultural experience was incredible!"</p>
          <cite>- Ahmed K., Medical Student at Tbilisi State University</cite>
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
        <h2>Ready to Start Your Georgian Journey?</h2>
        <p>Experience quality education at unbeatable prices in one of the world's most hospitable countries. Let us help you make Georgia your academic home.</p>
        <button className={styles.ctaButton}>Get Free Consultation</button>
      </section>
    </div>
  );
};

export default Georgia;
