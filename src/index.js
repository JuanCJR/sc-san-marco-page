const { createServer } = require('http')
const parse = require('url-parse');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {

  createServer((req, res) => {
    const parsedUrl = parse(req.url,true);
    

    const { pathname, query } = parsedUrl

    if (pathname === '/galeria') {
      app.render(req, res, '/galeria', query)
    } else if (pathname === '/') {
      app.render(req, res, '/', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(80,err=>{
    if (err) throw err
    console.log('> Ready on http://localhost:80')
  })

})


