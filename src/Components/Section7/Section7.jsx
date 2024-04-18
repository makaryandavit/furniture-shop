import React from 'react'
import style from "./section7.module.css";
import { advatnages } from '../../information';

const Section7 = () => {
  return (
    <div className={style.section} >
        {
            advatnages.map(item => (
                <div className={style.box} key={item.id}>
                    <p className={style.title}><img className={style.icon} src={item.icon} alt="" /> {item.title}</p>
                    <p className={style.text}>{item.text}</p>
                </div>
            ))
        }
    </div>
  )
}

export  {Section7}
