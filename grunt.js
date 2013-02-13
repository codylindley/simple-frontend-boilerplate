/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    handlebars: {
      compile: {
        options: {
          namespace: 'Handlebars.templates',
          wrapped: true,
          processName: function(filename) {
            return filename.split('/').pop().split('.')[0];
          }
        },
        files: {
          'public/build/hbs.js': 'public/modules/**/*.hbs'
        }
      }
    },

    mincss: {
      index: {
        files: {
          'public/build/index.min.css': [
            //CSS libraries used on this page
            'public/libraries/thirdparty/normalize-css/normalize.css',
            'public/libraries/customTwitterBootstrap/bootstrapBase.css',
            'public/libraries/thirdparty/font-awesome/css/font-awesome.css',
            //global css file
            'public/globals.css',
            //CSS module used on this page
            'public/modules/moduleA/moduleA.css',
            'public/modules/moduleB/moduleB.css',
            'public/modules/moduleC/moduleC.css'
          ]
        }
      }
    },

    min: {
      index: {
        src: [
          'public/libraries/thirdparty/jquery/jquery.js',
          'public/libraries/thirdparty/lodash/lodash.js',
          'public/libraries/thirdparty/modernizr-latest/index.js',
          'public/libraries/thirdparty/string.js/lib/string.js',
          'public/libraries/thirdparty/director/build/director.js',
          'public/libraries/thirdparty/handlebars.js/dist/handlebars.runtime.js',
          'public/libraries/getHandlerBarsTemp/getHandlerBarsTemp.js',
          //must be after the handler bars files
          'public/build/hbs.js',
          //global file
          'public/globals.js',
          //Modules used on this page
          'public/modules/moduleA/moduleA.js',
          'public/modules/moduleB/moduleB.js',
          'public/modules/moduleC/moduleC.js',
          //run index.html
          'public/run/indexRun.js'
        ],
        dest: 'public/build/index.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task.
  grunt.registerTask('default', ['handlebars','mincss','min']);

};