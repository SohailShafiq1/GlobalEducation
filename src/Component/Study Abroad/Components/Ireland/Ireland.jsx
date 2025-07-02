import React, { useState } from 'react';
import styles from './Ireland.module.css';

const Ireland = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '8', label: 'Universities in Top 500' },
    { number: '€13,000', label: 'Avg Annual Tuition' },
    { number: '€10,000', label: 'Living Cost/Year' },
    { number: '95%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'Renowned universities with strong links to industry and research excellence'
    },
    {
      icon: '🗣️',
      title: 'English Speaking',
      description: 'No language barrier - study in English in a native English-speaking country'
    },
    {
      icon: '💼',
      title: 'Career Opportunities',
      description: 'Strong job market with multinational companies and post-study work options'
    },
    {
      icon: '🌍',
      title: 'Gateway to Europe',
      description: 'EU membership provides access to European job markets and opportunities'
    },
    {
      icon: '🍀',
      title: 'Rich Culture',
      description: 'Experience authentic Irish culture, music, and the famous Irish hospitality'
    },
    {
      icon: '🔬',
      title: 'Innovation Hub',
      description: 'Leading technology and pharmaceutical industries with research opportunities'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'Completed secondary education (Leaving Certificate or equivalent)',
        'English proficiency - IELTS 6.0+ or TOEFL 80+ (native speakers exempt)',
        'Academic transcripts and certificates (apostilled)',
        'Personal statement or motivation letter',
        'Letters of recommendation (2-3 required)',
        'Valid passport copy',
        'Proof of financial support (€10,000+ per year)',
        'Portfolio or additional requirements for specific programs'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Research universities and programs suited to your interests',
        'Check specific entry requirements for your chosen course',
        'Apply through CAO for undergraduate or directly for postgraduate',
        'Submit all required documents before deadlines',
        'Await admission decision and accept your offer',
        'Apply for student visa (if non-EU/EEA)',
        'Arrange accommodation and prepare for arrival',
        'Complete registration and orientation at university'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Valid passport (6+ months remaining)',
        'Academic certificates and transcripts (translated if needed)',
        'English language proficiency certificate',
        'Personal statement (500-1000 words)',
        'Academic and/or professional references',
        'Financial evidence (bank statements, sponsor letter)',
        'Medical insurance and health certificates',
        'Passport-size photographs',
        'Completed visa application (non-EU students)'
      ]
    },
    universities: {
      title: 'Top Universities',
      content: [
        'Trinity College Dublin - Ireland\'s oldest university',
        'University College Dublin - Largest university in Ireland',
        'University College Cork - Research-intensive institution',
        'National University of Ireland Galway - Strong in arts and sciences',
        'Dublin City University - Modern, innovative university',
        'University of Limerick - Cooperative education leader',
        'Maynooth University - Historic with modern facilities',
        'Technological University Dublin - Practical, career-focused programs'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in Ireland?',
      answer: 'Yes, non-EU students can work up to 20 hours per week during term time and 40 hours during holidays. EU students have no work restrictions.'
    },
    {
      question: 'What is the cost of living in Ireland?',
      answer: 'Monthly living costs range from €800-1,200, including accommodation, food, transport, and personal expenses. Dublin is more expensive than other cities.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, various merit-based scholarships are available from universities, Government of Ireland, and private organizations for qualified international students.'
    },
    {
      question: 'Do I need a visa to study in Ireland?',
      answer: 'EU/EEA students don\'t need a visa. Non-EU students need to apply for a student visa and register with immigration upon arrival.'
    },
    {
      question: 'Can I stay in Ireland after graduation?',
      answer: 'Yes, graduates can apply for the Third Level Graduate Scheme, allowing 1 year (Level 8) or 2 years (Level 9+) to seek employment.'
    },
    {
      question: 'What is the academic calendar in Ireland?',
      answer: 'The academic year runs from September to May, with two semesters. Some programs may have different start dates.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=21',
      alt: 'Ireland Cliffs'
    },
    {
      src: 'https://images.unsplash.com/photo-1548662646-8b35d8b7c63b?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=22',
      alt: 'Irish Castle'
    },
    {
      src: 'https://images.unsplash.com/photo-1518387187673-48fe96ba8a5d?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=23',
      alt: 'Dublin City'
    },
    {
      src: 'https://images.unsplash.com/photo-1551739442-6f39125e6ce8?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=24',
      alt: 'Irish University'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in Ireland</h1>
        <p className={styles.headerSubtitle}>Experience world-class education in the land of saints and scholars</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=400&fit=crop&auto=format" 
        alt="Irish countryside and cliffs" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=20";
        }}
      />

      {/* Quick Stats */}
      <div className={styles.quickStats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <h2 className={styles.sectionTitle}>Why Choose Ireland?</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div className={styles.benefitIcon}>{benefit.icon}</div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Tabbed Information */}
      <div className={styles.tabContainer}>
        <div className={styles.tabButtons}>
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabContent[tab].title}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          <h3>{tabContent[activeTab].title}</h3>
          <ul>
            {tabContent[activeTab].content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Gallery */}
      <div className={styles.imageGallery}>
        <h2 className={styles.sectionTitle}>Discover Ireland</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={styles.galleryImage}
              onError={(e) => {
                e.target.src = image.fallback;
              }}
            />
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className={styles.testimonial}>
        <p className={styles.testimonialText}>
          "Studying in Ireland has been an incredible journey. The quality of education, combined with 
          the warm Irish culture and excellent post-graduation opportunities, made it the perfect choice for my future."
        </p>
        <p className={styles.testimonialAuthor}>- Priya S., International Student</p>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              {faq.question}
              <span>{openFaq === index ? '−' : '+'}</span>
            </button>
            <div className={`${styles.faqAnswer} ${openFaq === index ? '' : styles.hidden}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Start Your Irish Adventure?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to Ireland
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default Ireland;
