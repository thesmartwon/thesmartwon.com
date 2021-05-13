const { paths } = require('../helpers')
const fs = require('fs')

const escapeHTML = s => s
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

const renderRSSItem = (
  [
    slug,
    {
      title,
      excerpt,
      dateShort
    }
  ],
  domain
) => `  <item>
    <title>${escapeHTML(title)}</title>
    <link>${domain}${slug}</link>
    <description>${escapeHTML(excerpt)}</description>
    <category>${slug.split('/')[2]}</category>
    <pubDate>${new Date(dateShort).toUTCString()}</pubDate>
    <lang>en-US</lang>
  </item>`

function rss(index) {
  const domain = 'https://' + fs.readFileSync('./static/CNAME', 'utf8')

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>The Smart Blog</title>
  <link>${domain}</link>
  <description>Relax and have a good read!</description>
${Object.entries(index)
  .filter(([_, props]) => props.timeToRead)
  .sort(([_, p1], [__, p2]) => p2.dateShort.localeCompare(p1.dateShort))
  .map(e => renderRSSItem(e, domain))
  .join('\n')
}
</channel>
</rss>`

  fs.writeFileSync(paths.outdir + '/feed.xml', rss)
}

module.exports = {
  rss
}
