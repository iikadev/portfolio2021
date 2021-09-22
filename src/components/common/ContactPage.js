/*eslint arrow-body-style: ["error", "always"]*/

import React from 'react'

const ContactPage = () => {
    return (
        <div>

            <section className="home_contact">
                <div>
                    {/* insert img logo */}
                    <h2>Contact</h2>
                    <p>Skylar Valerio</p>
                    <p>Orlando,FL</p>

                    <p>skyvale@yahoo.com</p>
                    <p>407-476-7288</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <form>
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

                    <button className="generic-btn" type="submit">Send Message</button>
                </form>
            </section>

        </div>
    )
}

export default ContactPage