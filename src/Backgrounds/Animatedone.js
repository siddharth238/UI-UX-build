import React from 'react'
import './Animatedone.css'

import { Navigation, } from './../components';
import { Header } from './../containers'

function Animatedone() {
  return (
    <div className='gradient'>
      <div className="banner-text">
        
        <Navigation />
        <Header />
      </div>
      <div className="animation-area">
        <ul className="box-area">
        <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
        </ul>
      </div> </div>
  )
}

export default Animatedone