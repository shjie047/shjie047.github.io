import find from 'findit'
import m2j from 'markdown-to-json'
import path from 'path'
import watch from 'watch'
import { reloadRoutes } from 'react-static/node'
import { ServerStyleSheet } from 'styled-components'
import React, { Component } from 'react'

watch.watchTree(path.join(__dirname, 'posts'), {ignoreDotFiles: true}, function(f, curr, prev) {
 if (typeof f == "object" && prev === null && curr === null) {
  } else if (prev === null) {
    reloadRoutes()
  } else if (curr.nlink === 0) {
    reloadRoutes()
  } else {
    reloadRoutes()
  }
})

function convertEventToPromise(fn) {
  return function (event) {
    return new Promise(function (resolve) {
      const files = []
      fn(event, function (path) {
        files.push(path)
      })

      fn('end', function () {
        resolve(files)
      })
    })
  }
}

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const finder = find(path.join(__dirname, 'posts'))
    const on = convertEventToPromise(finder.on.bind(finder))
    let files = await on('file')

    files = files.filter(file => {
      const basename = path.basename(file)
      return basename.indexOf('.') !== 0 && path.extname(basename) === '.md'
    })

    const json = JSON.parse(m2j.parse(files, {content: true}))
    const posts = Object.keys(json)
      .map(key => json[key])
      .map(v => {
        const { content, ...others } = v
        return Object.assign({}, others, {
          body: content,
        })
      })

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => {
          return {
            path: `/post/${post.date}/${post.basename}`,
            component: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          }
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },

  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
