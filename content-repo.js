const path = require('path');
const { promisify } = require('util');
const frontMatter = require('front-matter');
const fs = require('fs');
const marked = require('marked');

marked.setOptions({
  sanitize: true,
});

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const deserialize = parsed => ({
  attributes: parsed.attributes,
  body: {
    md: parsed.body,
    html: marked(parsed.body),
  },
});

async function fetch(postName) {
  const contentDir = path.join(__dirname, 'content');

  const markdown = await readFile(path.join(contentDir, postName + '.md'), 'utf-8');
  const parsed = frontMatter(markdown);
  return deserialize(parsed);
}

exports.fetch = fetch;
