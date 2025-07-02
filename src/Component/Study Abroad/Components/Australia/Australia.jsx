import React, { useState } from 'react'
import styles from './Australia.module.css'

const Australia = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const requirements = [
    'Academic transcripts and certificates (authenticated)',
    'English proficiency test scores (IELTS/TOEFL/PTE)',
    'Statement of Purpose (SOP)',
    'Letters of Recommendation (2-3)',
    'Valid passport copy',
    'Financial proof and bank statements',
    'Academic CV/Resume',
    'Portfolio (for creative courses)',
    'GMAT/GRE scores (if required)',
    'Medical examination and health insurance'
  ];

  const applicationProcess = [
    'Research universities and courses that match your interests',
    'Check entry requirements and prepare necessary documents',
    'Submit online application through university portal',
    'Pay application fees and await assessment',
    'Receive Letter of Offer and accept the offer',
    'Apply for student visa (subclass 500)',
    'Arrange accommodation and travel plans',
    'Attend orientation and begin your studies'
  ];

  const documents = [
    'Completed visa application form',
    'Confirmation of Enrolment (CoE) from university',
    'Genuine Temporary Entrant (GTE) statement',
    'Financial capacity evidence (AUD 21,041 per year)',
    'Overseas Student Health Cover (OSHC)',
    'English language proficiency proof',
    'Character requirements and health examinations',
    'Academic and work experience documents'
  ];

  const topUniversities = [
    {
      name: 'Australian National University',
      rank: 'QS World Ranking #30',
      description: 'Leading research university located in Canberra, known for excellence in social sciences and humanities.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop'
    },
    {
      name: 'University of Melbourne',
      rank: 'QS World Ranking #33',
      description: 'Australia\'s top university with strong programs in medicine, law, and business.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop'
    },
    {
      name: 'University of Sydney',
      rank: 'QS World Ranking #38',
      description: 'Historic university offering comprehensive programs with beautiful campus in Sydney.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop'
    },
    {
      name: 'University of Queensland',
      rank: 'QS World Ranking #43',
      description: 'Research-intensive university known for life sciences and engineering programs.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'Access to top-ranked universities and globally recognized qualifications'
    },
    {
      icon: '🌏',
      title: 'Multicultural Environment',
      description: 'Study alongside students from over 140 countries in a diverse, welcoming environment'
    },
    {
      icon: '💼',
      title: 'Work Opportunities',
      description: 'Work up to 48 hours per fortnight during studies and unlimited hours during breaks'
    },
    {
      icon: '🏡',
      title: 'Post-Study Work Rights',
      description: 'Temporary Graduate visa allows 2-4 years of work experience after graduation'
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Access to cutting-edge research facilities and innovation programs'
    },
    {
      icon: '🌅',
      title: 'Quality of Life',
      description: 'Safe, clean cities with excellent healthcare and beautiful natural landscapes'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=1',
      alt: 'Sydney Opera House - Iconic Australian landmark'
    },
    {
      src: 'https://images.unsplash.com/photo-1540629411234-7e4b0e6b8099?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=2',
      alt: 'Melbourne city skyline and cultural attractions'
    },
    {
      src: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=3',
      alt: 'Great Barrier Reef - Natural wonder of the world'
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=4',
      alt: 'University campus life and student activities'
    }
  ];

  const faqs = [
    {
      question: 'Can international students work while studying in Australia?',
      answer: 'Yes, international students can work up to 48 hours per fortnight during semester and unlimited hours during semester breaks. This helps cover living expenses and gain valuable work experience.'
    },
    {
      question: 'What are the English language requirements?',
      answer: 'Most universities require IELTS 6.0-7.0, TOEFL 79-100, or PTE 58-65. Requirements vary by course and institution. Some universities offer English language programs for students who need to improve their scores.'
    },
    {
      question: 'How much does it cost to study in Australia?',
      answer: 'Tuition fees range from AUD 20,000-45,000 per year for undergraduate courses and AUD 22,000-50,000 for postgraduate. Living expenses are approximately AUD 21,041 per year as required by immigration.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, many scholarships are available including Australia Awards, university-specific scholarships, and government scholarships. These can cover tuition fees, living expenses, or both.'
    },
    {
      question: 'What is the application timeline?',
      answer: 'Applications typically open 12 months before intake. Main intakes are February and July. Apply 6-8 months in advance to allow time for visa processing and preparation.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <span className={styles.countryFlag}>🇦🇺</span>
          <h1 className={styles.heading}>Study in Australia</h1>
          <p className={styles.subheading}>
            Discover world-class education, vibrant culture, and endless opportunities in the land down under
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroSection}>
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format" 
          alt="Sydney Opera House and Harbour Bridge" 
          className={styles.heroImage}
          onError={(e) => {
            e.target.src = 'https://picsum.photos/800/400?random=5';
          }}
        />
        <p className={styles.heroCaption}>
          Sydney Opera House - Australia's most recognizable landmark and UNESCO World Heritage site
        </p>
      </div>

      {/* Why Choose Australia */}
      <div className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitle}>Why Choose Australia for Your Education?</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Section */}
      <div className={styles.tabSection}>
        <h2 className={styles.sectionTitle}>Complete Application Guide</h2>
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
            className={`${styles.tab} ${activeTab === 'documents' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Visa Documents
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
            <div className={styles.requirementsContent}>
              <h3>Academic and General Requirements</h3>
              <ul className={styles.requirementsList}>
                {requirements.map((requirement, index) => (
                  <li key={index} className={styles.requirementItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'process' && (
            <div className={styles.processContent}>
              <h3>Step-by-Step Application Process</h3>
              <ol className={styles.processList}>
                {applicationProcess.map((step, index) => (
                  <li key={index} className={styles.processStep}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className={styles.documentsContent}>
              <h3>Student Visa Documentation Checklist</h3>
              <ul className={styles.requirementsList}>
                {documents.map((document, index) => (
                  <li key={index} className={styles.requirementItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'universities' && (
            <div className={styles.universitiesContent}>
              <h3>Top Australian Universities</h3>
              <div className={styles.universityGrid}>
                {topUniversities.map((university, index) => (
                  <div key={index} className={styles.universityCard}>
                    <img src={university.image} alt={university.name} className={styles.universityImage} />
                    <div className={styles.universityInfo}>
                      <h4 className={styles.universityName}>{university.name}</h4>
                      <p className={styles.universityRank}>{university.rank}</p>
                      <p className={styles.universityDescription}>{university.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Discover Australia</h2>
        <div className={styles.imageGallery}>
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
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className={styles.testimonialSection}>
        <div className={styles.testimonial}>
          "Studying in Australia was the best decision I ever made. The quality of education, multicultural environment, and post-study opportunities opened doors I never imagined. Global Education Consultancy guided me through every step of the process."
          <div className={styles.testimonialAuthor}>- Sarah Chen, University of Melbourne Graduate</div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button 
              className={`${styles.faqQuestion} ${expandedFaq === index ? styles.expanded : ''}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className={styles.expandIcon}>▼</span>
            </button>
            {expandedFaq === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className={styles.contactSection}>
        <h2 className={styles.ctaTitle}>Ready to Start Your Australian Adventure?</h2>
        <p className={styles.ctaText}>
          Let Global Education Consultancy guide you through every step of your journey to study in Australia. 
          From university selection to visa approval, we're here to make your dreams a reality.
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.primaryBtn}>Get Free Consultation</button>
          <button className={styles.secondaryBtn}>Download Brochure</button>
        </div>
      </div>
    </div>
  )
}

export default Australia
