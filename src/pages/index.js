import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const PostContainer = styled.li`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: silver;
  padding-bottom:25px;

  a {
    color:black;
    text-decoration: none;
  }
  article {
    transition: .5s ease-in-out;
  }

  article:hover{
    transform: scale(1.1);
  }
`

const Header = styled.div`
margin-top:3px;
  font-size:24px;
  font-weight: bold;
  color:black;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`

const Date = styled.div`
  font-weight: bold;
  margin-top:10px;
  font-size: 15px;
  color:#a0a0a0;
`

const Category = styled.div`
font-weight: bold;

`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          현재 등록된 포스트가 없어서 내용을 찾을 수 없습니다.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Title>
        포스트
      </Title>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <PostContainer key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Category>
                    {post.frontmatter.category}
                  </Category>
                  <header>
                    <h2>
                      <Header><span itemProp="headline">{title}</span></Header>
                    </h2>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <Date>{post.frontmatter.date}</Date>
                </article>
              </Link>
            </PostContainer>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          category
          date(formatString: "YYYY년 MM월 DD일")
          title
          description
        }
      }
    }
  }
`
