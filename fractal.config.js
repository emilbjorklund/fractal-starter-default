
module.exports = {

  app: {
    src: './lib'
  },

  pages: {
    src: './styleguide',
    dest: './build',
    site: {
      title: 'Example Styleguide',
    },
    routes: {
      components: {
        collection: 'library.components',
        template: '_component.njk',
        permalink: 'components/{component.id}'
      }
    }
  },

  inspector: {
    plugins:[
      '@frctl/inspector-plugin-assets'
    ]
  }

};
