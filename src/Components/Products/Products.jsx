import React from 'react'
import style from "./products.module.css";
import { products } from '../../information';

const Products = () => {
  return (
    <div className={style.section}>
      <div className={style.search}></div>
      <div className={style.products}>
        {
            products.map(item => (
                <div className={style.box} key={item.id}>
                    <div className={style.boxTop}>
                        <img src={item.img} className={style.boxNkar} alt="furniture" />
                    </div>
                    <div className={style.boxBottom}></div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export  {Products}
