import React from 'react'
import style from "./section2.module.css";

import Play from "../../assets/play.svg"

const Section2 = () => {
  return (
    <div className={style.section}>
        <div className={style.top}>
            <div className={style.right}>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.</p>
                <button className={style.btn}>View more</button>
            </div>
        </div>
        <div className={style.bottom}>
            <img src={Play} className={style.play} alt="" />
        </div>
    </div>
  )
}

export  {Section2}
