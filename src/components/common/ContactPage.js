/*eslint arrow-body-style: ["error", "always"]*/

import React from 'react'

const ContactPage = () => {
    return (
        <div className="contact_container">

            <section className="home_contact">
                <div className="info-excerpt">
                    <h2>Contact</h2>
                    <p>Skylar Valerio</p>
                    <p>Orlando,FL</p>
                    <p>skyvale@yahoo.com</p>
                    <p>407-476-7288</p>
                    <p>If you have any questions and would like to contact me, you can reach me by my cell phone or email! 
                    Alternatively, you can fill out the form below. I will get back to you as soon as possible!</p>
                </div>

                <form className="contact_form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                
                    <label htmlFor="name">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name" />
                    </label>

                    <label htmlFor="email">
                        <input 
                            id="email"
                            name="email" 
                            type="text" 
                            placeholder="Email Address" 
                            required />
                    </label>

                    <label htmlFor="subject">
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Subject" />
                    </label>

                    <label htmlFor="message">
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Message" 
                            required>
                        </textarea>           
                    </label>

                    <input type="hidden" name="form-name" value="contact" />

                    <button className="generic-btn" type="submit">Send Message</button>
    
                </form>

            </section>
        </div>
    )
}

export default ContactPage