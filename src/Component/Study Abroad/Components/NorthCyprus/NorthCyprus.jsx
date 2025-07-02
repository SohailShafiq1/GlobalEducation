import React, { useState } from 'react';
import styles from './NorthCyprus.module.css';

const NorthCyprus = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '5+', label: 'Major Universities' },
    { number: '€4,000', label: 'Avg Annual Tuition' },
    { number: '€6,000', label: 'Living Cost/Year' },
    { number: '98%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Highly Affordable',
      description: 'One of the most cost-effective destinations for quality international education'
    },
    {
      icon: '🏛️',
      title: 'Recognized Degrees',
      description: 'Internationally recognized qualifications accepted worldwide'
    },
    {
      icon: '🗣️',
      title: 'English Medium',
      description: 'Most programs taught in English with no language barrier'
    },
    {
      icon: '🌊',
      title: 'Mediterranean Life',
      description: 'Beautiful island lifestyle with year-round pleasant weather'
    },
    {
      icon: '🛡️',
      title: 'Safe Environment',
      description: 'Very safe and secure environment for international students'
    },
    {
      icon: '🎓',
      title: 'Modern Facilities',
      description: 'State-of-the-art campuses with excellent facilities and technology'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'High school diploma or equivalent certificate',
        'Academic transcripts with minimum required grades',
        'English proficiency test (TOEFL/IELTS) or equivalency exam',
        'Valid passport copy',
        'Passport-sized photographs',
        'Application form completed online',
        'Statement of purpose or motivation letter',
        'Health insurance and medical certificate'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Research universities and programs that match your interests',
        'Check specific admission requirements for your chosen program',
        'Submit online application with required documents',
        'Pay application fees as specified by the university',
        'Receive admission letter and accept your place',
        'Apply for student visa and residence permit',
        'Arrange accommodation and prepare for travel',
        'Complete registration upon arrival in North Cyprus'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Valid passport (minimum 6 months validity)',
        'High school diploma and transcripts (notarized)',
        'English proficiency certificate or equivalency test',
        'Passport-size photographs (recent)',
        'Completed application form',
        'Medical reports and health certificate',
        'Financial guarantee or bank statement',
        'Student visa application documents',
        'Academic recommendation letters (if required)'
      ]
    },
    universities: {
      title: 'Popular Universities',
      content: [
        'Eastern Mediterranean University - Leading research university',
        'Near East University - Comprehensive programs and facilities',
        'Cyprus International University - Strong international focus',
        'Girne American University - American-style education',
        'European University of Lefke - Diverse program offerings',
        'University of Mediterranean Karpasia - Modern institution',
        'Cyprus Science University - Technology and innovation focus',
        'Final International University - Career-oriented programs'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in North Cyprus?',
      answer: 'Yes, international students can work part-time (up to 20 hours per week) during their studies with proper work permits.'
    },
    {
      question: 'What is the cost of living in North Cyprus?',
      answer: 'Monthly living costs range from €400-600, including accommodation, food, transport, and personal expenses. Very affordable compared to other European destinations.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, most universities offer merit-based scholarships ranging from 25% to 100% tuition fee waivers for qualified international students.'
    },
    {
      question: 'What language are the programs taught in?',
      answer: 'Most undergraduate and graduate programs are taught in English. Some universities also offer programs in Turkish.'
    },
    {
      question: 'How do I get a student visa for North Cyprus?',
      answer: 'After receiving your acceptance letter, you can apply for a student visa at the Turkish Republic of Northern Cyprus representative office in your country.'
    },
    {
      question: 'Are degrees from North Cyprus recognized internationally?',
      answer: 'Yes, degrees from accredited universities in North Cyprus are recognized internationally and accepted for further studies and employment.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1580665743003-ae26df191b50?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=31',
      alt: 'North Cyprus Coast'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=32',
      alt: 'North Cyprus University'
    },
    {
      src: 'https://images.unsplash.com/photo-1571414743320-398e30a45834?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=33',
      alt: 'North Cyprus Campus'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996444-8d4c0f702e05?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=34',
      alt: 'North Cyprus Landscape'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in North Cyprus</h1>
        <p className={styles.headerSubtitle}>Affordable quality education in the heart of the Mediterranean</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1580665743003-ae26df191b50?w=1200&h=400&fit=crop&auto=format" 
        alt="North Cyprus coastal view" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=30";
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
      <h2 className={styles.sectionTitle}>Why Choose North Cyprus?</h2>
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
        <h2 className={styles.sectionTitle}>Explore North Cyprus</h2>
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
          "North Cyprus provided me with excellent education at an incredibly affordable cost. 
          The beautiful environment and supportive community made my study experience unforgettable."
        </p>
        <p className={styles.testimonialAuthor}>- Ahmed R., International Student</p>
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
        <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to North Cyprus
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default NorthCyprus;
