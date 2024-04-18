import React from 'react'
import style from "./section8.module.css";
import { suggestions } from '../../information';

const Section8 = () => {
  return (
    <div className={style.section}>
        {
            suggestions.map(item => (
                <div className={style.box} key={item.id}>
                <div className={style.top}>
                    <img src={item.img} className={style.boxImg} alt="Room" />
                </div>
                    <div className={style.bottom}>
                        <p className={style.title}>{item.date}</p>
                        <p className={style.text}>{item.title}</p>
                        <p className={style.btn}>read more</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export  {Section8}
