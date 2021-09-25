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
import Projects from './projects'
import { MetaData } from '../components/common/meta'
import Particles from 'react-particles-js'

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
						<Link to="/skills">About Me</Link>
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
									outMode: "out"
								},
								links: {
									enable: false
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
					<div>
						<h1>Projects</h1>
						<p>Container for Projects</p>
						<section className="post-feed">
							{displayProjects.map(post => {
								console.log(post);
								return <PostCard key={post.id} post={post} postType="blog"/>
							})}
                    	</section>
					</div>
				</div>

				<div className="info-container">
					<section className="info-section">
						<h2>About Me</h2>
							<div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
								elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua. Ut enim ad minim veniam, quis 
								nostrud exercitation ullamco laboris nisi ut aliquip 
								ex ea commodo consequat. </p>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit 
								esse cillum dolore eu fugiat nulla pariatur. Excepteur + 
								occaecat cupidatat non proident, sunt in culpa qui officia 
								deserunt mollit anim id est laborum.</p>
							</div>
							<h2>Skills</h2>
							<div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
								elit, sed do eiusmod tempor incididunt ut labore et 
								dolore magna aliqua.</p>
								<div>
									<img className="skill-img-big" src="/images/icons/html.svg" alt="HTML"></img>
									<img className="skill-img-big" src="/images/icons/css.svg" alt="CSS"></img>
									<img className="skill-img-big" src="/images/icons/javascript.svg" alt="JavaScript"></img>
									<img className="skill-img-big" src="/images/icons/react.svg" alt="React"></img>
									<img className="skill-img-big" src="/images/icons/photoshop.svg" alt="Adobe Photoshop CC"></img>
									<img className="skill-img-big" src="/images/icons/figma.svg" alt="Figma"></img>
								</div>

							</div>
							<button className="generic-btn">Find out more</button>		
					</section>
					<div className="info-img">
						<img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="filler image"></img>
					</div>
				</div>
				
				<div className="container"> 
					<BlogPage />
                </div>
				<div className="contactpage-container">
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



