import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <section class="about">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse                   
                    cillum dolore eu fugiat nulla pariatur.</p>
                <p>Download my <a id="resume-btn" href="#">Resume</a></p>
            </section>
            <section class="skills">
                <p>Frontend Development, UI/UX Design</p>
                <!-- relevant logos added using css-->
                <div>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>react</li>
                    </ul>
                    <ul>
                        <li>photoshop cc</li>
                        <li>illustrator</li>
                        <li>figma</li>
                    </ul>
                    <ul>
                        <li>web design</li>
                        <li>graphic design</li>
                        <li>illustration</li>
                    </ul>
                </div>
            </section>
            <section class="education">
                <div>
                    {/* insert fullsail logo image */}
                    <h3>Web Development & Design Bachelor</h3>
                    <p>2018-2021 &bull; Full Sail University</p>
                </div>
            </section>
        </div>
    )
}

export default AboutPage

