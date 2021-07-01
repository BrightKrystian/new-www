import { graphql, useStaticQuery } from 'gatsby'
import { BlogPostsFrontmatterQueryResult } from './blog-post-frontmatter-query-result'

export const useTopPublishedBlogPostsQuery: () => BlogPostsFrontmatterQueryResult = () => {
  const {
    allMarkdownRemark: { posts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { 
            frontmatter: { 
                layout: { eq: "post" }, 
                published: { ne: false }, 
                hidden: { ne: true } 
            } 
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 4
      ) {
        posts: nodes {
          id
          fileAbsolutePath
          timeToRead
          excerpt(pruneLength: 500)
          frontmatter {
            excerpt
            comments
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            author
            title
            tags
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return posts
}
