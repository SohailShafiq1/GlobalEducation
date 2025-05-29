import React from 'react'
import {Routes, Route } from 'react-router-dom'
import UkStudy from '../Study Abroad/Components/UK/UkStudy'
import CanadaStudy from '../Study Abroad/Components/Canada/CanadaStudy'
import UsaStudy from '../Study Abroad/Components/USA/UsaStudy'
const StudyAbroadRouting = () => {
  return (
    <div>
       <Routes>
      <Route path = "/ukStudyAbroad" element = {<UkStudy/>} />
      <Route path = "/usaStudyAbroad" element = {<UsaStudy/>} />
      <Route path = "/canadastudyAbroad" element = {<CanadaStudy/>} />
      </Routes>
    </div>
  )
}

export default StudyAbroadRouting
