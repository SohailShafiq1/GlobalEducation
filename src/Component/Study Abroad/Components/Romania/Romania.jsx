import React, { useState } from 'react';
import styles from './Romania.module.css';

const Romania = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '56+', label: 'Universities' },
    { number: '€2,500', label: 'Avg Annual Tuition' },
    { number: '€5,000', label: 'Living Cost/Year' },
    { number: '96%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Very Affordable',
      description: 'Among the most affordable study destinations in Europe with excellent value for money'
    },
    {
      icon: '🇪🇺',
      title: 'EU Member Benefits',
      description: 'Study in an EU country with access to European job markets and opportunities'
    },
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'Strong academic tradition with internationally recognized degrees and qualifications'
    },
    {
      icon: '🗣️',
      title: 'Multiple Languages',
      description: 'Programs available in English, French, and Romanian to suit different preferences'
    },
    {
      icon: '🏛️',
      title: 'Rich Heritage',
      description: 'Experience rich cultural heritage and beautiful historic architecture'
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Strong emphasis on research and innovation across various academic fields'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'High school diploma or equivalent (Baccalaureate)',
        'Academic transcripts with good grades',
        'Language proficiency certificate (English/French/Romanian)',
        'Valid passport copy',
        'Medical certificate and health insurance',
        'Letters of recommendation (2-3)',
        'Statement of purpose or motivation letter',
        'Proof of financial means for studies and living'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Research universities and programs in your field of interest',
        'Check specific admission requirements and deadlines',
        'Submit online application with all required documents',
        'Pay application fees and await admission decision',
        'Receive acceptance letter and confirm your place',
        'Apply for student visa at Romanian embassy/consulate',
        'Arrange accommodation and prepare for travel',
        'Complete university registration and orientation'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Valid passport (minimum 6 months validity)',
        'High school diploma and academic transcripts (apostilled)',
        'Language proficiency certificate (depending on program)',
        'Medical certificate and health insurance proof',
        'Passport-size photographs (recent)',
        'Financial guarantee or scholarship letter',
        'Birth certificate (apostilled)',
        'Police clearance certificate',
        'Completed visa application form'
      ]
    },
    universities: {
      title: 'Top Universities',
      content: [
        'University of Bucharest - Premier public university',
        'Babeș-Bolyai University - Leading institution in Cluj-Napoca',
        'Carol Davila University - Top medical university',
        'Polytechnic University of Bucharest - Engineering excellence',
        'Academy of Economic Studies - Business and economics',
        'University of Medicine and Pharmacy - Healthcare programs',
        'Technical University of Cluj-Napoca - Technology focus',
        'Alexandru Ioan Cuza University - Research university in Iași'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in Romania?',
      answer: 'Yes, non-EU students can work part-time (4 hours/day) during studies and full-time during holidays with proper work permits.'
    },
    {
      question: 'What is the cost of living in Romania?',
      answer: 'Monthly living costs range from €300-500, including accommodation, food, transport, and personal expenses. Very affordable compared to Western Europe.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, the Romanian government offers scholarships through bilateral agreements, and many universities provide merit-based scholarships.'
    },
    {
      question: 'What languages are programs taught in?',
      answer: 'Programs are available in Romanian, English, French, and German. Many international programs are taught in English.'
    },
    {
      question: 'Is Romania safe for international students?',
      answer: 'Yes, Romania is considered very safe with low crime rates and a welcoming attitude towards international students.'
    },
    {
      question: 'Can I travel to other EU countries while studying?',
      answer: 'Yes, with a Romanian student visa, you can travel within the Schengen Area for short-term visits during your studies.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578967183394-8d8a885d0f39?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=41',
      alt: 'Romanian Castle'
    },
    {
      src: 'https://images.unsplash.com/photo-1551180659-9815ab3f4c9e?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=42',
      alt: 'Bucharest City'
    },
    {
      src: 'https://images.unsplash.com/photo-1578608712688-36b5be8823dc?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=43',
      alt: 'Romanian University'
    },
    {
      src: 'https://images.unsplash.com/photo-1553339394-eb5e28c53345?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=44',
      alt: 'Romanian Architecture'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in Romania</h1>
        <p className={styles.headerSubtitle}>Discover affordable quality education in the heart of Europe</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1578967183394-8d8a885d0f39?w=1200&h=400&fit=crop&auto=format" 
        alt="Romanian castle and landscape" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=40";
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
      <h2 className={styles.sectionTitle}>Why Choose Romania?</h2>
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
        <h2 className={styles.sectionTitle}>Discover Romania</h2>
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
          "Romania exceeded all my expectations. The quality of education is excellent, 
          the cost is very affordable, and the cultural experience has been incredible."
        </p>
        <p className={styles.testimonialAuthor}>- Elena M., International Student</p>
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
        <h2 className={styles.ctaTitle}>Ready to Explore Romania?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to Romania
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default Romania;
