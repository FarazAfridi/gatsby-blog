import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      purchaseDate(formatString: "Do MMMM, YYYY")
      body {
        json
      }
      featureImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const BlogPost = props => {
    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
          },
        },
      }
    return (

        <div className="button">
        <Link to="/blog/">Visit the Blog Page</Link>
        <div className="content">
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <span className="meta">
            Posted on {props.data.contentfulBlogPost.purchaseDate}
          </span>
            <Img
              className="featured"
              fluid={props.data.contentfulBlogPost.featureImage.fluid}
              alt={props.data.contentfulBlogPost.title}
            />
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </div>
        </div>
    )
  }
  
  export default BlogPost
