import React, { useState } from 'react'
import style from "./header.module.css";
import { Navigation } from '../Navigation';


const Header = () => {
 
    

  return (
    <div className={style.section}>
        <Navigation hasColor={false} />
        <div className={style.homeMain}>
            <p className={style.title}>All for your home</p>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores, suscipit tempore laborum delectus aperiam voluptas blanditiis, officiis maxime amet qui optio, natus ad excepturi enim beatae corrupti minima quisquam!</p>
            <button className={style.btn}>View more </button>
        </div>
    </div>
  )
}

export  {Header}
