import React from 'react'
import style from "./about.module.css";
import { Navigation } from '../../Components/Navigation';
import { AboutSection1, AboutSection2, Section7 } from '../../Components';

const About = () => {
  return (
    <>
        <Navigation hasColor={true} />
        <div className={style.main}>
          <AboutSection1 />
          <Section7 />
          <AboutSection2 />
        </div>
    </>
  )
}

export  {About}
