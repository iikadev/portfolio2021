/* eslint-disable max-lines */
/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import { Layout, PostCard, Pagination, BlogPage, ContactPage, SkillsPage, ProjectPage } from '../components/common'
import { MetaData } from '../components/common/meta'

import Particles from 'react-particles-js'
import HtmlIcon from '../images/html.svg'
import CssIcon from '../images/css.svg'
import JsIcon from '../images/javascript.svg'
import ReactIcon from '../images/react.svg'
import PsIcon from '../images/photoshop.svg'
import FigmaIcon from '../images/figma.svg'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ location, pageContext }) => {
    const posts = pageContext.posts
	const displayArticles = [] // blog array
	const displayProjects = [] // projects array
	console.log({posts});

	// limits how many posts appear
	let amountProjects = 0;
	let amountArticles = 0;
	let limitProjects = 3;
	let limitArticles = 4;

	posts.map(({ node }) => {
		node.tags.map((tag) => {
			if (tag.name.includes(`blog`)){
				amountArticles++;
				if (amountArticles >= limitArticles) {
					return
				}
				return displayArticles.push(node)
			}
			if (tag.name.includes(`project`)){
				amountProjects++;
				console.log("amount:", amountProjects)
				if (amountProjects > limitProjects) {
					return
				}
				return displayProjects.push(node)
			}
		})
	})

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>

				<div className="home-hero">
					<div className="hero-info"> 
						<h2>Skylar Valerio</h2>
						<p>Frontend UI/UX Designer</p>
						<Link to="/skills">
							<button className="generic-btn">About Me</button>
						</Link>
					</div>
					<div className="particle-effect">
						<Particles 
							params={{
								background: {
								color: {
									value: "#000"
								}
								},
								particles: {
								number: {
									value: 80,
									density: {
										enable: false
									}
								},
								shape: {
									type: "triangle"
								},
								size: {
									value: 5,
									random: true
								},
								move: {
									direction: "none",
									outMode: "out",
									speed: 1
								},
								links: {
									enable: true
								}
								},
								interactivity: {
								events: {
									onHover: {
									enable: true,
									mode: "repulse"
									}
								},
								}
							}} />
					</div>
				</div>

                <div className="container">
					<div className="home-posts-section">
						<h1>Projects</h1>
						<section className="post-feed">
							{displayProjects.map(post => {
								return <PostCard key={post.id} post={post} postType="blog"/>
							})}
                    	</section>
						<Link to="/projects">
							<button id="home-projects-btn" className="generic-btn">See More</button>
						</Link>	
					</div>
				</div>

				<div className="info-container">
					<section className="info-section">
						<h2>About Me</h2>
							<div className="intro-blurb">
								<p>Hello, I'm Sky and I'm a frontend web developer with a penchant for modern, aesthetic designs.
								While I'm relatively new to the industry, I consider myself a hard-worker and a determined learner!</p>
								<p>As someone who came from a creative background, I didn't have a natural affinity for coding and logic. I've 
								worked hard these past couple years and I believe that my previous experience with design is a boon for my 
								web development skills! Creativity and coding go hand in hand. I'd love the chance to tackle new projects, so if 
								you're in need of a web developer or designer (or both!) than please don't hesitate to contact me!</p>
							</div>
						<h2>Skills</h2>
							<div className="homepage-skills-sect">
								<p>Here are some of the technologies I use most often. I'm familiar with many other web development and 
									graphic design technologies though! 
								</p>
								<div className="homepage-skill-list">
									<img className="skill-img-big" src={HtmlIcon} alt="HTML"></img>
									<img className="skill-img-big" src={CssIcon} alt="CSS"></img>
									<img className="skill-img-big" src={JsIcon} alt="JavaScript"></img>
									<img className="skill-img-big" src={ReactIcon} alt="React"></img>
									<img className="skill-img-big" src={PsIcon} alt="Adobe Photoshop CC"></img>
									<img className="skill-img-big" src={FigmaIcon} alt="Figma"></img>
								</div>

							</div>
							<Link to="/skills">
								<button className="generic-btn">Find out more</button>
							</Link>		
					</section>
					<div className="info-img">
						<img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="filler image"></img>
					</div>
				</div>
				
                <div className="container">
					<div className="home-posts-section">
						<h1>Blog</h1>
						<section className="post-feed">
							{displayArticles.map(post => {
								return <PostCard key={post.id} post={post} postType="blog"/>
							})}
                    	</section>
						<Link to="/blog">
							<button id="home-blogs-btn" className="generic-btn">See More</button>
						</Link>	
					</div>
				</div>

				<div className="homepage-contact">
					<ContactPage />
				</div>
            </Layout>
        </>
    )
}

Index.propTypes = {
	data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index



