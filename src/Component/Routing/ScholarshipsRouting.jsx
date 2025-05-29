import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Uk from '../Scholarship/Components/Scholarship in Uk/UkScholarship'
import Usa from '../Scholarship/Components/Scholarship in USA/UsaScholarship'
import Canada from '../Scholarship/Components/Scholarship in Canada/CanadaScholarShip'
const ScholarshipsRouting = () => {
  return (
    <div>
      <Routes>
        <Route path = "/USAScholarship" element = {<Usa/>} />
        <Route path = "/UkScholarship" element = {<Uk/>} />
        <Route path = "/canadaScholarship" element = {<Canada/>} />
      </Routes>
    </div>
  )
}

export default ScholarshipsRouting
