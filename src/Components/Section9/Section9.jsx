import React from 'react'
import style from "./section9.module.css";

import Mark from "../../assets/mark.png";


const Section9 = () => {
  return (
    <div className={style.section}>
        <img src={Mark} className={style.mark} alt="" />
        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat explicabo voluptatem similique amet, maiores ea, quis doloremque sit neque obcaecati sequi magni quo distinctio ducimus iste quod veniam reiciendis et autem praesentium, tempore sed? Accusantium placeat fugiat ullam sunt quisquam soluta officia, alias molestiae labore animi delectus minima quod. Consequatur dicta assumenda perspiciatis eveniet facere repellendus voluptas illo hic consequuntur ipsa inventore doloremque iusto vitae, itaque esse, in debitis. Corporis.</p>
        <p className={style.title}><span className={style.special}>Soroush norozy</span><br />Designer</p>
    </div>
  )
}

export  {Section9}
