import React from 'react'
import './Research.css'
import Mark from './../../components/mark/Mark';
import { motion } from 'framer-motion';
const featuresData = [
    {
        link:"https://srmap.edu.in/research-home/",
      title: 'Research intensive',
      text: 'It is my great pleasure to welcome you to SRM University-AP, Andhra Pradesh, a broad-based multidisciplinary research-intensive University.',
    },
    {
        link:"https://srmap.edu.in/research-home/publications/",
      title: 'Publications',
      text: 'World-class infrastructure has been created to provide a conducive environment for creative thinking.',
    },
    {
        link:"https://srmap.edu.in/research-home/project/",
      title: 'Projects',
      text: 'We, at SRM University, give top priority to research which makes an impact on the society. ',
    },
    {
        link:"https://srmap.edu.in/research-home/collaboration/",
      title: 'Collaborations',
      text: 'The passionate and ambitious students and the high profile faculty members of SRM University-AP have a desire to work with the best possible minds in the world. ',
    },
    
  ];
function Research() {
  return (
    <motion.div whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5, delayChildren: 0.5 }} className="Research section__padding" id="research">
    <div className="Research-heading">
      <h1 className="gradient__text">SRM is committed to a culture of research and innovation in the increasingly significant fields of health, medicine, technology and science.</h1>
      <a target="_blank" href='https://srmap.edu.in/research-home/'><p>Learn more  ></p></a>
    </div>
    <div className="Research-container">
      {featuresData.map((item, index) => (
        <Mark link={item.link} title={item.title} text={item.text} key={item.title + index} />
        
      ))}
    </div>
  </motion.div>
  )
}

export default Research