import React, { useState } from 'react';
import styles from './Spain.module.css';

const Spain = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '83', label: 'Universities' },
    { number: '€8,000', label: 'Avg Annual Tuition' },
    { number: '€10,000', label: 'Living Cost/Year' },
    { number: '96%', label: 'Visa Success Rate' }
  ];

  const benefits = [
    {
      icon: '🌍',
      title: 'Gateway to Europe',
      description: 'Strategic location providing easy access to explore all of Europe during studies'
    },
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'Home to some of Europe\'s oldest and most prestigious universities'
    },
    {
      icon: '☀️',
      title: 'Mediterranean Lifestyle',
      description: 'Enjoy year-round sunshine, beautiful beaches, and vibrant cultural life'
    },
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Competitive tuition fees and reasonable cost of living compared to other EU countries'
    },
    {
      icon: '🗣️',
      title: 'Language Benefits',
      description: 'Learn Spanish, the world\'s second most spoken language'
    },
    {
      icon: '🏛️',
      title: 'Rich Heritage',
      description: 'Immerse yourself in centuries of art, architecture, and cultural traditions'
    }
  ];

  const tabContent = {
    requirements: {
      title: 'Admission Requirements',
      content: [
        'High school diploma or equivalent (Bachillerato)',
        'Academic transcripts with certified translations',
        'Selectividad (PAU) exam for some programs',
        'Spanish language proficiency (DELE/SIELE) for Spanish-taught programs',
        'English proficiency for English-taught programs',
        'Valid passport copy',
        'Statement of purpose and motivation letter',
        'Letters of recommendation (academic/professional)'
      ]
    },
    process: {
      title: 'Application Process',
      content: [
        'Research universities and programs in your field',
        'Check specific admission requirements and deadlines',
        'Submit application through university portal or UNED',
        'Complete any required entrance exams',
        'Receive admission letter and accept your place',
        'Apply for student visa at Spanish consulate',
        'Arrange accommodation and prepare for arrival',
        'Complete university registration and orientation'
      ]
    },
    documents: {
      title: 'Required Documents',
      content: [
        'Valid passport (minimum 6 months validity)',
        'Academic certificates and transcripts (apostilled)',
        'Language proficiency certificates',
        'Medical certificate and health insurance',
        'Financial proof (bank statements/sponsor letter)',
        'Passport-size photographs',
        'Criminal background check (apostilled)',
        'Completed visa application form',
        'University acceptance letter'
      ]
    },
    universities: {
      title: 'Top Universities',
      content: [
        'Complutense University of Madrid - Largest university in Spain',
        'University of Barcelona - Leading research institution',
        'Autonomous University of Madrid - High-ranking public university',
        'Pompeu Fabra University - Modern, innovative institution',
        'University of Valencia - Historic with strong programs',
        'Carlos III University of Madrid - Technology and business focus',
        'IE University - Top private business school',
        'ESADE Business School - International business programs'
      ]
    }
  };

  const faqs = [
    {
      question: 'Can I work while studying in Spain?',
      answer: 'Yes, non-EU students can work up to 20 hours per week during studies. EU students have no work restrictions.'
    },
    {
      question: 'What is the cost of living in Spain?',
      answer: 'Monthly living costs range from €700-1,200, depending on the city. Madrid and Barcelona are more expensive than smaller cities.'
    },
    {
      question: 'Are scholarships available for international students?',
      answer: 'Yes, various scholarships are available including government scholarships, university grants, and Erasmus+ programs for eligible students.'
    },
    {
      question: 'Do I need to speak Spanish to study in Spain?',
      answer: 'For Spanish-taught programs, yes. However, many universities offer programs in English. Learning Spanish is highly recommended for daily life.'
    },
    {
      question: 'Is Spain safe for international students?',
      answer: 'Yes, Spain is very safe with low crime rates. It\'s consistently ranked as one of the safest countries in Europe.'
    },
    {
      question: 'Can I travel to other EU countries while studying?',
      answer: 'Yes, with a Spanish student visa, you can travel within the Schengen Area for short-term visits.'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      fallback: 'https://picsum.photos/400/300?random=61',
      alt: 'Madrid - Spanish capital and educational hub'
    },
    {
      src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      fallback: 'https://picsum.photos/400/300?random=62',
      alt: 'Barcelona - Vibrant Mediterranean city'
    },
    {
      src: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      fallback: 'https://picsum.photos/400/300?random=63',
      alt: 'Spanish university campus and architecture'
    },
    {
      src: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      fallback: 'https://picsum.photos/400/300?random=64',
      alt: 'Spanish student life and culture'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Study in Spain</h1>
        <p className={styles.headerSubtitle}>Experience vibrant culture and academic excellence in the heart of Europe</p>
      </div>

      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
        alt="Madrid University and Spanish architecture" 
        className={styles.heroImage}
        onError={(e) => {
          e.target.src = "https://picsum.photos/1200/400?random=60";
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
      <h2 className={styles.sectionTitle}>Why Choose Spain?</h2>
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
        <h2 className={styles.sectionTitle}>Discover Spain</h2>
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
          "Studying in Spain has been the experience of a lifetime. The combination of excellent education, 
          vibrant culture, and warm people has made this journey unforgettable."
        </p>
        <p className={styles.testimonialAuthor}>- Carlos M., International Student</p>
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
        <h2 className={styles.ctaTitle}>Ready for Your Spanish Adventure?</h2>
        <p className={styles.ctaDescription}>
          Let our experienced counselors guide you through every step of your application to Spain
        </p>
        <button className={styles.ctaButton}>Get Expert Consultation</button>
      </div>
    </div>
  );
};

export default Spain;
