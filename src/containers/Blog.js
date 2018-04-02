import React from 'react'
import { withRouteData, Link } from 'react-static'
import Pagination from '../components/pagination'
import qs from 'qs'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { markdown } from 'markdown'
import {render} from 'react-dom'

// 分页文章数
const page_size = 15

export default withRouteData(({ posts, history: {location: {search}} }) => {
  const query = qs.parse(search)
  return (
    <div>
      <ul>
        {posts.map(post => (
          <Post key={post.basename}>
            <header className="post-header">
              <h2 className="post-title">
                <Link to={`/blog/post/${post.date}/${post.basename}/`}>{post.title}</Link>
              </h2>
            </header>
            <section className="post-excerpt">
              <p>
                {
                  markdown.toHTML(post.body.slice(0, 26)).replace(/<(?!\/?(?=>|\s.*>))\/?.*?>/g, '') + '...'
                }
                <Link className="read-more" to={`/blog/post/${post.date}/${post.basename}/`}>»</Link>
              </p>
            </section>
            <footer className="post-meta">
              <a href="#">{post.author}</a>
              <span>发表于</span>
              <time className="post-date" dateTime={post.date}>{post.date}</time>
            </footer>
          </Post>
        ))}
      </ul>
      <Pagination
        pages={posts.length}
        page_no={+query.page_no || 1}
        page_size={page_size}
      />
    </div>
  )
})

const Post = styled.li`
  position: relative;
  width: 80%;
  max-width: 710px;
  margin: 4rem auto;
  padding-bottom: 4rem;
  border-bottom: 1px solid #ebf2f6;
  word-wrap: break-word;

  .post-title a {
    text-decoration: none;
  }

  .post-excerpt p {
    margin: 0;
    font-size: .9em;
    line-height: 1.7em;
  }

  .read-more {
    text-decoration: none;
  }

  .post-meta {
    display: block;
    margin: 1.75rem 0 0;
    font-family: Open Sans,sans-serif;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #9eabb3;
  }

  .author-thumb {
    width: 24px;
    height: 24px;
    float: left;
    margin-right: 9px;
    border-radius: 100%;
  }

  .post-meta a {
    color: #9eabb3;
    text-decoration: none;
  }

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
