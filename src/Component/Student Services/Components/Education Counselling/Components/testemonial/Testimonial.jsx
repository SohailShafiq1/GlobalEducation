import React , { useEffect } from 'react'
import comment from './Testimonial.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Testimonial() {

  
useEffect(() => {
  AOS.init({
      duration: 1200,
  });
}, []);


  const sections = [
    { name: 'ANJALI KAKKASSERY D', description: 'Sunrays consultancy is a wonderful agency and I had an excellent experience with them. Be it applying to the university or for the visa, the staff there helped me immensely in every step thoroughly. I would like to specially thank my counsellor for the expert guidance and support she had rendered throughout the entire process. She was of great help whenever I had doubts regarding any of the processes and was someone I could call on anytime. I would gladly recommend the agency to my peers. Thank you, Sunrays consultancy !', stars:'⭐⭐⭐⭐⭐'},
    { name: 'MANJOT SINGH', description: 'Absolutely one of the best! Received excellent service and guidance and very accommodating! Thank you Sunrays consultancy for fulfilling my study abroad dream.', stars:"⭐⭐⭐⭐⭐"},
    { name: 'BHAUMI KUMAR PATEL', description: 'All the information provided by my counsellor is excellent and process of visa file was very fast as compared to my other friends. Excellent services of Sunrays consultancy. It is a great place to visit for student visa service.', stars:'⭐⭐⭐⭐⭐'},
    { name: 'RAJANIKANT PATEL', description: 'I would like to thank the whole Sunrays consultancy team because the experience here was altogether very lively and friendly. They gave every information to me starting from the selection of course till my documentation process. I would really recommend Sunrays for overseas education consultation.', stars:'⭐⭐⭐⭐⭐'},
    { name: 'PRERNA SHARMA', description: 'At Sunrays consultancy, I was allotted with a counselor who accompanied and explained the whole application process. Special thanks to the counselors and the other advisors. I would highly recommend Sunrays consultancy to everyone.', stars:'⭐⭐⭐⭐⭐'},
    { name: 'ASHISH BHATT', description: 'The overall process was very smooth and the counsellor at Sunrays consultancy was very polite and guided me throughout the application in a simple, understandable way. I am very happy with the service and I got my visa granted after one day of application, Ill be recommending Sunrays consultancy to my friends, whosoever plans to study abroad.', stars:'⭐⭐⭐⭐⭐'}

];
  return (
    <div className={comment.card_container}>
      <h1 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true">Students Testimonials</h1>
            <div className={comment.cards} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-once="true">
                {sections.map((section, index) => (
                    <div key={index} className={comment.card_text}>
                        <div className="card_content">
                            <p>{section.description}</p>
                            <h4>{section.name}</h4>
                            <p>{section.stars}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
