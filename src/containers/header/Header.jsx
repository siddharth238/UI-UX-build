import React from 'react'
import './Header.css'
import { Button } from '@mui/material'
import Input from '@mui/material/Input';
import Button1 from './../../components/button/Button';
import nzflag from './../../assets/nzflag.png'
import plane from './../../assets/plane.png'
import siddharth from './../../assets/siddharth.png'
import circle from './../../assets/circle.svg'
import circle1 from './../../assets/circle1.png'
import { motion } from "framer-motion"
function Header() {
  return (
    <div className='Header' id="home">
      <div className='Header__content section__padding'>
        <h1 className='gradient__text'>Hey team MotorQ, I'm Siddharth Pampana. Explore SRM AP with me </h1>
        <p>This project is made exclusively for team MotorQ to showcase my frontend skills in various UI UX frameworks, tools and web languages.</p>
        <div className='Header__contentInput'>

          < Input type="email" placeholder='Enter Email Address' />
          <Button1 content="Enter"/>
           

           
        </div>
        <div className='Header__contentPeople'>
          {/* <img alt='people'src={plane}/> */}
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      
      </div>
      <div className='Header__image'>
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img  alt='Main'src={siddharth}/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circle1}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
          
        </div>
    </div>
  )
}

export default Header