import React from 'react'
import style from "./aboutSection2.module.css";
import Player from "../../assets/play.svg"

const AboutSection2 = () => {
  return (
    <div className={style.section2}>
        <img src={Player} className={style.play} alt="" />
    </div>
  )
}

export  {AboutSection2}
