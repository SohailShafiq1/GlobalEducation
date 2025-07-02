import React, { useRef, useState } from 'react'
import styles from './VisitVisa.module.css'

const countryData = [
  {
    name: 'USA',
    flag: '🇺🇸',
    explanation: 'The United States welcomes millions of visitors annually for tourism, business, and family visits. Our expert consultants guide you through the comprehensive B1/B2 visa process.',
    visaType: 'B1/B2 Visitor Visa',
    processingTime: '3-5 weeks',
    stayDuration: 'Up to 6 months (extendable)',
    cost: '$185 - $220',
    requirements: [
      'Valid passport (6+ months validity)',
      'DS-160 online application form',
      'Visa appointment booking',
      'Financial documents (bank statements, employment letter)',
      'Travel itinerary and accommodation proof',
      'Strong ties to home country evidence',
      'Sponsor documents (if applicable)'
    ],
    process: [
      'Complete DS-160 form online',
      'Pay visa application fee',
      'Schedule visa interview appointment',
      'Attend biometric appointment (if required)',
      'Attend consular interview',
      'Receive visa decision'
    ],
    highlights: 'Diverse cities, national parks, world-class shopping, entertainment, and cultural experiences'
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    explanation: 'Experience the rich heritage of the United Kingdom with our comprehensive Standard Visitor visa assistance. From London\'s iconic landmarks to Scotland\'s highlands.',
    visaType: 'Standard Visitor Visa',
    processingTime: '3 weeks (priority: 5-10 days)',
    stayDuration: 'Up to 6 months',
    cost: '£100 - £190',
    requirements: [
      'Valid passport with blank pages',
      'Online application form completed',
      'Recent passport-sized photographs',
      'Financial evidence (bank statements)',
      'Employment/education documents',
      'Travel itinerary and accommodation',
      'Previous travel history',
      'Tuberculosis test (if from certain countries)'
    ],
    process: [
      'Apply online and pay fees',
      'Book biometric appointment',
      'Submit documents at visa center',
      'Attend biometric data collection',
      'Track application status',
      'Collect passport with visa'
    ],
    highlights: 'Historic castles, museums, countryside, multicultural cities, and royal attractions'
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    explanation: 'Discover Canada\'s natural beauty and multicultural cities. Our consultants ensure your Temporary Resident Visa application meets all requirements.',
    visaType: 'Temporary Resident Visa (TRV)',
    processingTime: '2-4 weeks',
    stayDuration: 'Up to 6 months',
    cost: 'CAD $100 - $185',
    requirements: [
      'Valid travel document',
      'Completed application forms',
      'Photographs meeting specifications',
      'Proof of financial support',
      'Letter of invitation (if applicable)',
      'Purpose of visit documentation',
      'Medical exam (if required)',
      'Police certificates (if required)'
    ],
    process: [
      'Determine eligibility',
      'Gather required documents',
      'Submit online or paper application',
      'Pay processing fees',
      'Provide biometrics (if required)',
      'Wait for processing decision'
    ],
    highlights: 'Niagara Falls, Rocky Mountains, vibrant cities, and pristine wilderness'
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    explanation: 'Romania offers a rich cultural experience with stunning landscapes and historic cities. Our visa services help you explore this beautiful Eastern European destination.',
    visaType: 'Schengen Visa (Short Stay)',
    processingTime: '2-3 weeks',
    stayDuration: 'Up to 90 days',
    cost: '€80 - €140',
    requirements: [
      'Valid passport (3+ months validity)',
      'Completed Schengen visa application',
      'Two recent passport photographs',
      'Travel insurance (€30,000 coverage)',
      'Flight reservations',
      'Hotel bookings or invitation letter',
      'Bank statements (last 3 months)',
      'Employment certificate or student ID'
    ],
    process: [
      'Fill out application form online',
      'Book appointment at Romanian consulate',
      'Prepare required documents',
      'Attend visa appointment',
      'Submit biometric data',
      'Track application and collect visa'
    ],
    highlights: 'Dracula\'s Castle, Bucharest\'s architecture, Carpathian Mountains, and medieval towns'
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    explanation: 'Italy, the cradle of Renaissance art and culture, offers unforgettable experiences. Our expert team assists with Schengen visa applications for tourism and business.',
    visaType: 'Schengen Visa (Short Stay)',
    processingTime: '2-3 weeks',
    stayDuration: 'Up to 90 days',
    cost: '€80 - €140',
    requirements: [
      'Valid passport with 2 blank pages',
      'Completed application form',
      'Recent passport-size photos',
      'Travel insurance coverage',
      'Proof of accommodation',
      'Round-trip flight tickets',
      'Financial means proof',
      'Cover letter explaining purpose'
    ],
    process: [
      'Complete online application',
      'Schedule consulate appointment',
      'Compile supporting documents',
      'Attend visa interview',
      'Provide fingerprints and photo',
      'Collect approved visa'
    ],
    highlights: 'Rome\'s ancient ruins, Venice canals, Tuscan countryside, and world-renowned cuisine'
  },
  {
    name: 'France',
    flag: '🇫🇷',
    explanation: 'France, the land of art, fashion, and gastronomy, awaits your visit. Our consultants provide comprehensive assistance for French Schengen visa applications.',
    visaType: 'Schengen Visa (Short Stay)',
    processingTime: '2-3 weeks',
    stayDuration: 'Up to 90 days',
    cost: '€80 - €140',
    requirements: [
      'Valid passport (3+ months validity)',
      'Visa application form signed',
      'Two identical photographs',
      'Travel medical insurance',
      'Proof of accommodation in France',
      'Travel itinerary and tickets',
      'Financial resources proof',
      'Employment/study certificate'
    ],
    process: [
      'Fill application form accurately',
      'Book VFS Global appointment',
      'Gather all required documents',
      'Attend biometric appointment',
      'Pay visa fees',
      'Track and receive passport'
    ],
    highlights: 'Eiffel Tower, Louvre Museum, French Riviera, wine regions, and Parisian culture'
  },
  {
    name: 'North Cyprus',
    flag: '🇹🇷',
    explanation: 'North Cyprus offers pristine beaches, ancient history, and warm hospitality. Our team helps with visa arrangements for this Mediterranean paradise.',
    visaType: 'Tourist Visa / Visa on Arrival',
    processingTime: '1-2 weeks (or immediate on arrival)',
    stayDuration: 'Up to 90 days',
    cost: '$20 - $50',
    requirements: [
      'Valid passport (6+ months validity)',
      'Return flight tickets',
      'Hotel reservations',
      'Sufficient funds for stay',
      'Travel insurance (recommended)',
      'Visa application form',
      'Passport-sized photographs',
      'Purpose of visit letter'
    ],
    process: [
      'Apply online or on arrival',
      'Submit required documents',
      'Pay visa fees',
      'Receive visa approval',
      'Enter North Cyprus',
      'Present documents at border'
    ],
    highlights: 'Kyrenia Harbor, ancient Salamis ruins, golden beaches, and Mediterranean cuisine'
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    explanation: 'Turkey bridges Europe and Asia, offering unique cultural experiences and breathtaking landscapes. Our e-visa services make your Turkish journey seamless.',
    visaType: 'e-Visa / Tourist Visa',
    processingTime: '1-3 days (e-Visa)',
    stayDuration: 'Up to 90 days',
    cost: '$20 - $60',
    requirements: [
      'Valid passport (6+ months validity)',
      'E-visa application online',
      'Digital passport copy',
      'Travel itinerary',
      'Hotel bookings',
      'Credit card for payment',
      'Return flight tickets',
      'Travel insurance (recommended)'
    ],
    process: [
      'Apply for e-visa online',
      'Upload required documents',
      'Pay visa fee online',
      'Receive e-visa via email',
      'Print visa copy',
      'Present at Turkish border'
    ],
    highlights: 'Istanbul\'s historic sites, Cappadocia\'s fairy chimneys, Mediterranean coast, and Turkish culture'
  },
  {
    name: 'Belarus',
    flag: '🇧🇾',
    explanation: 'Belarus offers authentic Eastern European experiences with its pristine nature and rich history. Our consultants assist with visa applications for this hidden gem.',
    visaType: 'Tourist Visa / Visa-free (for some nationalities)',
    processingTime: '2-3 weeks',
    stayDuration: 'Up to 30 days (visa-free) or 90 days (visa)',
    cost: '$60 - $120',
    requirements: [
      'Valid passport (3+ months validity)',
      'Completed visa application',
      'Recent passport photographs',
      'Travel insurance coverage',
      'Hotel confirmations',
      'Flight tickets (round-trip)',
      'Financial means proof',
      'Invitation letter (if applicable)'
    ],
    process: [
      'Check visa requirements',
      'Complete application form',
      'Submit to Belarus embassy',
      'Attend interview if required',
      'Pay processing fees',
      'Collect approved visa'
    ],
    highlights: 'Minsk\'s Soviet architecture, Belovezhskaya Pushcha National Park, and authentic culture'
  },
  {
    name: 'Russia',
    flag: '🇷🇺',
    explanation: 'Russia, the world\'s largest country, offers incredible diversity from Moscow\'s Red Square to Siberian wilderness. Our team facilitates Russian visa applications.',
    visaType: 'Tourist Visa',
    processingTime: '2-4 weeks',
    stayDuration: 'Up to 30 days',
    cost: '$160 - $280',
    requirements: [
      'Valid passport with blank pages',
      'Completed visa application form',
      'Passport-sized photographs',
      'Tourist voucher from Russian tour operator',
      'Hotel confirmations',
      'Travel insurance',
      'Invitation letter',
      'Proof of employment'
    ],
    process: [
      'Obtain tourist voucher',
      'Complete visa application',
      'Book consulate appointment',
      'Submit documents and biometrics',
      'Pay visa fees',
      'Collect passport with visa'
    ],
    highlights: 'Red Square, Hermitage Museum, Trans-Siberian Railway, and Russian cultural heritage'
  }
];

const VisitVisa = () => {
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
          🌍 Visit Visa Services
        </h1>
        <p className={styles.subheading}>
          Global Education Consultancy - Your Trusted Travel Partner
        </p>
      </div>

      {/* Services Overview */}
      <div className={styles.servicesOverview}>
        <h2 className={styles.sectionTitle}>Our Professional Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📋</div>
            <h3>Document Preparation</h3>
            <p>Complete assistance with visa application forms, document compilation, and verification</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏛️</div>
            <h3>Embassy Liaison</h3>
            <p>Direct communication with embassies and consulates for appointment booking and follow-ups</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>✅</div>
            <h3>Application Review</h3>
            <p>Expert review of your application to maximize approval chances</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🎯</div>
            <h3>Interview Preparation</h3>
            <p>Mock interviews and guidance to help you succeed in visa interviews</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>
        <h2 className={styles.sectionTitle}>Why Choose Global Education Consultancy?</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🏆</span>
            <div>
              <h4>98% Success Rate</h4>
              <p>Proven track record with thousands of successful visa applications</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>⚡</span>
            <div>
              <h4>Fast Processing</h4>
              <p>Expedited service options available for urgent travel needs</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>💡</span>
            <div>
              <h4>Expert Guidance</h4>
              <p>Certified immigration consultants with years of experience</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>🔒</span>
            <div>
              <h4>Secure Process</h4>
              <p>Complete confidentiality and secure handling of documents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Country Selection */}
      <div className={styles.countrySelection}>
        <h2 className={styles.sectionTitle}>Select Your Destination</h2>
        <p className={styles.selectionSubtext}>
          Click on any country below to view detailed visa information, requirements, and our step-by-step process
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
        <h2 className={styles.sectionTitle}>Detailed Visa Information</h2>
        {countryData.map((country, idx) => (
          <section
            key={country.name}
            ref={sectionRefs.current[idx]}
            className={styles.countrySection}
            id={country.name.toLowerCase()}
          >
            <div className={styles.countryHeader}>
              <span className={styles.countryFlag}>{country.flag}</span>
              <h3 className={styles.countryTitle}>{country.name} Visit Visa</h3>
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
                      <h4>Travel Highlights:</h4>
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
        <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
        <p className={styles.ctaText}>
          Contact Global Education Consultancy today for personalized visa assistance
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.primaryBtn}>Get Free Consultation</button>
          <button className={styles.secondaryBtn}>Call Us Now</button>
        </div>
      </div>
    </div>
  )
}

export default VisitVisa;
