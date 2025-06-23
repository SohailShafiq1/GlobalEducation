import React from 'react'
import PageFront from './components/page_front/PageFront'
import SubNavbar from './components/subnavbar/SubNavbar'
import Ukcss from './Ukstudy.module.css'
import Middle from './components/middle/middle'


const Canada = () => {
  return (
    <div>
      <div className={Ukcss.top}>
        <PageFront/>
        <div className={Ukcss.nav}>
          <SubNavbar/>
        </div>
        <Middle/>
      </div>
    </div>
  )
}

export default Canada
