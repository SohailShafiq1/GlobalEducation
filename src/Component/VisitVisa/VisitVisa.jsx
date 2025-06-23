import React, { useRef } from 'react'
import styles from './VisitVisa.module.css'

const countryData = [
  {
    name: 'USA',
    explanation: 'The USA offers a wide range of tourist attractions, from the Statue of Liberty to the Grand Canyon. The US visit visa allows you to explore, visit family, or attend business meetings. The process is straightforward, but applicants must show strong ties to their home country.',
    details: 'Visa Type: B1/B2 Visitor Visa.\nProcessing Time: 3-5 weeks.\nStay Duration: Up to 6 months.\nHighlights: Diverse cities, national parks, world-class shopping, and entertainment.'
  },
  {
    name: 'UK',
    explanation: 'The UK is known for its rich history, iconic landmarks like Big Ben and Buckingham Palace, and vibrant cities. The UK Standard Visitor visa is suitable for tourism, family visits, or short business trips.',
    details: 'Visa Type: Standard Visitor Visa.\nProcessing Time: 3 weeks.\nStay Duration: Up to 6 months.\nHighlights: Castles, museums, countryside, and multicultural experiences.'
  },
  {
    name: 'Ireland',
    explanation: 'Ireland offers stunning landscapes, historic castles, and a warm, welcoming culture. The Irish visit visa allows you to experience the Emerald Isle for tourism or to visit friends and family.',
    details: 'Visa Type: Short Stay Visa (C).\nProcessing Time: 8 weeks.\nStay Duration: Up to 90 days.\nHighlights: Cliffs of Moher, Dublin, traditional music, and friendly locals.'
  },
  {
    name: 'France',
    explanation: 'France is famous for its art, cuisine, and landmarks such as the Eiffel Tower and Louvre Museum. The French Schengen visa lets you explore France and other Schengen countries for up to 90 days.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Paris, French Riviera, wine regions, and world-class cuisine.'
  },
  {
    name: 'Spain',
    explanation: 'Spain boasts beautiful beaches, vibrant festivals, and historic cities. The Spanish Schengen visa is ideal for tourism, family visits, or business travel within Spain and the Schengen area.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Barcelona, Madrid, flamenco, Mediterranean coast.'
  },
  {
    name: 'Netherland',
    explanation: 'The Netherlands is known for its canals, tulip fields, and museums. The Dutch Schengen visa allows you to visit the Netherlands and other Schengen countries for tourism or short stays.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Amsterdam, windmills, cycling culture, and art museums.'
  },
  {
    name: 'Germany',
    explanation: 'Germany offers a mix of modern cities and medieval towns, with attractions like the Berlin Wall and Neuschwanstein Castle. The German Schengen visa is suitable for tourism, family, or business visits.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Berlin, Oktoberfest, castles, and autobahns.'
  },
  {
    name: 'Hungary',
    explanation: 'Hungary is famous for its thermal baths, historic architecture, and vibrant capital, Budapest. The Hungarian Schengen visa allows for short-term visits for tourism or family.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Budapest, Danube River, spas, and historic towns.'
  },
  {
    name: 'Italy',
    explanation: 'Italy is renowned for its art, history, and cuisine. The Italian Schengen visa lets you explore cities like Rome, Venice, and Florence, as well as other Schengen countries.',
    details: 'Visa Type: Schengen Visa.\nProcessing Time: 2-3 weeks.\nStay Duration: Up to 90 days.\nHighlights: Rome, Venice, Florence, Italian food, and ancient ruins.'
  },
  {
    name: 'Turkey',
    explanation: 'Turkey bridges Europe and Asia, offering unique cultural experiences, ancient ruins, and beautiful coastlines. The Turkish visit visa is suitable for tourism, business, or family visits.',
    details: 'Visa Type: e-Visa or Sticker Visa.\nProcessing Time: 1-2 weeks.\nStay Duration: Up to 90 days.\nHighlights: Istanbul, Cappadocia, Mediterranean beaches, and bazaars.'
  }
];

const VisitVisa = () => {
  const sectionRefs = useRef(countryData.map(() => React.createRef()));

  const handleScrollToCountry = (idx) => {
    sectionRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Visit Visa Services by Global Education Consultancy
      </h1>
      <div className={styles.introBox}>
        <p>
          We provide professional assistance for visit visas to the following countries. Click a country to learn more about its visa process, highlights, and travel tips. Our expert team ensures a smooth and hassle-free experience for your travel needs.
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
        <strong>Explore Visa Details:</strong> Click on any country above to jump to its section and read about the visa type, processing time, stay duration, and travel highlights.
      </div>
      {countryData.map((country, idx) => (
        <section
          key={country.name}
          ref={sectionRefs.current[idx]}
          className={styles.countrySection}
          id={country.name.toLowerCase()}
        >
          <h2 className={styles.countryTitle}>{country.name}</h2>
          <p className={styles.countrySummary}>{country.explanation}</p>
          <pre className={styles.countryDetails}><span className={styles.detailsLabel}>Visa Details:</span> {country.details}</pre>
        </section>
      ))}
    </div>
  )
}

export default VisitVisa;
