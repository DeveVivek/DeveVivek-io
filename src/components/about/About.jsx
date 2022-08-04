import React from 'react'
import './about.css';
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Vivek Kumar, Full-Stack Developer from India. I have rich experience in web developement and website building.</p>
            <a href="" className="btn">Download CV</a>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number ">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Web Design</h3>
              <span className="skills__number ">88%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage web__design"></span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Photography</h3>
              <span className="skills__number">60%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage photography"></span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Programming</h3>
              <span className="skills__number">95%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage programming"></span>
            </div>
          </div>
        </div>
          </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About