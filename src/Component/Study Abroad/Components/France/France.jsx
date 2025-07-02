import React from 'react';
import styles from './France.module.css';

const France = () => {
  const quickStats = [
    { label: 'Universities', value: '70+', icon: '🎓' },
    { label: 'International Students', value: '370,000+', icon: '👥' },
    { label: 'Average Tuition', value: '€3,000/year', icon: '💰' },
    { label: 'Programs in English', value: '1,500+', icon: '🌍' }
  ];

  const benefits = [
    {
      icon: '🏛️',
      title: 'Academic Excellence',
      description: 'Home to prestigious Grandes Écoles and world-renowned universities'
    },
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Low tuition fees and generous scholarships for international students'
    },
    {
      icon: '🎨',
      title: 'Cultural Richness',
      description: 'Experience French culture, art, cuisine, and historical heritage'
    },
    {
      icon: '🌍',
      title: 'European Gateway',
      description: 'Central location providing easy access to all European countries'
    },
    {
      icon: '🔬',
      title: 'Research Excellence',
      description: 'Leading research facilities and innovation in science and technology'
    },
    {
      icon: '💼',
      title: 'Career Opportunities',
      description: 'Post-graduation work opportunities and pathways to EU employment'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <span className={styles.flag}>🇫🇷</span>
          <h1 className={styles.heading}>Study in France</h1>
          <p className={styles.subheading}>
            Experience excellence in education, culture, and innovation in the heart of Europe
          </p>
          <img 
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Sorbonne University" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.src = 'https://picsum.photos/1000/400?random=51';
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
        <h2>Why Choose France for Higher Education?</h2>
        <p>
          France offers one of the world's most prestigious and affordable education systems, 
          combining academic excellence with rich cultural experiences. With renowned universities, 
          innovative research facilities, and a central European location, France provides an 
          ideal environment for international students to excel academically while immersing 
          themselves in a vibrant, multicultural society.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Studying in France</h2>
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

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Your French Adventure?</h2>
        <p>Discover the perfect combination of academic excellence and cultural enrichment in France. Let us guide you through your journey.</p>
        <button className={styles.ctaButton}>Get Free Consultation</button>
      </section>
    </div>
  );
};

export default France;
