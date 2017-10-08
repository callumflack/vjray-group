const express = require('express');
const next = require('next');
const contentRepo = require('./content-repo');

const serialize = data => JSON.stringify({ data });

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();


async function start() {
  await nextApp.prepare();
  const app = express();

  app.use(express.static('static'));

  app.get('/api/:page', async (req, res) => {
    let post;

    try {
      post = await contentRepo.fetch(req.params.page);
    } catch (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(serialize({
          error: `Unable to find markdown file`,
        }));
      }

      throw err;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(serialize(post));
  })

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Ready on http://localhost:${port}`)
}


start();
