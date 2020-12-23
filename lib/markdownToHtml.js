import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html, { sanitize: true }).processSync(markdown)
  return result.toString()
}
