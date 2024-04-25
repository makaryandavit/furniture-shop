import React from 'react'
import style from "./abotuSection3.module.css";
import { blogBoxes } from '../../information';
import { Link } from 'react-router-dom';

const AboutSection3 = () => {
  return (
    <div className={style.section}>
      {
        blogBoxes.map(item => (
            <div className={style.box} key={item.id}>
                <div className={style.top}>
                    <img src={item.img} className={style.img} />
                </div>
                <div className={style.bottom}>
                    <p className={style.date}>{item.date}</p>
                    <p className={style.title}>{item.title}</p>
                    <button className={style.btn}>
                        <Link to="/shop">Read More</Link>
                    </button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export  {AboutSection3}
