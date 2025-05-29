import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ApplicationProcess from '../Student Services/Components/Application Process/ApplicationProcess'
import VisaGuidance from '../Student Services/Components/Visa Guidance/VisaGuidance'
import ScholarShipGuidance from '../Student Services/Components/Scholarship Guidance/ScholarshipGuidance'
import Accomadation from '../Student Services/Components/Student Accomodation/StudentAccomodation'
import HealthInsurance from '../Student Services/Components/Health Insurance/HealthInsuarance'
import EducationCounselling from '../Student Services/Components/Education Counselling/EducationCouncelling'
const StudentServicesrRouting = () => {
  return (
    <div>
      <Routes>
        <Route path='/application-process' element={<ApplicationProcess/>}/>
        <Route path='/visa-guidance' element={<VisaGuidance/>}/>
        <Route path='/scholarship-guidance' element={<ScholarShipGuidance/>}/>
        <Route path='/student-accomodation' element={<Accomadation/>}/>
        <Route path='/education-counselling' element={<EducationCounselling/>}/>
        <Route path='/health-Insurance' element={<HealthInsurance/>}/>
      </Routes>
    </div>
  )
}

export default StudentServicesrRouting
