import React from 'react'
import './Comps.css'
import { Button } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link';
function Comps({link1 , link2, heading,title}) {
  return (
    <div className='Comps'>
      <div className='Comps__left'>
        <p><a target="_blank" href={link1}>• {heading}</a></p>
        <h2>{title}</h2>
      </div>
      <div className='Comps__right'>
        <Button target='_blank' href={link2} variant="contained"><LinkIcon/>  Explore</Button>
      </div>
    </div>
  )
}

export default Comps