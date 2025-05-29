import React from 'react'
import styles from './success.module.css'
import Top from './Top/Top';
import Left from './Left/Left';
import Right from './Right/Right';
const s = styles;
const Success = () => {
  return (
    <div className={s["container"]}>
      <div className={s["top"]}>
        <Top/>
      </div>
      <div className={s["sides"]}>
        <Left/>
        <Right/>    
      </div>
    </div>
  )
}

export default Success
