import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
 
import { motion } from 'framer-motion';
function Video({Src, left, title, text,link}) {
  return (
 
    <div className={left?"gpt3__possibility section__padding left":"gpt3__possibility section__padding"} id="possibility">
    <motion.div  whileInView={{ x: [left?70: -70, 0], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100   }} className="gpt3__possibility-image oveflowh">
    <ReactPlayer className='img' controls url={Src}/ >
    </motion.div>
    <motion.div   whileInView={{ x: [left?-70: 70, 0], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100   }} className="gpt3__possibility-content oveflowh">
      <h4><a target="_blank" href='https://srmap.edu.in'>• View site</a></h4>
      <h1 className="gradient__text">{title}</h1>
      <p>{text}</p>
      <h4 ><a target="_blank" href='https://srmap.edu.in/campus-life/'>Learn more ></a></h4>
    </motion.div>
  </div>
  )
}

export default Video