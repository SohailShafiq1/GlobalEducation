import React , { useEffect } from 'react'
import middle from './middle.module.css';
import ScholarshipsinCanada from './components/ScholarshipsinCanada/ScholarshipsinCanada';
import Table from './components/2rowtable/Table';
import ScholarshipsinDegree from './components/ScholarshipsinDegree/ScholarshipsinDegree';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Needhelp from './components/Needhelp/Needhelp';
import ScholarshipsinMBA from './components/ScholarshipsinMBA/ScholarshipsinMBA';

function Middle() {
  useEffect(() => {
          AOS.init({
              duration: 1200,
          });
        }, []);
  const table1 = [
    {
      headings: ['Scholarship Name', 'Amount/Expenses Covered'],
      rows: [
        { 
            'Scholarship Name': 'Vanier Canada Graduate Scholarships', 'Amount/Expenses Covered': '50,000 CAD/year for three years' 
        },
        { 
            'Scholarship Name': 'Lester B. Pearson Scholarship (University of Toronto)', 'Amount/Expenses Covered': 'Full tuition + living expenses for four years'
        },
        { 
            'Scholarship Name': 'Banting Postdoctoral Fellowships', 'Amount/Expenses Covered': '70,000 CAD/year for two years' 
        },
        { 
            'Scholarship Name': 'UBC International Leader of Tomorrow Award', 'Amount/Expenses Covered': 'Proportional to financial need, up to full tuition' 
        },
        { 
            'Scholarship Name': 'Ontario Trillium Scholarships', 'Amount/Expenses Covered': '40,000 CAD/year for four years' 
        },
      ],
    },
  ];

  const table2 = [
    {
        headings: ['Name of the scholarship', 'Eligibility', 'Average scholarship amount (in CAD)'],
        rows: [
          {
            'Name of the scholarship': 'Vanier Canada Graduate Scholarships','Eligibility': 'Ph.D. students','Average scholarship amount (in CAD)': '50,000 per year'
          },
          {
            'Name of the scholarship': 'Banting Postdoctoral Fellowships','Eligibility': 'Postdoctoral students','Average scholarship amount (in CAD)': '70,000 per year'
          },
          {
            'Name of the scholarship': 'Canada Graduate Scholarships (Master’s)','Eligibility': 'Master’s students', 'Average scholarship amount (in CAD)': '17,500'
          },
          {
            'Name of the scholarship': 'Ontario Trillium Scholarships','Eligibility': 'Ph.D. students','Average scholarship amount (in CAD)': '40,000 per year'
          },
          {
            'Name of the scholarship': 'Canada-CARICOM Leadership Scholarships program','Eligibility': 'Students from CARICOM countries','Average scholarship amount (in CAD)': 'Varies based on program'
          },
        ],
    },
  ];

  const table3 = [
    {
        headings: ['Name of the university', 'Name of the scholarship', 'Eligibility', 'Average scholarship amount (in CAD)'],
        rows: [
          {
            'Name of the university': 'University of Toronto','Name of the scholarship': 'Lester B. Pearson Scholarship','Eligibility': 'Undergraduate Students','Average scholarship amount (in CAD)': 'Full tuition + living expenses'
          },
          {
            'Name of the university': 'McGill University','Name of the scholarship': 'Master’s and PhD Entrance Scholarships','Eligibility': 'Graduate Students', 'Average scholarship amount (in CAD)': 'Varies based on the program'
          },
          {
            'Name of the university': 'University of British Columbia','Name of the scholarship': 'UBC International Leader of Tomorrow Award','Eligibility': 'Undergraduate Students', 'Average scholarship amount (in CAD)': 'Up to full tuition'
          },
          {
            'Name of the university': 'University of British Columbia','Name of the scholarship': 'Calgary International Entrance Scholarship','Eligibility': 'Undergraduate Students', 'Average scholarship amount (in CAD)': '15,000'
          },
          {
            'Name of the university': 'Dalhousie University','Name of the scholarship': 'Richard Murray Design Award','Eligibility': 'Design students','Average scholarship amount (in CAD)': '5,000'
          },
        ],
      },
  ];
  const table4 = [
    {
        headings: ['University', 'Name of the scholarship', 'Eligibility', 'Amount (in AUD)'],
        rows: [
          {
            'University': 'Queensland University of Technology','Name of the scholarship': 'QUT Postgraduate Merit Scholarship','Eligibility': "Master's students with strong academic performance",'Amount (in AUD)': '20% tuition fee reduction'
          },
          {
            'University': 'RMIT University','Name of the scholarship': 'RMIT Postgraduate International Excellence Scholarship','Eligibility': 'Academic excellence', 'Amount (in AUD)': 'AUD 10,000 off tuition fees'
          },
          {
            'University': 'Swinburne University of Technology','Name of the scholarship': 'Swinburne International Excellence Scholarship – Postgraduate','Eligibility': 'Academic excellence','Amount (in AUD)': '20% off annual tuition fees'
          },
        ],
    },
  ];
  const table5 = [
    {
        headings: ['Metric', 'Description'],
        rows: [
          { 
            'Metric': 'Nationality', 'Description': 'Must hold non-Canadian citizenship and typically reside outside of Canada.' 
        
          },
          { 
            'Metric': 'Academic Prowess', 'Description': 'Must demonstrate exceptional academic achievements.' 
          },
          { 
            'Metric': 'Language Proficiency', 'Description': 'IELTS score of 6.5 or a TOEFL iBT score of 92, with specific scholarships possibly demanding more.'
          },
          { 
            'Metric': 'Course Alignment', 'Description': 'Some scholarships are designed for specific courses. Confirm synchronicity with your study aims.'
          },
          { 
            'Metric': 'Age Dynamics', 'Description': 'Few scholarships might be age-restricted. It’s prudent to delve into the details.' 
          },
        ],
      },
  ];
  const table6 = [
    {
        headings: ['Criteria', 'Description'],
        rows: [
          { 
            'Criteria': 'Endorsement Letters', 'Description': 'Typically required; these come from past educators or pertinent professionals.'
          },
          { 
            'Criteria': 'Personal Narrative', 'Description': 'An articulate account of your aspirations, motivations, and reasons for choosing Canada.'
          },
          { 
            'Criteria': 'Economic Documentation', 'Description': 'For scholarships assessing economic need, furnish requisite financial attestations.'
          },
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
           <ScholarshipsinCanada/>
           <div className={middle.table1} >
                <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Top Scholarships to Study in Canada for International Students</h1>
                <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Canada's reputation as a top education destination is complemented by a wide range of scholarships aimed at international students. These scholarships not only alleviate the financial strain but also attract the brightest minds from across the globe. Below is a snapshot of some of these prestigious scholarships:</p>
                {table1.map((table, index) => (
                <Table key={index} headings={table.headings} rows={table.rows} />
                ))}
                <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">How about contacting Global Education Consultancy counsellors to get details of scholarship application deadlines and everything else?</h2>
           </div>
        </div>

      <div className={middle.table2} id="section2">
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Government-Funded Scholarships in Canada for International Students</h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">The Canadian government recognises the importance of international students to cultural and academic life. This recognition extends to offering numerous scholarships to attract global talent. Here's a detailed table with government-funded <strong>scholarships for international students in Canada:</strong></p>
        {table2.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
      </div>


      
      <div className={`${middle.table2} ${middle.bgcolor}`} id="section3">
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Canada University Scholarships</h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Embarking on a journey of higher education is a transformative endeavour, one that Canada wholeheartedly embraces through its diverse and enriching university scholarship programs. As a global hub for academic excellence and cultural inclusivity, Canada extends a welcoming hand to ambitious minds from around the world, offering a range of <strong>scholarships to study in Canada</strong>. The realm of <strong>Canada University Scholarships</strong>, including the prestigious <strong>full scholarship for international students in Canada</strong>, 
        represents a gateway to unparalleled opportunities, enabling talented individuals to not only fulfil their educational aspirations but also to immerse themselves in a vibrant tapestry of learning, innovation, and cross-cultural exchange. In this table, we delve into the mosaic of scholarships offered by Canadian universities, each including the sought-after <strong>Canada Scholarship for International Students</strong>, a testament to the nation's commitment to fostering brilliance and nurturing a truly global academic community.</p>
        {table3.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}

        <ScholarshipsinDegree/>

        {table4.map((table, index) => (
          <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        <Needhelp/>
        <ScholarshipsinMBA/>


        <div className={middle.table5}>
            <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Eligibility Requirements for Scholarships in Canada for International Students</h1>
            <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">The allure of Canada's academic panorama is undeniable. With its embrace of diversity and emphasis on innovation, it's a haven for scholars worldwide. Yet, international students must be cognizant of the criteria associated with scholarships here. Let's illuminate these meticulously, ensuring you're primed to seize such opportunities.</p>
            <h2 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Key Eligibility Metrics
            </h2>
            {table5.map((table, index) => (
            <Table key={index} headings={table.headings} rows={table.rows} />
            ))}
            <h2 data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Additional Requirements
            </h2>
            {table6.map((table, index) => (
            <Table key={index} headings={table.headings} rows={table.rows} />
        ))}
        </div>
      </div>



      <div className={middle.Apply} id="section4">
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">
        How to Apply for Scholarships to Study in Canada?
        </h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Securing a scholarship requires meticulous preparation:</p>
        <ul data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
            <li ><strong>Research:</strong> Identify scholarships you’re eligible for.</li>
            <li ><strong>Prepare Documentation:</strong> This typically includes Academic transcripts, Reference letters, a Statement of Purpose, and a CV.</li>
            <li ><strong>Proof of Proficiency:</strong> IELTS/TOEFL scores, if applicable.</li>
            <li ><strong>Submit Application:</strong> Always adhere to deadlines.</li>
            <li ><strong>Interview:</strong> Some scholarships may require an interview or additional assessments.</li>
        </ul>

      </div>

      <div className={middle.Tips} id="section5">
        <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">
        Tips to Increase Your Chances of Getting Accepted for Canada Scholarships
        </h1>
        <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Navigating the landscape of scholarships to study in Canada requires finesse and preparation. To maximise your chances of securing the coveted full scholarship for international students in Canada, consider these strategic approaches that can elevate your application and set you on the path to academic success:</p>
        <ul data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
            <li ><strong>Tailor Each Application:</strong> Embrace individuality in your scholarship applications, steering clear of the one-size-fits-all approach. Tailoring your application to the specific requirements and values of each scholarship is a testament to your dedication and enhances your candidacy.</li>
            <li ><strong>Build a Strong Academic Profile:</strong> Nurture an academic trajectory characterised by consistent excellence. Maintaining high grades speaks volumes about your commitment to intellectual growth and serves as a cornerstone of your application. Engaging in research projects or relevant internships showcases your proactive involvement in your field, which resonates powerfully with scholarship committees.</li>
            <li ><strong>Diversify Your Skillset:</strong> Beyond academic prowess, a well-rounded skillset bolsters your application's appeal. Engage in extracurricular activities that mirror your passions and strengths. Active participation in community service not only reflects your commitment to societal betterment but also aligns with the ethos of a Canada Scholarship for International Students.</li>
            <li ><strong>Prepare for Interviews:</strong>Should your application journey advance to interviews, thorough preparation is key. Familiarise yourself with commonly asked questions, delving into your motivations, aspirations, and how the scholarship aligns with your academic and personal journey.</li>
            <li ><strong>Network:</strong> Connect with those who have previously received the scholarship you aspire to secure or with university alumni. Their insights can provide valuable guidance, helping you understand the scholarship's nuances and refining your application strategy.</li>
            <li ><strong>Demonstrate Leadership and Impact:</strong> Scholarship committees often seek candidates who show potential for leadership and a positive impact. Highlight instances where you've taken initiative, led teams, or initiated projects that brought about positive change.</li>
            <li ><strong>Craft Compelling Essays:</strong> Essays provide an opportunity to present your unique story, aspirations, and alignment with the scholarship's values. Craft well-written essays that captivate readers and convey your passion and dedication.</li>
            <li ><strong>Submit Early:</strong> Avoid last-minute submissions to ensure that your application receives the attention it deserves. An early submission showcases your organisational skills and commitment to the scholarship.</li>
            <li ><strong>Seek Professional Guidance:</strong>  If needed, consider seeking guidance from educators, mentors, or scholarship consultants. Their insights can offer fresh perspectives and enhance the quality of your application.</li>
        </ul>
        <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Canada offers diverse scholarship opportunities. By understanding eligibility criteria and meticulously preparing applications, international students can unlock a world of opportunities in Canadian academia. Remember, scholarship for International students in Canada is a testament to the country's commitment to nurturing global talent. Dive deep, research well, and remember, experts like SunRay are always there to guide you.</p>

      </div>


    </div>
  )
}

export default Middle
