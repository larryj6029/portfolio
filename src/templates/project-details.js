import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { details, featured, html } from '../styles/project-details.module.css'
import { graphql } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go'
import { IoMdArrowBack } from 'react-icons/io'

export default function ProjectDetails({ data }) {
  console.log(data)
  const htmlData = data.markdownRemark.html
  const { title, stack, live, repo } = data.markdownRemark.frontmatter
  const featuredImage = data.markdownRemark.frontmatter.featured
  const image = getImage(featuredImage)

  const liveSite = <h2>{live ? <a href={live}>{title}</a> : title}</h2>

  const gitRepo = repo ? <a href={repo} aria-label="Github Repo"> <GoMarkGithub size="40px" /></a> : null

  return (
    <Layout>
      <div className={details}>
        <div>
          <a href="/projects" aria-label="Back Button">
            <IoMdArrowBack size="40px" />
          </a>
        </div>
        {liveSite}
        {gitRepo}
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={image} alt={title + " image"} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: htmlData }} />
      </div>
    </Layout >
  )
}

export const query = graphql`
query ProjectDetails($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      repo
      live
      featured {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`
