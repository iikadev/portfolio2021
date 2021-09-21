import React from 'react';
import Img from 'gatsby-image'

const ContactPage = () => {
    return (
        <div>

             <section class="home_contact">
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
                    <label for="name">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name" />
                    </label>

                    <label for="email">
                        <input 
                        id="email"
                        name="email" 
                        type="text" 
                        placeholder="Email Address" 
                        required />
                    </label>

                    <label for="subject">
                        <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Subject" />
                    </label>

                    <label for="message">
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Message" 
                            required>
                        </textarea>           
                    </label>

                    <button class="generic-btn" type="submit">Send Message</button>
                </form>
            </section>

        </div>
    )
}

export default ContactPage