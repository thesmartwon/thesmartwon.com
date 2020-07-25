const fs = require('fs')
const { postIndex } = require('./posts')

const escapeHTML = s => s
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

const renderRSSItem = (
	{
		slug,
		frontmatter: {
			title,
			excerpt
		}
	},
	domain
) => `  <item>
  	<title>${escapeHTML(title)}</title>
  	<link>${domain}${slug}</title>
  	<description>${escapeHTML(excerpt)}</description>
  	<category>${slug.split('/')[2]}</category>
  	<lang>en-US</lang>
  </item>`

function rss(cb) {
	const domain = 'https://' + fs.readFileSync('./static/CNAME', 'utf8')
	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>The Smart Blog</title>
	<link>${domain}</link>
	<description>Relax and have a good read!</description>
${Object.values(postIndex).map(post => renderRSSItem(post, domain)).join('\n')}
</channel>
</rss>`

  fs.writeFile('dist/feed.xml', rss, cb)
}

module.exports = {
  rss
}