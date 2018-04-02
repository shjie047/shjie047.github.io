import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import universal from 'react-universal-component'
import styled from 'styled-components'
//

export default withRouteData(({ post }) => {
  return (
    <div>
      <span className="post-title">{post.title}</span>
      <a href={post.from} style={{textDecoration: 'underline', fontSize: 14, color: '#108db8', display: 'inline-block', marginLeft: 15}}>
        <i>原文</i>
      </a>
      <Markdown
        source={post.body}
        transformImageUri={uri => `http://p6jqy6mfr.bkt.clouddn.com/${uri}`}
      />
    </div>
  )
})

const Root = styled.div`
  @media only screen and (max-width: 900px) {
    font-size:.95em

    .post-title {
        font-size: 3.2rem
    }
  }

  @media only screen and (max-width: 500px) {
    width:auto;
    margin: 2rem 16px;
    padding-bottom: 2rem;
    line-height: 1.65em

    .post-title {
      font-size: 2.5rem
    }

    .post-date {
      display: inline-block
    }

    .post-excerpt p {
        font-size: .85em
    }

    .post-meta {
        font-size: 1.3rem;
        margin-top: 1rem
    }
  }

  .post-header {
    margin-bottom: 3.4rem
  }

  @media only screen and (max-width: 500px) {
    .post-header {
      margin-bottom:2rem
    }
  }

  .post-date {
    display: inline-block;
    margin-left: 8px;
    padding-left: 12px;
    border-left: 1px solid #d5dbde;
    text-transform: uppercase;
    font-size: 1.3rem;
    white-space: nowrap
  }

  @media only screen and (max-width: 500px) {
    .post-date {
      display:none
    }
  }
`
