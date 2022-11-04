const visit = require('unist-util-visit');

function transformWikiLinksToBacklinks (ast) {
  visit(ast, 'wikiLink', (node) => {
    node.data.hProperties.href = `/blog/${node.data.permalink.split('_').join('-')}`;
    node.data.hChildren[0].value = `[[${node.value}]]`;
  });
}

function wikilinks (options) {
  return async (ast) => {
    transformWikiLinksToBacklinks(ast);
  }
}

module.exports = wikilinks;
