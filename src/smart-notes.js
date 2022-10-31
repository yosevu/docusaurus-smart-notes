const visit = require('unist-util-visit');

function transformWikiLinksToBacklinks (ast) {
  visit(ast, 'wikiLink', (node) => {
    node.data.hProperties.href = `/blog/${node.data.permalink.split('_').join('-')}`;
    node.data.hChildren[0].value = `[[${node.value}]]`;
  });
}

function appendBacklinks(ast) {
  visit(ast, (node) => {
    console.log('debug', node);
  });
}

function plugin (options) {
  const transformer = async (ast) => {
    transformWikiLinksToBacklinks(ast);

    appendBacklinks(ast);
  }

  return transformer;
}

module.exports = plugin;
