import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, projects } from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Index({ data }) {

    const allProjects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div className={portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects and Websites I've Worked On</h3>
                <div className={projects}>
                    {allProjects.map(project => {
                        const image = getImage(project.frontmatter.thumb)
                        return <Link to={"/projects/" + project.frontmatter.slug} key={project.id} >
                            <div>
                                <GatsbyImage image={image} alt={project.frontmatter.title + " image"} />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    })}
                </div>
                <p>Interested in my work? Email me at contact {contact}!</p>
            </div>
        </Layout >
    )
}


export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
            frontmatter {
                slug
                stack
                title
                thumb {
                    id
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
            id
            }
        }
        contact: site {
            siteMetadata {
            contact
            }
        }
    }

`