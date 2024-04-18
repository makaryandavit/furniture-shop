import React from 'react'
import style from "./section4.module.css";

import Sec4Nkar from "../../assets/sec4.png"

const Section4 = () => {
  return (
    <div className={style.section}>
      <div className={style.left}>
        <img src={Sec4Nkar} className={style.sec3Nkar} alt="" />
        
      </div>
      <div className={style.right}>
        <p className={style.title}>Table</p>
        <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non, voluptatum dignissimos atque voluptas quidem, porro assumenda beatae ea unde voluptate, ipsum corrupti. Quidem vero, aspernatur quasi expedita quos odio, maxime consequuntur aut odit unde fuga!</p>
        <button className={style.btn}>View more </button>
      </div>
    </div>
  )
}

export  {Section4}
