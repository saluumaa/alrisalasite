import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-main'>
        <h1>Contact Us</h1>
      </div>

      <div className='contact-content-container'>
      <div className='contact-content'>
        <br />
      <h2>Work Hours</h2>
        <h4 style={{fontSize: '1.4rem'}}
        >Saturday - Thursday</h4>
        <p>9:00 AM - 5:00 PM</p>
      </div>
      <hr />

      <div className='contact-content'>
        <h2>Phone Number</h2>
        <p>123456789</p>
      </div>
      <hr />
      
      <div className='contact-content'>
        <h2>Email</h2>
       <h3>
          <p>alrisalaorg@gmail.com</p>
       </h3>
      </div>
      <hr />
      </div>

      <div className='contact-content-form'>
        <p>you can always send us  message using this form</p>
        <form>
          <input type='text' placeholder='Full Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Phone' /> 
          <textarea placeholder='Message'></textarea>     
          <button type='submit'>Send</button>
        </form>
      </div> 
    </div>
  )
}

export default Contact