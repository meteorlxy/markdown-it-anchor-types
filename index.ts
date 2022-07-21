import MarkdownIt from 'markdown-it'
import anchorPlugin from 'markdown-it-anchor'

new MarkdownIt()
  .use(anchorPlugin, {
    permalink: anchorPlugin.permalink.ariaHidden({
      class: 'header-anchor',
      symbol: '#',
      space: true,
      placement: 'before',
    }),
  })
