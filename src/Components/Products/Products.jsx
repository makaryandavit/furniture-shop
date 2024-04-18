import React, { useEffect, useState } from 'react'
import style from "./products.module.css";
import { products } from '../../information';

const Products = () => {

console.warn(Number('7300'));

    const [filteredProdcuts, setfilteredProdcuts] = useState(products);
  return (
    <div className={style.section}>
      <div className={style.search}>
        <input type="text" className={style.searchInput} placeholder='Search...' onChange={(text) => {
           setfilteredProdcuts(
                products.filter(item => item.title.toLowerCase().includes(text.target.value.toLowerCase()))
           )
        }} />
        <input type="text" className={style.numberInput} placeholder='Price Until' onChange={(number) => {
             setfilteredProdcuts(
                products.filter(item => Number(item.price) < Number(number.target.value))
           )
           if(number.target.value.length <= 1){
                setfilteredProdcuts(products)
           }
        }} />
      </div>
      <div className={style.products}>
        {
            filteredProdcuts.map(item => (
                <div className={style.box} key={item.id}>
                    <div className={style.boxTop}>
                        <img src={item.img} className={style.boxNkar} alt="furniture" />
                    </div>
                    <div className={style.boxBottom}>
                        <p className={style.boxTitle}>{item.title}</p>
                        <p className={style.price}>{item.price}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export  {Products}
