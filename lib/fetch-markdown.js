import 'isomorphic-fetch'

/**
 * Fetch parsed content of markdown file from server
 *
 * @param {object} req - req object passed to getInitialProps from the server
 * @param {string} markdownFile - name of the markdown file (min '.md' extension
 * @returns {object}
 * @returns {object.body.md} - content of file in markdown
 * @returns {object.body.html} - content of file in html
 * @returns {object.attirbutes} - object with key pair values of files front-matter
 */
async function fetchMarkdown(req, markdownFile) {
  const origin = req ?
    `${req.protocol}://${req.get('host')}` :
    window.location.origin

  const response = await fetch(`${origin}/api/${markdownFile}`)
  const { data } = await response.json()

  return data;
}

export default fetchMarkdown
