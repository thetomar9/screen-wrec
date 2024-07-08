import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <form action="https://formsubmit.co/1adfb04f9812647b171e1ea5f1e1fbe1" method="POST" >
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" name="email"/>
        <button>Subscribe</button>
      </div>
    </div>
    </form>
  )
}

export default Newsletter
