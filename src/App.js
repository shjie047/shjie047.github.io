import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import './app.css'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const App = () => (
  <Router>
    <Root>
      <Headroom>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </Headroom>
      <div className="content">
        <Routes />
      </div>
    </Root>
  </Router>
)

export default hot(module)(App)

const Root = styled.div`
  min-height: 100%;
`
