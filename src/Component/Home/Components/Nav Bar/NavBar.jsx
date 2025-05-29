import React, { useState , useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../Nav Bar/nav.module.css";
import { IoIosArrowDown } from "react-icons/io";
const s = styles;

const NavBar = () => {
  const [menuopen, setmenuopen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setmenuopen(false);
  }, [location]);

  return (
    
    <div
      className={s["container"]}
      style={{ backgroundColor: menuopen ? "#F4F3EE " : "#F4F3EE " }}
    >
            {menuopen && <div className={s["overlay"]}></div>}

      <div className={s["menu"]} onClick={() => setmenuopen(!menuopen)} 
      style={{ position: menuopen ? "fixed" : "absolute",  }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${s["mainlinks"]} ${menuopen ? s["open"] : ""}`}>
        <li>
          <NavLink to="/" className={s["btn"]}>
            Home
          </NavLink>
        </li>
        <li>
            Student Services
            <IoIosArrowDown className={s["arrow"]} />
         
          <div className={s["dropdown"]}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/education-counselling" className={s["btn"]}>
                  International Education Counselling
                </NavLink>
              </li>
              <li>
                <NavLink to="/health-Insurance" className={s["btn"]}>
                  Health insurance for Students
                </NavLink>
              </li>
              <li>
                <NavLink to="/application-process" className={s["btn"]}>
                  University Application Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/visa-guidance" className={s["btn"]}>
                  International Student Visa Guidance
                </NavLink>
              </li>
              <li>
                <NavLink to="/scholarship-guidance" className={s["btn"]}>
                  University Scholarship Guidance
                </NavLink>
              </li>

              <li>
                <NavLink to="/student-accomodation" className={s["btn"]}>
                  Student Accommodation
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          
            Study Abroad
            <IoIosArrowDown className={s["arrow"]} />
         
          <div className={s["dropdown"]}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/ukStudyAbroad" className={s["btn"]}>
                  Study In Cyprus
                </NavLink>
              </li>
              <li>
                <NavLink to="/usaStudyAbroad" className={s["btn"]}>
                  Study In USA
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaStudyAbroad" className={s["btn"]}>
                  Study In Canada
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
            Scholarships
            <IoIosArrowDown className={s["arrow"]} />

          <div className={s["dropdown"]}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/USAScholarship" className={s["btn"]}>
                  Scholarship In USA
                </NavLink>
              </li>
              <li>
                <NavLink to="/UkScholarship" className={s["btn"]}>
                  Scholarship In UK
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaScholarship" className={s["btn"]}>
                  Scholarship In Canada
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="/aboutUs" className={s["btn"]}>
            About Us
            <IoIosArrowDown className={s["arrow"]} />

          </NavLink>
          <div className={s["dropdown"]}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/whoweare" className={s["btn"]}>
                  Who we are
                </NavLink>
              </li>
              <li>
                <NavLink to="/ourpartners" className={s["btn"]}>
                  Our Partners
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeLine" className={s["btn"]}>
                  Our Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className={s["btn"]}>
                  Our Leadership Team
                </NavLink>
              </li>
              
              
             
            </ul>
          </div>
        </li>
        {/* <li>
          <NavLink to="/resources" className={s["btn"]}>
            Resources
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/contact" className={s["btn"]}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
