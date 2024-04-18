import React, { useState } from 'react'
import { navigationPaths } from '../../information';
import style from "./navigation.module.css";
import { NavLink } from 'react-router-dom';


const Navigation = ({hasColor}) => {

    const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <div className={hasColor ? `${style.navigation} ${style.hasColor}` : style.navigation}>
            <div className={style.navLeft}>
                <p className={hasColor ? `${style.logo} ${style.hasColor}` : style.logo}>soudemy</p>
            </div>
            <div className={style.navRight}>
                <ul className={style.lists}>
                    {
                        navigationPaths.map(item => (
                            <li className={hasColor ? `${style.link} ${style.hasColor}` : style.link} key={item.id}>
                                <NavLink to={item.path} className={hasColor ? `${style.li} ${style.hasColor}` : style.li}>{item.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className={style.burger}>
                    <div className={style.lines} onClick={() => {
                        setBurgerOpen(!burgerOpen)
                    }}>
                        <div className={burgerOpen ? `${style.line} ${style.line1} ${style.line1Change}` : `${style.line} ${style.line1}`}></div>
                        <div className={burgerOpen ? `${style.line} ${style.line2} ${style.line2Change}` : `${style.line} ${style.line2}`}></div>
                        <div className={burgerOpen ? `${style.line} ${style.line3} ${style.line3Change}` : `${style.line} ${style.line3}`}></div>
                    </div>
                    <div className={burgerOpen ? `${style.dropdown} ${style.dropdownOpen}` : style.dropdown}>
                        <ul className={style.burgerLists}>
                            {
                                navigationPaths.map(item => (
                                    <li className={style.link} key={item.id}>
                                        <NavLink to={item.path} className={style.li}>{item.text}</NavLink>
                                    </li>
                                ))
                            }
                            <p className={style.logo}>soudemy</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export  {Navigation}
