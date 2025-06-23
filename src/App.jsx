import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import "@fontsource/outfit"
import Home from "./Component/Home/Home";
import ContactUs from "./Component/Contact us/Contact";
import Scholarships from './Component/Scholarship/ScholarShip'
import StudentService from './Component/Student Services/StudentService'
import StudyAbroad from './Component/Study Abroad/StudyAbroad'
import AboutUs from './Component/About us/AboutUs'
import Resources from './Component/Resources/Resources'
import {MainNavBar} from "./Component/Home/Home";
import StudyAbroadRouting from './Component/Routing/StudyAbroadRouting'
import AboutusRouting from './Component/Routing/AboutusRouting'
import ScholarshipsRouting from "./Component/Routing/ScholarshipsRouting";
import Footer from "./Component/Footer/Footer";
import StudentServicesrRouting from "./Component/Routing/StudentServicesrRouting";
import VisitVisa from './Component/VisitVisa/VisitVisa'
import WorkVisa from './Component/WorkVisa/WorkVisa'
function HomeScreen() {
  return (<Home />);
}
function Routing()
{
  return(
    <>
      <AboutusRouting />
      <ScholarshipsRouting/>
      <StudyAbroadRouting/>
      <StudentServicesrRouting/>
    </>
  )
}
function App() {
  return (
    <div className="body">  
      <BrowserRouter>
      <MainNavBar/>
        <Routes>

          <Route path="/" element={<HomeScreen />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/visitvisa" element={<VisitVisa />} />
          <Route path="/workvisa" element={<WorkVisa />} />
          
        </Routes>
      <Routing/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
