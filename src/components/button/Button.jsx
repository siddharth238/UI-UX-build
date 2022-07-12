import React from 'react'
import './Button.css'
 function Button1({ref, content}) {
  return (
    <div className='Buttonc'><a href={content}><span>{content}</span></a></div>
  )
}

export default Button1