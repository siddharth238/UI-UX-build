import React from 'react'
import './Whysrm.css'
import Mark from './../../components/mark/Mark'
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
function Whynz() {
  return (
    <motion.ul   
    variants={container}
    initial="hidden"
    whileInView="visible" className=" container Whysrm section__margin" id="whynz">
    <motion.li key={1}  variants={item}  className=" item Whysrm-feature">
      <Mark title="Why SRM AP" text="SRM University – AP is also the 1st private Indian university to have an angel-funded student startup in its maiden batch. oureye.ai, founded by our B.Tech. students have received an angel investment of $120,000." />
    </motion.li>
    <motion.li  key={1}  variants={item}   className=" item Whysrm-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p >Explore Student career opportunities</p>
    </motion.li>
    <motion.li  key={1}  variants={item}   className="item Whysrm-container">
      <Mark title="Placements Track Record" text="650+ recruitment partners from across the globe and industries very well received students of our first graduating class. With the highest offered CTC reaching 50 LPA, the average salary package our B.Tech. students earned amounted to INR 7 LPA." />
      <Mark title="A Curriculum With Students in Focus" text="The IDEAL (Interdisciplinary Experiential Active Learning) approach of our curriculum allows our students to focus on their career path as well as pursue their passions." />
      <Mark title="Creating Entrepreneurs" text="A combination of mentorship by faculty, research centres, incubators, and accelerators on campus, student-run labs, and competitions help budding entrepreneurs to find direction in bringing their plans to life." />
    </motion.li>
  </motion.ul>
  )
}

export default Whynz