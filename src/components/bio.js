/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Summary = styled.div`
  margin-bottom:10px;
`

const IconContainer = styled.div`
  display:flex;
  justify-content: baseline;
`

const Icon = styled.div`
  margin-right:8px;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.JPG"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
          <Summary>
            {author?.summary || null}
            {` `}
          </Summary>
          <IconContainer>
            <Icon>
              <a href={`https://github.com/${social?.github || ``}`}>
                <StaticImage
                  src="../images/github.png"
                  width={23}
                  height={23}
                />
              </a>
            </Icon>
            <Icon>
              <a href="mailto:changhyeon.h@kakao.com">
                <StaticImage
                  src="../images/email.png"
                  width={23}
                  height={23}
                />
              </a>
            </Icon>
          </IconContainer>
        </p>
      )}
    </div>
  )
}

export default Bio
