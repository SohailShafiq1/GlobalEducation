import React, { useRef, useState } from 'react'
import styles from './WorkVisa.module.css'

const countryData = [
  {
    name: 'UK',
    flag: '🇬🇧',
    explanation: 'The UK offers diverse work opportunities for skilled professionals across various sectors. Our consultants specialize in navigating the UK\'s points-based immigration system for maximum success.',
    visaType: 'Skilled Worker Visa',
    processingTime: '3-8 weeks',
    stayDuration: 'Up to 5 years (extendable)',
    cost: '£719 - £1,423',
    requirements: [
      'Valid passport with 6+ months validity',
      'Certificate of Sponsorship from UK employer',
      'Proof of English language proficiency',
      'Educational qualifications and certifications',
      'Financial evidence (maintenance funds)',
      'Tuberculosis test certificate',
      'Criminal background check',
      'Job offer meeting skill and salary requirements'
    ],
    process: [
      'Secure job offer from licensed UK sponsor',
      'Employer issues Certificate of Sponsorship',
      'Complete online visa application',
      'Pay application fees and healthcare surcharge',
      'Book and attend biometric appointment',
      'Submit supporting documents',
      'Await visa decision and collection'
    ],
    highlights: 'Access to NHS healthcare, pathway to permanent residency, world-class career opportunities, and family inclusion rights'
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    explanation: 'Romania welcomes skilled foreign workers, especially in IT, engineering, and healthcare sectors. Our comprehensive visa services ensure smooth integration into Romania\'s growing economy.',
    visaType: 'Long-Stay Work Visa (D/AM)',
    processingTime: '2-3 months',
    stayDuration: '1 year (renewable)',
    cost: '€120 - €180',
    requirements: [
      'Valid passport (6+ months validity)',
      'Employment contract from Romanian employer',
      'Work authorization from Romanian authorities',
      'Medical certificate and health insurance',
      'Criminal background check (apostilled)',
      'Educational diploma recognition',
      'Proof of accommodation in Romania',
      'Financial means evidence'
    ],
    process: [
      'Employer obtains work authorization',
      'Submit visa application at Romanian consulate',
      'Provide biometric data and documents',
      'Attend consular interview if required',
      'Pay visa processing fees',
      'Receive visa decision and entry permit',
      'Register with Romanian authorities upon arrival'
    ],
    highlights: 'EU membership benefits, affordable living costs, growing tech sector, and strategic location in Europe'
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    explanation: 'Italy offers excellent work opportunities in fashion, automotive, technology, and tourism sectors. Our expertise helps navigate Italy\'s quota-based work visa system effectively.',
    visaType: 'National Work Visa (D-Visa)',
    processingTime: '2-3 months',
    stayDuration: '1-2 years (renewable)',
    cost: '€116 - €200',
    requirements: [
      'Valid passport with blank pages',
      'Nulla Osta (work authorization) from Italy',
      'Employment contract or job offer',
      'Educational qualifications (authenticated)',
      'Medical certificate and travel insurance',
      'Criminal background check',
      'Proof of accommodation',
      'Financial sustainability evidence'
    ],
    process: [
      'Employer applies for Nulla Osta decree',
      'Submit visa application with required documents',
      'Attend appointment at Italian consulate',
      'Provide biometric data and interview',
      'Pay visa fees and processing charges',
      'Receive visa and entry clearance',
      'Apply for residence permit within 8 days'
    ],
    highlights: 'Rich cultural heritage, excellent work-life balance, access to EU job market, and world-renowned cuisine and lifestyle'
  },
  {
    name: 'France',
    flag: '🇫🇷',
    explanation: 'France welcomes international talent through various work visa categories. Our consultants provide expert guidance for the Talent Passport and standard work permits.',
    visaType: 'Talent Passport / Work Permit',
    processingTime: '2-3 months',
    stayDuration: '1-4 years (renewable)',
    cost: '€99 - €225',
    requirements: [
      'Valid passport (3+ months validity)',
      'Work contract or job offer from French employer',
      'Educational credentials and professional qualifications',
      'French language proficiency (if required)',
      'Medical certificate and health insurance',
      'Criminal background check',
      'Proof of accommodation in France',
      'Financial resources documentation'
    ],
    process: [
      'Determine appropriate visa category',
      'Employer initiates work authorization process',
      'Submit visa application online',
      'Schedule appointment at French consulate',
      'Provide biometric data and documents',
      'Attend consular interview',
      'Receive visa and travel to France'
    ],
    highlights: 'World-class social benefits, excellent healthcare system, cultural richness, and strong worker protection laws'
  },
  {
    name: 'North Cyprus',
    flag: '🇨🇾',
    explanation: 'North Cyprus offers growing opportunities in tourism, education, and business sectors. Our visa services help you establish your career in this Mediterranean destination.',
    visaType: 'Work Permit',
    processingTime: '1-2 months',
    stayDuration: '1 year (renewable)',
    cost: '$200 - $400',
    requirements: [
      'Valid passport with 6+ months validity',
      'Job offer from North Cyprus employer',
      'Employment contract and work permit application',
      'Medical examination and health certificate',
      'Police clearance certificate',
      'Educational certificates (notarized)',
      'Passport-sized photographs',
      'Proof of accommodation'
    ],
    process: [
      'Employer applies for work permit',
      'Submit required documents to authorities',
      'Medical examination in North Cyprus',
      'Work permit approval and issuance',
      'Apply for residence permit',
      'Register with local authorities',
      'Obtain social security registration'
    ],
    highlights: 'Mediterranean climate, English-speaking environment, tax advantages, and growing business opportunities'
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    explanation: 'Turkey serves as a bridge between Europe and Asia, offering diverse career opportunities. Our comprehensive services cover all aspects of Turkish work permit applications.',
    visaType: 'Work Permit',
    processingTime: '1-2 months',
    stayDuration: '1 year (renewable)',
    cost: '$190 - $350',
    requirements: [
      'Valid passport (6+ months validity)',
      'University degree or professional certificate',
      'Employment contract from Turkish employer',
      'Medical report from authorized hospital',
      'Criminal background check (apostilled)',
      'Passport-sized photographs',
      'Work permit application form',
      'Employer\'s legal documentation'
    ],
    process: [
      'Employer submits work permit application',
      'Submit personal documents and certificates',
      'Medical examination at approved facility',
      'Pay work permit fees',
      'Work permit evaluation and approval',
      'Apply for residence permit',
      'Register with local authorities'
    ],
    highlights: 'Strategic location, diverse economy, rich cultural heritage, and growing technology sector'
  },
  {
    name: 'Belarus',
    flag: '🇧🇾',
    explanation: 'Belarus offers attractive opportunities for IT professionals and technical experts. Our specialized services help navigate Belarus\'s streamlined work visa process.',
    visaType: 'Type B or D Work Visa',
    processingTime: '1-2 months',
    stayDuration: '1 year (renewable)',
    cost: '$165 - $280',
    requirements: [
      'Valid passport (3+ months validity)',
      'Work permit from Belarus authorities',
      'Employment contract with Belarus employer',
      'Medical certificate and health insurance',
      'Criminal background check',
      'Educational qualifications (notarized)',
      'HIV test certificate',
      'Invitation letter from employer'
    ],
    process: [
      'Employer obtains work permit approval',
      'Submit visa application at Belarus embassy',
      'Provide required documents and photographs',
      'Medical examination if required',
      'Pay visa processing fees',
      'Receive visa approval and entry permit',
      'Register residence within 5 days of arrival'
    ],
    highlights: 'Low cost of living, growing IT sector, simplified procedures for tech professionals, and strategic European location'
  },
  {
    name: 'Russia',
    flag: '🇷🇺',
    explanation: 'Russia offers vast career opportunities across multiple industries and regions. Our expert consultants guide you through Russia\'s comprehensive work visa requirements.',
    visaType: 'Work Visa (Single/Multiple Entry)',
    processingTime: '1-2 months',
    stayDuration: '1 year (renewable)',
    cost: '$160 - $320',
    requirements: [
      'Valid passport with blank pages',
      'Work permit from Russian authorities',
      'Employment contract or invitation',
      'Medical certificate and HIV test',
      'Criminal background check (apostilled)',
      'Educational documents (notarized)',
      'Passport-sized photographs',
      'Visa application form'
    ],
    process: [
      'Employer applies for work permit quota',
      'Submit visa application with documents',
      'Medical examination at approved center',
      'Attend consular appointment',
      'Pay visa fees and processing charges',
      'Receive work visa approval',
      'Register with migration service in Russia'
    ],
    highlights: 'Large job market, diverse industries, competitive salaries in major cities, and rich cultural experiences'
  }
];

const WorkVisa = () => {
  const sectionRefs = useRef([]);
  const [selectedTab, setSelectedTab] = useState('overview');

  // Initialize refs for all countries
  React.useEffect(() => {
    sectionRefs.current = countryData.map(() => React.createRef());
  }, []);

  const handleScrollToCountry = (idx) => {
    if (sectionRefs.current[idx] && sectionRefs.current[idx].current) {
      sectionRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.heading}>
          💼 Work Visa Services
        </h1>
        <p className={styles.subheading}>
          Global Education Consultancy - Your Gateway to International Careers
        </p>
      </div>

      {/* Services Overview */}
      <div className={styles.servicesOverview}>
        <h2 className={styles.sectionTitle}>Our Professional Work Visa Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏢</div>
            <h3>Employer Coordination</h3>
            <p>Liaison with employers for work authorization, sponsorship documentation, and compliance requirements</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📄</div>
            <h3>Documentation Support</h3>
            <p>Complete assistance with work permits, employment contracts, and credential recognition</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🎓</div>
            <h3>Qualification Assessment</h3>
            <p>Educational credential evaluation and professional qualification recognition services</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏡</div>
            <h3>Settlement Support</h3>
            <p>Post-arrival assistance including accommodation, bank accounts, and local registration</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>
        <h2 className={styles.sectionTitle}>Why Choose Global Education Consultancy for Work Visas?</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🎯</span>
            <div>
              <h4>Employer Network</h4>
              <p>Strong connections with international employers and recruitment agencies</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>⚖️</span>
            <div>
              <h4>Legal Expertise</h4>
              <p>In-depth knowledge of employment laws and visa regulations</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🌐</span>
            <div>
              <h4>Global Reach</h4>
              <p>Comprehensive coverage of major work visa destinations worldwide</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🤝</span>
            <div>
              <h4>End-to-End Support</h4>
              <p>From initial consultation to successful employment abroad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Country Selection */}
      <div className={styles.countrySelection}>
        <h2 className={styles.sectionTitle}>Choose Your Work Destination</h2>
        <p className={styles.selectionSubtext}>
          Explore work visa opportunities in top destinations. Click on any country to view detailed requirements, processes, and career prospects
        </p>
        <div className={styles.countryGrid}>
          {countryData.map((country, idx) => (
            <button 
              key={country.name} 
              className={styles.countryCard}
              onClick={() => handleScrollToCountry(idx)}
            >
              <span className={styles.flag}>{country.flag}</span>
              <span className={styles.countryName}>{country.name}</span>
              <span className={styles.viewDetails}>View Details →</span>
            </button>
          ))}
        </div>
      </div>

      {/* Country Details */}
      <div className={styles.countryDetails}>
        <h2 className={styles.sectionTitle}>Detailed Work Visa Information</h2>
        {countryData.map((country, idx) => (
          <section
            key={country.name}
            ref={sectionRefs.current[idx]}
            className={styles.countrySection}
            id={country.name.toLowerCase()}
          >
            <div className={styles.countryHeader}>
              <span className={styles.countryFlag}>{country.flag}</span>
              <h3 className={styles.countryTitle}>{country.name} Work Visa</h3>
            </div>
            
            <p className={styles.countryDescription}>{country.explanation}</p>
            
            <div className={styles.tabContainer}>
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tab} ${selectedTab === 'overview' ? styles.activeTab : ''}`}
                  onClick={() => setSelectedTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`${styles.tab} ${selectedTab === 'requirements' ? styles.activeTab : ''}`}
                  onClick={() => setSelectedTab('requirements')}
                >
                  Requirements
                </button>
                <button 
                  className={`${styles.tab} ${selectedTab === 'process' ? styles.activeTab : ''}`}
                  onClick={() => setSelectedTab('process')}
                >
                  Process
                </button>
              </div>
              
              <div className={styles.tabContent}>
                {selectedTab === 'overview' && (
                  <div className={styles.overviewContent}>
                    <div className={styles.visaInfo}>
                      <div className={styles.infoItem}>
                        <strong>Visa Type:</strong> {country.visaType}
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Processing Time:</strong> {country.processingTime}
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Stay Duration:</strong> {country.stayDuration}
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Visa Fee:</strong> {country.cost}
                      </div>
                    </div>
                    <div className={styles.highlights}>
                      <h4>Career Benefits:</h4>
                      <p>{country.highlights}</p>
                    </div>
                  </div>
                )}
                
                {selectedTab === 'requirements' && (
                  <div className={styles.requirementsContent}>
                    <h4>Required Documents:</h4>
                    <ul className={styles.requirementsList}>
                      {country.requirements.map((req, index) => (
                        <li key={index} className={styles.requirementItem}>
                          <span className={styles.checkmark}>✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedTab === 'process' && (
                  <div className={styles.processContent}>
                    <h4>Step-by-Step Process:</h4>
                    <ol className={styles.processList}>
                      {country.process.map((step, index) => (
                        <li key={index} className={styles.processStep}>
                          <span className={styles.stepNumber}>{index + 1}</span>
                          <span className={styles.stepText}>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className={styles.contactSection}>
        <h2 className={styles.ctaTitle}>Ready to Launch Your International Career?</h2>
        <p className={styles.ctaText}>
          Contact Global Education Consultancy today for expert work visa guidance and career support
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.primaryBtn}>Get Career Consultation</button>
          <button className={styles.secondaryBtn}>Speak to Expert</button>
        </div>
      </div>
    </div>
  )
}

export default WorkVisa
