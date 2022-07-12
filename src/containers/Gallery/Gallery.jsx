import React from 'react'
import Photocard from './../../Backgrounds/Photocard';
import './Gallery.css'
 
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
import { motion } from 'framer-motion';
// const fadeImages = [
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus2.jpg?x95317',
//     caption: 'First Slide'
//     },
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/03/IWD-2022-9-of-12-scaled.jpg?x95317',
//     caption: 'Second Slide'
//     },
//     {
//     url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus1.jpg?x95317',
//     caption: 'Third Slide'
//     },
//    { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus-life-.jpg?x95317',
//     caption: 'Third Slide'
//     },
//     { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/art.jpg?x95317',
//     caption: 'Third Slide'
//     },
//     { url: 'https://srmap.edu.in/wp-content/uploads/2022/05/campus4.jpg?x95317',
//     caption: 'Third Slide'
//     },
//   ];https://srmap.edu.in/wp-content/uploads/2022/03/IWD-2022-9-of-12-scaled.jpg?x95317
function Gallery( {link,link1,link2,title,heading}) {
    
  return (
    <div className='Gallery' id="gallery">
        <motion.div whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }} className='Gallery__left'>
            <h1>
           {heading}
            </h1>
            <Button target='_blank' href={link1} variant="contained"><LinkIcon/>  Explore</Button>
        </motion.div>
        <motion.div whileInView={{scale:[0.8,1], opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }} className='Gallery__right'> 
        <img src={link}/>
        <h4>{title}</h4>
        <div className='card__bottom'><p>Learn more  </p>
        <IconButton  target='_blank' href={link2} ><ArrowForwardIcon/></IconButton>
        </div>
        </motion.div>
     
      </div>
  )
}

export default Gallery