import React from 'react'
import './Mark.css'
function Mark({ title, text ,link}) {
  return (
    <div className="mark_container__feature">
    <div className="mark_container__feature-title">
      <div/>
     <a target="_blank" href={link}><h1>{title}</h1></a> 
    </div>
    <div className="mark_container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Mark