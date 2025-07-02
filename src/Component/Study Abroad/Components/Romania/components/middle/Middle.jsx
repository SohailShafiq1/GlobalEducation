import React , { useEffect } from 'react'
import middlecss from './middle.module.css';
import WhyinUK from './components/whyinUK/whyinUK';
import Table from './components/2rowtable/Table';
import Benefitinuk from './components/Benefitinuk/Benefitinuk';
import Popularcourses from './components/popularcourses/Popularcourses';
import Requirements from './components/reqirements/Requirements';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Middle() {
  useEffect(() => {
          AOS.init({
              duration: 1200,
          });
        }, []);
  const table1 = [
    {
      headings: ['Key Facts', 'Details'],
      rows: [
        { 'Key Facts': 'Language spoken', Details: 'English' },
        { 'Key Facts': 'Cost of study', Details: 'Varies by University' },
        { 'Key Facts': 'Scholarships and loans', Details: 'Available based on merit and need' },
        { 'Key Facts': 'Exams required', Details: 'IELTS, TOEFL. Many Programs do not require them' },
        { 'Key Facts': 'Degrees', Details: 'Undergraduate, Postgraduate, Doctoral' },
        { 'Key Facts': 'Semester', Details: 'Fall and Spring' },
        { 'Key Facts': 'Visa', Details: 'Tier 4 ' },
        { 'Key Facts': 'International Students', Details: 'Over 40,000 studying in Cyprus ' },
        { 'Key Facts': 'Popular Universities', Details: 'University of Cyprus, University of Nicosia, Cyprus University of Technology ' },
        { 'Key Facts': 'Visa', Details: 'Tier 4 ' },
        { 'Key Facts': 'Cultural Diversity', Details: 'Home to students from over 100 countries  ' },
      ],
    },
  ];

  const table2 = [
    {
      headings: ['University Name', 'Best Known for', 'Benefits(including Scholarships' ],
      rows: [
        { 'University Name': 'University of Cyprus', 'Best Known for': 'Engineering and Applied S', 'Benefits(including Scholarships': 'Offers various scholarship for international  students based on merit and need recognized degree', },
        { 'University Name': 'Cyprus University of Technology', 'Best Known for': 'Engineering and Technology', 'Benefits(including Scholarships': 'Provides scholarships for outstanding students strong focus  on research and international cooperation', },
        { 'University Name': 'University of Nicosia', 'Best Known for': 'Engineering & Medicine', 'Benefits(including Scholarships': 'Offers a range of scholarships, including merit based  and need based options largest English taught  university in Cyprus',  },
        { 'University Name': 'European University Cyprus', 'Best Known for': 'Medicine and Health Sciences', 'Benefits(including Scholarships': 'Scholarships available for high achieving students known for its modern facilities and international partnership',},
        { 'University Name': 'Frederick University ', 'Best Known for': 'Arts and Humanities', 'Benefits(including Scholarships': 'Offers various financial aid options strong  emphasis on student satisfaction and support services.',  },
        { 'University Name': 'The Cyprus institute', 'Best Known for': 'Environmental Science and Research', 'Benefits(including Scholarships': 'Provides research grants and scholarship for postgraduate students focuses on sustainability and innovation', },
      
      ],
    },
  ];

  const table3 = [
    {
      headings: ['Semester', 'Duration'],
      rows: [
        { Semester: 'Autumn', Duration: 'September to December' },
        { Semester: 'Winter', Duration: 'January to April' },
        { Semester: 'Spring', Duration: 'April to June' },
        { Semester: 'Summer', Duration: 'June to August' },
      ],
    },
  ];
  const table4 = [
    {
      headings: ['Level of Education', 'Costs for international Students in £ (Per year) (approx.)'],
      rows: [
        { 'Level of Education': 'Undergraduate (UG)', 'Costs for international Students in £ (Per year) (approx.)': '£15,000-£35,000' },
        { 'Level of Education': 'Postgraduate (PG)', 'Costs for international Students in £ (Per year) (approx.)': '£20,000-£40,000' },
        { 'Level of Education': 'MBA', 'Costs for international Students in £ (Per year) (approx.)': '£20,000- £60,000' },
        { 'Level of Education': 'PhD', 'Costs for international Students in £ (Per year) (approx.)': '£20,000- £60,000' },
        { 'Level of Education': 'Short-term Course (6 months)', 'Costs for international Students in £ (Per year) (approx.)': '£8,000- £15,000' },
        { 'Level of Education': 'Foundation Course', 'Costs for international Students in £ (Per year) (approx.)': '£8,000- £15,000' },

      ],
    },
  ];
  const table5 = [
    {
      headings: ['Scholarship', 'Description', 'Eligibility', 'Amount in £ (approx.)'],
      rows: [
        { 'Scholarship': 'British Chevening', 'Description': "UK Government's international scholarship", 'Eligibility': 'Professional academic experiences', 'Amount in £ (approx.)': '£20,000' },
        { 'Scholarship': 'Commonwealth Scholarship', 'Description': 'For students from Commonwealth countries', 'Eligibility': "Master's & PhD candidates", 'Amount in £ (approx.)': 'Varies' },
        { 'Scholarship': 'Rhodes Scholarship', 'Description': 'For Oxford University', 'Eligibility': 'Postgraduate students', 'Amount in £ (approx.)': 'Full Tuition' },
        { 'Scholarship': 'Great Scholarships', 'Description': 'For various UK universities', 'Eligibility': 'Postgraduate students from selected countries', 'Amount in £ (approx.)': '£10,000' },
        { 'Scholarship': "Vice-Chancellor's Award", 'Description': 'Merit-based scholarship', 'Eligibility': 'High-achieving undergraduate students', 'Amount in £ (approx.)': '£5,000' },
        { 'Scholarship': 'The Hubert Humphrey Fellowship Program', 'Description': 'Professional academic experiences', 'Eligibility': 'Must be from eligible countries', 'Amount in £ (approx.)': 'Varies' },
      ],
    },
  ];
  const table6 = [
    {
      headings: ['Particular', 'Average Cost Per Month (£) (approx.)'],
      rows: [
        { 'Particular': 'Accommodation (Rent)', 'Average Cost Per Month (£) (approx.)': '£200' },
        { 'Particular': 'Utilities (Electricity, Water, Gas)', 'Average Cost Per Month (£) (approx.)': '£150' },
        { 'Particular': 'Internet', 'Average Cost Per Month (£) (approx.)': '£30' },
        { 'Particular': 'Mobile Phones', 'Average Cost Per Month (£) (approx.)': '£40' },
        { 'Particular': 'Groceries', 'Average Cost Per Month (£) (approx.)': '£300' },
        { 'Particular': 'Food', 'Average Cost Per Month (£) (approx.)': '£400' },
        { 'Particular': 'Public Transportation', 'Average Cost Per Month (£) (approx.)': '£100' },
        { 'Particular': 'Health Insurance', 'Average Cost Per Month (£) (approx.)': '£50' },

      ],
    },
  ];

  const table7 = [
    {
      headings: ['Field of Work', 'Approximate Annual Salary (£) (approx.)'],
      rows: [
        { 'Field of Work': 'Business Management', 'Approximate Annual Salary (£) (approx.)': '£60,000' },
        { 'Field of Work': 'Education and Training', 'Approximate Annual Salary (£) (approx.)': '£45,000' },
        { 'Field of Work': 'Healthcare ', 'Approximate Annual Salary (£) (approx.)': '£55,000' },
        { 'Field of Work': 'IT & Computer Science', 'Approximate Annual Salary (£) (approx.)': '£65,000' },
        { 'Field of Work': 'Statistics and Data Science', 'Approximate Annual Salary (£) (approx.)': '£70,000' },

      ],
    },
  ];

  return (
    <div> 
      <div id="section1">
      <WhyinUK />
      </div>

      {table1.map((table, index) => (
        <Table key={index} headings={table.headings} rows={table.rows} />
      ))}

      <div id="section2">
      <Benefitinuk />
      </div>

      <div id="section3">
      <Popularcourses />
      </div>
      
      <div className={middlecss.table2}>
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Top Universities in the Cyprus </h1>
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">The Cyprus is home fo numerous prestigious universities that are consistently ranked among the best in the world. For international students, these institutions represent a chance to receive top-tier education, exposure to a diverse culture, and potentially brighter career opportunities.</p>
        {table2.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Choosing the right university can play a pivotal role in shaping one’s academic journey and future career prospects. For international students, it's not only about the ranking but also the exposure, cultural fit, and opportunities that these esteemed institutions provide.</p>
        <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Why invest your time when you can access expert assistance at no cost? Connect with SunRay to receive FREE guidance for studying in the Cyprus today!</h2>
      </div>

      <div id="section4">
      <Requirements />
      </div>


      <div className={middlecss.table3}>
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Admission Intake to Study in UK for International Students</h1>
        {table3.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">As a note of additional advice, we advise you to keep track of the application and the deadlines for Admissions to your favourite universities to ensure you are ahead of your peers who also seek to study in the uk!</p>
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Want to study abroad? Get FREE counselling! </p>
      </div>


      <div className={middlecss.table4} id="section5">
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Cost of Studying in the UK for International Students </h1>
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">The UK is renowned for its quality of education, but it's essential for international students to understand the costs involved. Tuition fees can vary significantly between institutions and courses. Let's break down the average yearly costs for international students.</p>
        {table4.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">The costs listed above are ballpark figures, and they can vary based on the course's popularity, the university's prestige, and the city's living expenses. Always refer fo the specific university's official website for exact tuition fees. It's also crucial to factor in living expenses, textbooks, and other ancillary costs  when budgeting for studying in the UK.</p>
        <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Need an expert's help to structure your expenses?</h2>
        <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Click below to learn more about the Cost of Living in UK</h2>
      </div>



      <div className={middlecss.table5} id="section6">
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Cost of Living in the UK for International Students </h1>
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">The UK is renowned for its quality of education, but it's essential for international students to understand the costs involved. Tuition fees can vary significantly between institutions and courses. Let's break down the average yearly costs for international students.</p>
        {table5.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
      </div>



      <div className={middlecss.table6} id="section7">
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Cost of Studying in the UK for International Students </h1>
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">The UK is renowned for its quality of education, but it's essential for international students to understand the costs involved. Tuition fees can vary significantly between institutions and courses. Let's break down the average yearly costs for international students.</p>
        {table6.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">These basic steps can prove to be effective to ensure you get to live the best experience whilst your time of Study in Romania. Need more information? Feel free to Connect with Global Education Consultancy - Your Study Abroad Expert, Today!</h2>
        <h3 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true"><br />Studying abroad can be difficult. Simplify it with Global Education Consultancy!</h3>
      </div>



      <div className={middlecss.table7} id="section8">
        <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Post-study Work Opportunities to Study in the UK </h1>
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">The UK, a hub of international businesses and industries, offers numerous work opportunities for international graduates. These roles provide not only lucrative salaries but also invaluable experience in the international market.</p>
        {table7.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">
        The UK is a magnet for international students for a plethora of reasons. Whether it's the rich history, multicultural
        environment, or world-renowned universities, the allure is undeniable. But as you embark on this academic adventure,
        understanding the nuances of living, studying, and eventually working in the UK can offer you an edge. <br /><br />

        From scholarships that can ease your financial strain to the living expenses that can guide your monthly budget, having a
        comprehensive understanding is paramount. Not to mention, the knowledge of post-study work opportunities can be a
        guiding light, helping you choose a course that aligns with your career aspirations. <br /><br />
        
        The UK, with its mix of tradition and modernity, offers a unique experience that goes beyond classrooms. While the
        academic rigour moulds you, the cultural experiences enrich you. The key lies in being prepared and making informed
        decisions.<br /><br />

        From scholarships that can ease your financial strain fo the living expenses that can guide your monthly budget, having a
        comprehensive understanding is paramount. Not to mentiGiven the stringent academic criteria and the competitive nature of
        UK universities, having a clear understanding of the requirements, both in terms of qualifications and finances, can set you on
        a path to success. The UK awaits you with its iconic universities, unmatched student life, and endless opportunities. All you
        need to do is take the first step with determination and thorough research.on, the knowledge of post-study work opportunities
        can be a guiding light, helping you choose a course that aligns with your career aspirations.
        </p>
      </div>
    </div>
  );
}

export default Middle;
