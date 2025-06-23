import React from 'react'
import {Routes, Route } from 'react-router-dom'
import UkStudy from '../Study Abroad/Components/UK/UkStudy'
import AustraliaStudy from '../Study Abroad/Components/Australia/Australia'
import CanadaStudy from '../Study Abroad/Components/Canada/Canada'
import FranceStudy from '../Study Abroad/Components/France/France'
import SpainStudy from '../Study Abroad/Components/Spain/Spain'
import IrelandStudy from '../Study Abroad/Components/Ireland/Ireland'
import RomaniaStudy from '../Study Abroad/Components/Romania/Romania'
import BelarusStudy from '../Study Abroad/Components/Belarus/Belarus'
import RussiaStudy from '../Study Abroad/Components/Russia/Russia'
import GreekCyprusStudy from '../Study Abroad/Components/GreekCyprus/GreekCyprus'
import NorthCyprusStudy from '../Study Abroad/Components/NorthCyprus/NorthCyprus'
import GeorgiaStudy from '../Study Abroad/Components/Georgia/Georgia'
import UsaStudy from '../Study Abroad/Components/USA/UsaStudy'

const StudyAbroadRouting = () => {
  return (
    <div>
       <Routes>
      <Route path = "/ukStudyAbroad" element = {<UkStudy/>} />
      <Route path = "/australiaStudyAbroad" element = {<AustraliaStudy/>} />
      <Route path = "/canadaStudyAbroad" element = {<CanadaStudy/>} />
      <Route path = "/franceStudyAbroad" element = {<FranceStudy/>} />
      <Route path = "/spainStudyAbroad" element = {<SpainStudy/>} />
      <Route path = "/irelandStudyAbroad" element = {<IrelandStudy/>} />
      <Route path = "/romaniaStudyAbroad" element = {<RomaniaStudy/>} />
      <Route path = "/belarusStudyAbroad" element = {<BelarusStudy/>} />
      <Route path = "/russiaStudyAbroad" element = {<RussiaStudy/>} />
      <Route path = "/greekcyprusStudyAbroad" element = {<GreekCyprusStudy/>} />
      <Route path = "/northcyprusStudyAbroad" element = {<NorthCyprusStudy/>} />
      <Route path = "/georgiaStudyAbroad" element = {<GeorgiaStudy/>} />
      <Route path = "/usaStudyAbroad" element = {<UsaStudy/>} />
      </Routes>
    </div>
  )
}

export default StudyAbroadRouting
