import React from 'react'
import styles from './who.module.css'
import Top from './components/Top/Top'
import Middle from './components/Middle/Middle'
import Guidance from './components/Guidance/Guidance'
import Experience from './components/Experience/Experience'
import Solution from './components/Solution/Solution'
import Testimonial from '../../../Student Services/Components/Education Counselling/Components/testemonial/Testimonial'
const s = styles
const WhoWeAre = () => {
  return (
    <div className={s["container"]}>
      <Top />
      <Middle />
      <Guidance />
      <Experience/>
      <Solution/>
      <Testimonial/>
    </div>
  );
}

export default WhoWeAre



