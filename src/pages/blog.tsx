import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Blog: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              id
              createdAt
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
              purchaseDate
              featureImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <div className="button"><Link style={{ textDecoration: 'none' }} to="/">Go back to the homepage</Link></div>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.purchaseDate}</span>
              </div>
              <Img
                className="featured"
                fluid={edge.node.featureImage.fluid}
                alt={edge.node.title}
              />
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
