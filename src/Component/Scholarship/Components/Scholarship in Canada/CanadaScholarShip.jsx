import React from 'react'
import PageFront from './components/page_front/PageFront'
import SubNavbar from './components/subnavbar/SubNavbar'
import canadacss from './canadastudy.module.css'
import Middle from './components/middle/Middle'
const CanadaScholarShip = () => {
  return (
    <div>
    <div>
    <div className={canadacss.top}>
      <PageFront/>
      <div className={canadacss.nav}>
        <SubNavbar/>
      </div>
      <Middle/>
    </div>
    </div> 
  </div>
  )
}

export default CanadaScholarShip
