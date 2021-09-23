/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PostCard } from '../components/common'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Projects = ({ data, location }) => {
    const posts = data.allGhostPost.edges
	const displayPosts = []
	posts.map(({ node }) => {
		node.tags.map((tag) => {
			if (tag.name.includes(`project`)){
				return displayPosts.push(node)
			}
		})
	})

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Layout>
                <div className="container">
                    <h1>Projects Page</h1>
                    <section className="post-feed">
                        {displayPosts.map(post => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={post.id} post={post} postType="blog"/>
                        ))}
                    </section>
                </div>
            </Layout>
        </>
    )
}

Projects.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Projects

export const pageQuery = graphql`
    query ghostPostQueryAndGhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            limit: $limit,
            skip: $skip
        ) {
        edges {
            node {
            ...GhostPostFields
            }
        }
    }
  }
`
