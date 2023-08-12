import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const Header = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
`

const Logo = styled.div`
  font-size:24px;
  font-weight: bold;
  
  a {
    text-decoration: none;
    color:black;
  }
`

const List = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color:black;
    margin-right: 15px;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Header>
          <Logo>
            <Link to="/">황창구리</Link>
          </Logo>
          <List>
            <Link to="#">Post</Link>
            <Link to="#">Portfolio</Link>
          </List>
        </Header>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
