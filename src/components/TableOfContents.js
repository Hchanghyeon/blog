import React from "react"
import styled from "styled-components"

const TableContents = styled.div`
padding: 0px 10px;
  ul {
    margin-top:5px;
    li {
        border-left-style: none;
        list-style: none;
        margin-bottom:5px;
    p {
        margin-bottom:7px;
    }
      a {
        color:#868e96;
        font-weight: bold;
      }
    }
  }
`

const Background = styled.div`
    background-color: #f7f6f3;
    padding:10px 20px;

    h5 {
        margin:10px 0px;
    }
`

const TableOfContents = ({ content }) => {
  return (
    <Background>
        <h5>
            목차
        </h5>
    <TableContents
      dangerouslySetInnerHTML={{ __html: content }}
    />
    </Background>
  )
}

export default TableOfContents