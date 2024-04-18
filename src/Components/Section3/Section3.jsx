import React from 'react'
import style from "./section3.module.css";

import Sec3Nkar from "../../assets/sec3Nkar.png"

const Section3 = () => {
  return (
    <div className={style.section}>
      <div className={style.left}>
        <p className={style.title}>stylish chairs</p>
        <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non, voluptatum dignissimos atque voluptas quidem, porro assumenda beatae ea unde voluptate, ipsum corrupti. Quidem vero, aspernatur quasi expedita quos odio, maxime consequuntur aut odit unde fuga!</p>
        <button className={style.btn}>View more </button>
      </div>
      <div className={style.right}>
        <img src={Sec3Nkar} className={style.sec3Nkar} alt="" />
      </div>
    </div>
  )
}

export  {Section3}
