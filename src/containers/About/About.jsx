import React from 'react'
import './About.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"

function About() {
  const [countuptrigger, setCountuptrigger] = useState(1)
  const [ref, isVisible] = useInView({
    threshold: 1,
  })
  return (
    <div className='   About'> 
      
      <motion.div whileInView={{ y: [-70, 0], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100   }} className=' About__left' >
          <div>
        <h1 ref={ref}> { isVisible && countuptrigger ===1?  ( <CountUp end={100} duration={1.7} />  ):"100"} %
        </h1>
        <p>Faculty with international exposure
        </p> 
        </div>
        <div>
        <h1 ref={ref}> {isVisible ? <CountUp end={50} duration={1.7} suffix="+" /> : "50"}
        </h1>
        <p>Laboratories to enable inventions</p>
        </div>
      </motion.div>
      <motion.div whileInView={{ y: [-70, 0], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100  }} className='About__right'>
            <div>
        <h1 ref={ref}> {isVisible ? <CountUp end={100} duration={1.7} /> : "100"} acre
        </h1>
        <p>Campus designed by world renowned architects</p>
        </div>
        <div>
        <h1 ref={ref}> {isVisible ? <CountUp end={60} duration={1.7} /> : "60"} +
        </h1>
        <p>Collaborations with the world’s best universities
        </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About