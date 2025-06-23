import React, { useRef } from 'react'
import styles from '../VisitVisa/VisitVisa.module.css'

const countryData = [
  {
    name: 'UK',
    explanation: 'The UK offers a variety of work visas for skilled professionals, graduates, and entrepreneurs. The Skilled Worker Visa is the most common route for employment in the UK.',
    details: 'Visa Type: Skilled Worker Visa\nProcessing Time: 3-8 weeks\nStay Duration: Up to 5 years (extendable)\nHighlights: Access to the UK job market, pathway to permanent residency, and family inclusion.'
  },
  {
    name: 'Romania',
    explanation: 'Romania welcomes foreign workers in sectors like IT, engineering, and healthcare. The Romanian work visa is employer-sponsored and requires a job offer.',
    details: 'Visa Type: Long-Stay Work Visa (D/AM)\nProcessing Time: 2-3 months\nStay Duration: 1 year (renewable)\nHighlights: Growing economy, affordable living, and opportunities in various industries.'
  },
  {
    name: 'Italy',
    explanation: 'Italy provides work visas for highly skilled professionals, seasonal workers, and intra-company transfers. The process is quota-based and requires employer sponsorship.',
    details: 'Visa Type: National Work Visa (D-Visa)\nProcessing Time: 2-3 months\nStay Duration: 1-2 years (renewable)\nHighlights: Work in Italy’s vibrant cities, enjoy Italian culture, and access the EU job market.'
  },
  {
    name: 'France',
    explanation: 'France offers work visas for skilled professionals, researchers, and intra-company transferees. The Talent Passport is a popular option for highly qualified workers.',
    details: 'Visa Type: Talent Passport or Work Permit\nProcessing Time: 2-3 months\nStay Duration: 1-4 years (renewable)\nHighlights: Work in France’s dynamic economy, access to social benefits, and family reunification.'
  },
  {
    name: 'North Cyprus',
    explanation: 'North Cyprus provides work permits for foreign nationals in sectors like tourism, education, and construction. A job offer is required before applying.',
    details: 'Visa Type: Work Permit\nProcessing Time: 1-2 months\nStay Duration: 1 year (renewable)\nHighlights: Mediterranean lifestyle, English-speaking environment, and growing job market.'
  },
  {
    name: 'Turkey',
    explanation: 'Turkey offers work permits for foreign professionals, teachers, and investors. The process is employer-driven and requires a valid job contract.',
    details: 'Visa Type: Work Permit\nProcessing Time: 1-2 months\nStay Duration: 1 year (renewable)\nHighlights: Bridge between Europe and Asia, diverse industries, and cultural richness.'
  },
  {
    name: 'Belarus',
    explanation: 'Belarus issues work visas for skilled workers, IT professionals, and technical experts. The process is employer-sponsored and includes a medical check.',
    details: 'Visa Type: Type B or D Work Visa\nProcessing Time: 1-2 months\nStay Duration: 1 year (renewable)\nHighlights: Low cost of living, growing IT sector, and opportunities in manufacturing.'
  },
  {
    name: 'Russia',
    explanation: 'Russia offers work visas for professionals, teachers, and technical specialists. The process requires a job offer and employer sponsorship.',
    details: 'Visa Type: Work Visa (Single or Multiple Entry)\nProcessing Time: 1-2 months\nStay Duration: 1 year (renewable)\nHighlights: Work in major Russian cities, access to a large job market, and cultural experiences.'
  }
];

const WorkVisa = () => {
  const sectionRefs = useRef(countryData.map(() => React.createRef()));

  const handleScrollToCountry = (idx) => {
    sectionRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Work Visa Services by Global Education Consultancy
      </h1>
      <div className={styles.introBox}>
        <p>
          We provide expert guidance for work visas to the following countries. Click a country to learn more about its work visa process, requirements, and career opportunities. Our team ensures a smooth application and transition for your international career.
        </p>
      </div>
      <ul className={styles.countryList}>
        {countryData.map((country, idx) => (
          <li key={country.name} className={styles.countryItem}>
            <button className={styles.countryBtn} onClick={() => handleScrollToCountry(idx)}>{country.name}</button>
          </li>
        ))}
      </ul>
      <div className={styles.explanation}>
        <strong>Explore Work Visa Details:</strong> Click on any country above to jump to its section and read about the visa type, processing time, stay duration, and work highlights.
      </div>
      {countryData.map((country, idx) => (
        <section
          key={country.name}
          ref={sectionRefs.current[idx]}
          className={styles.countrySection}
          id={country.name.toLowerCase().replace(/\s/g, '')}
        >
          <h2 className={styles.countryTitle}>{country.name}</h2>
          <p className={styles.countrySummary}>{country.explanation}</p>
          <pre className={styles.countryDetails}><span className={styles.detailsLabel}>Visa Details:</span> {country.details}</pre>
        </section>
      ))}
    </div>
  )
}

export default WorkVisa
