import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="Footer section__padding" id='contact'>
    <div className="Footer-heading">
      <h1 className="gradient__text">This project took straight 25 hours to complete</h1>
    </div>

    <div className="Footer-btn">
      <p>Repository</p>
    </div>

    <div className="Footer-links">
      <div className="Footer-links_logo">
        <h1 style={{color:"white"}}>Sid</h1>
        <p >Hyderabad, <br /> All Rights Reserved</p>
      </div>
      <div className="Footer-links_div">
        <h4>Links</h4>
        <a  target="_blank" href='https://siddharthroyx.netlify.app/'><p>Portfolio</p></a>
        <a target="_blank" href='mailto:siddharth_pampana@srmap.edu.in'><p>Gmail</p></a>
        <a target="_blank" href='https://github.com/siddharth238?tab=repositories'> <p>Github</p></a>
        <a target="_blank" href='https://www.linkedin.com/in/siddharth-p-193125201/'> <p>LinkedIn</p></a>
      </div>
      <div className="Footer-links_div">
        <h4>Organisation</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="Footer-links_div">
        <h4>Get in touch</h4>
        <p>Siddharth Pampana</p>
        <p>+91 9063242479</p>
        <p>siddharthroyx@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p style={{color:"white"}}>@2021 Sid. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer