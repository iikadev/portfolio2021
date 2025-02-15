/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allGhostPost(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                      slug
                      tags {
                        name
                        visibility
                      }
                      feature_image
                      excerpt
                      featured
                      primary_author {
                        profile_image
                        name
                      }
                      title
                      id
                    }
                }
            }
            allGhostTag(sort: { order: ASC, fields: name }) {
                edges {
                    node {
                        slug
                        url
                        postCount
                    }
                }
            }
            allGhostAuthor(sort: { order: ASC, fields: name }) {
                edges {
                    node {
                        slug
                        url
                        postCount
                    }
                }
            }
            allGhostPage(sort: { order: ASC, fields: published_at }) {
                edges {
                    node {
                        slug
                        url
                    }
                }
            }
        }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    // Extract query results
    const tags = result.data.allGhostTag.edges
    const authors = result.data.allGhostAuthor.edges
    const pages = result.data.allGhostPage.edges
    const posts = result.data.allGhostPost.edges

    // Load templates
    const indexTemplate = path.resolve(`./src/templates/index.js`)
    const tagsTemplate = path.resolve(`./src/templates/tag.js`)
    const authorTemplate = path.resolve(`./src/templates/author.js`)
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    const postTemplate = path.resolve(`./src/templates/post.js`)
	const projectsTemplate = path.resolve(`./src/templates/projects.js`)
	const blogTemplate = path.resolve(`./src/templates/blog.js`)
    const skillsTemplate = path.resolve(`./src/templates/skills.js`)
    const contactTemplate = path.resolve(`./src/templates/contact.js`)

    // Create tag pages
    tags.forEach(({ node }) => {
        const totalPosts = node.postCount !== null ? node.postCount : 0

        // This part here defines, that our tag pages will use
        // a `/tag/:slug/` permalink.
        const url = `/tag/${node.slug}`

        const items = Array.from({ length: totalPosts })

        // Create pagination
        paginate({
            createPage,
            items: items,
            itemsPerPage: postsPerPage,
            component: tagsTemplate,
            pathPrefix: ({ pageNumber }) => (pageNumber === 0) ? url : `${url}/page`,
            context: {
                slug: node.slug,
            },
        })
    })

    // Create author pages
    authors.forEach(({ node }) => {
        const totalPosts = node.postCount !== null ? node.postCount : 0

        // This part here defines, that our author pages will use
        // a `/author/:slug/` permalink.
        const url = `/author/${node.slug}`

        const items = Array.from({ length: totalPosts })

        // Create pagination 
        paginate({
            createPage,
            items: items,
            itemsPerPage: postsPerPage,
            component: authorTemplate,
            pathPrefix: ({ pageNumber }) => (pageNumber === 0) ? url : `${url}/page`,
            context: {
                slug: node.slug,
            },
        })
    })

    // Create pages
    pages.forEach(({ node }) => {
        // This part here defines, that our pages will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`
		if (node.slug === `blog`){
			paginate({
				createPage,
				items: posts,
				itemsPerPage: postsPerPage,
				component: blogTemplate,
				pathPrefix: ({ pageNumber }) => {
					if (pageNumber === 0) {
						return `/blog`
					} else {
						return `/blog/page`
					}
				},
			})
		} else if (node.slug === `projects`){
			paginate({
				createPage,
				items: posts,
				itemsPerPage: postsPerPage,
				component: projectsTemplate,
				pathPrefix: ({ pageNumber }) => {
					if (pageNumber === 0) {
						return `/projects`
					} else {
						return `/projects/page`
					}
				},
			})			
		} else if (node.slug === `contact`){
            createPage({
				path: node.url,
				component: contactTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
				},
			})
		} else if (node.slug === `skills`){
            createPage({
				path: node.url,
				component: skillsTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
				},
			})
        } else {
			createPage({
				path: node.url,
				component: pageTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
				},
			})
		}
    })

    // Create post pages
    posts.forEach(({ node }) => {
		const tagList = node.tags.map(tag => tag.name)

        // This part here defines, that our posts will use
        // a `/:slug/` permalink.
        node.url = `/${node.slug}/`

		// if tagList includes tag=project then it renders differently
		if (tagList.includes(`project`)) {
			createPage({
				path: `/project/${node.slug}`,
				component: postTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
				},
			})
		} else {
			createPage({
				path: `/blog/${node.slug}`,
				component: postTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
				},
			})
		}
    })

	/*
    // Create pagination
    paginate({
        createPage,
        items: posts,
        itemsPerPage: postsPerPage,
        component: indexTemplate,
        pathPrefix: ({ pageNumber }) => {
            if (pageNumber === 0) {
                return `/`
            } else {
                return `/page`
            }
        },
    })
	*/

	// root page
	createPage({
		path: `/`,
		component: indexTemplate,
		context: {
			// Data passed to context is available
			// in page queries as GraphQL variables.
			posts,
			slug: `/`,
		},
	})
}
