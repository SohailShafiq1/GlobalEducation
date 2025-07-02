import React, { useState } from 'react';
import styles from './Russia.module.css';

const Russia = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '700+', label: 'Universities' },
    { number: '$2,000', label: 'Avg Annual Tuition' },
    { number: '$4,000', label: 'Living Cost/Year' },
    { number: '94%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'Renowned universities with strong academic traditions and excellent research facilities'
    },
    {
      icon: '💰',
      title: 'Very Affordable',
      description: 'Low tuition fees and living costs compared to Western countries'
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Leading in science, technology, medicine, and engineering research'
    },
    {
      icon: '🗣️',
      title: 'English Programs',
      description: 'Many programs available in English, especially in medicine and engineering'
    },
    {
      icon: '🎨',
      title: 'Rich Culture',
      description: 'Experience rich cultural heritage, arts, literature, and history'
    },
    {
      icon: '🏆',
      title: 'Government Scholarships',
      description: 'Generous scholarship programs available from the Russian government'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'High school diploma or equivalent certificate',
        'Academic transcripts with good grades',
        'Medical certificate and health insurance',
        'Valid passport copy',
        'Language proficiency (Russian or English depending on program)',
        'HIV/AIDS test certificate',
        'Photos and completed application forms',
        'Financial guarantee or scholarship letter'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Choose your preferred university and program',
        'Submit application through university portal or agents',
        'Prepare and submit all required documents',
        'Receive invitation letter from the university',
        'Apply for student visa at Russian embassy/consulate',
        'Complete medical examination and tests',
        'Arrange accommodation and travel plans',
        'Complete registration upon arrival in Russia'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Valid passport (minimum 1.5 years validity)',
        'High school certificate and transcripts (apostilled)',
        'Medical certificate including HIV test',
        'Birth certificate (apostilled)',
        'Photos (3x4 cm, matte finish)',
        'Financial guarantee or bank statements',
        'Language proficiency certificate (if required)',
        'Completed visa application form',
        'Migration card upon entry to Russia'
      ]
    },
    universities: {
      title: 'Top Universities',
      content: [
        'Lomonosov Moscow State University - Top-ranked university',
        'Saint Petersburg State University - Historic prestigious institution',
        'Novosibirsk State University - Leading research university',
        'Moscow Institute of Physics and Technology - STEM excellence',
        'Bauman Moscow State Technical University - Engineering focus',
        'Sechenov First Moscow State Medical University - Medical education',
        'Higher School of Economics - Economics and social sciences',
        'ITMO University - Information technology and optics'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in Russia?',
      answer: 'Yes, international students can work part-time during studies and full-time during holidays with proper work permits from immigration authorities.'
    },
    {
      question: 'What is the cost of living in Russia?',
      answer: 'Monthly living costs range from $200-400, including accommodation, food, transport, and personal expenses. Moscow and St. Petersburg are more expensive.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, the Russian government offers quota scholarships covering tuition, accommodation, and stipends. Universities also provide merit-based scholarships.'
    },
    {
      question: 'What language are programs taught in?',
      answer: 'Many programs are available in English, especially medicine and engineering. Russian language preparatory courses are available for Russian-taught programs.'
    },
    {
      question: 'Is Russia safe for international students?',
      answer: 'Yes, Russia is generally safe for international students. Universities provide support services and most cities have low crime rates.'
    },
    {
      question: 'How long does the visa process take?',
      answer: 'The student visa process typically takes 2-4 weeks from submission. Apply well in advance of your intended travel date.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=51',
      alt: 'Moscow Red Square'
    },
    {
      src: 'https://images.unsplash.com/photo-1583417514419-c750af1609dd?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=52',
      alt: 'St. Petersburg'
    },
    {
      src: 'https://images.unsplash.com/photo-1571382454276-e03afc035650?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=53',
      alt: 'Russian University'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      fallback: 'https://picsum.photos/400/300?random=54',
      alt: 'Russian Campus'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in Russia</h1>
        <p className={styles.headerSubtitle}>Experience world-class education in the largest country on Earth</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1200&h=400&fit=crop&auto=format" 
        alt="Moscow Red Square and Kremlin" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=50";
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
      <h2 className={styles.sectionTitle}>Why Choose Russia?</h2>
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
        <h2 className={styles.sectionTitle}>Discover Russia</h2>
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
          "Studying in Russia has been an amazing experience. The quality of education, 
          especially in engineering, is outstanding, and the cultural experience is unforgettable."
        </p>
        <p className={styles.testimonialAuthor}>- Raj P., Engineering Student</p>
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
        <h2 className={styles.ctaTitle}>Ready to Explore Russia?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to Russia
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default Russia;
