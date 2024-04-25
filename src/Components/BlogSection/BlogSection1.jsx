import React from 'react'
import style from "./blogSection.module.css";
import { newses } from '../../information';
import { Link } from 'react-router-dom';

const BlogSection1 = () => {
  return (
    <div className={style.section}>
      {
        newses.map(item => (
            <div className={style.box} key={item.id}>
                <img src={item.img} className={style.img} alt="" />
                <p className={style.title}>{item.title}</p>
                <p className={style.text}>{item.text}</p>
                <button className={style.btn}>
                    <Link to="/shop">Read More</Link>
                </button>
            </div>
        ))
      }
    </div>
  )
}

export  {BlogSection1}
