import React from 'react'
import styles from './service.module.css'
import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';
const s = styles;
const Service = () => {
  return (
    <div className={s["container"]}>
      <Top/>
      <Bottom/>
    </div>
  )
}

export default Service
