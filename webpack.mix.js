let mix = require('laravel-mix')
let path = require('path')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .sass('resources/sass/field.scss', 'css')
  .webpackConfig({
      externals: {
          vue: 'Vue',
          'laravel-nova': 'LaravelNova',
          axios: 'axios',
      },
      resolve: {
          alias: {
              'nova-mixins': path.resolve(__dirname, 'vendor/laravel/nova/resources/js/mixins/')
          }
      },
      output: {
          uniqueName: 'vendor/whitecube/nova-flexible-content',
      }
  })
