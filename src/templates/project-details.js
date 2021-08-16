import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { details, featured } from '../styles/project-details.module.css'
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, featured } = data.markdownRemark.frontmatter
  const image = getImage(featured)
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={image} alt={title + " image"} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectDetails($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featured {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`
