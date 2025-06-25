import React, { useState , useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../Nav Bar/nav.module.css";
import { IoIosArrowDown } from "react-icons/io";
const s = styles;

const NavBar = () => {
  const [menuopen, setmenuopen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const location = useLocation();
  useEffect(() => {
    setmenuopen(false);
    setOpenDropdown(null);
  }, [location]);

  // Helper to toggle dropdowns
  const handleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    
    <div
      className={s["container"]}
      style={{ backgroundColor: menuopen ? "#F4F3EE " : "#F4F3EE ", position: menuopen && window.innerWidth <= 700 ? "fixed" : "relative", width: menuopen && window.innerWidth <= 700 ? "100vw" : "auto", height: menuopen && window.innerWidth <= 700 ? "100vh" : "auto", top: 0, left: 0, zIndex: menuopen && window.innerWidth <= 700 ? 9999 : "auto" }}
    >
            {menuopen && <div className={s["overlay"]}></div>}

      <div className={s["menu"]} onClick={() => setmenuopen(!menuopen)} 
      style={{ position: menuopen ? "fixed" : "absolute",  }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${s["mainlinks"]} ${menuopen ? s["open"] : ""}`}
        style={menuopen && window.innerWidth <= 700 ? { width: "100vw", height: "100vh", background: "#F4F3EE", position: "fixed", top: 0, left: 0, zIndex: 9999, overflowY: "auto" } : {}}>
        <li>
          <NavLink to="/" className={s["btn"]}>
            Home
          </NavLink>
        </li>
        <li>
          <span onClick={() => handleDropdown("student")}>Student Services <IoIosArrowDown className={s["arrow"]} /></span>
          <div className={s["dropdown"]} style={{ display: openDropdown === "student" ? "block" : "none" }}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/education-counselling" className={s["btn"]}>
                  International Education Counselling
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/health-Insurance" className={s["btn"]}>
                  Health insurance for Students
                </NavLink>
              </li> */}
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
          <span onClick={() => handleDropdown("abroad")}>Study Abroad <IoIosArrowDown className={s["arrow"]} /></span>
          <div className={s["dropdown"]} style={{ display: openDropdown === "abroad" ? "block" : "none" }}>
            <ul className={s["dropdown-ul"]}>
              <li>
                <NavLink to="/ukStudyAbroad" className={s["btn"]}>
                  Study In United Kingdom
                </NavLink>
              </li>
              <li>
                <NavLink to="/australiaStudyAbroad" className={s["btn"]}>
                  Study In Australia
                </NavLink>
              </li>
              <li>
                <NavLink to="/canadaStudyAbroad" className={s["btn"]}>
                  Study In Canada
                </NavLink>
              </li>
              <li>
                <NavLink to="/franceStudyAbroad" className={s["btn"]}>
                  Study In France
                </NavLink>
              </li>
              <li>
                <NavLink to="/spainStudyAbroad" className={s["btn"]}>
                  Study In Spain
                </NavLink>
              </li>
              <li>
                <NavLink to="/irelandStudyAbroad" className={s["btn"]}>
                  Study In Ireland
                </NavLink>
              </li>
              <li>
                <NavLink to="/romaniaStudyAbroad" className={s["btn"]}>
                  Study In Romania
                </NavLink>
              </li>
              <li>
                <NavLink to="/belarusStudyAbroad" className={s["btn"]}>
                  Study In Belarus
                </NavLink>
              </li>
              <li>
                <NavLink to="/russiaStudyAbroad" className={s["btn"]}>
                  Study In Russia
                </NavLink>
              </li>
              <li>
                <NavLink to="/greekcyprusStudyAbroad" className={s["btn"]}>
                  Study In Greek Cyprus
                </NavLink>
              </li>
              <li>
                <NavLink to="/northcyprusStudyAbroad" className={s["btn"]}>
                  Study In North Cyprus
                </NavLink>
              </li>
              <li>
                <NavLink to="/georgiaStudyAbroad" className={s["btn"]}>
                  Study In Georgia
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        {/* <li>
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
        </li> */}
          <li>
          <NavLink to="/visitvisa" className={s["btn"]}>
            Visit Visa
          </NavLink>
        </li>
        <li>
          <NavLink to="/workvisa" className={s["btn"]}>
            Work Visa
          </NavLink>
        </li>
        {/* <li>
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
        </li> */}
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
