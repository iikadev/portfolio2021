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
					<p>lorem ipsum dolor sit amet</p>
					<Link to='/skills'>About Me</Link>
				</div>
                <div className="container">
					<ProjectPage />
					<SkillsPage />
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

