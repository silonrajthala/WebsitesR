import React, { Component } from 'react'
import '../Styles/Contact.css'
 class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <div className='contact-container'> 
        <h1>Contact</h1>
        <div className='contact-intro'>
            <div>
            Please don't hesitate to contact us via phone, email, or through our website. We're committed to assisting you every step of the way.            </div>

        </div>
        <div className='contact-info'>
            <div className='email'>
                <div className='email-icon'>
                    <h2>✉</h2>
                </div>
                <div className='email-add'><h2>example@yahoo.com</h2></div>
            </div>
            <div className='call'>
                <div className='call-icon'>
                    <h2>✆</h2>
                </div>
                <div className='call-add'><h2>+977 9876543210</h2></div>
            </div>

        </div>
        </div>
      </div>
    )
  }
}

export default Contact