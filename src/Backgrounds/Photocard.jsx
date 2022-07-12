import React from 'react'
import './Photocard.css'
function Photocard({image,date, title}) {
  return (
    <div className='Photocard'>
      <img alt={image} src={image}/>
      
    </div>
  )
}

export default Photocard