import React, { useEffect, useState, useRef } from 'react';
import subnavbar from './subnavbar.module.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function SubNavbar() {
  const [isSticky, setIsSticky] = useState(false); 
  const [originalTop, setOriginalTop] = useState(null);
  const navbarRef = useRef(null); 

  useEffect(() => {
    AOS.init({ duration: 1200 }); 

    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top; 
        const scrollY = window.scrollY;
        if (originalTop === null) {
          setOriginalTop(navbarTop);
        }
        if (scrollY > originalTop && !isSticky) {
          setIsSticky(true);
        }

        else if (scrollY <= originalTop && isSticky) {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky, originalTop]);


  // Function to smoothly scroll to a section
  const handleScrolltosection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  return (
    <div
      ref={navbarRef}
      className={`${subnavbar.container} ${isSticky ? subnavbar.sticky : ''}`}>
      <ul>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section1" onClick={() => handleScrolltosection('section1')}>Why Study in Belarus</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section2" onClick={() => handleScrolltosection('section2')}>Benefits</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section3" onClick={() => handleScrolltosection('section3')}>Courses and universities</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section4" onClick={() => handleScrolltosection('section4')}>Requirements</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section5" onClick={() => handleScrolltosection('section5')}>Costs</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section6" onClick={() => handleScrolltosection('section6')}>Scholarship</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section7" onClick={() => handleScrolltosection('section7')}>Living Expenses</a></li>
        <li data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true"><a href="#section8" onClick={() => handleScrolltosection('section8')}>Work</a></li>
      </ul>
    </div>
  );
}

export default SubNavbar;
