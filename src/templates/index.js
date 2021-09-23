/* eslint-disable max-lines */
/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import figma from '../../public/images/icons/figma.svg'

import { Layout, PostCard, Pagination, BlogPage, ContactPage, SkillsPage, ProjectPage } from '../components/common'
//import Projects from './projects'
import { MetaData } from '../components/common/meta'

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

	posts.map(({ node }) => {
		node.tags.map((tag) => {
			if (tag.name.includes(`featured-blog`)){
				return displayArticles.push(node)
			}
			if (tag.name.includes(`cat-projects`)){
				return displayProjects.push(node)
			}
		})
	})

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>

				<div className="home-hero">
					<h2>Skylar Valerio</h2>
					<p>Frontend UI/UX Designer</p>
					<Link to="/skills">About Me</Link>
				</div>

                <div className="container">
					<div>
						<h1>Projects</h1>
						<p>Container for Projects</p>
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

				<ContactPage />
            </Layout>
        </>
    )
}

Index.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

