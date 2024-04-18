import React from 'react'
import style from "./section1.module.css";
import { productsWeek } from '../../information';

const Section1 = () => {
  return (
    <div className={style.section}>
        <p className={style.title}>Products of the week</p>
        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.</p>
        <div className={style.inside}>
            {
                productsWeek.map(item => (
                    <div className={style.box} key={item.id}>
                        <div className={style.boxImg}>
                            <img src={item.img} className={style.img} alt="" />
                        </div>
                        <div className={style.boxText}>
                            <p className={style.boxTitle}>{item.text}</p>
                            <p className={style.boxTextt}>{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export  {Section1}
