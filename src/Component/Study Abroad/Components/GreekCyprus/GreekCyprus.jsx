import React, { useState } from 'react';
import styles from './GreekCyprus.module.css';

const GreekCyprus = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '7+', label: 'Universities' },
    { number: '€7,000', label: 'Avg Annual Tuition' },
    { number: '€8,000', label: 'Living Cost/Year' },
    { number: '95%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '🌊',
      title: 'Mediterranean Paradise',
      description: 'Beautiful island setting with year-round sunshine and stunning beaches'
    },
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Lower tuition fees and living costs compared to other European destinations'
    },
    {
      icon: '🇪🇺',
      title: 'EU Recognition',
      description: 'EU-recognized degrees with excellent career prospects across Europe'
    },
    {
      icon: '🗣️',
      title: 'English Programs',
      description: 'Wide range of programs taught in English for international students'
    },
    {
      icon: '🛡️',
      title: 'Safe Environment',
      description: 'One of the safest countries in Europe with welcoming communities'
    },
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'High academic standards with modern facilities and experienced faculty'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'Completed secondary education certificate',
        'English proficiency test (IELTS 6.0+ or TOEFL 80+)',
        'Academic transcripts and certificates',
        'Statement of purpose and motivation letter',
        'Letters of recommendation (2-3)',
        'Valid passport copy',
        'Proof of financial capability',
        'Medical certificate and health insurance'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Research and choose your preferred university and program',
        'Check specific admission requirements for your course',
        'Prepare and submit online application with documents',
        'Pay application fees and await admission decision',
        'Receive offer letter and accept the place',
        'Apply for student visa at Cyprus embassy',
        'Arrange accommodation and travel plans',
        'Complete enrollment and orientation procedures'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Passport (valid for at least 6 months)',
        'Academic certificates and transcripts',
        'English language proficiency certificate',
        'Statement of purpose (500-1000 words)',
        'Letters of recommendation',
        'Financial proof (€15,000+ for expenses)',
        'Medical certificate and vaccination records',
        'Passport-sized photographs',
        'Student visa application form'
      ]
    },
    universities: {
      title: 'Top Universities',
      content: [
        'University of Cyprus - Leading public university',
        'Cyprus University of Technology - Focus on technology',
        'European University Cyprus - Private institution',
        'University of Nicosia - Largest private university',
        'Cyprus International University - International programs',
        'Near East University - Comprehensive programs',
        'Frederick University - Research-oriented',
        'American University of Cyprus - American-style education'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in Greek Cyprus?',
      answer: 'Yes, international students can work part-time up to 20 hours per week during studies and full-time during holidays, subject to work permit regulations.'
    },
    {
      question: 'What is the cost of living in Greek Cyprus?',
      answer: 'Monthly living costs range from €600-900, including accommodation, food, transport, and personal expenses. Coastal cities may be slightly more expensive.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, various merit-based and need-based scholarships are available from universities, government, and private organizations for qualified international students.'
    },
    {
      question: 'What language is used for instruction?',
      answer: 'Many programs are taught in English, especially at the undergraduate and graduate levels. Some programs may be in Greek, so check language requirements.'
    },
    {
      question: 'Is health insurance mandatory?',
      answer: 'Yes, all international students must have valid health insurance coverage throughout their stay in Cyprus.'
    },
    {
      question: 'Can I stay in Cyprus after graduation?',
      answer: 'Yes, graduates can apply for a job search visa allowing them to stay and look for employment opportunities in Cyprus or other EU countries.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=11',
      alt: 'Greek Cyprus 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1571414743320-398e30a45834?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=12',
      alt: 'Greek Cyprus 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1580665743003-ae26df191b50?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=13',
      alt: 'Greek Cyprus 3'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996444-8d4c0f702e05?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=14',
      alt: 'Greek Cyprus 4'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in Greek Cyprus</h1>
        <p className={styles.headerSubtitle}>Discover world-class education in the Mediterranean paradise</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop&auto=format" 
        alt="Greek Cyprus landscape" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=10";
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
      <h2 className={styles.sectionTitle}>Why Choose Greek Cyprus?</h2>
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
        <h2 className={styles.sectionTitle}>Experience Greek Cyprus</h2>
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
          "Studying in Greek Cyprus was an incredible experience. The combination of quality education, 
          beautiful surroundings, and affordable costs made it the perfect choice for my international studies."
        </p>
        <p className={styles.testimonialAuthor}>- Maria K., International Student</p>
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
        <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to Greek Cyprus
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default GreekCyprus;
