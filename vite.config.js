const { createVuePlugin } = require('vite-plugin-vue2')
const path = require('path')

module.exports = {
    build: {
        minify: false,
        lib: {
          entry: path.resolve(__dirname, 'src/index.js'),
          name: 'MyLib'
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue'
            }
          }
        }
      },
  plugins: [createVuePlugin(/*options*/)],
}