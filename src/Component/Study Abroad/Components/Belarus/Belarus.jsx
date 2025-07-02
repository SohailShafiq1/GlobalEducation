import React, { useState } from 'react'
import styles from './Belarus.module.css'

const Belarus = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const academicRequirements = [
    'Secondary school certificate with minimum 60% marks',
    'Official transcripts from previous educational institutions',
    'Language proficiency certificate (Russian/English)',
    'Medical fitness certificate',
    'Passport-sized photographs (3x4 cm)',
    'Birth certificate (notarized and apostilled)',
    'Statement of Purpose (SOP)',
    'Letters of Recommendation (if required)'
  ];

  const documentRequirements = [
    'Valid passport with minimum 6 months validity',
    'Completed visa application form',
    'Invitation letter from Belarus university',
    'Medical insurance valid in Belarus',
    'HIV/AIDS test certificate',
    'Criminal background check (apostilled)',
    'Bank statements showing financial capacity',
    'Educational documents (apostilled and translated)'
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'University Selection',
      description: 'Research and choose from top Belarus universities offering your preferred course'
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Gather and authenticate all required academic and personal documents'
    },
    {
      step: 3,
      title: 'Application Submission',
      description: 'Submit your application through university portal or authorized agents'
    },
    {
      step: 4,
      title: 'Admission Letter',
      description: 'Receive your admission letter and invitation for visa processing'
    },
    {
      step: 5,
      title: 'Visa Application',
      description: 'Apply for Belarus student visa at the nearest embassy or consulate'
    },
    {
      step: 6,
      title: 'Pre-Departure',
      description: 'Complete medical tests, arrange accommodation, and prepare for departure'
    },
    {
      step: 7,
      title: 'Arrival & Registration',
      description: 'Arrive in Belarus, complete university registration, and begin your studies'
    }
  ];

  const topUniversities = [
    {
      name: 'Belarusian State University',
      rank: 'Top Ranked University in Belarus',
      description: 'Leading research university offering comprehensive programs in sciences, humanities, and technology.',
      programs: 'Medicine, Engineering, IT, Economics'
    },
    {
      name: 'Belarusian National Technical University',
      rank: 'Premier Technical Institution',
      description: 'Specialized in engineering, technology, and applied sciences with modern facilities.',
      programs: 'Engineering, Architecture, IT, Applied Sciences'
    },
    {
      name: 'Minsk State Linguistic University',
      rank: 'Top Language University',
      description: 'Excellence in foreign languages, translation, and international communication.',
      programs: 'Languages, Translation, International Relations'
    },
    {
      name: 'Belarus State Medical University',
      rank: 'Leading Medical Institution',
      description: 'Internationally recognized medical education with WHO listing and modern facilities.',
      programs: 'Medicine, Dentistry, Pharmacy, Nursing'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Low tuition fees starting from $2,000-4,000 per year with excellent quality education'
    },
    {
      icon: '🏥',
      title: 'Medical Education Excellence',
      description: 'WHO-recognized medical degrees with hands-on clinical training and modern facilities'
    },
    {
      icon: '🌍',
      title: 'European Location',
      description: 'Strategic location in Europe providing easy access to EU countries and opportunities'
    },
    {
      icon: '🔬',
      title: 'Research Opportunities',
      description: 'Access to advanced research facilities and international collaboration programs'
    },
    {
      icon: '🏛️',
      title: 'Rich Cultural Heritage',
      description: 'Experience Slavic culture, historic architecture, and diverse traditions'
    },
    {
      icon: '👥',
      title: 'International Community',
      description: 'Study alongside students from over 50 countries in a welcoming environment'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=11',
      alt: 'Minsk City Center - Modern architecture and historical landmarks'
    },
    {
      src: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=12',
      alt: 'University Campus - Modern facilities and learning environment'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=13',
      alt: 'Student Life - International community and cultural activities'
    },
    {
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=14',
      alt: 'Research Facilities - Advanced laboratories and technology centers'
    }
  ];

  const faqs = [
    {
      question: 'What is the medium of instruction in Belarus universities?',
      answer: 'Most international programs are taught in English, especially in medical and engineering fields. Some programs are also available in Russian. Universities often provide language preparation courses for international students.'
    },
    {
      question: 'What are the living costs for international students?',
      answer: 'Living costs in Belarus are very affordable. Students typically spend $300-500 per month including accommodation, food, transportation, and personal expenses. University hostels cost around $50-100 per month.'
    },
    {
      question: 'Can international students work while studying?',
      answer: 'Yes, international students can work part-time during their studies with proper work permits. Students are allowed to work up to 20 hours per week during academic sessions and full-time during holidays.'
    },
    {
      question: 'Are Belarus medical degrees recognized internationally?',
      answer: 'Yes, medical degrees from Belarus universities are recognized by WHO, UNESCO, and medical councils of many countries including India, Pakistan, African nations, and several others.'
    },
    {
      question: 'What is the duration of different programs?',
      answer: 'Bachelor programs: 4 years, Medical programs: 6 years, Master programs: 1-2 years, PhD programs: 3-4 years. Some programs may have preparatory courses adding 6-12 months.'
    },
    {
      question: 'Is it safe for international students to study in Belarus?',
      answer: 'Belarus is considered very safe for international students. The country has low crime rates, and universities provide comprehensive support for international students including accommodation and academic assistance.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <span className={styles.flag}>🇧🇾</span>
          <h1 className={styles.heading}>Study in Belarus</h1>
          <p className={styles.subheading}>
            Discover affordable, quality education in the heart of Europe with internationally recognized degrees
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={styles.quickStats}>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🎓</span>
          <div className={styles.statValue}>55+</div>
          <div className={styles.statLabel}>Universities</div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>💰</span>
          <div className={styles.statValue}>$2,000+</div>
          <div className={styles.statLabel}>Annual Tuition</div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>🌍</span>
          <div className={styles.statValue}>50+</div>
          <div className={styles.statLabel}>Nationalities</div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}>📊</span>
          <div className={styles.statValue}>6 Years</div>
          <div className={styles.statLabel}>Medical Program</div>
        </div>
      </div>

      {/* Overview Section */}
      <div className={styles.overviewSection}>
        <h2 className={styles.sectionTitle}>Why Choose Belarus for Higher Education?</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewContent}>
            <p className={styles.overviewText}>
              Belarus offers world-class education at incredibly affordable costs, making it an ideal destination for international students. With over 15,000 international students from 95 countries, Belarus provides quality education recognized globally.
            </p>
            <ul className={styles.highlightsList}>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>WHO and UNESCO recognized degrees</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>English-medium programs available</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>Low cost of living and tuition fees</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>Safe and welcoming environment</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>Rich cultural heritage and history</span>
              </li>
            </ul>
          </div>
          <div className={styles.overviewImage}>
            <div className={styles.imageOverlay}>
              <div className={styles.imageCaption}>
                Modern Belarus - Where tradition meets innovation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Benefits of Studying in Belarus</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Section */}
      <div className={styles.tabSection}>
        <h2 className={styles.sectionTitle}>Complete Study Guide</h2>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'requirements' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            Requirements
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'process' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Application Process
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'universities' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('universities')}
          >
            Top Universities
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'requirements' && (
            <div className={styles.requirementsGrid}>
              <div className={styles.requirementCategory}>
                <h3 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}>📚</span>
                  Academic Requirements
                </h3>
                <ul className={styles.requirementsList}>
                  {academicRequirements.map((req, index) => (
                    <li key={index} className={styles.requirementItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.requirementCategory}>
                <h3 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}>📄</span>
                  Visa & Documentation
                </h3>
                <ul className={styles.requirementsList}>
                  {documentRequirements.map((req, index) => (
                    <li key={index} className={styles.requirementItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className={styles.processSteps}>
              {applicationProcess.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'universities' && (
            <div className={styles.universitiesGrid}>
              {topUniversities.map((university, index) => (
                <div key={index} className={styles.universityCard}>
                  <div className={styles.universityImage}>🏛️</div>
                  <div className={styles.universityContent}>
                    <h3 className={styles.universityName}>{university.name}</h3>
                    <div className={styles.universityRank}>{university.rank}</div>
                    <p className={styles.universityDescription}>{university.description}</p>
                    <div style={{marginTop: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '8px', fontSize: '0.9rem', color: '#666'}}>
                      <strong>Popular Programs:</strong> {university.programs}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Experience Belarus</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className={styles.galleryImage}
                onError={(e) => {
                  e.target.src = image.fallback;
                }}
              />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryCaption}>{image.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${expandedFaq === index ? 'expanded' : ''}`}>
              <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>▼</span>
              </button>
              {expandedFaq === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h2 className={styles.ctaTitle}>Ready to Start Your Belarus Journey?</h2>
        <p className={styles.ctaText}>
          Join thousands of international students who have chosen Belarus for their higher education. 
          Get expert guidance from our experienced counselors today!
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.primaryBtn}>Get Free Consultation</button>
          <button className={styles.secondaryBtn}>Download Brochure</button>
        </div>
      </div>
    </div>
  )
}

export default Belarus
