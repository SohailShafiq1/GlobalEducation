import React from 'react'
import Top from './Components/Top/Top'
import Middle from './Components/Middle/Middle'
import Bottom from './Components/Bottom/Bottom'

const StudentAccomodation = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default StudentAccomodation
