import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>AESTHETIC</p>
      </div>
      <ul className="footer-links">
        <li><a href="https://github.com/Aryankpoor/secondhand" alt="github repo link">Source Code</a></li>
        <li><a href="https://github.com/Aryankpoor?tab=repositories" alt="More projects like this">More Projects like this</a></li>
        <li><a href="https://Aryankpoor.github.io" alt="aryan kapoor portfolio">Author</a></li>
        <li><a href="mailto:aryankap19@gmail.com" alt="CV">Collaborate</a></li>
        
      </ul>
      <div className="footer-social-icon">
         <div className="footer-icons-container">
         <a href="https://instagram.com/aryankkap" alt="" target="_blank"><img src={instagram_icon} alt="" /></a>
         </div>
         <div className="footer-icons-container">
            <a href="https://github.com/Aryankpoor" alt="" target="_blank"><img src={pinterest_icon} alt="" /></a>
         </div>
         <div className="footer-icons-container">
            <a href="https://scrapbook.hackclub.com/Aryankapoor" target="_blank"><img src={whatsapp_icon} alt="" /></a>
         </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved. This is just a project, not a real website</p>
      </div>
    </div>
  )
}

export default Footer
