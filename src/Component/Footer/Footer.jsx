import React from 'react'
import footercss from './footer.module.css'
import { NavLink } from 'react-router-dom';

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className={footercss.Footer}>
    <div className={footercss.servicescontainer}>
        <div className={footercss.sub_container1}>
            <ul>
            <h1 className={footercss.social} >Let's get social.</h1>

                <h1 >About us</h1>
                <li>  <NavLink to="/whoweare" className={footercss.btn}>
                  Who we are
                </NavLink></li>
                <li><NavLink to="/timeLine" className={footercss.btn}>
                  Our Timeline
                </NavLink></li>
                <li><NavLink to="/team" className={footercss.btn}>
                  Our Leadership Team
                </NavLink></li>
                <li>
                <NavLink to="/ourpartners" className={footercss.btn}>
                  Our Partners
                </NavLink>
              </li>
                </ul>
        </div>
        <div className={footercss.sub_container2}>
            <ul>
                <h1>Our Services</h1>
                <li>
                <NavLink to="/education-counselling" className={footercss.btn}>
                  International Education Counselling
                </NavLink>
              </li>
              <li>
                <NavLink to="/health-Insurance" className={footercss.btn}>
                  Health insurance for Students
                </NavLink>
              </li>
              <li>
                <NavLink to="/application-process" className={footercss.btn}>
                  University Application Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/visa-guidance" className={footercss.btn}>
                  International Student Visa Guidance
                </NavLink>
              </li>
              <li>
                <NavLink to="/scholarship-guidance" className={footercss.btn}>
                  University Scholarship Guidance
                </NavLink>
              </li>

              <li>
                <NavLink to="/student-accomodation" className={footercss.btn}>
                  Student Accommodation
                </NavLink>
              </li>
            
            </ul>
            <ul>
                <h1>Study Abroad FAQ's</h1>
                <li>
                <NavLink to="/ukStudyAbroad" className={footercss.btn}>
                  Study In UK FAQ's
                </NavLink>
              </li>
              <li>
                <NavLink to="/usaStudyAbroad" className={footercss.btn}>
                  Study In USA FAQ's
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaStudyAbroad" className={footercss.btn}>
                  Study In Canada FAQ's
                </NavLink>
              </li>
            </ul>
        </div>
        <div className={footercss.sub_container3}>
            
            <ul>
                <h1>Resources</h1>
                <li>PathFinder YouTube</li>
                <li>PathFinder Podcast</li>
                <li>International Study Guides</li>
            </ul>
            <ul>
                <h1>Student Visa Service</h1>
                <li>Student Visa Australia</li>
                <li>Student Visa Canada</li>
                <li>Student Visa UK</li>
                <li>Student Visa USA</li>
                <li>Student Visa New Zealand</li>
            </ul>
        </div>
        <div className={footercss.sub_container4}>
            <ul>
                <h1>Scholarships</h1>
                <li>
                <NavLink to="/USAScholarship" className={footercss.btn}>
                  Scholarship In USA
                </NavLink>
              </li>
              <li>
                <NavLink to="/UkScholarship" className={footercss.btn}>
                  Scholarship In UK
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaScholarship" className={footercss.btn}>
                  Scholarship In Canada
                </NavLink>
              </li>
            </ul>
            <ul>
                <h1>Study Abroad</h1>
                <li>
                <NavLink to="/ukStudyAbroad" className={footercss.btn}>
                  Study In UK
                </NavLink>
              </li>
              <li>
                <NavLink to="/usaStudyAbroad" className={footercss.btn}>
                  Study In USA
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaStudyAbroad" className={footercss.btn}>
                  Study In Canada
                </NavLink>
              </li>
            </ul>
        </div>
    </div>   
    <hr />
   
    </div>
  )
}

export default Footer
