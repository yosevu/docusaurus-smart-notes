async function collectBacklinks(context, options) {
  return {
    name: 'collect-backlinks',
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions
      const backlinks = ['Back', 'links']

      // Another option?
      // setGlobalData({ backlinks: ['hello', 'world'] });

      const backlinksJsonpath = await createData(
        'backlinks.json',
        JSON.stringify(backlinks)
      )

      // Don't think you can use addRoute to match an existing route.
      addRoute({
        // How do I match blog post route?
        // path: '/:slug',
        path: '/',
        data: 'backlinks', 
        component: '@site/src/components/BlogPagePost.js',
        modules: {
          backlinks: backlinksJsonpath,
        },
        exact: true,
      })
    },
  }
}

module.exports = collectBacklinks
