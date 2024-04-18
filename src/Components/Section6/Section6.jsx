import React from 'react'
import style from "./section6.module.css";

const Section6 = () => {
  return (
    <div className={style.section}>
        <p className={style.text}>order now for an <span className={style.special}>express delivery in 24h !</span></p>
        <button className={style.btn}>View more </button>
    </div>
  )
}

export  {Section6}
