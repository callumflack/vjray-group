import 'isomorphic-fetch'

/**
 * Fetch parsed content of markdown file from server
 *
 * @param {string} markdownFile - name of the markdown file (min '.md' extension
 * @returns {object}
 * @returns {object.body.md} - content of file in markdown
 * @returns {object.body.html} - content of file in html
 * @returns {object.attirbutes} - object with key pair values of files front-matter
 */
async function fetchMarkdown(markdownFile) {
  const response = await fetch(`http://localhost:3000/api/${markdownFile}`)
  const { data } = await response.json()

  return data;
}

export default fetchMarkdown
