/*eslint arrow-body-style: ["error", "always"]*/

import React from 'react'
import fullsail from '../../images/fullsail_logo.png'
import resume from '../../images/Resume.pdf'

const SkillsPage = () => {
    return (
        <div className="skills-container">
 			<section className="skills-section">
                <h1>About Me</h1>
                <p>Hello, I'm Sky and I'm a frontend web developer with a penchant for modern, aesthetic designs.
				While I'm relatively new to the industry, I consider myself a hard-worker and a determined learner!</p>
								
                <p>As someone who came from a creative background, I didn't have a natural affinity for coding and logic. I've 
				worked hard these past couple years and I believe that my previous experience with design is a boon for my 
				web development skills! Creativity and coding go hand in hand. I'd love the chance to tackle new projects, so if 
				you're in need of a web developer or designer (or both!) than please don't hesitate to contact me!</p>

                <p>When I'm not working on code, I love to draw and animate! I also like hiking, trying new foods, and playing
                video games. I raise ball pythons and have a side business called Sky's Serpents! Because of that, I like to 
                incorporate serpents and dragons into my web design and art!
                </p>

                <p>Download my <a id="resume-btn" className="generic-btn" href={resume} target="_blank">Resume</a></p>
            </section>
            <section className="skillspage-skills">
                <h2>Main Skills</h2>
                <p>Frontend Development, UI/UX Design</p>
                <div className="list-skills">
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
            <section>
                <h2>Education</h2>
                <div className="education-section">
                    <div className="fullsail-img">
                        <img src={fullsail} alt="full sail university logo image" />
                    </div> 
                    <div className="fullsail-degree">
                        <h3>Web Development & Design Bachelor</h3>
                        <p>2018-2021 &bull; Full Sail University</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsPage

