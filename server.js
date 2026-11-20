import fs from 'node:fs'
import http from 'node:http'
import { createServer } from 'vite'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

http
  .createServer((req, res) => {
    vite.middlewares(req, res, async () => {
      const template = await vite.transformIndexHtml(
        req.url,
        fs.readFileSync('index.html', 'utf-8'),
      )
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')
      res.setHeader('Content-Type', 'text/html')
      res.end(template.replace('<!--app-->', await render()))
    })
  })
  .listen(5173, () => console.log('http://localhost:5173'))
